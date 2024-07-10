import React from 'react'
import Cart from '../components/Cart'
import MainHeader from '../components/MainHeader'
import Footer from '../components/Footer'

export default function CartPage() {
  return (
    <div className='max-w-screen-max-container-width w-full bg-[#f5f5f5]'>
        <MainHeader/>
        <Cart/>
        <Footer/>
    </div>
  )
}
