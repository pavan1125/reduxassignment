import { useSelector } from 'react-redux'
import {  useParams } from 'react-router-dom'
import { RootState } from '../store/store'
 const ProductImages = () => {
    const params=useParams()
    const item=useSelector((state:RootState)=>state.Products.products).find((p)=>p.productId===params.id)
  return (
    <div className='d-flex gap-5 align-items-center'>
      {
        item?.additionalUrl.map((url)=>{
           return(
             <div key={url} className="shadow" >
 
               <img style={{width:150}} src={url} alt={item?.productName} />
             </div>
           )
             
           
        })
      }
    </div>
  )
}
export default ProductImages
