import React from 'react'
import { FaSearch } from 'react-icons/fa'

export default function SearchBar() {
  return (
    <div>
        <form className='max-w-screen-max-container-width w-max flex px-8 mx-auto rounded-md xsm:max-[540px]:w-[100%] bp540:max-md:w-full'>
            <div className='max-w-screen-max-container-width w-max relative flex items-center rounded-md xsm:max-[540px]:w-[100%] bp540:max-md:w-full'>
              <input type='search' name='search' className='relative rounded-md p-2 max-w-screen-max-container-width 
              w-[716px] h-[74px] [mt-111px] text-[28px] inline-block bg-[#d9d9d9] xsm:max-[540px]:w-[100%] bp540:max-md:w-[100%]' />
              <FaSearch className='absolute right-[0%] max-w-screen-max-container-width w-[10%] h-[35%] inline-block'/>
              
            </div>
        </form>
    </div>
  )
}
