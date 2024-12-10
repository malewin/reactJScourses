import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from './ListItem';

function Organizer() {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const validateInputs = () => {
        // Проверка формата даты
        const dateRegex = /^\d{8}$/; // Проверяем на ddmmyyyy
        if (!dateRegex.test(date)) {
            alert('Введите дату в формате ddmmyyyy (например, 31122024)');
            return false;
        }

        // Проверка формата времени
        const timeRegex = /^\d{4}$/; // Проверяем на hhmm
        if (!timeRegex.test(time)) {
            alert('Введите время в формате hhmm (например, 2359)');
            return false;
        }

        return true;
    };

    const makeTask = () => {
        if (validateInputs() && task) {
            const formattedDate = `${date.slice(0, 2)}.${date.slice(2, 4)}.${date.slice(4)}`; 
            const formattedTime = `${time.slice(0, 2)}:${time.slice(2)}`; 
            const newTask = { date: formattedDate, time: formattedTime, task };
            setTasks([...tasks, newTask]); // Добавляем новую задачу в массив
            setDate('');
            setTime('');
            setTask('');
        }
    };

    const handleDelete = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index); // Удаляем задачу по индексу
        setTasks(updatedTasks);
    };

    return (

        <div>
            <div class = 'content'>
                <h1>Organizer</h1>
                <Box
                    component="form"
                    sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField
                            label="Date"
                            variant="standard"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                        <TextField
                            label="Time"
                            variant="standard"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                        />
                        <TextField
                            label="Task description"
                            variant="standard"
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                        />
                    </div>
                </Box>
                <Button variant="contained" onClick={makeTask} style={{margin: "20px", background: 'black'}}>Add task</Button>
                <h2>List of your tasks</h2>
            </div>
            <div class='listTasks'>
                {tasks.map((item, index) => (
                    <List
                        key={index}
                        newDate={item.date}
                        newTime={item.time}
                        newTask={item.task}
                        onDelete={() => handleDelete(index)} 
                    />
                ))} 
            </div>
            
        </div>
    );
}

export default Organizer;
