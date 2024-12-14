import React, { useContext, useState } from "react";
import { FilterContext } from '../contexts/FilterContext';

const TodoFilter = () => {
    const { filter, setFilter } = useContext(FilterContext); // Получаем filter и setFilter из контекста
    
    const handleChange = (e) => {
        //устанавливаем выбранный фильтр
        setFilter(e.target.value);
    };

    return (
        <select value={filter} onChange={handleChange}>
            <option value='all'>Все</option>
            <option value='completed'>Выполненные</option>
            <option value='active'>Активные</option>
        </select>
    );
};

export default TodoFilter;