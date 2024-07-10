'use client'
import React from 'react'
import shopbag from '../../../public/imgs/shopbag.png'
import payment from '../../../public/imgs/payment.png'
import delivery from '../../../public/imgs/delivery.png'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from 'gsap/all'
import { useEffect, useRef } from 'react'

export default function Reviews() {
  const reviewRef = useRef(null)
    useEffect(() => {
  const element = reviewRef.current;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: 'top 100px', // When the top of the trigger hits the bottom of the viewport
      end: 'bottom', // When the bottom of the trigger hits the top of the viewport
      scrub: 1,
      pinnedContainer:'.review_container',
       pin: true, 
      pinSpacing:'-400px',
    },
  });

  tl.fromTo(
    '.review > *' ,
    { x: '-100%', opacity: 0 },
    { x: 0, opacity: 1, transition:'all 0.5s ease', stagger: 0.3, duration: 0.5 }
  );

  return () => {
    // Cleanup ScrollTrigger instance on component unmount
    ScrollTrigger.getAll().forEach(instance => instance.kill());
    tl.kill();
  };
}, []);
  return (
    <div className='review_container mt-[600px]'>
    <div ref={reviewRef} className='review max-w-screen-max-container-width flex flex-col items-center justify-start w-[100%] gap-y-8 py-8 xsm:max-[540px]:px-4'>
        <h1 className='bg-white text-[#7EB476] border-[#4E4545] p-4 rounded-md 
        shadow-md leading-[57.55px] text-[48px] font-[700] xsm:max-[400px]:text-[30px]'>CUSTOMER'S REVIEWS</h1>
        <div className='max-w-screen-max-container-width w-[90%] flex justify-evenly xsm:max-md:flex-col px-16 xsm:max-[540px]:px-2'>
            <div className='flex flex-col items-start shadow-md border text-white
             bg-[#7EB476] p-4 gap-y-4 rounded-md'>
                <h1 className='text-[39px] leading-[76.74px] xsm:max-[400px]:text-[30px]'>Favour Simeon</h1>
                <small className='text-[25px] leading-[47.96px] xsm:max-[400px]:text-[20px]'>Lagos, Nigeria.</small>
                <blockquote className='text-[25px] leading-[47.96px] xsm:max-[400px]:text-[20px]'>I love your perfumes so much</blockquote>
                <p className='text-[25px] leading-[47.96px] text-right w-full float-right xsm:max-[400px]:text-[20px]'>Read more...</p>
            </div>
            <div className='flex flex-col items-start shadow-md border text-white
             bg-[#7EB476] p-4 gap-y-4 rounded'>
                <h1 className='text-[39px] leading-[76.74px] xsm:max-[400px]:text-[30px]'>Comfort Austin</h1>
                <small className='text-[25px] leading-[47.96px] xsm:max-[400px]:text-[20px]'>Enugu, Nigeria.</small>
                <blockquote className='text-[25px] leading-[47.96px] xsm:max-[400px]:text-[20px]'>Amazing fragrance..</blockquote>
                <p className='text-[25px] leading-[47.96px] text-right w-full xsm:max-[400px]:text-[20px]'>Read more...</p>
            </div>
        </div>
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
    </div>
    </div>
  )
}
