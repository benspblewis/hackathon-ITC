import { createContext, useEffect, useState } from "react";
export const Context = createContext()

export function AuthContext({children}){
    const [currentUser, setCurentUser] = useState(()=>{
      return JSON.parse(localStorage.getItem('currentUser')) || null})
    const [error, setError] = useState(null)
    function handleCurrentUser(value){
        setCurentUser(value)
    }
    function handleError(value){
        setError(value)
    }
    useEffect(()=>{
        console.log(currentUser)
    },[currentUser])
    return(
        <Context.Provider value={{currentUser, handleCurrentUser, error, handleError}}>
            {children}
        </Context.Provider>
    )
}