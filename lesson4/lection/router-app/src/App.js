import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import ArticleDetail from './components/ArticleDetail';
// import ArticleList from './components/ArticleList';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';


const articles = [
  {id:1, title: 'Статья 1', content: 'Содерживое статьи 1'},
  {id:2, title: 'Статья 2', content: 'Содерживое статьи 2'},
  {id:3, title: 'Статья 3', content: 'Содерживое статьи 3'},
];

const products = [
  { id:1, name: 'Товар 1', description: 'Описание товара 1', price: '100 рублей'},
  { id:2, name: 'Товар 2', description: 'Описание товара 2', price: '200 рублей'},
  { id:3, name: 'Товар 3', description: 'Описание товара 3', price: '300 рублей'},
  { id:4, name: 'Товар 4', description: 'Описание товара 4', price: '400 рублей'},
  { id:5, name: 'Товар 5', description: 'Описание товара 5', price: '500 рублей'},
  { id:6, name: 'Товар 6', description: 'Описание товара 6', price: '600 рублей'},
  { id:7, name: 'Товар 7', description: 'Описание товара 7', price: '700 рублей'},
  { id:8, name: 'Товар 8', description: 'Описание товара 8', price: '800 рублей'},
  { id:9, name: 'Товар 9', description: 'Описание товара 9', price: '900 рублей'},
];

const App = () => {
  return (
  <Router>
    <div>
      <h1>Приложение для просмотра статей</h1>
      <Routes>
        {/* <Route path="/articles/:id" element={<ArticleDetail articles={articles} />} />
        <Route path="*" element={<ArticleList articles={articles} />} /> */}
        <Route path='/page/:pageNumber' element={<ProductList products={products} /> } />
        <Route path='/product/:productId' element={<ProductDetail products={products} /> } />
        <Route path='/' element={<ProductList products={products} /> } />
      </Routes>
    </div>
  </Router>
  )
}

export default App;
