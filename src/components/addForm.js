import "./addForm.css";
import { addProduct } from "../redux/actions/productActions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const AddForm = () => {
    const dispatch = useDispatch();

  const [newProduct, setNewProduct] = useState({
    title: "",
    rating: 0,
    description: "",
    Date: "",
    img: "",
  });
  const handleChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div class="form-containeradd">
      <form class="formadd">
        <div class="form-groupadd">
          <label for="email">Product Name</label>
          <input type="text" name="title" onChange={handleChange} required="" />
        </div>
        <div class="form-groupadd">
          <label for="email">image url</label>
          <input
            type="text"
            id="email
          "
            name="img"
            onChange={handleChange}
            required=""
          />
        </div>
        <div class="form-groupadd">
          <label for="textarea">Your product Description</label>
          <textarea
            name="description"
            onChange={handleChange}
            id="textarea"
            rows="10"
            cols="50"
            required=""
          >
            {" "}
          </textarea>
        </div>
        <button
          class="form-submit-btn"
          onClick={() => dispatch(addProduct(newProduct))}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default AddForm;
