import React from 'react'
import shopbag from '../../../public/imgs/shopbag.png'
import payment from '../../../public/imgs/payment.png'
import delivery from '../../../public/imgs/delivery.png'
import Image from 'next/image'

export default function Delivery() {
  return (
    <div className='grid items-center justify-evenly w-[100%] gap-8 md:max-lg:scale-75
         xsm:max-bp624:grid-cols-1 xsm:max-md:grid-cols-2 md:max-2xl:grid-cols-3 scale-[0.8] -mt-8 bp540:max-md:w-full'>
                <div className='max-w-screen-max-container-width w-[362px] h-[272px] p-[35px] 
                border rounded-md flex flex-col items-center gap-y-4'>
                    <Image src={shopbag} alt={'shopbag'}/>
                    <h1 className='leading-[57.55px] text-[35px] font-[700]'>Easy Shopping</h1>
                </div>
                <div className='max-w-screen-max-container-width w-[362px] h-[272px] p-[35px] 
                border rounded-md flex flex-col items-center gap-y-4'>
                    <Image src={delivery} alt={'delivery'}/>
                    <h1 className='leading-[57.55px] text-[35px] font-[700]'>Swift Delivery</h1>
                </div>
                <div className='max-w-screen-max-container-width w-[362px] h-[272px] p-[35px] 
                border rounded-md flex flex-col items-center gap-y-4'>
                    <Image src={payment} alt={'payment'}/>
                    <h1 className='leading-[57.55px] text-[35px] font-[700]'>Payment</h1>
                </div>


        </div>
  )
}
