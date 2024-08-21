
import { openContractCall } from '@stacks/connect';
import { StacksTestnet,StacksDevnet } from '@stacks/network';
import { AnchorMode, PostConditionMode, stringUtf8CV,uintCV,listCV,principalCV,stringAsciiCV,callReadOnlyFunction } from '@stacks/transactions';
import contractData from "@/data/stacks.json"
type ListPropertyArgTypes = {
    name1: string;
    category1: string;
    description1: string;
    images1: string[];
    country1: string;
    state1: string;
    pincode1: string;
    address1: string;
    area1: number;
    price1: number;
    status1: string;
    BHK1: number;
    };
  

    interface ListSimpleBuySharesTypes {
      propertyId1: number;
      shares1: number;
      recipient1: string;
      pricePerShare1: number;
    
    }
export const transferSTX=async(recipient1:string, amount1:number)=>{
    const recipient=principalCV(recipient1);
    const amount=uintCV(amount1);
    openContractCall({
      network: new StacksTestnet(),
      anchorMode: AnchorMode.Any,
      contractAddress: contractData.contractAddress,
      contractName: contractData.contractName,
      functionName: contractData.functions["transfer-stx"],
      functionArgs: [recipient,amount],
      postConditionMode: PostConditionMode.Deny, 
      postConditions: [], 
      onFinish: response => {
        // WHEN user confirms pop-up
        console.log("finish ho gta")
        console.log(response)
      },
      onCancel: () => {
        // WHEN user cancels/closes pop-up
        console.log("cancel ho gya ")
      },
    });
  }

  export const listProperty=async({BHK1,address1,area1,category1,country1,description1,images1,name1,pincode1,price1,state1,status1}:ListPropertyArgTypes)=>{

    const name = stringAsciiCV(name1);
    const category = stringAsciiCV(category1);
    const description = stringAsciiCV(description1);
    const images = listCV(images1.map(image => stringAsciiCV(image)));
    const country = stringAsciiCV(country1);
    const state = stringAsciiCV(state1);
    const pincode = stringAsciiCV(pincode1);
    const address = stringAsciiCV(address1);
    const area = uintCV(area1); // Adjust the value as needed
    const price = uintCV(price1); // Adjust the value as needed
    const status = stringAsciiCV(status1);
    const BHK = uintCV(BHK1); // Adjust the value as needed
  
    const functionArgs = [
      name,
      category,
      description,
      images,
      country,
      state,
      pincode,
      address,
      area,
      price,
      status,
      BHK
    ];
  
  openContractCall({
    network: new StacksTestnet(),
    anchorMode: AnchorMode.Any, // which type of block the tx should be mined in
  
    contractAddress: contractData.contractAddress,
    contractName: contractData.contractName,
    functionName: contractData.functions["list-property"],
    functionArgs:functionArgs,
  
    postConditionMode: PostConditionMode.Deny, // whether the tx should fail when unexpected assets are transferred
    postConditions: [], // for an example using post-conditions, see next example
  
    onFinish: response => {
      // WHEN user confirms pop-up
      console.log("finish ho gta")
      console.log(response)
    },
    onCancel: () => {
      // WHEN user cancels/closes pop-up
      console.log("cancel ho gya ")
    },
  });
  }

  export const getPropertyById=async(x:number,user:(Iuser|null))=>{
    const propertyId = uintCV(x); // Adjust the value as needed
  
    // openContractCall({
    //   network: new StacksTestnet(),
    //   anchorMode: AnchorMode.Any, // which type of block the tx should be mined in
    
    //   contractAddress:contractData.contractAddress,
    //   contractName: contractData.contractName,
    //   functionName: contractData.functions["get-property-by-id"],
    //   functionArgs: [propertyId],
    
    //   postConditionMode: PostConditionMode.Deny, // whether the tx should fail when unexpected assets are transferred
    //   postConditions: [], // for an example using post-conditions, see next example
    
    //   onFinish: response => {
    //     // WHEN user confirms pop-up
    //     console.log("finish ho gta")
    //     console.log(response)
    //   },
    //   onCancel: () => {
    //     // WHEN user cancels/closes pop-up
    //     console.log("cancel ho gya ")
    //   },
    // });

const readOnlyResponse = await callReadOnlyFunction({

  contractAddress: contractData.contractAddress,

  contractName: contractData.contractName,

  functionName: contractData.functions["get-property-by-id"],

  functionArgs: [propertyId],

  senderAddress: user?.walletAddress??"",

  network: new StacksTestnet(),

});
console.log(readOnlyResponse)
console.log("ee chl gya getPropertyById")
  }


export const getLastPropertyId=async(user:(Iuser|null))=>{
    // openContractCall({
    //   network: new StacksTestnet(),
    //   anchorMode: AnchorMode.Any,
    //   contractAddress: contractData.contractAddress,
    //   contractName: contractData.contractName,
    //   functionName: contractData.functions["get-last-property-id"],
    //   functionArgs: [],
    //   onFinish: response => {
    //     // WHEN user confirms pop-up
    //     console.log("finish ho gta")
    //     console.log(response)
    //   },
    //   onCancel: () => {
    //     // WHEN user cancels/closes pop-up
    //     console.log("cancel ho gya ")
    //   },
    // });
    const readOnlyResponse = await callReadOnlyFunction({

      contractAddress: contractData.contractAddress,
    
      contractName: contractData.contractName,
    
      functionName: contractData.functions["get-last-property-id"],
    
      functionArgs: [],
    
      senderAddress: user?.walletAddress??"",
    
      network: new StacksTestnet(),
    
    });
    console.log(readOnlyResponse)
console.log("ee chl gya getLastPropertyId")
  }
  
  export const simpleBuyShares = async ({ pricePerShare1, propertyId1, recipient1, shares1 }: ListSimpleBuySharesTypes) => {
    const propertyId = uintCV(propertyId1); // Adjust the value as needed
    const shares = uintCV(shares1); // Adjust the value as needed
    const recipient = principalCV(recipient1);
    const pricePerShare = uintCV(pricePerShare1)
    openContractCall({
      network: new StacksTestnet(),
      anchorMode: AnchorMode.Any, 
      contractAddress: contractData.contractAddress,
      contractName: contractData.contractName,
      functionName: contractData.functions["simple-buy-shares"],
      functionArgs: [propertyId, shares, recipient, pricePerShare],
  
      postConditionMode: PostConditionMode.Deny, 
      postConditions: [], 
  
      onFinish: response => {
        // WHEN user confirms pop-up
        console.log("finish ho gta")
        console.log(response)
      },
      onCancel: () => {
        // WHEN user cancels/closes pop-up
        console.log("cancel ho gya ")
      },
    });
  
  }
  