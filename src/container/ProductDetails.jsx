import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
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
        <div>
          <div>
            <div>AND</div>
            <div className=''>
              <div className=''>
                <img src={image} alt="" />
              </div>
              <div className=''>
                <h1>{title}</h1>
                <h2><a className=''>${price}</a></h2>
                <h3>{category}</h3>
                <p>{description}</p>
                <div className='' tabIndex="0">
                  <div className=''>
                    <i className='shop icon'></i>
                  </div>
                  <div className=''>Add to Cart</div>
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
