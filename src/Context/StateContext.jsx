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
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const api = await fetch("https://dummyjson.com/products");
    const data = await api.json();
    setproductlist(data.products);
  };

  const [productlist, setproductlist] = useState([]);

  const initialstate = {
    items: [],
    craft: [],
  };

  const [state, dispatch] = useReducer(reducer, initialstate);

  useEffect(() => {
    dispatch({ type: "getProduct", payload: productlist });
  }, [productlist]);
  const data = { state };
  return <contextList.Provider value={data}>{children}</contextList.Provider>;
};
export const createcontextCustom = () => useContext(contextList);
