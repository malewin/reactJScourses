//Хранилище - это обьект, который содержит состояние приложения и предоставляет методы для его изменения
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../reducers/productsReducer';

//настройка redux хранилища с использованием todosReducer
const store = configureStore({
    reducer: {
        products: productsReducer,
    },
});

export default store;