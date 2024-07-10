'use client'
import React, { useRef } from 'react'
import image1 from '../../../public/imgs/image1.png'
import image2 from '../../../public/imgs/image2.png'
import image3 from '../../../public/imgs/image3.png'
import Image from 'next/image'
import { gsap, ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import {useEffect, useState} from 'react'
import Link from 'next/link'

export default function FeaturedProducts() {



    const imageRef = useRef(null)
    const productsRef = useRef(null)
    const [featuredProducts, setFeaturedProducts] = useState([])
    const [AllProducts, setAllProducts] = useState([])
    const [childrenParent, setChildrenParent] = useState(null)
    const [selectedid, setSelectedId] = useState(1)

   useEffect(()=>{

    const fetchProducts = async() => {
        const products = await fetch('/products.json')
        const parsedProducts = await products.json()
        
        console.log(parsedProducts)
        setFeaturedProducts(parsedProducts.slice(0,3)) 
        setAllProducts(parsedProducts) 
        // filterProducts("1",parsedProducts)
    }
    fetchProducts()
   },[]) 
    

    useEffect(() => {
        const numberofChildren = productsRef && productsRef.current.children[0]
        setChildrenParent(numberofChildren)
        console.log(childrenParent)
        // productsRef.current.remove(productsRef.current && childrenParent)
    },[])

    const filterProducts = async(e) => {
        const no = parseInt(e.target.innerText)
        const products = await fetch('/products.json')
        const parsedProducts = await products.json()
        setSelectedId(parseInt(e.target.innerText))
        const sliceProducts = parsedProducts.slice(((no-1) * 3), (no * 3))
        setFeaturedProducts(sliceProducts)
        console.log(sliceProducts)
    }

    const seemoreProducts = async(selectedid) => {
        
        if ((selectedid * 2) < AllProducts.length){
            const products = await fetch('/products.json')
            const parsedProducts = await products.json()
            setSelectedId(selectedid=>selectedid+1)
            console.log(selectedid)
            const sliceProducts = parsedProducts.slice(((selectedid-1) * 3), (selectedid * 3))
            setFeaturedProducts(sliceProducts)
        }
        

    }

    useEffect(() => {
  const element = imageRef.current;
  

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: 'top', // When the top of the trigger hits the bottom of the viewport
      end: 'bottom top', // When the bottom of the trigger hits the top of the viewport
      scrub: 3,
       pin: true,
    },
  });

  tl.fromTo(
    '.element > *' ,
    { opacity: 0, },
    { opacity: 1, transition:'opacity 1s ease', stagger: 1, duration: 1 }
  );

  return () => {
    // Cleanup ScrollTrigger instance on component unmount
    ScrollTrigger.getAll().forEach(instance => instance.kill());
    tl.kill();
  };
}, []);
  return (
    <div ref={imageRef} className='element max-w-screen-max-container-width w-full p-[125px] flex flex-col justify-start xsm:max-lg:px-8'>
        <div className="max-w-screen-max-container-width flex justify-start">
            <hi className='featured max-w-screen-max-container-width leading-[47.96px] 
            text-[#7EB476] font-[700] px-8 text-[40px] py-4 mb-8 xsm:max-[400px]:text-[35px]'>FEATURED PROJECTS</hi>
        </div>
        <div className="max-w-screen-max-container-width w-[95%] px-8 flex items-center justify-between mb-8
        xsm:max-[540px]:flex-col gap-4">
            <p className='w-full leading-38.37px text-[22px] xsm:max-[400px]:text-[20px]'>
                Showing <span>{(selectedid)*selectedid}</span>-<span>{(selectedid)*3>AllProducts.length?AllProducts.length:(selectedid)*3}</span> of <span>{AllProducts && AllProducts.length }</span> results
            </p>
            <button onClick={()=>seemoreProducts(selectedid+1)} className='text-white bg-[#47686a] px-2 py-3 w-[20%] rounded-md xsm:max-[540px]:w-[50%]'>
                SEE MORE
            </button>
        </div>
        <div ref={productsRef} id='products' className="products_parent  max-w-screen-max-container-width grid grid-cols-3 flex-row justify-evenly items-center gap-y-8 gap-x-8 
        w-full mb-8 xsm:max-md:grid-cols-1 xsm:max-[400px]:px-2 bp870:max-[1189px]:grid-cols-2">
            
            {featuredProducts && featuredProducts.map((items, index) => {
                            return (
                            <div key={items.id} className='border shadow-md px-2 py-4 max-w-screen-max-container-width w-full flex flex-col gap-y-4 xsm:max-md:col-span-1 md:max-bp870:col-span-2' >
                                <div className='max-w-screen-max-container-width w-[100%] h-[100%] rounded-md object-cover overflow-hidden
                                xsm:max-bp870:w-[100%] px-4'>
                                    <Image src={items.image} width={200} height={200} alt={'image1'} className='image max-w-screen-max-container-width w-[100%]
                                    h-[326px] bg-center bg-cover rounded-md xsm:max-bp870:w-[100%] inline-block border-black col-span-2'/>
                                </div>
                                <div className='flex flex-col items-start gap-y-2 px-4'>
                                    <small className='leading-38.37px text-[22px]'>BEST SELLERS</small>
                                    <h1 className='leading-38.37px text-[22px] font-[700]'>{items.product_name}</h1>
                                    <small className='leading-38.37px text-[22px] font-[700]'>{items.price}</small>
                                </div>
                                <button className='bg-[#4e4545] mx-4 text-white w-[50%] rounded-[5px] py-4'>ADD TO CART </button>
                            </div>)
                        // <div>
                        //     <div className='border shadow-md px-2 py-4 max-w-screen-max-container-width w-full flex flex-col gap-y-4 xsm:max-md:col-span-1 md:max-bp870:col-span-2' >
                        //         <div className='max-w-screen-max-container-width w-[100%] h-[100%] rounded-md object-cover overflow-hidden
                        //         xsm:max-bp870:w-[100%] px-4'>
                        //             <Image src={image1} alt={'image1'} className='image max-w-screen-max-container-width w-[100%]
                        //             h-[326px] bg-center bg-cover rounded-md xsm:max-bp870:w-[100%] inline-block border-black col-span-2'/>
                        //         </div>
                        //         <div className='flex flex-col items-start gap-y-2 px-4'>
                        //             <small className='leading-38.37px text-[22px]'>BEST SELLERS</small>
                        //             <h1 className='leading-38.37px text-[22px] font-[700]'>Chocho Musk</h1>
                        //             <small className='leading-38.37px text-[22px] font-[700]'>#88,000.00</small>
                        //         </div>
                        //         <button className='bg-[#4e4545] mx-4 text-white w-[50%] rounded-[5px] py-4'>ADD TO CART </button>
                        //     </div>

                        //     <div className='border shadow-md px-2 py-4 max-w-screen-max-container-width w-full flex flex-col gap-y-4 md:max-max-container-width'>
                        //         <div className='max-w-screen-max-container-width w-[100%] h-[100%] rounded-md object-cover overflow-hidden
                        //         xsm:max-bp870:w-[100%] px-4 '>
                        //             <Image src={image2} alt={'image2'} className='image max-w-screen-max-container-width w-[326px]
                        //             h-[326px] bg-center bg-cover rounded-md xsm:max-bp870:w-[100%] inline-block col-span-2'/>
                        //         </div>
                        //         <div className='flex flex-col items-start gap-y-2 px-4 text-[#4e4545]'>
                        //             <small className='leading-38.37px text-[22px]'>BEST SELLERS</small>
                        //             <h1 className='leading-38.37px text-[22px] font-[700]'>Castle Princess</h1>
                        //             <small className='leading-38.37px text-[22px] font-[700]'>#50,000.00</small>
                        //         </div>
                        //         <button className='bg-[#4e4545] mx-4 text-white w-[50%] rounded-[5px] py-4'>ADD TO CART </button>
                        //     </div>

                        //     <div className='border shadow-md px-2 py-4 max-w-screen-max-container-width w-full flex flex-col gap-y-4' >
                        //         <div className='max-w-screen-max-container-width w-[100%] h-[90%] rounded-md object-cover overflow-hidden
                        //         xsm:max-bp870:w-[100%] px-4'>
                        //             <Image src={image3} alt={'image3'} className='image max-w-screen-max-container-width w-[326px]
                        //             h-[326px] bg-center bg-cover rounded-md xsm:max-bp870:w-[100%] inline-block col-span-2'/>
                        //         </div>
                        //         <div className='flex flex-col items-start gap-y-2 px-4'>
                        //             <small className='leading-38.37px text-[22px]'>BEST SELLERS</small>
                        //             <h1 className='leading-38.37px text-[22px] font-[700]'>Raayhan</h1>
                        //             <small className='leading-38.37px text-[22px] font-[700]'>#100,000.00</small>
                        //         </div>
                        //         <button className='bg-[#4e4545] mx-4 text-white w-[50%] rounded-[5px] py-4'>ADD TO CART </button>
                        //     </div>

                        // </div>
            })}
                
        </div>
                
        <div className="max-w-screen-max-container-width flex justify-start gap-x-[13px] py-4 -mx-8
        xsm:max-bp624:px-4 xsm:max-md:gap-x-4 px-8 w-full">
                <Link href={'#products'} onClick={filterProducts} className={`${selectedid===1?'highlight':'unhighlight'} w-[80px]
                 h-[68px] leading-[59.95px] text-center rounded-md text-[30px] xsm:max-md:px-4`}>1</Link>
                <Link href={'#products'} onClick={filterProducts} className={`${selectedid===2?'highlight':'unhighlight'} w-[80px]
                 h-[68px] leading-[59.95px] text-center rounded-md text-[30px] xsm:max-md:px-4`}>2</Link>
                <Link href={'#products'} onClick={filterProducts} className={`${selectedid===3?'highlight':'unhighlight'} w-[80px]
                 h-[68px] leading-[59.95px] text-center rounded-md text-[30px] xsm:max-md:px-4`}>3</Link>
                <Link href={'#products'} className='dash bg-[#d9d9d9] text-[#4e4545] w-[80px]
                 leading-[59.95px] h-[68px] text-center rounded-md font-extrabold text-[30px] xsm:max-md:px-4'>-</Link>
        </div>

    </div>
  )
}
