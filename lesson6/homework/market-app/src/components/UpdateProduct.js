import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { updateProduct } from "../actions/productsActions";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const UpdateProduct = () => {
    const { id } = useParams();  // Деструктурируем id правильно
    const product = useSelector(state => state.products.find(product => product.id === Number(id))); // Используем find для поиска продукта
    const dispatch = useDispatch();

    // локальное состояние
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [numberphone, setNumberphone] = useState('');
    const [city, setCity] = useState('');

    // Инициализируем локальные состояния значениями продукта
    useEffect(() => {
        if (product) {
            setName(product.name);
            setDescription(product.description);
            setPrice(product.price);
            setNumberphone(product.numberphone);
            setCity(product.city);
        }
    }, [product]);

    const handleUpdateProduct = () => {
        dispatch(updateProduct(Number(id), name, description, price, numberphone, city)); 
        alert('Данные обновлены!');
    }

    return (
        <div className="updateProduct">
            <h1>Отредактируйте товар</h1>
             <input
                type="text"
                placeholder="Название товара"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Описание товара"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="text"
                placeholder="Цена товара"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <input
                type="text"
                placeholder="Контактный телефон"
                value={numberphone}
                onChange={(e) => setNumberphone(e.target.value)}
            />
            <input
                type="text"
                placeholder="В каком городе?"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <Stack spacing={2} direction="column">
                <Button onClick={handleUpdateProduct} variant="contained">Применить изменения</Button>
                <Link to={'/'}><Button variant="outlined">На главную</Button></Link>
            </Stack>
        </div>
    );
};

export default UpdateProduct;
