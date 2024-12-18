import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks, changeStatus } from '../actions/taskActions';

const TasksList = () => {
    const dispatch = useDispatch();
    const { tasks } = useSelector(state => state.tasks);
    const [isLoading, setIsLoading] = useState(false);

    const handleFetchTasks = () => {
        setIsLoading(true); 
        dispatch(fetchTasks())
            .finally(() => {
                setIsLoading(false); // Всегда меняем состояние, когда завершили загрузку
            });
    };

    const handleChangeStatus = (id) => {
        dispatch(changeStatus(id));
    };

    return (
        <div className='list'>
            <button onClick={handleFetchTasks} disabled={isLoading}>
                {isLoading ? 'Загрузка...' : 'Загрузить задачи'}
            </button>
            
            {isLoading && <p>Загрузка задач...</p>}

            <h2>Мои задачи:</h2>

            <ul>
                {tasks.length > 0 ? (
                    tasks.map(task => (
                        <li key={task.id} style={{ padding: '5px', border: '1px solid white' , margin: '10px'}}>
                            <h4>Задача: {task.title}</h4>
                            <p>Статус: {task.completed ? 'Выполнена' : 'Не выполнена'}</p>
                            <button onClick={() => handleChangeStatus(task.id)}>Сменить статус задачи</button>
                        </li>
                    ))
                ) : (
                    !isLoading && <p>Нет задач для отображения.</p>
                )}
            </ul>
        </div>
    );
};

export default TasksList;




