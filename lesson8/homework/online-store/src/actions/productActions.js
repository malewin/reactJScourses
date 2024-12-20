export const ADD_PRODUCT = "ADD_PRODUCT";
export const DEL_PRODUCT = "DEL_PRODUCT";
export const DEL_ALL_PRODUCTS = "DEL_ALL_PRODUCTS";

export const addProduct = (
  title,
  imgName,
  description,
  price,
  color,
  size
) => ({
  type: ADD_PRODUCT,
  payload: { title, imgName, description, price, color, size },
});

export const delProduct = (id) => ({
  type: DEL_PRODUCT,
  payload: { id },
});

export const delAllProducts = () => ({
  type: DEL_ALL_PRODUCTS,
});
