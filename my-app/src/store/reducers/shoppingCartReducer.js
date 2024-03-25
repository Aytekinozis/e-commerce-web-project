const initialState = {
  cart: [
    {
      count: 1,
      checked: true,
      product: {
        id: 3,
        name: "Beyaz %100 Pamuk",
        description:
          "Beyaz %100 Pamuk Regular/Normal Kalıp Basic V Yaka Uzun Kollu Örme T-Shirt TWOAW21TS0099",
        price: 140.99,
        stock: 80,
        store_id: 1,
        category_id: 1,
        rating: 1.39,
        sell_count: 48,
        images: [
          {
            url: "https://cdn.dsmcdn.com/ty155/product/media/images/20210806/13/116221695/81629339/1/1_org_zoom.jpg",
            index: 0,
          },
        ],
      },
    },
  ],
  payment: {},
  address: {},
};

export const SET_CART = "SET_CART";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      const productIndex = state.cart.findIndex(
        (product) => product.product.id === action.payload.id
      );

      if (productIndex >= 0) {
        const updatedCart = [...state.cart];
        updatedCart[productIndex].count++;
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        return {
          ...state,
          cart: [
            ...state.cart,
            { count: 1, checked: true, product: { ...action.payload } },
          ],
        };
      }
    case REMOVE_PRODUCT:
      const removedProductIndex = state.cart.findIndex(
        (product) => product.product.id === action.payload.id
      );

      const remainingCart = state.cart.filter(
        (product) => product.product.id !== action.payload
      );
      return {
        ...state,
        cart: remainingCart,
      };

    case SET_PAYMENT:
      return {
        ...state,
        payment: action.payload,
      };
    case SET_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };

    default:
      return state;
  }
};
