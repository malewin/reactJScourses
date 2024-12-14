import { ADD_PRODUCT, DELETE_PRODUCT, TOGGLE_AVAILABLE, UPDATE_PRODUCT } from "../actions/productsActions";

const initialState = () => {
    // Загружаем список продуктов из localStorage, если он существует
    const savedProducts = localStorage.getItem('products');
    return savedProducts ? JSON.parse(savedProducts) : []; // Если есть данные, то парсим их, иначе возвращаем пустой массив
};

const productsReducer = (state = initialState(), action) => {
    let newState;

    switch (action.type) {
        case ADD_PRODUCT:
            newState = [
                ...state,
                {
                    id: Date.now(),
                    name: action.payload.name,
                    description: action.payload.description,
                    price: action.payload.price,
                    numberphone: action.payload.numberphone,
                    city: action.payload.city,
                    available: false,
                }
            ];
            break;

        case DELETE_PRODUCT:
            newState = state.filter(product => product.id !== action.payload.id);
            break;

        case UPDATE_PRODUCT:
            newState = state.map(product =>
                product.id === action.payload.id
                    ? { ...product, name: action.payload.name, description: action.payload.description, price: action.payload.price, numberphone: action.payload.numberphone, city: action.payload.city }
                    : product
            );
            break;

        case TOGGLE_AVAILABLE:
            newState = state.map(product =>
                product.id === action.payload.id ? { ...product, available: !product.available } : product
            );
            break;

        default:
            return state;
    }

    // Сохраняем новое состояние в localStorage
    localStorage.setItem('products', JSON.stringify(newState));
    return newState;
};

export default productsReducer;
