import React from "react";
import { useSelector } from "react-redux";
import NewFilmCard from "../components/newcard";
import { removeFromCart } from "../redux/actions/productActions";
import { useDispatch } from "react-redux";
import ButtonAppBar from "../components/appBar";
import { useState } from "react";
import { TotalPrice } from "../components/totalPrice";
import Footer from "../components/footer";
const Cart = () => {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  console.log(cartItems);
  const totalPrice = cartItems.reduce((cur, item) => {
    return cur + item.price;
  }, 0);
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {cartItems.map((product) => {
          return (
            <div key={product.id}>
              <NewFilmCard
                Count={product.Count}
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
                onClick={() => dispatch(removeFromCart(product.id))}
              >
                <span>REMOVE from CART</span>
              </button>
            </div>
          );
        })}
      </div>
      <div style={{ paddingLeft: "41%", paddingTop: 70 }}>
        <TotalPrice price={totalPrice}></TotalPrice>
      </div>
      <p style={{ fontFamily: "arial" }}></p>
      <Footer></Footer>
    </div>
  );
};
export default Cart;
