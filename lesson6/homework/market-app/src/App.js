import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import MarketApp from './components/MarketApp';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import UpdateProduct from './components/UpdateProduct';

const App = () => {

//   Разработать приложение для управления каталогом продуктов, позволяющее добавлять, удалять, отображать и редактировать продукты.

// Настройка Redux Store:

// Используйте configureStore из @reduxjs/toolkit для создания хранилища.
// Определите начальное состояние и создайте слайс с использованием createSlice для продуктов. Каждый продукт должен иметь id, name, description, price, и available.

// В слайсе определите редьюсеры и действия для добавления нового продукта, удаления продукта по ID, обновления продукта и изменения его доступности.


// Компоненты React:

// Компонент для добавления продукта:
// Создайте форму, позволяющую пользователям вводить данные нового продукта (имя, описание, цена, доступность) и добавлять его в каталог.

// Компонент для отображения продуктов:
// Разработайте компонент, который отображает список всех продуктов с их атрибутами, а также кнопки для удаления продукта из каталога и переключения его доступности.

// Компонент для редактирования продукта:
// Опционально, предоставьте возможность редактирования существующих продуктов, чтобы можно было изменять их имя, описание, цену и доступность.
  return (
    <Router>
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<MarketApp />} />
        <Route path='/updateProduct/:id' element={<UpdateProduct />} />
      </Routes>
    </Provider>
    </Router>
  );
};

export default App;
