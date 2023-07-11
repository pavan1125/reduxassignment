import React from 'react'
import { useSelector } from 'react-redux'
import { useOutletContext,useParams } from 'react-router-dom'
import { Product } from '../models/product.model'
import { RootState } from '../store/store'
 const ProductPrice = () => {
    const params=useParams()
    const item=useSelector((state:RootState)=>state.Products.products).find((p)=>p.productId===params.id)
  return (
    <>
    {
       item ?
       <div>
       <p><b>Price:</b><s>{item?.productPrice}</s> <b>{item.productPrice-(item?.productPrice)*(item?.productDiscount/100)}</b></p>
       <p><b>Discount:</b>{item?.productDiscount}%</p>
       </div>
       :
       <div>
       </div>
    }
    
    </>
  )
}
export default ProductPrice
