import React from 'react'
import Image from 'next/image'
import logo from '../../../public/imgs/logo.png'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='max-w-screen-max-container-width: bg-[#7EB476] px-[127px] w-full text-white xsm:max-[540px]:px-4'>
        <div className='px-[35px] py-[28px] flex items-start justify-between xsm:max-[540px]:flex-col'>
            <div className='flex-col gap-4'>
                <Image src={logo} alt='logo'/>
                <nav className='flex flex-col gap-2'>
                    <Link className='leading-[47.92px] text-[20px] ' href={'/product'}>Product</Link>
                    <Link className='leading-[47.92px] text-[20px] ' href={'/'}>Checkout</Link>
                    <Link className='leading-[47.92px] text-[20px] ' href={'/'}>My Account</Link>
                    <Link className='leading-[47.92px] text-[20px] ' href={'/'}>Privacy Policy</Link>
                </nav>
            </div>
                
            <div className='flex flex-col gap-4 justify-between'>
                <h1 className='font-[700] text-[64px]'>Shop</h1>
                <nav className='flex flex-col gap-2'>
                    <p className='leading-[47.92px] text-[20px]'>+234 093 923 3914</p>
                    <Link className='leading-[47.92px] text-[20px]' href={'/'}>favyscents@gmail.com</Link>
                    <p className='leading-[47.92px] text-[20px]'>Lagos, Nigeria.</p>
                </nav>
            </div>
        </div>
    </footer>
  )
}
