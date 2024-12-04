function Message({sender, text, date, isDarkTheme}) {
    return ( 
        <div class="msgCard" style={{ 
            color: isDarkTheme ? 'white' : 'black', 
            border: isDarkTheme ? '1px white solid' : '1px black solid' 
          }}>
            <h3 style={{color: isDarkTheme ? 'green' : 'red'}}>Отправитель:{sender}</h3>
            <p>Сообщение:{text}</p>
            <p>Время отправления: {date}</p>
        </div>
    );
}

export default Message;