import {
  ADD_PRODUCT,
  DEL_PRODUCT,
  DEL_ALL_PRODUCTS,
} from "../actions/productActions";

import { v4 as uuidv4 } from "uuid";

const initialState = () => {
  // Загружаем список продуктов из localStorage, если он существует
  const savedProducts = localStorage.getItem("products");
  return savedProducts ? JSON.parse(savedProducts) : []; // Если есть данные, то парсим их, иначе возвращаем пустой массив
};

const productsReducer = (state = initialState(), action) => {
  let newState;

  switch (action.type) {
    case ADD_PRODUCT:
      newState = [
        ...state,
        {
          id: uuidv4(),
          title: action.payload.title,
          imgName: action.payload.imgName,
          description: action.payload.description,
          price: action.payload.price,
          color: action.payload.color,
          size: action.payload.size,
        },
      ];
      console.log("продукт добавлен в state");
      break;

    case DEL_PRODUCT:
      newState = state.filter((product) => product.id !== action.payload.id);
      break;

    case DEL_ALL_PRODUCTS:
      newState = [];
      break;

    default:
      return state;
  }

  // Сохраняем новое состояние в localStorage
  localStorage.setItem("products", JSON.stringify(newState));
  return newState;
};

export default productsReducer;
