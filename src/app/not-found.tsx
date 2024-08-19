import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className='flex flex-col gap-5 justify-center items-center min-h-screen my-auto'>
      <Image src={"/not_found.svg"} alt='' width={400} height={400} quality={100} />
      <p className='leading-5 text-sm font-medium'>Não conseguimos encontrar a página que você estava procurando.
        <span className='block text-center'>
          Volta para a
          <Link href="/" className='text-center text-violet-500 hover:text-violet-400'> página inícial</Link>
        </span>

      </p>
    </div>
  )
}
