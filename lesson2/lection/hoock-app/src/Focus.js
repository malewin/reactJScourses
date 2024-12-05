import { useRef, useEffect } from "react";

function RefFocus() {
    const inputRef = useRef(null);

    const handleClick =()=> {
        inputRef.current.focus();
    };

    useEffect(() => {
      inputRef.current?.focus();
    }, []);
    
    return (  
        <div class="element">
            <input type="text" ref={inputRef}></input>
            <button style={{margin: '10px',width:'100px', color: 'white', background: 'linear-gradient(45deg, blue,purple)', borderRadius: '15px', height: '30px'}} onClick={handleClick}>Фокус</button>
        </div>
    );
}

export default RefFocus;