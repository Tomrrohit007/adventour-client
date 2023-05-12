import React, { useContext, useState } from "react";

export const ModalContext = React.createContext();

export const ModalProvider = ({ children }) => {
  const openModal = () => {
    console.log('OPEN')
  }
  return <ModalContext.Provider value={{openModal}} >{children}</ModalContext.Provider>;
};

export const useGlobalContext = () =>{
  return useContext(ModalContext)
}
