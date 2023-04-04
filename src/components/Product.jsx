import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addToCart } from "../slices/cartSlice";
import { useGetAllCatagoryQuery } from "../slices/catagoryApi";
import axios from "axios";

const Product = () => {
  const { items: products, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const history = useNavigate();

  const { data, error, isLoading } = useGetAllCatagoryQuery();
  console.log("Api", isLoading);

  return (
    <>
      <section id="product">
        <div className="container">
          <div className="product">
            <div className="heading">
              <h2>Shop by Catagory</h2>
            </div>
            <div className="homeDecor">
              <div className="product-items">
                <div className="pi-l">
                  <h4>Home Decor and more</h4>
                  <button>VIEW ALL</button>
                </div>
                <div className="pi-r">
                  <ul>
                    {data &&
                      data?.map((product) => (
                        <div key={product.id} className="product">
                          <h3>{product.name}</h3>
                          <img src={product.image} alt={product.name} />
                          <div className="details">
                            <span
                              style={{
                                overflow: "hidden",
                                height: "88px",
                                fontSize: "12px",
                              }}
                            >
                              {product.desc}
                            </span>
                            <span className="price">${product.price}</span>
                          </div>
                          
                        </div>
                      ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="Fashion">
              <div className="product-items">
                <div className="pi-l">
                  <h4>Home Decor and more</h4>
                  <button>VIEW ALL</button>
                </div>
                <div className="pi-r">
                  <ul></ul>
                </div>
              </div>
            </div>

            <div className="Grocery">
              <div className="product-items">
                <div className="pi-l">
                  <h4>Home Decor and more</h4>
                  <button>VIEW ALL</button>
                </div>
                <div className="pi-r">
                  <ul></ul>
                </div>
              </div>
            </div>

            <div className="Electronics">
              <div className="product-items">
                <div className="pi-l">
                  <h4>Home Decor and more</h4>
                  <button>VIEW ALL</button>
                </div>
                <div className="pi-r">
                  <ul></ul>
                </div>
              </div>
            </div>

            <div className="Beauty & Make up">
              <div className="product-items">
                <div className="pi-l">
                  <h4>Home Decor and more</h4>
                  <button>VIEW ALL</button>
                </div>
                <div className="pi-r">
                  <ul></ul>
                </div>
              </div>
            </div>

            <div className="Appliance">
              <div className="product-items">
                <div className="pi-l">
                  <h4>Home Decor and more</h4>
                  <button>VIEW ALL</button>
                </div>
                <div className="pi-r">
                  <ul></ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
