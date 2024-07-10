'use client'
import Image from 'next/image'
import Link from 'next/link'
import likeStar from '../../../public/imgs/Star1.png' 
import unlikeStar from '../../../public/imgs/Star2.png' 
import { useRef, useEffect } from 'react'
import { gsap, ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

export default function ProductPageProducts({featuredProducts, filterProducts, AllProducts, selectedid}) {

    const productRef = useRef(null)

//     useEffect(() => {
//   const element = productRef.current;, 
  

//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: element,
//       start: 'top', // When the top of the trigger hits the bottom of the viewport
//       end: 'bottom top', // When the bottom of the trigger hits the top of the viewport
//       scrub: 3,
//        pin: true,
//     },
//   });

//   tl.fromTo(
//     '.products > *' ,
//     { opacity: 0, },
//     { opacity: 1, transition:'opacity 1s ease', stagger: 1, duration: 1 }
//   );

//   return () => {
//     // Cleanup ScrollTrigger instance on component unmount
//     ScrollTrigger.getAll().forEach(instance => instance.kill());
//     tl.kill();
//   };
// }, []);
  return (
    <div ref={productRef} className='products max-w-screen-max-container-width overflow-hidden flex flex-col justify-start xsm:max-lg:px-8 xsm:max-[540px]:px-4'>
         {/* <div className="max-w-screen-max-container-width flex justify-start">
            <hi className='featured max-w-screen-max-container-width leading-[47.96px] 
            text-[#7EB476] font-[700] px-8 text-[40px] py-4 mb-8 xsm:max-[400px]:text-[35px]'>FEATURED PROJECTS</hi>
        </div> 
        
             <button onClick={seemoreProducts} className='text-white bg-[#47686a] px-2 py-3 w-[20%] rounded-md xsm:max-[540px]:w-[50%]'>
                SEE MORE
            </button> 
        </div>  */}
        <div id='products' className="products_parent overflow-hidden max-w-screen-max-container-width grid grid-cols-2 gap-8 flex-row justify-evenly items-center
        w-full mb-8 xsm:max-md:grid-cols-2 xsm:max-[540px]:pr-8 bp870:max-[1189px]:grid-cols-2">
            <div className='flex items-center justify-between col-span-2 border w-full gap-x-16 xsm:max-[540px]:flex-col px-4'>
                <h1 className='text-4xl text-left font-bold pt-4 col-span-2'>Products</h1>
                {/* <div className="max-w-screen-max-container-width w-[95%] px-8 flex items-center justify-between mb-8
                    xsm:max-[540px]:flex-col gap-4"> */}
                <p className='w-full text-right inline-block leading-38.37px text-[22px] xsm:max-[400px]:text-[20px] mt-6 xsm:max-[465px]:hidden'>
                    Showing <span>{(selectedid)*selectedid}</span>-<span>{((selectedid)*3 > AllProducts.length? AllProducts.length: (selectedid*3))}</span> of <span>{AllProducts && AllProducts.length }</span> results
                </p>
                {/* </div> */}
            </div> 
            {featuredProducts && featuredProducts.map((items, index) => {
                            return (
                            <div key={items.id} className='bg-[#99e08d]  pl-8 pr-2 py-16 w-full max-w-screen-max-container-width flex flex-col items-center justify-center gap-y-4 
                            xsm:max-[1023px]:col-span-2 flex-wrap xsm:max-[540px]:w-[100%] xsm:max-[540px]:pr-16' >
                                <div className='max-w-screen-max-container-width w-[80%] h-[50%] rounded-md object-cover overflow-hidden
                                xsm:max-bp870:w-[80%] mx-16 xsm:max-[540px]:h-[40%] ml-6'>
                                    <Image src={items.image} width={380} height={340} alt={'image1'} className='image max-w-screen-max-container-width w-[100%]
                                     bg-center bg-cover rounded-md xsm:max-bp870:w-[100%] h-[340px] inline-block border-black col-span-2 md:max-bp870:mx-4 xsm:max-[540px]:h-[40%]  '/>
                                </div>
                                <div className='flex flex-col items-start gap-y-2 px-4 md:max-bp870:w-[50%] xsm:max-[540px]:-ml-8 xsm:max-2xl:-ml-4'>
                                    {/* <small className='leading-38.37px text-[22px]'>BEST SELLERS</small> */}
                                    <h1 className='leading-57.55px text-[38px] font-[700] xsm:max-[540px]:text-[38px]'>{items.product_name}</h1>
                                    <ul className='flex w-full gap-x-2'>
                                        {[...Array(items.likes)].map((i) => {
                                            console.log(i)
                                            return (
                                                // <h2>{i}</h2>
                                                <div className='block' key={i}>
                                                    <Image className='w-[90%]' src={likeStar} width={100} height={100} alt={`${i}`}/>
                                                </div>
                                                
                                            )
                                        })}
                                        {[...Array(items.unlikes)].map((i) => {
                                            console.log(i)
                                            return (
                                                // <h2>{i}</h2>
                                                <div className='block' key={i-1}>
                                                    <Image className='w-[90%]' src={unlikeStar} width={100} height={100} alt={`${i-1}`}/>
                                                </div>
                                                
                                            )
                                        })}
                                    </ul>
                                    <small className='leading-38.37px text-[22px] font-[700]'>{items.price}</small>
                                </div>
                                <button className='bg-[#4e4545] float-right ml-[60%] text-white xsm:max-[540px]:w-[150px] rounded-[5px] p-4 xsm:max-2xl:w-[35%] xsm:max-[540px]:-ml-[40%]'>ADD TO CART </button>
                            </div>)
            })}
                
        </div>
                
        <div className="max-w-screen-max-container-width flex justify-start gap-x-[9px] py-4 -mx-8
        xsm:max-bp624:px-4 xsm:max-md:gap-x-4 px-8 w-full">
                <Link href={'#products'} onClick={filterProducts} className={`${selectedid===1?'prod_highlight':'prod_unhighlight'} w-[80px]
                 h-[68px] leading-[59.95px] text-center text-[30px] xsm:max-md:px-4`}>1</Link>
                <Link href={'#products'} onClick={filterProducts} className={`${selectedid===2?'prod_highlight':'prod_unhighlight'} w-[80px]
                 h-[68px] leading-[59.95px] text-center rounded-md text-[30px] xsm:max-md:px-4`}>2</Link>
                <Link href={'#products'} onClick={filterProducts} className={`${selectedid===3?'prod_highlight':'prod_unhighlight'} w-[80px]
                 h-[68px] leading-[59.95px] text-center rounded-md text-[30px] xsm:max-md:px-4`}>3</Link>
                <Link href={'#products'} className='dash bg-[#d9d9d9] text-[#4e4545] w-[80px]
                 leading-[59.95px] h-[68px] rounded-md text-center font-extrabold text-[30px] xsm:max-md:px-4'>–</Link>
        </div>

    </div>
  )
}