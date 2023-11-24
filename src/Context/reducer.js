export const reducer = (state, action) => {
  switch (action.type) {
    case "getProduct":
      return { ...state, items: action.payload };
    case "getPagination":
      return { ...state, total: action.payload };
    case "addCraft":
      return { ...state, craft: [...state.craft, action.payload] };
    case "modifyQty":
      return {
        ...state,
        craft: state.craft.map((el) =>
          el.id === action.id ? { ...el, Quantity: action.payload } : el,
        ),
      };
    case "removeCraft":
      return {
        ...state,
        craft: state.craft.filter((el) => el.id !== action.id),
      };
    default:
      return null;
  }
};
