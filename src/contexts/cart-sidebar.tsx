'use client'
import { createContext, ReactNode, useContext, useState } from "react";

type cartContextProps = {
    isSidebarOpen: boolean,
    openCartSidebarAndClose: () => void
}


export const CartSidebarContext = createContext({} as cartContextProps )

type CartSidebarProviderProps  = {
    children: ReactNode
}


export function CartSidebarProvider ({ children }: CartSidebarProviderProps) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    function openCartSidebarAndClose (){
        setIsSidebarOpen(!isSidebarOpen)
    }

    
    
    return (
        <CartSidebarContext.Provider value={{isSidebarOpen, openCartSidebarAndClose}}>
            {children}
        </CartSidebarContext.Provider>
    )
}

export const useCartSidebar = () => useContext(CartSidebarContext)