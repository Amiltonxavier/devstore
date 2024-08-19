
'use client'
import { createContext, ReactNode, useContext, useState } from "react";

type CartItem = {
    productId: number,
    quantity: number
}

type cardContextProps = {
    items: CartItem[]
    addCart: (productId: number) => void,
}


type CartProviderProps = {
    children: ReactNode
}


const CardContext = createContext({ } as cardContextProps)


/* async function getProductsByID(productId: number){
    const response = await api(`/products/by/${productId}`, {
        next: {
            revalidate: 60 * 60
        }
    })
    const data = await response.json()
    return data;
} */


export  function CartProvider({children}:CartProviderProps ) {
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    function addCart(productId: number) {
         setCartItems((state) => {
            const productInCart = state.some((item) => item.productId === productId)

            if(productInCart){
                return state.map((item) => {
                    if(item.productId === productId){
                        return { ...item, quantity: item.quantity + 1 }
                    }else {
                        return item
                    }
                })
            }else {
               return [...state, { productId, quantity: + 1 }] 
            }
        }) 
    }

  return (
    <CardContext.Provider value={{addCart, items: cartItems}}>
        {children}
    </CardContext.Provider>
  )
}

export const useCart = () => useContext(CardContext)
