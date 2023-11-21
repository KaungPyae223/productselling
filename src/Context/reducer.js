export const reducer = (state, action) => {
  switch (action.type) {
    case "getProduct":
      return { ...state, items: action.payload };
    default:
      return null;
  }
};
