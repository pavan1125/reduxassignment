import React from 'react'
import { useSelector } from 'react-redux'
import { useOutletContext,useParams } from 'react-router-dom'
import { Product } from '../models/product.model'
import { RootState } from '../store/store'
 const SingleDetail = () => {
    const params=useParams()
    const id=params.id
    const items=useSelector((state: RootState) => state.Products)

    const item=useSelector((state:RootState)=>state.Products.products).find((p)=>p.productId===id)
   
  return (
    <div>
        <p><b>Name:</b>{item?.productName}</p>
        <p><b>Sizes Available: </b>{item?.productSizes.join(",")}</p>
    </div>
  )
}
export default SingleDetail