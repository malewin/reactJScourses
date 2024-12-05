import React, {useState} from 'react';

function Show({data}) {
    const [block, setblock] = useState()

    const blockShow = () => {
        setblock(!block)
    }
    return (  
        <div class="element">
            <button style={{margin: '10px',width:'150px', color: 'white', background: 'linear-gradient(45deg, blue,purple)', borderRadius: '15px', height: '30px'}} onClick={blockShow}>Показать или скрыть</button>
            <p style={{opacity: block ? '0' : '1', transition: 'all 1.3s'}}>{data}</p>
        </div>
    );
}

export default Show;