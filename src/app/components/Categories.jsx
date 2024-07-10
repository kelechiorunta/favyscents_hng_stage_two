'use client'
import React from 'react'
import { useEffect, useState, useRef } from 'react'
import ProductPageProducts from './ProductPageProducts'
import Delivery from './Delivery'

export default function Categories() {


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
    

    // useEffect(() => {
    //     const numberofChildren = productsRef && productsRef.current.children[0]
    //     setChildrenParent(numberofChildren)
    //     console.log(childrenParent)
    //     // productsRef.current.remove(productsRef.current && childrenParent)
    // },[])

    const filterProducts = async(e) => {
        const no = parseInt(e.target.innerText)
        const products = await fetch('/products.json')
        const parsedProducts = await products.json()
        setSelectedId(parseInt(e.target.innerText))
        const sliceProducts = parsedProducts.slice(((no-1) * 3), (no * 3))
        setFeaturedProducts(sliceProducts)
        console.log(sliceProducts)
    }

    const filterCategoryByName = async(e) => {
        const name = (e.target.innerText)
        const products = await fetch('/products.json')
        const parsedProducts = await products.json()
        const category_by_name = parsedProducts.filter(i=> {return i.product_name.toLowerCase()===name.toString().toLowerCase()})
        console.log(category_by_name)
        setFeaturedProducts(category_by_name)
    }

    const seemoreProducts = async() => {
        
        const products = await fetch('/products.json')
        const parsedProducts = await products.json()
        setSelectedId(selectedid=>selectedid+1)
        console.log(selectedid)
        const sliceProducts = parsedProducts.slice(((selectedid-1) * 3), (selectedid * 3))
        setFeaturedProducts(sliceProducts)

    }


    ////////////////////////////////////////////

    const [categories, setCategories] = useState('')

    useEffect(()=>{
        const fetchCategory = async() =>{
            const categories = await fetch('/products.json')
            const parsedCategories = await categories.json()
            setCategories(parsedCategories && parsedCategories)
        }
        fetchCategory()
    },[])



  return (
    <div className='max-w-screen-max-container-width flex flex-col items-start shadow-md py-8 px-8 border rounded-md bg-white xsm:max-[540px]:w-[100%]'>

    
    <div className='max-w-screen-max-container-width flex items-start shadow-md py-8 px-8 border rounded-md bg-white xsm:max-[540px]:w-[100%]'>
        
        
        <ul className='shadow-2xl rounded-md flex flex-col border  gap-4 p-16 xsm:max-[1188px]:hidden'>
        <h1 className='text-4xl text-center font-bold pt-8 pb-4 -mt-20 '>Categories</h1>
        {
        categories && categories.map((i) => {
            return(
                <button onClick={filterCategoryByName} key={i.product_name} className='p-4 w-[100%] rounded-sm shadow-md text-center text-2xl'>
                    {i.product_name}
                </button>
            )
        })
    }
        </ul>

        <ProductPageProducts filterProducts={filterProducts} featuredProducts={featuredProducts}
        AllProducts={AllProducts} selectedid={selectedid}/>
    </div>
    <Delivery/>
</div>
  )
}
