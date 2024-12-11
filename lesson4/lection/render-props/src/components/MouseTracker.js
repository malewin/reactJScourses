import { useState } from "react";

{/**Компонент для отслеживания курсора мыши */}
const MouseTracker = ({render}) => {
    const [position, setPosition] = useState({x:0, y:0});

    const handleMouseMove = (event) => {
        setPosition({x:event.clientX, y: event.clientY});
    };

    return (
        <div style={{height: '100vh'}} onMouseMove={handleMouseMove}> 
            {/** Внутри Render prop используем переданную функцию */}
            {render(position)}
        </div>
    );
};

export default MouseTracker;