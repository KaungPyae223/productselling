import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { reducer } from "./reducer.js";

export const contextList = createContext();
export const StateContextProvider = ({ children }) => {
  const [productlist, setproductlist] = useState({});
  const [SelectedCategory, setSelectedCategory] = useState("");
  const [ProductLoading, setProductLoading] = useState(true);
  const [Page, setPage] = useState(0);
  useEffect(() => {
    setProductLoading(true);
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const api = await fetch(
      `https://dummyjson.com/products?limit=28&skip=${28 * Page}`,
    );
    const data = await api.json();
    setproductlist(data);
    setProductLoading(false);
  };

  useEffect(() => {
    setProductLoading(true);
    SelectedCategory ? fetchdatabyCategory() : fetchdata();
  }, [SelectedCategory, Page]);
  const fetchdatabyCategory = async () => {
    const api = await fetch(
      `https://dummyjson.com/products/category/${SelectedCategory}`,
    );
    const data = await api.json();
    setproductlist(data);
    setProductLoading(false);
  };

  const initialstate = {
    total: [],
    items: [],
    craft: [],
  };

  const [state, dispatch] = useReducer(reducer, initialstate);
  useEffect(() => {
    productlist?.products
      ? (dispatch({ type: "getProduct", payload: productlist?.products }),
        dispatch({
          type: "getPagination",
          payload: productlist?.total,
        }))
      : null;
  }, [productlist]);
  const data = {
    state,
    SelectedCategory,
    setSelectedCategory,
    ProductLoading,
    setPage,
    Page,
  };
  return <contextList.Provider value={data}>{children}</contextList.Provider>;
};
export const createcontextCustom = () => useContext(contextList);
