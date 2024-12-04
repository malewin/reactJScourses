import React from 'react';

function ToggleBtn({ toggleTheme }) {
    return (
        <div className="clr_btn_box">
            <button onClick={toggleTheme}>
                Переключить цвет темы
            </button>
        </div>
    );
}

export default ToggleBtn;