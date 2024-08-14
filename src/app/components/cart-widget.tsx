'use client'
import { useCart } from '@/contexts/card-context'
import { ShoppingBag } from 'lucide-react'
import React from 'react'

export default function CartWidget() {
    const { items } = useCart()

  return (
    <div className='flex items-center gap-2'>
        <ShoppingBag className='size-4' />
        <span className='text-sm'>{items.length}</span>
    </div>
  )
}
