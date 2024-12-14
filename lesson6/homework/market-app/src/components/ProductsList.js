import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct, toggleAvailable } from '../actions/productsActions';
import { FilterContext } from '../contexts/FilterContext';
import withFilter from '../hoc/withFilter';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const ProductsList = () => {
    //получаем список задач из Redux хранилища
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    const { filter } = useContext(FilterContext);

    //Применяем фильтр к продуктам
    const filteredProducts = withFilter(products, filter);

    const handleToggleAvailable = (id) => {
        //отправляем действие для изменения статуса задачи
        dispatch(toggleAvailable(id));
    };

    const handleDeleteProduct = (id) => {
        dispatch(deleteProduct(id));
    };

    return (
        <div className='list_box'>
        <h2>Список товаров</h2>
        <ul className='productsList'>
            {filteredProducts.map(product => (
                <li
                    key={product.id}
                    style={{ opacity: product.available ? '0.5' : '1' }}
                    className='product'
                >
                    <h4>Товар: {product.name}</h4>
                    <p>Описание: {product.description}</p>
                    <p>Цена: {product.price}</p>
                    <p>Контактный телефон: {product.numberphone}</p>
                    <p>Город: {product.city}</p>

                    <Stack spacing={2} direction="column">
                        <Button onClick={() => handleToggleAvailable(product.id)} variant="contained">Изменить доступность</Button>
                        <Button variant="outlined"><Link to={`/updateProduct/${product.id}`}>Редактировать товар</Link></Button>
                        <Button onClick={() => handleDeleteProduct(product.id)} variant="outlined" style={{color: 'red'}}>Удалить товар</Button>
                    </Stack>
                    {/* <button onClick={() => handleToggleAvailable(product.id)}>Изменить доступность</button> */}
                    {/* <button><Link to={`/updateProduct/${product.id}`}>Редактировать товар</Link></button> */}
                    {/* <button onClick={() => handleDeleteProduct(product.id)}>Удалить товар</button> */}
                </li>
            ))}
        </ul>
        </div>
    );
};

export default ProductsList;