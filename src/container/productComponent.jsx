import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const ProductComponent = () => {
  const products = useSelector((state) => state.allproducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className=" mt-20 items-center justify-center border h-[24em] grid hover:translate-y-6 duration-500 "  key={id}>
        <Link to={`/product/${id}`}>
        <div className="bg-slate-200 w-36 relative ml-20 overflow-x-hidden ">
          <img src={image} alt={title} className=' grid items-center justify-center transition-all duration-200' />
        </div>
        <div className="bg-slate-100 bg-opacity-30 w-[16.5em] h-[8em] p-1 ">
          <div className="font-bold">{title}</div>
          <div className="text-gray-600">${price}</div>
          <div className="text-sm text-gray-500">{category}</div>
        </div>
        </Link>
      </div>
    );
  });

  return (
    <div className=" duration-300 items-center justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-10">
      {renderList}
    </div>
  );
};

export default ProductComponent;
