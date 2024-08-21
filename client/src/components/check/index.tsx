"use client"
import React from 'react'
import { getLastPropertyId, getPropertyById, listProperty, simpleBuyShares, transferSTX } from "@/utils";
import { useUserContext } from '@/contexts/user-context';



const Check = () => {

    const {user}=useUserContext()
  return (
    <>
       <div className="flex flex-col  gap-4">
        <button className=" bg-pink-600 p-4 rounded-md" onClick={()=>listProperty({area1:200,address1:"addr",BHK1:4,category1:"sell",country1:"india",description1:"desc",images1:["image1","image2","image3","image4"],name1:"name1",pincode1:"481661",price1:124,state1:"MP",status1:"available"})}>
          List property
        </button>
        <button className=" bg-pink-600 p-4 rounded-md" onClick={() => getPropertyById(1,user)}>
          get prop by id
        </button>
        <button className=" bg-pink-600 p-4 rounded-md" onClick={() => getLastPropertyId(user)}>
          get last id
        </button>
        <button className=" bg-pink-600 p-4 rounded-md" onClick={() => transferSTX("ST1YT0PJ4FJ70932VQX7BEKY3A715T5S5ER3CQ4B3",2)}>
          transfer stx
        </button>
        <button className=" bg-pink-600 p-4 rounded-md" onClick={() => simpleBuyShares({propertyId1:1,shares1:1,recipient1:"ST1YT0PJ4FJ70932VQX7BEKY3A715T5S5ER3CQ4B3",pricePerShare1:1})}>
          simple buy
        </button>
      </div>
    </>
  )
}

export default Check
