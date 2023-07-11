import React,{useState,useRef} from 'react'
import uuid from "react-uuid"
import { useDispatch } from 'react-redux'
import { productActions } from '../store/store'
import { useNavigate } from 'react-router'
 const CreateProduct = (props) => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
   const [product,setProduct]=useState({
       productId:uuid(),
       productName:"",
       productPrice:0,
       productDiscount:0

   })
   const mainImageRef=useRef(null)
   const additionalImagesRef=useRef(null)
   const productSizeref=useRef(null)
  const changeHandler= (e)=>{
    setProduct((prev)=>{
        return{
             ...prev,
             [e.target.name]:e.target.value
        }
    })
   }

   const submitHandler=async(e)=>{
        e.preventDefault()
        
        let urls=Array.from(additionalImagesRef.current.files)
        const additionalUrls = await Promise.all(urls.map(async (item) => {
            const url = URL.createObjectURL(item);
            return url;
        }));
        let mainurl=URL.createObjectURL(mainImageRef.current.files[0])
       
        let mainProduct={
             ...product,
             MainUrl:mainurl,
             additionalUrl:additionalUrls,
             productSizes:productSizeref.current.value.split(",")
        }
        dispatch(productActions.addProduct(mainProduct))
        navigate("/")
        
        
    } 
    console.log(product)  
    return (
    <div className='container'>
          <form className='d-flex flex-column' onSubmit={submitHandler}>
             <label className='form-label' htmlFor='productName'>productName
             <input type="text" id="productName" className='form-control' required pattern='[A-Za-z0-9]{3,20}' name="productName" value={product.productName} onChange={changeHandler} />
             </label>
             <label className='form-label' htmlFor='productPrice'>productPrice
             <input type="number" id="productPrice" className='form-control' required min={10}  name="productPrice" value={product.productPrice}  onChange={changeHandler}  />
             </label>
             <label className='form-label' htmlFor='productDiscount'>productDiscount
             <input type="text" id="productDiscount" className='form-control' required min={0} max={100} name="productDiscount" value={product.productDiscount}  onChange={changeHandler}  />
             </label>
             <label className='form-label' htmlFor='productSizes'>Available ProductSizes
             <input type="text" className='form-control' id="productSizes"  required  placeholder='write sizes sepserated by comma ","' name="productSizes" ref={productSizeref} />
             </label>
             <label className='form-label' htmlFor='mainImage'>productImage
             <input type="file" className='form-control' id="mainImage" required name="mainImage" ref={mainImageRef} />
             </label>
             <label className='form-label' htmlFor='additionalImages'>additional images
             <input type="file" className='form-control' required id="additionalImages" multiple={true} ref={additionalImagesRef}/> 
             </label>
             <div className='w-25 flex-wrap d-flex gap-3'>

             <button className='w-25 btn btn-success'>submit</button>
             <button className='btn btn-danger w-25' type="button" onClick={()=>navigate("/")}>cancel</button>
             </div>
          </form>
    </div>
  )
}
export default CreateProduct