import React from "react";
import useFetch from "../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setId } from "../slices/idSlide";
import "../style/SubSub.css";
import { addToCart } from "../slices/cartSlice";

const SubSub = () => {
  const id = useSelector((state) => state.id);
  console.log(id);

  const dispatch = useDispatch();
  const history = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    console.log(product);
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
