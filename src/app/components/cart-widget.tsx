'use client'
import { useCart } from '@/contexts/card-context'
import { useCartSidebar } from '@/contexts/cart-sidebar'
import { ShoppingBag } from 'lucide-react'
import React from 'react'

export default function CartWidget() {
    const { items } = useCart()
    const { openCartSidebarAndClose } = useCartSidebar()

  return (
    <button className='flex items-center gap-2' onClick={openCartSidebarAndClose}>
        <ShoppingBag className='size-4' />
        <span className='text-sm'>{items.length}</span>
    </button>
  )
}
