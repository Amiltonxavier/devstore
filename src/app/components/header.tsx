import { Search, ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CartWidget from './cart-widget'

export default function Header() {
    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-5'>
                <Link href="/" className='text-2xl font-semibold text-white'>
                    devstore
                </Link>
                <form action="" className='flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700'>
                    <Search className='size-5 text-zinc-500' />
                    <input type="search" name="" id="" className='flex-1 bg-transparent placeholder:text-zinc-500 outline-none' placeholder='Buscar produtos...' />

                </form>
            </div>
            <div className='flex items-center gap-4'>
                <CartWidget />
                <div className='w-px h-4 bg-zinc-400' />
                <Link href="/" className='flex items-center gap-2 hover:underline'>
                    <span>Account</span>
                    <Image src="https://github.com/Amiltonxavier.png" alt='' className='size-6 rounded-full' width={24} height={24} />
                </Link>
            </div>
        </div>
    )
}
