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
  const [Search, setSearch] = useState("");
  const [CraftOpen, setCraftOpen] = useState(false);
  const [MainTotal, setMainTotal] = useState(0);

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
  };

  // Search Item with api

  useEffect(() => {
    setProductLoading(true);
    Search === "" ? fetchdata() : fetchdatabySearch();
  }, [Search]);
  const fetchdatabySearch = async () => {
    const api = await fetch(
      `https://dummyjson.com/products/search?q=${Search}`,
    );
    const data = await api.json();
    setproductlist(data);
  };

  const initialstate = {
    total: [],
    items: [],
    craft: [],
  };

  const [state, dispatch] = useReducer(reducer, initialstate);

  const AddData = () => {
    dispatch({ type: "getProduct", payload: productlist?.products });
    dispatch({
      type: "getPagination",
      payload: productlist?.total,
    });
    setProductLoading(false);
  };
  useEffect(() => {
    productlist.products ? AddData() : null;
  }, [productlist]);
  const data = {
    state,
    SelectedCategory,
    setSelectedCategory,
    ProductLoading,
    setPage,
    Page,
    Search,
    setSearch,
    dispatch,
    CraftOpen,
    setCraftOpen,
    MainTotal,
    setMainTotal,
  };
  return <contextList.Provider value={data}>{children}</contextList.Provider>;
};
export const createcontextCustom = () => useContext(contextList);
