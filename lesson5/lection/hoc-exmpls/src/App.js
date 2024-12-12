import { useState } from 'react';
import './App.css';

// HOC компоненты высшего порядка

// // HOC для добавления стилей к компоненту
// const withStyles = (WrappedComponent, styles) => {
//   return (props) => {
//     const newProps = { ...props, styles};
//     return <WrappedComponent {...newProps} />;
//   };
// };

// // Компонент, который будет обернут в стили
// const Button = ({styles}) => {
//   return (
//     <button style={styles}>
//       Click me
//     </button>
//   );
// };

// const Text = ({styles}) => {
//   return (
//     <p style={styles}>
//       Smth text
//     </p>
//   );
// };

// // Используем НОС для добавления стилей к компоненту Button и Text
// const StyledButton = withStyles(Button, { background: 'blue', color: 'white'});
// const StyledText = withStyles(Text, { background: 'blue', color: 'white'});

// function App() {
//   return (
//     <div className="App">
//       <h1>Пример использования Компонента высшего порядка с отстилизованными функциональными компонентами</h1>
//       <StyledButton />
//       <StyledText />
//     </div>
//   );
// }

// НОС для счетчика
// НОС для добавления счетчика к компоненту
const withCounter = (WrappedComponent) => {
  return (props) => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount(count + 1);
    };

    const newProps = {
      count,
      incrementCount,
      ...props,
    };

    return <WrappedComponent {...newProps} />;
  };
};

//Компонент, который будет обернут с счетчиком и другими пропсами
const ClickCounter = ({ count, incrementCount, message}) => {
  return (
    <div>
      <p>{message}</p>
      <button onClick={incrementCount}>Click me</button>
      <p>Clicked {count} times</p>
    </div>
  );
};

//Используем НОС для добавления счетчика к компоненту ClickCounter и передаём другие пропсы
const ClickCounterWithCounterAndProps = withCounter(ClickCounter);

const App = () => {
  return (
    <div>
      <h1>Пример использования НОС с другими пропсами</h1>
      <ClickCounterWithCounterAndProps message='Счетчик кликов:' />
      <ClickCounterWithCounterAndProps message='Счетчик новых кликов:' />
    </div>
  );
};

export default App;
