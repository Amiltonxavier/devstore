'use client'
import Skeleton from '@/app/components/skeleton'
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function SearchLoading() {

  const searchParams = useSearchParams()

  const query = searchParams.get('q')

  return (
    <div className='flex flex-col gap-4'>
      <p className='text-sm'>Resultados para: <span className='font-semibold'>{query}</span></p>
      <div className='grid sm:grid-cols-3 gap-6'>
        <Skeleton className='h-[400px]' />
        <Skeleton className='h-[400px]' />
        <Skeleton className='h-[400px]' />
        <Skeleton className='h-[400px]' />
        <Skeleton className='h-[400px]' />
        <Skeleton className='h-[400px]' />
      </div>
    </div>
  )
}
