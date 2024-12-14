//Функция высшего порядка для фильтрации списка задач
const withFilter = (products, filter) => {
    switch (filter) {
        case 'available':
            return products.filter(product => !product.available);
        case 'notavailable':
            return products.filter(product => product.available);
        default:
            return products;
    }
};

export default withFilter;