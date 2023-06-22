import {
  ADD_TO_CART,
  ADD_PRODUCTS,
  SEE_DETAIL,
  DELETE_PRODUCT,
  REMOVE_FROM_CART,
} from "../actionTypes/productActionType";

const initialState = {
  products: [
    {
      counter: 0,
      price: 8,
      count:1,
      id: 1,
      title: "coffee capsules",
      description: "roasted ground coffee",
      posterURL:
        "https://glamadelaide.com.au/wp-content/uploads/2020/11/s-coffee-capsule.jpg",
      rating: "90%",
      trailer: "https://www.youtube.com/watch?v=KPLWWIOCOOQ",
    },

    {
      counter: 0,
      price: 7.5,
      count:1,
      id: 2,
      title: "starbucks coffee",
      description: "roasted coffee",
      posterURL:"https://athome.starbucks.com/sites/default/files/styles/story_cards_desktop/public/2022-05/CAH_SBX_CoffeeQuiz_Hdr_NEWpacks.jpg?itok=rW01s481",
      rating: "100%",
      trailer: "https://www.youtube.com/watch?v=KPLWWIOCOOQ",
    },
    {
      counter: 0,
      price: 12,
      count:1,
      id: 3,
      title: "nespresso coffe",
      description: "roasted coffee",
      posterURL:
        "https://static1.squarespace.com/static/5f8cdeb46f25aa7caf3119e2/60ada0cdff6e0a40a5844fdc/60ada0cdff6e0a40a5844fed/1637539793503/IMG_8478-Edit.jpg?format=1500w",
      rating: "100%",
      trailer: "https://www.youtube.com/watch?v=KPLWWIOCOOQ",
    },
    {
      counter: 0,
      price: 15,
      count:1,
      id: 4,
      title: "americano coffe",
      description: "capsules",
      posterURL:
        "https://www.packagingstrategies.com/ext/resources/2022/06/01/Starbucks-Coffee-at-Home-New-Packaging_Knockout-Image.jpg?1654095180",
      rating: "100%",
      trailer: "https://www.youtube.com/watch?v=KPLWWIOCOOQ",
    },
    {
      counter: 0,
      price: 50,
      count:1,
      id: 5,
      title: "coffee maker",
      description: "machinery",
      posterURL:
        "https://stories.starbucks.com/uploads/2022/08/SBX2022-Packaging-Refresh-Fact-Sheet-FeatureHorizontal-600x600.jpg",
      rating: "100%",
      trailer: "https://www.youtube.com/watch?v=KPLWWIOCOOQ",
    },
    {
      counter: 0,
      price: 75,
      count:1,
      id: 6,
      title: "starbucks coffe maker",
      description: "machinery",
      posterURL:
        "https://athome.starbucks.com/sites/default/files/styles/story_banner_xlarge/public/2022-02/CAH_VertuoMachine_Header_2880x1660.jpg?h=cf77c377&itok=_-YCCJPx",
      rating: "100%",
      trailer: "https://www.youtube.com/watch?v=KPLWWIOCOOQ",
    },
    {
      counter: 0,
      price: 22.5,
      count:1,
      id: 7,
      title: "starbucks brzilian coffee",
      description: "  finest coffee",
      posterURL:
        "https://stories.starbucks.com/uploads/2022/08/Veranda-Blend-1024x677.png",
      rating: "100%",
      trailer: "https://www.youtube.com/watch?v=KPLWWIOCOOQ",
    },
    {
      counter: 0,
      price: 7.5,
      count:1,
      id: 8,
      title: "roasted coffee",
      description: "coffee",
      posterURL:
        "https://stories.starbucks.com/uploads/2022/08/Sumatra-1024x700.png",
      rating: "100%",
      trailer: "https://www.youtube.com/watch?v=KPLWWIOCOOQ",
    },
    {
      counter: 0,
      price: 25,
      count:1,
      id: 9,
      title: "romanian coffee",
      description: "coffee",
      posterURL:
        "https://www.nestle.com/sites/default/files/styles/brand_image_489_x_275_/public/2021-09/starbucks-packs3.jpg?h=508231ee&itok=6xUMngMo",
      rating: "100%",
      trailer: "https://www.youtube.com/watch?v=KPLWWIOCOOQ",
    },
  ],
};

const otherState = {
  cartItems: [
    {
      counter: 0,
      posterURL:
      "https://img.tatacliq.com/images/i10/658Wx734H/MP000000009706394_658Wx734H_202303141947421.jpeg",
      id: 1,
      title: "add your movies here",
      description: "emty",
      rating: "90%",
      trailer: "https://www.youtube.com/watch?v=KPLWWIOCOOQ",
    },
  ],
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case SEE_DETAIL:
      return {
        ...state,
        products: state.products.find(
          (product) => product.id === parseInt(action.payload)
        ),
      };
    case DELETE_PRODUCT:
      const updatedProduct = state.products.filter(
        (product) => product.id !== parseInt(action.payload)
      );
      console.log(updatedProduct);
      return {
        ...state,
        products: updatedProduct,
      };

    default:
      return state;
  }
};
export const cartReducer = (state = otherState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // check if item already exists in cart
      const existingCartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      console.log(action.payload);

      if (existingCartItem) {
        // if item already exists in cart, update its quantity
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // if item does not exist in cart, add it
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }
    case REMOVE_FROM_CART:
      const updatedProduct = state.cartItems.filter(
        (product) => product.id !== parseInt(action.payload)
      );
      console.log(updatedProduct);
      return {
        ...state,
        cartItems: updatedProduct,
      };
    default:
      return state;
  }
};
