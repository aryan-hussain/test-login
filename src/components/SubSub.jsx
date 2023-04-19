import React from "react";
import useFetch from "../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setId } from "../slices/idSlide";
import "../style/SubSub.css";
import { addToCart } from "../slices/cartSlice";
import axios from "axios";
import { useAddToCartMutation } from "../slices/postAddToCart.ts";

const SubSub = () => {
  const id = useSelector((state) => state.id);
  console.log(id);

  const [addToCartMutation] = useAddToCartMutation();

  const dispatch = useDispatch();
  const history = useNavigate();

  const token = localStorage.getItem("token")

  function addToCart2(product) {
    console.log(token)
    axios
      .post("http://10.8.10.40:5000/addcart/addCart",  {
        
        product_id: product._id,
        name: product.name,
        price: product.price,
        image: product.image,
        
      },{
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        console.log(response.data);
        
      })
      .catch((error) => {
        console.log(error);
        
      });
  }

  const handleAddToCart = async (product) => {
    
    console.log("subsub 49",product);
    
    try {
      await addToCartMutation({ product });
    } catch (error) {
      console.log(error);
    }
    dispatch(addToCart(product));
    
    // addToCart2(product);
    history("/home/cart");
  };

  const { data, loading, error } = useFetch(
    `http://10.8.10.40:5000/product/getProductsByCategory?subcategory_id=${id}`
  );

  console.log(data);

  return (
    <>
      <section id="SubSub">
        <div className="container">
          <div className="SubSub d-f">
            {data?.map((item) => (
              <div key={item.id} className="subsubItem">
                <div className="ssname">
                  <h5>{item.name}</h5>
                </div>
                <div className="ssIandBwrap">
                  <div className="ssImage">
                    <img src={item.image} alt={item.image} />
                  </div>
                  <div className="ssbrand">
                    <h6>{item.brand}</h6>
                  </div>
                </div>
                <div className="ssDesc">
                  <p>{item.desc}</p>
                </div>
                <div className="ssprice d-f">
                  <p>Price: {item.price}₹</p>
                  <button onClick={() => handleAddToCart(item)}>
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SubSub;
