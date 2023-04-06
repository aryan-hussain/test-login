import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addToCart } from "../slices/cartSlice";
import { useGetAllProductsQuery } from "../slices/productsApi";
import axios from "axios";

const Home = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const { data, error, isLoading } = useGetAllProductsQuery();
  console.log("Api", isLoading);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    console.log(product);
    addToCart2(product);
    history("/home/cart");
  };

  function addToCart2(product) {
    axios
      .post("http://10.8.10.149:3000/cart/addItem", {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      })
      .then((response) => {
        console.log(response.data);
        
      })
      .catch((error) => {
        console.log(error);
        
      });
  }

  return (
    <div className="home-container">
      {"success" ? (
        <>
          <h2>Today's Deals</h2>
          <div className="products">
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
                    <button onClick={() => handleAddToCart(product)}>
                      Add To Cart
                    </button>
                  </div>
                ))}
          </div>
        </>
      ) : "pending" ? (
        <p>Loading...</p>
      ) : (
        <p>Unexpected error occured...</p>
      )}
    </div>
  );
};

export default Home;
