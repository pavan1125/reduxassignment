import {createSlice,configureStore, PayloadAction} from "@reduxjs/toolkit"
import { AllProducts } from "../models/AllProducts.model"
import { Product } from "../models/product.model"
import {persistReducer,persistStore} from "redux-persist"
import storage from "redux-persist/lib/storage"
import thunk from "redux-thunk"
const initialState:AllProducts={
    products:[]
}

const persistConfig={
    key:"root",
    storage
}
const productSlice=createSlice({
    name:"products",
    initialState:initialState,
    reducers:{
           addProducts(state,action:PayloadAction<Product[]>){
            
             state.products=[...state.products,...action.payload]
                       },
           addProduct(state,action:PayloadAction<Product>){
            
            state.products.push(action.payload)
          },
          editProduct(state,action:PayloadAction<Product>){
              state.products=state.products.map((item)=>{
                  if(item.productId===action.payload.productId){
                    return {
                       ...item,
                       ...action.payload
                    }
                  }
                  return item
              })
          },
          deleteProduct(state,action:PayloadAction<string>){
               state.products=state.products.filter((item)=>item.productId!==action.payload)
          }
    },
    
})
const persistedReducer=persistReducer(persistConfig,productSlice.reducer)
const store=configureStore({reducer:{Products:persistedReducer},middleware:[thunk]})

export const productActions=productSlice.actions
export type RootState=ReturnType<typeof store.getState>

export default store
export const persistedStore=persistStore(store)