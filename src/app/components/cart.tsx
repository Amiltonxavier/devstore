'use client'
import { useCart } from '@/contexts/card-context'
import { api } from '@/data/api'
import { Minus, Plus } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function Cart() {
    const [data, setData] = useState(null);
    const { items } = useCart()


    return (
        <div className='flex gap-4 w-full'>
            <Image className='flex-1' src={"/moletom-ia-p-devs.png"} alt='' width={150} height={150} quality={100} />
            <div className='space-y-4 self-center'>
                <h5>moletom-never-stop-learning</h5>
                <div className='flex justify-end gap-2'>
                    <button className='size-8 flex items-center justify-center p-2 border border-zinc-700 rounded-md hover:bg-zinc-700'><Minus /></button>
                    <button className='size-8 flex items-center justify-center p-2 border border-zinc-700 rounded-md hover:bg-zinc-700'><Plus /></button>
                </div>
            </div>
        </div>
    )
}
