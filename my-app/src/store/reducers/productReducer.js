export const FETCH_STATES = {
  NOT_FETCHED: "not fetched",
  FETCHING: "fetching",
  FETCHED: "fetched",
  FETCH_FAILED: "failed",
};
export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const SET_PRODUCT_COUNT = "SET_PRODUCT_COUNT";
export const SET_PAGE_COUNT = "SET_PAGE_COUNT";
export const SET_ACTIVE_PAGE = "SET_ACTIVE_PAGE";
export const SET_FETCH_STATE = "SET_FETCH_STATE";

const initialState = {
  productList: [],
  pcount: 0,
  pageCount: 0,
  activePage: 1,
  fetchState: FETCH_STATES.NOT_FETCHED,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      return {
        ...state,
        productList: action.payload,
      };
    case SET_PRODUCT_COUNT:
      return {
        ...state,
        pcount: action.payload,
      };
    case SET_PAGE_COUNT:
      return {
        ...state,
        pageCount: action.payload,
      };
    case SET_ACTIVE_PAGE:
      return {
        ...state,
        activePage: action.payload,
      };
    case SET_FETCH_STATE:
      return {
        ...state,
        fetchState: action.payload,
      };
    default:
      return state;
  }
};
