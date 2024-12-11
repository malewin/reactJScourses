// Компонент, который использует REnder prop для рендеринга информации о положении курсора
const MouseInfo = ({x,y}) => {
    return (
        <div>
            <h2>Положение курсора мыши:</h2>
            <p>X: {x}, Y: {y}</p>
        </div>
    );
};

export default MouseInfo;