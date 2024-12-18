import { createAsyncThunk } from '@reduxjs/toolkit';
import Tasks from '../data/tasks'; // Импортируем локальные данные

export const SHOW_TASKS = 'SHOW_TASKS';
export const CHANGE_STATUS = 'CHANGE_STATUS';

// Асинхронное действие загрузки задач
export const fetchTasks = createAsyncThunk(
    'tasks/fetchTasks',
    async (_, { dispatch }) => {
        for (const task of Tasks) {
            await new Promise((resolve) => {
                setTimeout(() => {
                    dispatch(addTask(task)); // Диспетчеризуем добавление каждой задачи
                    resolve();
                }, 1000); // Интервал в 1 секунду
            });
        }
    }
);

// Действие для добавления задачи
export const addTask = (task) => ({
    type: SHOW_TASKS,
    payload: task,
});

// Действие для изменения статуса
export const changeStatus = (id) => ({
    type: CHANGE_STATUS,
    payload: { id },
});



