import React from 'react';
import { FilterProvider } from '../contexts/FilterContext';
import AddProduct from './AddProduct';
import ProductsList from './ProductsList';
import ProductsFilter from './ProductsFilter';

const MarketApp = () => {
    return (
        <FilterProvider>
          <div className='marketApp'> 
            <h1>Магазин товаров</h1>
            <AddProduct />
            <ProductsFilter />
            <ProductsList />
          </div>
        </FilterProvider>
      );
};

export default MarketApp;