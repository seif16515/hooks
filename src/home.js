import { useState } from "react";
import CardList from "./components/cardList";
import { movies } from "./data/movies";
import Counter from "./components/counter";
 const HomePage = () => {
  const [productsList, setProductsList] = useState(movies);
  const [search, setSearch] = useState('')
  const [newProduct, setNewProduct] = useState({
    title: "",
    rating: 0,
    description: "",
    Date : "",
    img: "",
  });
  const handleChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    })
}
  const addProduct = (newProduct) => {
    setProductsList([...productsList,
    {
      id: productsList.length + 1,
      ...newProduct
    }
    ])
  }
  const deleteProduct = (id) => {
    setProductsList(productsList.filter((product) => product.id !== id))
  }
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    
    <div>
      <div style={{paddingLeft:"45%"}}>
      <input type="text" placeholder="Search"
        onChange={handleSearch} />
        </div>
      <br></br>
      <br></br>
      <br></br>
      <CardList data={productsList}
        deleteProduct={deleteProduct}
        search={search}
      />
      <br/>
      <div style={{paddingTop:"50px",alignItems:"center",display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
      <label>title:</label>
      <input type="text"
        name="title"
        onChange={handleChange}
      />
      <label>Date:</label>
      <input type="text"
        name="Date"
        onChange={handleChange}
      />
      <label>rating:</label>
      <input type="number"
        name="rating"
        onChange={handleChange}

      />
      <label>Image:</label>
      <input type="text"
        name="img"
        onChange={handleChange}

      />
      <label>Description:</label>
      <textarea
        name="description"
        onChange={handleChange}

      />
      <button onClick={() => addProduct(newProduct)}>Add Product</button>
      </div>
    </div>
  );
};
export default HomePage
