import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from "react-router-dom";
import Layout from './components/Layout';
import { ProductDetail } from "./pages/ProductDetail";
import ProductImages from "./pages/ProductImages";
import ProductPrice from "./pages/ProductPrice";
import SingleDetail from "./pages/SingleDetail";
import { Product } from "./models/product.model";
import Products from './pages/Products';
import { productActions, RootState } from "./store/store";
import EditProductForm from "./components/EditProductForm";
import CreateProduct from "./components/CreateProduct";
import uuid from "react-uuid";



const router=createBrowserRouter(
  createRoutesFromElements(
     <Route path='/' element={<Layout/>}>
      <Route index element={<Products/>}/>
      <Route path="/products/:id" element={<ProductDetail/>}>
         <Route index element={<SingleDetail/>}/>
         <Route path="price" element={<ProductPrice/>}/>
         <Route path="images" element={<ProductImages/>}/>
      </Route>
      <Route path="/editProduct/:id" element={<EditProductForm/>}/>
      <Route path="/createProduct" element={<CreateProduct/>}/>
     </Route>
  )
)


function App() {
  return (
    <RouterProvider router={router}/>
  );
}



export default App;
