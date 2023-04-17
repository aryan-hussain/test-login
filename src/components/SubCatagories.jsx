import React from "react";
// import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setId } from "../slices/idSlide";
import "../style/subcat.css"

const SubCatagories = () => {

  const id = useSelector((state) => state.id);
  console.log(id);

  const dispatch = useDispatch();
  const history = useNavigate();

  const { data, loading, error } = useFetch(
    `http://10.8.10.40:5000/subCategory/getSubCategory?category_id=${id}`
  );
  

  function handlevb(item){

    let category_id=item._id;
    console.log(category_id)
    dispatch(setId(category_id))
    history("/home/products/subCategory/products");
    
  }

  console.log(data);
  return (
    <>
      <section id="subCategory">
        <div className="container">
          <div className="subCategory">
            <div className="heading">
              <h2
                style={{
                  fontSize: "27px",
                  fontWeight: "800",
                  padding: "15px 0",
                  color: "white",
                  fontFamily: "sans-serif",
                }}
              >
                Shop by Catagory
              </h2>
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
                        <img src={item.image} alt={item.image} />
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

export default SubCatagories;
