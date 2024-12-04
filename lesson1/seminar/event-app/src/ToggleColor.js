import React from 'react';

function ToggleBtn({ toggleTheme }) {
    return (
        <div className="clr_btn_box">
            <button onClick={toggleTheme}>
                Переключить тему
            </button>
        </div>
    );
}

export default ToggleBtn;