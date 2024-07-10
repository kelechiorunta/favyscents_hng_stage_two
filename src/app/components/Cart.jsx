'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { addItem, update } from '../redux/redux'
import { getLatestState } from '../redux/thunk'

export default function Cart() {

    const [id, setId] = useState(0)
    const cartStore = useSelector((state) => state.cart.cartitems)
    const dispatch = useDispatch()

    const [products, setProducts] = useState([])
    const [cartItem, setCartedItem] = useState([])
    const [cart, setCart] = useState(cartStore)
    
    useEffect(() => {
        dispatch(getLatestState())
        console.log(cartStore)
        setCart(cartStore)
    },[dispatch, addItem, cartStore, cart, cartStore.selectedcartItems])

    useEffect(()=>{
        const fetchProducts = async() =>{
            const products = await fetch('/products.json')
            const parsedProducts = await products.json()
            setProducts(parsedProducts && parsedProducts)
        }
        fetchProducts()
    },[])

    const addtoCart = (item) => {
        // console.log(cartStore)
        const { id, product_name, price } = item
        dispatch(addItem({ id, product_name, price }))
        // console.log({ id, product_name, price })
        setId(id)
        
    }

    const findProduct = (id) => {
        const findItem = cartStore.selectedcartItems && cartStore.selectedcartItems.find(item=> {return item.id===id})
        if (findItem && findItem.length>0){
            setCartedItem(findItem)
        }
        
        
    }
  return (
    <div className='bg-[#f5f5f5] max-max-container-width w-full flex flex-col gap-8 p-16'>
        <h1 className='text-5xl'>Cart</h1>
        <div className='flex flex-col'>
            <p className='text-2xl'>Note:</p>
            <small className='text-xl'>Kindly send a DM on instagram for international shipping</small>
            <small className='text-xl'>Delivery outside Lagos takes <span>3</span> to <span>5</span> working days</small>
            <small className='text-xl'>Delivery within Lagos takes <span>2</span> to <span>3</span> working days</small>
        </div>
        <table id='cart_section' className='w-full flex flex-col p-8 shadow-2xl border'>
            <thead className='w-full rounded shadow-md p-4 text-center'>
                <tr className='flex items-center justify-between rounded shadow-md p-4 text-center'>
                    <th className='w-full text-2xl rounded xsm:max-[1189px]:w-[520px]'>Cart</th>
                    <th className='w-full text-left text-2xl rounded xsm:max-lg:hidden'>Price</th>
                    <th className='w-full text-2xl rounded xsm:max-[1188px]:hidden'>Subtotal</th>
                </tr>
            </thead>
            <tbody className='w-full'>
                <tr className='flex flex-col gap-4 rounded shadow-md p-4'>
            {
                products && products.map((product)=> {
                    return(
                        <td id={`product${product.id}`} key={product.id} className='flex items-center gap-x-[200px]'>
                            <td className='flex flex-col gap-y-4 shadow-md border overflow-hidden border-r-2 '>
                                <div className='overflow-hidden'>
                                <Image className='image' src={product.image} alt={`product${product.id}`} width={200} height={200}/>
                                </div>
                                <h1 className='text-xl text-center'>{product.product_name}</h1>
                                <button onClick={()=>{addtoCart(product); findProduct(product.id);}} className='bg-[#99e08d] p-4 text-center rounded'>ADD TO CART</button>
                                {/* <h1 className='hidden xsm:max-[1188px]:block'>Subtotal: {(product.id===id) && cartStore.selectedcartItems ? cartStore.selectedcartItems.find((item, index)=>{return index==0})[0].price : null}</h1> */}
                                <td className='hidden xsm:max-[1188px]:block xsm:max-[460px]:-mx-6'>
                            {cart.selectedcartItems && cart.selectedcartItems.map(item=>{ 
                                return(
                                   ((item.id === product.id)) && <h1 key={item.id} className={`${item.id===id? 
                                   'activate_cart': 'deactivate_cart'} w-[50px] font-bold text-xl xsm:max-2xl:mx-10`}>
                                Subtotal: { (product.id===id && cart.selectedcartItems && cart.selectedcartItems.length>0) && 
                                cart.selectedcartItems[cart.selectedcartItems.length-1]?
                                 item.id===id && item.price : item.id===product.id? item.price : null }
                                 </h1>
                                )
                            })}
                            </td>
                                <h1 className='hidden xsm:max-lg:block'>Price: {product.price}</h1>
                                {/* <h1>{ (cartStore && cartStore.length>0) && cartStore[0].id}</h1> */}
                            </td>
                            <td className=' xsm:max-[1188px]:-mx-24 w-auto xsm:max-lg:hidden xsm:max-2xl:-mx-4'><h1 className='text-xl xsm:max-lg:hidden'>{product.price}</h1></td>
                            <td className='mx-16 w-[50px] xsm:max-[1188px]:hidden'>
                            {cart.selectedcartItems && cart.selectedcartItems.map(item=>{ 
                                return(
                                   ((item.id === product.id)) && <h1 key={item.id} className={`${item.id===id? 
                                   'activate_cart': 'deactivate_cart'} w-[50px] font-bold text-xl xsm:max-2xl:mx-10`}>
                                { (product.id===id && cart.selectedcartItems && cart.selectedcartItems.length>0) && 
                                cart.selectedcartItems[cart.selectedcartItems.length-1]?
                                 item.id===id && item.price : item.id===product.id? item.price : null }
                                 </h1>
                                )
                            })}
                            </td>
                            {/* <td className='mx-16 w-[50px] xsm:max-[1188px]:hidden'><h1 className='w-[50px] text-xl xsm:max-2xl:mx-10 xsm:max-[1188px]:hidden'>{(product.id===id) &&  cartStore.selectedcartItems && cartStore.selectedcartItems.length>0 ? cartStore.selectedcartItems.find((item,index)=>{return index==0})[0].price : ( (cartItem && cartItem.length>0)? cartItem[0].price : 0)}</h1></td> */}
                            {/* <td className='mx-16 w-[50px] xsm:max-[1188px]:hidden'><h1 className='w-[50px] text-xl xsm:max-2xl:mx-10 xsm:max-[1188px]:hidden'>{(product.id===id) && cartStore.selectedcartItems.length>0 ? cartStore.selectedcartItems[id-1].price :
                             ((cartStore.selectedcartItems.length>0 && cartStore.selectedcartItems[product.id-1]) && cartStore.selectedcartItems[product.id-1].price || 0) }</h1></td> */}
                        </td>
                    )

                })
            }
            </tr>
        </tbody>
        </table>
        
        {/* <h1 className='w-[50px] text-xl xsm:max-2xl:mx-10'>{ (cart.selectedcartItems && cart.selectedcartItems.length>0) && cart.selectedcartItems[cart.selectedcartItems.length-1]? cart.selectedcartItems[cart.selectedcartItems.length-1].price : 0 }</h1> */}
        <div className='w-[75%] flex flex-col gap-8 items-end text-xl '>
            <h1 className='p-8 border'>Total:<span>{`#${cartStore.cart_price}`}</span></h1>
            <div className='flex flex-col gap-8 border border-black xsm:max-[460px]:-mx-11'>
                <h1 className='p-8 bg-[#99e08d] border-black border-2'>Carttools</h1>
                <div className='flex flex-col p-8 '>
                    <div className='flex items-center justify-between gap-4'>
                       <p>Subtotal</p> 
                       <p>{cartStore.cart_price}</p>
                    </div>
                    <div className='flex items-center justify-between gap-4'>
                       <p>Shipping</p> 
                       <p>#5,000</p>
                    </div>
                    <div className='flex items-center justify-between gap-4'>
                       <p>Total</p> 
                       <p>{cartStore.cart_price + 5000}</p>
                    </div>
                </div>
                <div className='w-full bg-[#99e08d]'>
                    <button className='p-8 bg-[#99e08d]'>Checkout</button>
                </div>
                
            </div>
            


        </div>
    </div>
  )
}
