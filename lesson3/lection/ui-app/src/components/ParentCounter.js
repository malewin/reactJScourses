import {useState} from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function ParentCounter() {

    const [count, setCount] = useState(0)

    const upCounter = () => {
        setCount(count + 1)
    }

    return (  
        <div style={{color: 'white'}}>
            <h2>Родитель</h2>
            <ChildCounter count={count}/>
            <Button onClick={upCounter} variant="contained">ПЛЮС ОДИН</Button>
            {/* <button style={{margin: '10px',width:'120px', color: 'white', background: 'linear-gradient(45deg, blue,purple)', borderRadius: '15px', height: '30px'}} onClick={upCounter}>Увеличить на 1</button> */}
        </div>
    );
}

function ChildCounter({count}) {
    return (  
        <div>
            <p>Дочерний счетчик внутри</p>
            <p>Значение счетчика {count}</p>
        </div>
    );
}


export default ParentCounter;