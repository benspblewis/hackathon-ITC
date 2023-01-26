import React from "react";
import { useContext } from "react";
import {Context} from '../contexts/AppContext'

export function useAppContext(){
    const context = useContext(Context)
    if(!context){
        throw Error('useAuthContext must be inside an AuthContextProvider') 
    }
    return context
}