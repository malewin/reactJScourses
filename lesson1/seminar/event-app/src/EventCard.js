function EventCard({name, date, place, isDarkTheme}) {
    return ( 
        <div class="eventCard" style={{ 
            color: isDarkTheme ? 'white' : 'black', 
            border: isDarkTheme ? '1px white solid' : '1px black solid' 
          }}>
            <h3 style={{color: isDarkTheme ? 'green' : 'red'}}>Название события:{name}</h3>
            <p>Дата проведения:{date}</p>
            <p>Место проведения: {place}</p>
        </div>
    );
}

export default EventCard;