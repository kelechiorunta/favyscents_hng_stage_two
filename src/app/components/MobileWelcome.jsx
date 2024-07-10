import React from 'react'
import Image from 'next/image'
import welcomelogo from '../../../public/imgs/welcome_logo.png'
import shopnowlogo from '../../../public/imgs/SHOPNOW.png'

export default function MobileWelcome() {
  return (
    <div className=' w-[95%] mx-auto'>
        <div className='flex w-[100%] max-w-screen-max-container-width mx-auto rounded-md bg-[#569c4b] items-center py-8
     text-white relative lg:max-max-container-width:px-16'>
        <div className='flex w-[60%] md:p-2 ml-16 flex-col gap-y-8 z-10 mx-24 
        xsm:max-540bp:gap-y-4 py-10 xsm:max-md:absolute '>
            <h1 className='text-4xl title xsm:max-bp540:text-3xl xsm:max-bp540:-ml-4 lg:max-2xl:ml-10'>WELCOME TO</h1>
            <h1 className='text-[100px] title -mx-10 xsm:max-bp540:text-5xl
            bp540:max-bp870:text-6xl xsm:max-[358px]:-ml-8 w-[237px] h-[48px]'>FAVYSCENTS</h1>
            <p className='italic z-10 xsm:max-bp540:experience w-[215px] bp540:max-2xl:w-[100%] leading-[47.96px] text-3xl bp870:max-2xl:mt-16'>Experience the Art of Fragrance</p>
        </div>
        {/* -top-20 -right-8 -z-8 */}
        <div className='flex w-[90%] flex-row gap-x-16 px-4 -translate-x-0 -ml-8 items-end py-8 md:p-2
      xsm:max-md:flex-col-reverse lg:max-2xl:ml-[20px]'>
            <div className='relative  shopnow inline-block -ml-8 xsm:max-md:w-[1/2] h-[1/2] '>
                <Image src={shopnowlogo} alt='shopnow_logo' className='xsm:max-md:scale-50 mt-[120px] xsm:max-bp540:ml-[250px]
                 md:max-2xl:scale-100  '/>
            </div>
            <div className='welcomelogo -ml-8'>
                <Image src={welcomelogo} alt='welcome_logo' className='xsm:max-md:absolute -top-[0px] -right-[120px] scale-50 bottom-2 -z-10 md:max-2xl:scale-100'/>
            </div>
        </div>
        
    </div>
    </div>
  )
}
