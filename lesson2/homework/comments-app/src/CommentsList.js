import { useState } from "react";

function CommentsList() {
    const [comments, setComments] = useState([
        {id: '1', text: 'Комментарий 1', button: 'delete 1'},
        {id: '2', text: 'Комментарий 2', button: 'delete 2'},
        {id: '3', text: 'Комментарий 3', button: 'delete 3'},
    ])
    
    const delBtn = (id) => {
        setComments(prevComments => prevComments.filter((comment)=> comment.id !== id ))
    }

    return (
        comments.map((comment) => 
        <div class='element'>
            <p style={{color: 'white', fontSize: '30px'}} key={comment.id}>{comment.text}</p>
            <button style={{margin: '10px',width:'150px', color: 'white', background: 'linear-gradient(45deg, blue,purple)', borderRadius: '15px', height: '30px'}} onClick={() => delBtn(comment.id)}>{comment.button}</button>
        </div>)
    );
}

export default CommentsList;