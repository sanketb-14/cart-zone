import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams ,Link } from "react-router-dom";
import { fetchProducts } from "../redux/reducers";
import {FaStar,FaShoppingCart} from 'react-icons/fa'
import {BiArrowBack} from 'react-icons/bi'
import {setAddToCart} from '../redux/reducers'


const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const singleProduct = useSelector((state) => state.products.items[id -1]);
  

  
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  const handleAddToCart = () => {
    dispatch(setAddToCart(singleProduct))
  }
   useEffect(() => {
     dispatch(fetchProducts(id));
   }, [dispatch, id]);


  if (loading) {
    return <div className="w-full flex justify-center items-center">
     
      <h1 className="text-4xl font-semibold">Loading.....</h1>
    </div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!singleProduct) {
    return <div>Product not found</div>;
  }
  
  const {image,title, rating,category,description,price} = singleProduct
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={image} className="max-w-sm rounded-lg shadow-2xl mx-16" alt={title}/>
        <div>
          <h1 className="text-5xl font-bold ">{title}</h1>
          <h3 className="text-xl mt-2 font-semibold text-secondary-focus">
            {category}
          </h3>
          <div className="btn btn-accent w-1/2 m-4 text-2xl shadow-xl font-bold text-neutral-focus">
            {" "}
            $ {price}
          </div>
          <div className="ml-2 flex  font-semibold text-accent truncate ">
            {" "}
            Rating :-
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`text-${
                  i < Math.ceil(rating.rate)
                    ? "orange-500 my-1"
                    : "accent-content my-1"
                } `}
              />
            ))}
          </div>
          <p className="py-6">{description}</p>
          <button className=" btn w-full border-none shadow-xl bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl inline-flex items-center truncate  justify-center" onClick={handleAddToCart}>
            <FaShoppingCart className="mr-2  " />
            Add to Cart
          </button>
          <Link
            to="/"
            className="btn btn-md btn-secondary w-1/4 mt-4 text-xl  "
          >
            <span className="mx-8 font-bold text-accent-content">
              <BiArrowBack />
            </span>
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
