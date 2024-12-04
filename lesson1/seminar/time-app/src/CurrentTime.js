function CurrentTime() {
    let currentTime = new Date;
    return (  
        <div class='time__box'>
            <h2>Текущее время: {currentTime.toLocaleTimeString([], {hour: "2-digit", minute:"2-digit"})}</h2>
            <h2>Текущая дата: {currentTime.toLocaleDateString("en-GB")}</h2>
        </div>
    );
}

export default CurrentTime;