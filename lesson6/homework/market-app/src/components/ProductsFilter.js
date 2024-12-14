import React, { useContext} from "react";
import { FilterContext } from '../contexts/FilterContext';

const ProductsFilter = () => {
    const { filter, setFilter } = useContext(FilterContext); // Получаем filter и setFilter из контекста
    
    const handleChange = (e) => {
        //устанавливаем выбранный фильтр
        setFilter(e.target.value);
    };

    return (
        <div className="filterProducts">
            <h2>Фильтр продуктов</h2>
            <select value={filter} onChange={handleChange}>
                <option value='all'>Все</option>
                <option value='available'>Доступные</option>
                <option value='notavailable'>Не доступные</option>
            </select>
        </div>
    );
};

export default ProductsFilter;