import React, {useEffect} from 'react';
import axios, { Axios } from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {setproducts} from '../redux/action/productActioin'
import ProductComponent from './productComponent'

const ProductListing = () => {
  const products = useSelector((state) =>state);
  const dispatch = useDispatch();
  // console.log(products);

  const fetchproduct = async () =>{
    const response = await axios.get('https://fakestoreapi.com/products').catch((err) =>{
      console.log("err",err);
      
    });
    dispatch(setproducts(response.data));
    
  };
  useEffect(()=>{
    fetchproduct()
  });
  // console.log('products: ', products);
  
  return (
    <div className='ui grid container'>
      <ProductComponent/>  
    </div>
  )
}

export default ProductListing
