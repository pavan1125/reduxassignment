import React from 'react'
import { Product } from '../models/product.model'

 const ProductDetailCard:React.FC<{item:Product}> = (props) => {
  return (
    <div>
    <div>
         <div className='d-flex justify-content-center align-items-center gap-5'>

            <div>
            <img style={{width:250}} src={props.item.MainUrl} alt={props.item.productName} />
            </div>
            <div className='w-50'>
            <button disabled className='bg-success rounded px-2 my-2' >Discount:{props.item.productDiscount}%</button>
            <h1>{props.item.productName}</h1>
            </div>
            </div>

        </div>
    </div>
  )
}
export default ProductDetailCard