import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addToCart } from "../slices/cartSlice";
import { useGetAllProductsQuery } from "../slices/productsApi";
import axios from "axios";

const Home = () => {
  const { items: products, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const history = useNavigate();

  const { data, error, isLoading } = useGetAllProductsQuery();
  console.log("Api", isLoading);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    console.log(product)
    addToCart2(product);
    history("/home/cart");
  };

  function addToCart2(product) {
    axios
      .post("http://10.8.10.149:3000/cart/addItem", {
        _id: product.id,
        name: product.name,
        // userid: response.data.data[0],
        price: product.price,
        image:product.image,
        
        // add any other product data you need to send
      })
      .then((response) => {
        console.log(response.data);
        // handle success, e.g. show a success message
      })
      .catch((error) => {
        console.log(error);
        // handle error, e.g. show an error message
      });
  }

  return (
    <div className="home-container">
      {status === "success" ? (
        <>
          <h2>New Arrivals</h2>
          <div className="products">
            {data &&
              data?.map((product) => (
                <div key={product.id} className="product">
                  <h3>{product.name}</h3>
                  <img src={product.image} alt={product.name} />
                  <div className="details">
                    <span>{product.desc}</span>
                    <span className="price">${product.price}</span>
                  </div>
                  <button onClick={() => handleAddToCart(product)}>
                    Add To Cart
                  </button>
                </div>
              ))}
          </div>
        </>
      ) : status === "pending" ? (
        <p>Loading...</p>
      ) : (
        <p>Unexpected error occured...</p>
      )}
    </div>
  );
};

export default Home;
