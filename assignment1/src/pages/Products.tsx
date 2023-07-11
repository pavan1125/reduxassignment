import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useSelector } from 'react-redux'
import { Product } from '../models/product.model'
import { RootState } from '../store/store'
import ProductCard from '../components/ProductCard'
 const Products = () => {
    const [search,setSearch]=useState("")
    const products=useSelector((state:RootState)=>state.Products.products)
    const filteredProducts=search.length>0 ? products.filter((p)=>p.productName.includes(search)):products
   
    const changeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        setSearch(e.target.value)
    }
  return (
    <>
    <div className='d-flex align-items-center justify-content-center my-5 container w-25'>
      <input className='form-control ' placeholder='search Product' value={search} onChange={changeHandler}/>
    </div>
    <div className='container'>
         {
            filteredProducts.length===0 ? <h1>not product add one </h1>: 
            <div className='d-flex flex-wrap gap-3'>
                {
                    filteredProducts.map((product:Product)=>{
                        return(
                            <ProductCard key={product.productId} item={product} />
                        )
                    })
                }
            </div>
         }
    </div>
    </>
  )
}
export default Products
