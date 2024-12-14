//Константы для типа действий
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

//создание задачи
export const addTodo = (text) => ({
    type: ADD_TODO, //тип действия
    payload: { text }, // полезная нагрузка действия
});

//изменение статуса задачи (выполнено/не выполнено)
export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: { id },
});