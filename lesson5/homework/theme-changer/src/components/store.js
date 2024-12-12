import {configureStore} from '@reduxjs/toolkit';

//reducer
const reducer = (state = 'light', action) => {
    switch (action.type) {
        case 'TOGGLE_THEME':
            return state === 'light' ? 'dark' : 'light';
        default:
            return state;
    }
};

//Создание хранилища (store)
const store = configureStore({
    reducer: reducer,
});

export default store;