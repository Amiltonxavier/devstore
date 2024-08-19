'use client'
import { useCart } from '@/contexts/card-context'
import { useCartSidebar } from '@/contexts/cart-sidebar'
import Cart from './cart'


export default function CartSidebar() {
    const { isSidebarOpen } = useCartSidebar()
    if (!isSidebarOpen) return
    return (
        <div className='fixed top-0 left-0 min-h-full z-50 bg-zinc-950/95 shadow-xl animate-slide-down'>
            <div className='w-[400px] space-y-5 mx-auto p-4'>
                <div className='w-full'>
                    <h2 className='text-3xl font-bold text-center'>Carrinho</h2>
                    <div className='w-full space-y-5 '>
                       <Cart /> 
                    </div>
                </div>
            </div>
        </div>
    )
}
