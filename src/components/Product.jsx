import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addToCart } from "../slices/cartSlice";
import { useGetAllCatagoryQuery } from "../slices/catagoryApi";
import axios from "axios";
import { setProducts, fetchProducts } from "../slices/itemsApi";
import useFetch from "../hooks/useFetch";
import "../style/product.css";
import { setId } from "../slices/idSlide";

const Product = () => {
  
  const dispatch = useDispatch();








  const history = useNavigate();

  const { data, loading, error } = useFetch(
    `http://10.8.10.40:5000/category/getCategory`
  );

  const [value, setValue] = useState(null);

  function handlevb(item){
    let category_id=item._id;
    console.log(category_id)
    dispatch(setId(category_id))
    history("/home/products/subCategory");
  }

  return (
    <>
      <section id="pproduct">
        <div className="container">
          <div className="pproduct">
            <div className="heading">
              <h2>Shop by Catagory</h2>
            </div>
            <div className="ShopcatWrapper">
              {data?.map((item) => (
                <div className="ShopcatItem" key={item.id}>
                  
                    <div className="product-items">
                      <div className="pi-l">
                        <div className="pi-l-inner">
                          <h4>{item.title}</h4>
                          <button onClick={()=>handlevb(item)}>VIEW ALL</button>
                        </div>
                        <div className="pi-l-img">
                          <img src={item.image} alt="" />
                        </div>
                      </div>
                      <div className="pi-r">
                        <ul></ul>
                      </div>
                    </div>
                  
                </div>
              ))}
            </div>
              
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
