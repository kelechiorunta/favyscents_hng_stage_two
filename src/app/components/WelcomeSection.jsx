'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import welcomelogo from '../../../public/imgs/welcome_logo.png'
import shopnowlogo from '../../../public/imgs/SHOPNOW.png'
 
import {gsap, ScrollTrigger} from 'gsap/all'
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function WelcomeSection() {
    const imageRef = useRef(null)

// useEffect(() => {
//   const element = imageRef.current;

//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: element,
//       start: 'bottom 600px', // When the top of the trigger hits the bottom of the viewport
//       end: 'bottom top', // When the bottom of the trigger hits the top of the viewport
//       scrub: 3,
//        pin: true,
//     },
//   });

//   tl.fromTo(
//     element,
//     { backgroundPositionY: '0%', },
//     { backgroundPositionY: '100%', transition:'backgroundPositionY 2s ease', duration: 3 }
//   );

//   return () => {
//     // Cleanup ScrollTrigger instance on component unmount
//     ScrollTrigger.getAll().forEach(instance => instance.kill());
//     tl.kill();
//   };
// }, []);
const scopeContainer = useRef(null)

useGSAP(() => {
    const updateBackgroundPosition = (direction) => {
    const element = document.querySelector('.welcome_section');
    const currentY = parseFloat(window.getComputedStyle(element).backgroundPositionY);
    const increment = direction === 'down' ? 10 : -10; // Adjust the increment value as needed
    const newY = Math.max(0, Math.min(100, currentY + increment)); // Ensure the value stays between 0% and 100%

    gsap.to('.welcome_section', {
      backgroundPositionY: `${newY}%`,
      duration: 0.5,
      ease: 'none',
      overwrite: 'auto'
    });
  };

  ScrollTrigger.create({
    trigger: scopeContainer.current,
    start: 'top 300px',
    end: 'end ',
    scrub: 3,
    onUpdate: self => {
      if (self.direction > 0) {
        updateBackgroundPosition('down');
      } else {
        updateBackgroundPosition('up');
      }
    }
  });
}, {scope: scopeContainer.current});

  return (
    <div className='max-w-screen-max-container-width w-full relative'>
        <div ref={scopeContainer} className='welcome_section max-w-screen-max-container-width mx-auto rounded-md bg-[#569c4b]
     text-white w-[95%] gap-4 pt-[53px] border overflow-hidden border-[#589c4b] xsm:max-bp540:px-4 xsm:max-1188px:grid grid-cols-2'>
        <div className='flex flex-col items-start gap-x-1 w-full px-16 z-10 xsm:max-bp540:px-4 '>
            <h1 className='text-4xl title xsm:max-bp540:text-3xl w-full'>WELCOME TO</h1>
            <h1 className='text-[100px] title xsm:max-bp540:text-5xl bp540:max-bp870:text-6xl'>FAVYSCENTS</h1>
            <p className='caption text-3xl w-full italic'>Experience the Art of Fragrance</p>
        </div>
        <div className='shopnow overflow-hidden w-max mx-48 -z-1 block xsm:max-bp540:mx-8 mt-60 bp540:max-2xl:mt-8'>
            <Image src={shopnowlogo} alt='shopnow_logo' />
        </div>
        {/* <div className='welcomelogo '>
            <Image src={welcomelogo} alt='welcome_logo' className='w-[100%]'/>
        </div> */}
    </div>
    </div>
    
  )
}
