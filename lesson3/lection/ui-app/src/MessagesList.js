import { useState } from "react";

function MessagesList() {
    const [messages, setMessages] = useState([
        {id: 'id1', text: 'Комментарий 1', button: 'button1'},
        {id: 'id2', text: 'Комментарий 2', button: 'button2'},
        {id: 'id3', text: 'Комментарий 3', button: 'button3'},
    ])

    return (
        messages.map((message) => 
        <div>
            <p style={{color: 'white', fontSize: '30px'}} key={message.id}>{message.text}</p>
            <button>{message.button}</button>
        </div>)
    );
}

export default MessagesList;