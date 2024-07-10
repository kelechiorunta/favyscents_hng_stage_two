import Image from 'next/image'
import React from 'react'
import welcome from '../../../public/imgs/welcome.png'

export default function Welcome() {
  return (
    <div className=' h-auto mx-[35px] mt-[10%] mx-auto rounded-md w-[100%] xsm:max-bp540:w-[100%] scale-90 '>
        <Image src={welcome} className='welcome h-[358px]
        border-[#1D4648] border-[3px] rounded-[10px] max-w-screen-max-container-width:w-[100%]
        max-w-screen-lg:w-[80%] '/>
    </div>
  )
}
