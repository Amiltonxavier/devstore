'use client'

import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { FormEvent } from 'react'

export function SearchForm() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const query = searchParams.get('q');

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData)
        const query = data.q
        if (!query) {
            return
        }

        router.push(`/search?q=${query}`)
    }

    return (
        <form onSubmit={handleSubmit} className='focus-within:ring-2 focus-within:ring-violet-500 flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700'>
            <Search className='size-5 text-zinc-500' />
            <input
                type="search"
                defaultValue={query ?? ''}
                name="q"
                className='flex-1 bg-transparent placeholder:text-zinc-500 outline-none'
                placeholder='Buscar produtos...'
            />
        </form>
    )
}
