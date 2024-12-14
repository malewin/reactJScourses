import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from '../actions/productsActions';

const AddProduct = () => {
    //Локальное состояние для текста новой задачи
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [numberphone, setNumberphone] = useState('');
    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    const handleAddProduct = () => {
        //Отправляем действие для добавления новой задачи
        dispatch(addProduct(name, description, price, numberphone, city));
        setName('');
        setDescription('');
        setPrice('');
        setNumberphone('');
        setCity('');
    };

    return (
        <div className="addProduct">
            <h2>Добавьте свой товар</h2>
            <input
                type="text"
                placeholder="Название продукта"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Описание продукта"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="text"
                placeholder="Цена продукта"
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
            <button onClick={handleAddProduct}>Добавить товар</button>
        </div>
    );
};

export default AddProduct;