import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../reducers/rootReducer'; // Импорт редюсера задач

const store = configureStore({
    reducer: {
        tasks: taskReducer, 
    },
});

export { store };

