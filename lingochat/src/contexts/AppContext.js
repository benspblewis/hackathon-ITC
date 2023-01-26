import { Editable } from "@chakra-ui/react";
import { createContext, useEffect, useState } from "react";
export const Context = createContext()

function AppContext({children}){

    const [modalIsOpen, setIsOpen] = useState(false);
    const [formToShow, setFormToShow] = useState(null);
    const [avtiveUsers, setAveUsers] = useState([])
    function openModal() {
        setIsOpen(true);
      }
      function closeModal() {
        setIsOpen(false);
      }

    return(
        <Context.Provider value={{modalIsOpen, openModal, closeModal,formToShow, setFormToShow, avtiveUsers, setAveUsers}}>
            {children}
        </Context.Provider>
    )
}
export default AppContext;
