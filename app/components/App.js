import React, {useState} from "react";
import Todo from './Todo';
import Form from './Form';
import Canvas from './Canvas';

const App = () => {
  
  const [todos, setTodos] = useState([]);
  
  const showMessage = text => { 
    alert(text)
    // const newTodos = [...todos, { text }]; 
    // setTodos(newTodos);
  };

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
    
  return (
    <div>
      <h1>Hello yes</h1>
      <Canvas></Canvas>
      <Form showMessage={showMessage} />
      <div>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            deleteTodo={deleteTodo}
            text={todo.text}
          />
        ))}
      </div>
    </div>
  );
};

export default App;