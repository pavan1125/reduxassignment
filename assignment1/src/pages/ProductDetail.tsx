import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, Outlet, useParams } from 'react-router-dom'

import { RootState } from '../store/store'
import ProductDetailCard from './ProductDetailCard'
export const ProductDetail:React.FC<{}> = () => {

    const products=useSelector((state:RootState)=>state.Products.products)
    const params=useParams()
    const item=products.find((item)=>item.productId.toString()===params.id)
    
    console.log(item)
  return (
    <div>
       <NavLink to="/"><button className='btn btn-warning px-3 my-2'>{`<---back to all products`}</button></NavLink>
        <div>
        {
        item ?
          <ProductDetailCard item={item} /> :
        <h1>no item found</h1>
        }
   
        </div>
        <div className='d-flex gap-10 my-3'>
           <NavLink   className={({isActive})=>isActive ? "bg-success px-2 py-2 rounded fw-bold text-decoration-none":"px-2 py-2 rounded text-decoration-none"} end to=".">Details</NavLink>
           <NavLink   className={({isActive})=>isActive ? "bg-success px-2 py-2 rounded fw-bold text-decoration-none":"px-2 py-2 rounded text-decoration-none"}  to="price">Price</NavLink>
           <NavLink   className={({isActive})=>isActive ? "bg-success px-2 py-2 rounded fw-bold text-decoration-none":"px-2 py-2 rounded text-decoration-none"}  to="images">Images</NavLink>
        </div>
        <div>
            <Outlet context={item}/>
        </div>
    </div>
  )
}
