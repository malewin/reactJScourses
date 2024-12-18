import { createSlice } from '@reduxjs/toolkit';
import { SHOW_TASKS, CHANGE_STATUS } from '../actions/taskActions';

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        loading: false,
        error: null,
    },
    reducers: {
        changeStatus: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload.id);
            if (task) {
                task.completed = !task.completed;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(SHOW_TASKS, (state, action) => {
                state.tasks.push(action.payload); // Добавляем новую задачу в массив
            })
            .addCase(CHANGE_STATUS, (state, action) => {
                const task = state.tasks.find(task => task.id === action.payload.id);
                if (task) {
                    task.completed = !task.completed;
                }
            });
    },
});

export const { changeStatus } = taskSlice.actions;
export default taskSlice.reducer;


