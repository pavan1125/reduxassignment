import React, { ChangeEvent, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useParams,useNavigate } from 'react-router-dom'
import { productActions, RootState } from '../store/store'
 const EditProductForm = () => {
  const params=useParams()
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const id=params.id
  const item=useSelector((state:RootState)=>state.Products.products).find((pr)=>pr.productId===id)
  const [product,setProduct]=useState({
    productId:item?.productId ?? "",
    productName:item?.productName ?? "",
    productPrice:item?.productPrice ?? 0,
    productDiscount:item?.productDiscount ?? 0,
    productSizes:item?.productSizes ?? [],
    MainUrl:item?.MainUrl ??  "",
    additionalUrl:item?.additionalUrl ?? []
  })
  const changeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
      setProduct((prev)=>{
         return{
            ...prev,
            [e.target.name]:e.target.value
         }
      })
  }

  function SaveHandler(){
   
      dispatch(productActions.editProduct(product))
      navigate("/")
  }
  function cancelhandler(){
       navigate("/")
  }
  function DeleteHandler(){
      dispatch(productActions.deleteProduct(product.productId))
      navigate("/")
  }
  return (
    <div className='container'>
        <form className='d-flex flex-column'>
        <label className='form-label' htmlFor='productName'>productName
             <input type="text" id="productName" className='form-control' required pattern='[A-Za-z0-9]{3,20}' name="productName"  value={product.productName} onChange={changeHandler} />
             </label>
             <label className='form-label' htmlFor='productPrice'>productPrice
             <input type="number" id="productPrice" className='form-control' required min={10} name="productPrice"  value={product.productPrice}  onChange={changeHandler}  />
             </label>
             <label className='form-label' htmlFor='productDiscount'>productDiscount
             <input type="text" id="productDiscount" className='form-control' name="productDiscount" required min={0} max={100} value={product.productDiscount}  onChange={changeHandler}  />
             </label>
             <label className='form-label' htmlFor='productSizes'>Available ProductSizes
             <input type="text" className='form-control' required id="productSizes"  placeholder='write sizes sepserated by comma ","' name="productSizes" value={product.productSizes}  onChange={changeHandler}  />
             </label>
             <div>
            <button type='button' className='btn btn-warning me-3' onClick={cancelhandler}>cancel</button>
            <button type="button" className='btn btn-success me-3' onClick={SaveHandler}>save</button>
            <button type="button" className='btn btn-danger' onClick={DeleteHandler}>Delete</button>
             </div>
        </form>
    </div>
  )
}
export default EditProductForm