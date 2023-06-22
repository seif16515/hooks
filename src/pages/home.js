import { useState } from "react";
import ButtonAppBar from "../components/appBar";
import { useSelector } from "react-redux";
import { addProduct } from "../redux/actions/productActions";
import "./input.css";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../redux/actions/productActions";
import FilmCard from "../components/card";
import { addToCart } from "../redux/actions/productActions";
import Footer from "../components/footer";
import AddForm from "../components/addForm";

const HomePage = () => {
  // const [productsList, setProductsList] = useState([]);
  const [search, setSearch] = useState("");
  const { status } = useSelector((state) => state.user);
  const { username } = useSelector((state) => state.user.currentuser);
  const { prop } = useSelector((state) => state.user.currentuser);
  const [newProduct, setNewProduct] = useState({
    title: "",
    rating: 0,
    description: "",
    Date: "",
    img: "",
  });
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  console.log(products);

  // useEffect(() => {
  //   setProductsList(products);
  // }, [products]);

  const handleChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };
  // const addProduct = (newProduct) => {
  //   setProductsList([
  //     ...productsList,
  //     {
  //       id: productsList.length + 1,
  //       ...newProduct,
  //     },
  //   ]);
  //   // console.log(filteredData);
  // };
  // const filteredData = productsList.filter((item) => {
  //   return (
  //     item.title.toLowerCase().includes(search.toLowerCase()) ||
  //     item.rating.toString().includes(search)
  //   );
  // });
  const deleteProducts = (id) => {
    dispatch(deleteProduct(id));
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <div style={{ paddingLeft: "42%" }}>
        <input
          placeholder="Enter your text..."
          className="input"
          name="text"
          type="text"
          onChange={handleSearch}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {products
          .filter((item) => {
            return (
              item.title.toLowerCase().includes(search.toLowerCase()) ||
              item.rating.toString().includes(search)
            );
          })
          .map((product) => {
            return (
              <div>
                <FilmCard
                  Counter={product.Counter}
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  description={product.description}
                  img={product.posterURL}
                  rating={product.rating}
                  price={product.price}
                  btnText="see detail"
                />
                <button
                  className="ui-btn"
                  onClick={() => dispatch(addToCart(product))}
                >
                  <span>ADD to CART</span>
                </button>
              </div>
            );
          })}
      </div>

      <br />
      {prop === "admin" ? (
        <div>
          <div
            style={{
              paddingTop: "50px",
              alignItems: "center",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <label>title:</label>
            <input type="text" name="title" onChange={handleChange} />
            <label>Date:</label>
            <input type="date" name="Date" onChange={handleChange} />
            <label>rating:</label>
            <input type="number" name="rating" onChange={handleChange} />
            <label>Image:</label>
            <input type="text" name="img" onChange={handleChange} />
            <label>Description:</label>
            <textarea name="description" onChange={handleChange} />
            <button onClick={() => dispatch(addProduct(newProduct))}>
              Add
            </button>
            {/* <button onClick={() => addProduct(newProduct)}>Add Product</button> */}
          </div>
          <button>click here</button>
        </div>
      ) : null}
      <Footer></Footer> 
    </div>
  );
};
export default HomePage;
