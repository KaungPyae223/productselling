export const reducer = (state, action) => {
  switch (action.type) {
    case "getProduct":
      return { ...state, items: action.payload };
    case "getPagination":
      return { ...state, total: action.payload };
    default:
      return null;
  }
};
