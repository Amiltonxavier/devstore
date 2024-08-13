import React from 'react'
import Image from "next/image";
import { api } from '@/data/api';
import { ProductsResponse } from '@/types';
import { Metadata } from 'next';
interface ProductProps {
  params: {
    slug: string
  }
}

async function getProduct(slug: string): Promise<ProductsResponse> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60
    }
  })

  const product = response.json()
  return product
}

export async function generateMetadata({ params }: ProductProps):Promise<Metadata> {
  const product = await getProduct(params.slug)
  return {
    title: product.title
  }
}

export default async function Product({ params }: ProductProps) {
  const product = await getProduct(params.slug)
  return (
    <div className='relative grid grid-cols-3 max-h-[860px]'>
      <div className='overflow-hidden  col-span-2'>
        <Image alt='' src={product.image}
          width={1000}
          height={1000}
          quality={100}
        />
      </div>

      <div
        className='flex flex-col justify-center px-12'>
        <h1 className='text-3xl font-bold leading-tight'>{product.title}</h1>
        <p className='mt-2 leading-relaxed text-zinc-400'>
          {
            product.description
          }
        </p>
        <div className='mt-8 flex items-center gap-3'>
          <span className='bg-violet-500 font-semibold inline-block rounded-full px-5 py-2.5'>
            {product.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              maximumFractionDigits: 0,
              minimumFractionDigits: 0
            })}
          </span>
          <span className='text-sm text-zinc-400'>
            {product.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </div>
        <div className='mt-8 space-y-4'>
          <span className='block font-semibold'>Tamanhos</span>
          <div className='flex gap-2'>
            <button
              type='button'
              className='flex h-9 w-14 place-items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold'>
              P
            </button>
            <button
              type='button'
              className='flex h-9 w-14 place-items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold'>
              M
            </button>
            <button
              type='button'
              className='flex h-9 w-14 place-items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold'>
              G
            </button>
            <button
              type='button'
              className='flex h-9 w-14 place-items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold'>
              GG
            </button>
          </div>
        </div>

        <button type='button' className='bg-emerald-600 text-white mt-8  flex h-12 justify-center items-center rounded-full'>Adicionar ao carrinho</button>
      </div>
    </div>
  )
}
