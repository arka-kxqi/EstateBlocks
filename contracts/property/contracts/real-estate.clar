(define-non-fungible-token property uint)

;; Define the fungible token for fractional ownership
(define-fungible-token property-shares)

;; Define constants for error codes
(define-constant ERR-NOT-OWNER (err u401))
(define-constant ERR-NOT-ENOUGH-SBTC (err u402))
(define-constant ERR-PROPERTY-NOT-AVAILABLE (err u403))
(define-constant ERR-INVALID-OPERATION (err u404))
(define-constant ERR-NOT-ENOUGH-SHARES (err u405))
(define-constant ERR-INVALID-SHARES (err u406))
(define-constant ERR-MINT-FAILED (err u407))
(define-constant ERR-TRANSFER-FAILED (err u408))
(define-constant TOTAL_SHARES u100) ;; Corrected this line

;; Define data variables
(define-data-var last-property-id uint u0)
(define-map user-share-holdings

  { user: principal, property-id: uint }

  { shares: uint }

)
(define-map properties uint {
  owner: principal,
  name: (string-ascii 256),
  category: (string-ascii 256),
  description: (string-ascii 1024),
  images: (list 5 (string-ascii 256)),
  country: (string-ascii 256),
  state: (string-ascii 256),
  pincode: (string-ascii 256),
  address: (string-ascii 512),
  area: uint,
  price: uint,
  status: (string-ascii 64),
  BHK: uint,
  shares-available: uint
})

;; Marketplace functions
(define-public (list-property 
  (name (string-ascii 256))
  (category (string-ascii 256))
  (description (string-ascii 1024))
  (images (list 5 (string-ascii 256)))
  (country (string-ascii 256))
  (state (string-ascii 256))
  (pincode (string-ascii 256))
  (address (string-ascii 512))
  (area uint)
  (price uint)
  (status (string-ascii 64))
  (BHK uint))
  (let ((property-id (+ (var-get last-property-id) u1)))
    (map-set properties property-id {
      owner: tx-sender, 
      name: name,
      category: category,
      description: description,
      images: images,
      country: country,
      state: state,
      pincode: pincode,
      address: address,
      area: area,
      price: price,
      status: status,
      BHK: BHK,
      shares-available: TOTAL_SHARES
    })
    (var-set last-property-id property-id)
    (try! (nft-mint? property property-id tx-sender))
    (try! (ft-mint? property-shares TOTAL_SHARES tx-sender))
    (ok property-id)
  )
)


(define-public (transfer-shares (property-id uint) (shares uint) (recipient principal))
  (let ((transfer-result (ft-transfer? property-shares shares tx-sender recipient)))
    (match transfer-result
      ok (ok true)
      err (err ERR-TRANSFER-FAILED))
  )
)

(define-public (buy-shares (property-id uint) (shares uint) (price-per-share uint))
  (let ((property-entry (map-get? properties property-id))
        (total-price (* shares price-per-share)))
    (match property-entry
      entry
        (let ((shares-available (get shares-available entry))
              (owner (get owner entry)))
          (if (and (> shares-available u0) (>= shares-available shares))
            (let ((transfer-stx-result (stx-transfer? total-price tx-sender owner)))
              (match transfer-stx-result
                success
                  (let ((new-shares-available (- shares-available shares)))
                    (map-set properties property-id (merge entry {shares-available: new-shares-available}))
                    (let ((current-holdings (default-to {shares: u0} (map-get? user-share-holdings {user: tx-sender, property-id: property-id}))))
                      (map-set user-share-holdings {user: tx-sender, property-id: property-id} {shares: (+ (get shares current-holdings) shares)})
                      (let ((transfer-shares-result (ft-transfer? property-shares shares owner tx-sender)))
                        (match transfer-shares-result
                          ok (ok u1)
                          err (err ERR-TRANSFER-FAILED)))))
                err-value1 (err ERR-NOT-ENOUGH-SBTC)))
            (err ERR-NOT-ENOUGH-SHARES)))
      (err ERR-PROPERTY-NOT-AVAILABLE))))

(define-public (rent-property (property-id uint) (rental-fee uint))
  (let ((property-entry (map-get? properties property-id)))
    (match property-entry
      entry
        (let ((status (get status entry))
              (owner (get owner entry)))
          (if (is-eq status "available")
            (let ((transfer-result (stx-transfer? rental-fee tx-sender owner)))
              (match transfer-result
                success
                  (begin
                    ;; Update the property status to "rented"
                    (map-set properties property-id (merge entry {status: "rented"}))
                    (ok true))
                ;; Handle the case where the STX transfer fails
                err-value (err ERR-NOT-ENOUGH-SBTC)))
            ;; Property is not available for rent
            (err ERR-PROPERTY-NOT-AVAILABLE)))
      ;; Property ID does not exist
      (err ERR-INVALID-OPERATION))))

(define-read-only (get-property-by-id (property-id uint))

  (match (map-get? properties property-id)

    property-detail (ok property-detail) 

    (err ERR-PROPERTY-NOT-AVAILABLE)))

(define-public (transfer-stx (recipient principal) (amount uint))
(stx-transfer? amount tx-sender recipient))

(define-public (simple-buy-shares (property-id uint) (shares uint) (recipient principal) (price-per-share uint))
  (let ((total-price (* shares price-per-share)))
    ;; Handle the response of stx-transfer?
    (match (stx-transfer? total-price tx-sender recipient)
      success
        ;; If stx-transfer? succeeds, proceed with ft-transfer?
        (match (ft-transfer? property-shares shares tx-sender recipient)
          success2 (ok true) ;; If ft-transfer? also succeeds, return true
          failure2 (err failure2)) ;; Handle potential failure of ft-transfer?
      failure (err failure)))) ;; Handle potential failure of stx-transfer?

(define-read-only (get-last-property-id)
  (ok (var-get last-property-id)))