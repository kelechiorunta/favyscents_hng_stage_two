'use client'
import Image from 'next/image'
import React from 'react'
import logo from '../../../public/imgs/logo.png'
import Link from 'next/link'
// import { FaHamburger } from 'react-icons/fa'
import hamburger from '../../../public/imgs/hamburger.png'
import { useState, useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useSelectedLayoutSegment } from 'next/navigation'

export default function MainHeader() {
  const pathname = usePathname()
  const currentSegment = useSelectedLayoutSegment();
  const [isvisible, setVisible] = useState(false)
  const hamburgerNav = useRef(null)
  const [childrenElement, setChildrenElement] = useState(1)
  const toggle = () => {
    setVisible(!isvisible)
    console.log(childrenElement)
  }
  var childrenLength
  // var refElement
  useEffect(()=>{
    // var refElement = window.document.querySelector('.hamburgernav')
    //childrenLength = refElement && refElement.children.length
    childrenLength = hamburgerNav.current && hamburgerNav.current.children.length/1
    setChildrenElement(childrenLength)
  }, [hamburgerNav, childrenElement, childrenLength])

  return (
    <header className='max-w-screen-max-container-width flex items-center sticky top-0 z-20 bg-[rgba(255,255,255,0.8)]
        justify-evenly px-[125px] py-[15px] border shadow-md xsm:max-md:px-8 xsm:max-[400px]:px-4'>
        <div>
            <Image className='xsm:max-[389px]:w-[80%] xsm:max-[400px]:text-[20px] w-[184px] ' width={184} height={189} src={logo} alt='logo' loading='lazy'/>
        </div>
        <nav className='flex items-center justify-evenly text-[#2c2c2c] w-full'>
            <Link className={`${pathname==='/' && 'active'} menu-link text-[24px] leading-[28.78px] xsm:max-[400px]:hidden`} href={'/'}>Home</Link>
            <Link className={`${pathname==='/cart' && 'active'} menu-link text-[24px] leading-[28.78px] xsm:max-[420px]:hidden`} href={'/cart'}>Cart</Link>
            <Link className={`${pathname==='/product' && 'active'} menu-link text-[24px] leading-[28.78px] xsm:max-[540px]:hidden`} href={'/product'}>Products</Link>
            <Link className={`${pathname==='/checkout' && 'active'} menu-link text-[24px] leading-[28.78px] xsm:max-[830px]:hidden`} href={'/'}>Checkout</Link>
            <Link className={`${pathname==='/account' && 'active'} menu-link text-[24px] leading-[28.78px] xsm:max-lg:hidden`} href={'/'}>My Account</Link>
        </nav>
        <Link className='header_button border-[#1D4648] border-[3px] bg-[#d9d9d9]
         text-center text-[24px] py-1 w-[20%] px-[4] leading-[28.78px] xsm:max-[1127px]:hidden' href={'/'}>
          Contact Us
        </Link>
        <div onClick={toggle} className='relative'>
          <Image className='xsm:max-[389px]:w-[80%] logo hidden xsm:max-[1127px]:block' src={hamburger} alt='hamburger'/>
          {<nav ref={hamburgerNav} className={`hamburgernav ${isvisible? 'isvisible': 'invisible'} overflow-hidden hidden absolute top-[85px] right-0 px-8 
          xsm:max-lg:flex flex-col rounded-md items-end gap-y-8 bg-white`} >
          {/* style={{height: isvisible? `${100 * childrenElement}%`:0}}> */}
              <Link className='menu-link hidden text-[24px] leading-[28.78px] xsm:max-[400px]:block' href={'/'}>Home</Link>
              <Link className='menu-link hidden text-[24px] leading-[28.78px] xsm:max-[420px]:block' href={'/cart'}>Cart</Link>
              <Link className='menu-link hidden text-[24px] leading-[28.78px] xsm:max-[540px]:block' href={'/product'}>Products</Link>
              <Link className='menu-link hidden text-[24px] leading-[28.78px] xsm:max-[830px]:block' href={'/'}>Checkout</Link>
              <Link className='menu-link hidden text-[24px] leading-[28.78px] xsm:max-lg:block' href={'/'}>My Account</Link>
              <Link className='header_button hidden border-[#1D4648] border-[3px] bg-[#d9d9d9]
              text-center text-[24px] leading-[28.78px] xsm:max-[1127px]:block' href={'/'}>
                Contact Us
              </Link>
          </nav>}
        </div>
    </header>
  )
}
