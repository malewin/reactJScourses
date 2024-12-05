import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0)

    const incrementCount = () => {
        setCount(count+1)
    }

    return (  
        <div class="element">
            <span>{count}</span>
            <button style={{margin: '10px',width:'100px', color: 'white', background: 'linear-gradient(45deg, blue,purple)', borderRadius: '15px', height: '30px'}} onClick={incrementCount}>+1</button>
        </div>
    );
}

export default Counter;