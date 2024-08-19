'use client'
import { useCart } from '@/contexts/card-context'
import React from 'react'


interface AddToCartButtonProps {
    productId: number
}

export default function AddToCartButton({ productId }: AddToCartButtonProps) {
    const { addCart } = useCart()
    function handleAddProductCart() {
        addCart(productId)
    }
    return (
        <button
            type='button'
            onClick={handleAddProductCart}
            className='bg-emerald-600 hover:bg-emerald-500 ring-offset-emerald-600 text-white mt-8  flex h-12 justify-center items-center rounded-full'>
            Adicionar ao carrinho
        </button>
    )
}
