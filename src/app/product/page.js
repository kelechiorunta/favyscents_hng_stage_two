import React from 'react'
import MainHeader from '../components/MainHeader'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'

export default function page() {
  return (
    <div className='max-w-screen-max-container-width w-full mx-auto flex flex-col bg-[#f5f5f5]'>
        <MainHeader/>
        <SearchBar/>
        {/* <h1 className='text-7xl bg-white'>Hello Favour! How's your end?</h1> */}
        <Categories/>
        <Footer/>
    </div>
  )
}
