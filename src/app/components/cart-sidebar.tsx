
'use client'
import { useCart } from '@/contexts/card-context'
import { useCartSidebar } from '@/contexts/cart-sidebar'
import { Minus, Plus } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function CartSidebar() {
    const { isSidebarOpen } = useCartSidebar()
    const { items } = useCart()
    if (!isSidebarOpen) return
    return (
        <div className='fixed top-0 left-0 min-h-full z-50 bg-black/80 animate-slide-down'>
            <div className='w-[400px] space-y-5 mx-auto p-4'>
                <div className='w-full'>
                    <h2>Carrinho</h2>
                    <div className='w-full space-y-5 '>
                        {
                            items.map(product => (
                                <div key={product.productId} className='flex gap-4 w-full'>
                                    <Image className='flex-1' src={"/moletom-ia-p-devs.png"} alt='' width={150} height={150} quality={100} />
                                    <div className='space-y-4 self-center'>
                                        <h5>moletom-never-stop-learning</h5>
                                        <div className='flex justify-end gap-2'>
                                            <button className='size-8 flex items-center justify-center p-2 border border-zinc-700 rounded-md hover:bg-zinc-700'><Minus /></button>
                                            <button className='size-8 flex items-center justify-center p-2 border border-zinc-700 rounded-md hover:bg-zinc-700'><Plus /></button>
                                        </div>

                                    </div>
                                </div>
                            ))

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
