import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedproduct, removeSelectedproduct } from '../redux/action/productActioin';

const ProductDetails = () => {
  const product = useSelector((state) =>state.product)
  const { image, title, price, category, description } = product;
  const { productId} = useParams();
  const dispatch = useDispatch();
  // console.log(productId);

  const fetchproductDetail = async() =>{
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
    .catch((err) =>{
      console.log("err", err);
      
    });

    dispatch(selectedproduct(response.data))
  }
  useEffect(() =>{
    if (productId && productId !=="") fetchproductDetail();
    return () =>{
      dispatch(removeSelectedproduct());
    }
  }, [productId])
  
  return (
    <div className=''>
      {Object.keys(product).length === 0 ?(
        <div>...loading</div>
      ) : (
        <div className=' flex justify-center mt-12'>
          <div className=' flex justify-between mt-6'>
            <div>AND</div>
            <div className=' flex justify-between space-x-10'>
              <div className=' border w-64'>
                <img src={image} alt="bag/img" className='' />
              </div>
              <div className=' border w-[22em] p-5 space-y-3'>
                <h1 className='font-bold'>{title}</h1>
                <h2><a className=' bg-teal-600 p-1 lukako text-2xl font-bold text-white'>${price}</a></h2>
                <h3 className=' bg-slate-200 p-2 '>{category}</h3>
                <p className='text-sm'>{description}</p>
                <div className='' tabIndex="0">
                  <div className=''>
                    <i className='shop icon'></i>
                  </div>
                  <div className=' bg-red-600 p-1 lukako text-xl 
                  font-bold text-white w-40 addtocart'><Link to="/cart">Add to Cart</Link></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )
    }      
    </div>
  )
}

export default ProductDetails
