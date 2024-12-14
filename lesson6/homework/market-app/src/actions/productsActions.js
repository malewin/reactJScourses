//Константы для типа действий
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const TOGGLE_AVAILABLE = 'TOGGLE_AVAILABLE';

//создание задачи
export const addProduct = (name , description, price , numberphone, city) => ({
    type: ADD_PRODUCT, //тип действия
    payload: { name, description, price , numberphone, city}, // полезная нагрузка действия
});

export const deleteProduct = (id) => ({
    type: DELETE_PRODUCT,
    payload: { id },
})

export const updateProduct = (id, name , description, price , numberphone, city) => ({
    type: UPDATE_PRODUCT, //тип действия
    payload: {id, name, description, price , numberphone, city},
});

//изменение статуса задачи (выполнено/не выполнено)
export const toggleAvailable = (id) => ({
    type: TOGGLE_AVAILABLE,
    payload: { id },
});