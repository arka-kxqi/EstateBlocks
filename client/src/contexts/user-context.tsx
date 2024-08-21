"use client"
import React, { useContext, useEffect, useRef, useState } from "react"
import {userSession} from "@/components/use-connect"


interface IUserContext {
user: Iuser|null;
setUser:React.Dispatch<React.SetStateAction<Iuser|null>>
 

}

interface IUserProvider {
  children: React.ReactNode
}

const Context = React.createContext<IUserContext>({} as IUserContext)


const UserProvider = ({ children }: IUserProvider) => {


const [user, setUser] = useState<Iuser|null>(null)


useEffect(() => {
    if (userSession.isUserSignedIn()) {
      console.log(userSession.loadUserData().profile.stxAddress.testnet)
        setUser((prev)=>({...prev,walletAddress:userSession.loadUserData().profile.stxAddress.testnet}))
      }
}, []);

  return (
    <Context.Provider
      value={{user, setUser}}
    >
      {children}
    </Context.Provider>
  )
}

const useUserContext = () => {
  const c = React.useContext(Context)

  if (c === undefined) {
    throw new Error("useUserContext must be used within a UserProvider")
  }

  return c
}

export { UserProvider, useUserContext }