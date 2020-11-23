import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Todos from "./Todos";
function App(props) {
  const [todos, setTodos] = useState([
    {
      text: "Купить бананы",
      favorite: false,
    },
    {
      text: "Продать квартиру",
      favorite: false,
    },
    {
      text: "Выучить уроки по JavaScript",
      favorite: false,
    }
  ]);

const [text, setText] = useState("");

  const deleteTodo = (indexOfRemovingItem) =>{
    const filtered = todos.filter((todo, index) =>{
      if(index === indexOfRemovingItem){
        return false;
      }
      return true;
    });
    setTodos(filtered);
  }
  const newTodos = todos.map((todo, index)=>{
    const todoclass = todo.favorite?"todo selected" : "todo";
    const makeFavorite = (i)=>{
      const newTodos = todos.map((item, index) =>{
        if(i===index){
          return{
            ...item,
            favorite: !item.favorite
          }
        }
        return item;
      })
      setTodos(newTodos);
    }

    return(
      <div className={todoclass}>
          <div className="favorite">
            <button onClick={()=>makeFavorite(index)}>*</button>
          </div>
          <div className="todo-text">
            {todo.text}
          </div>
          <div className="actions">
           <button onClick={() => deleteTodo(index)}>x</button>
          </div>
        </div>
    )
  });

const addTodo = () =>{
  setTodos([
    {
    text:text,
    favorite:false
  }, ...todos]);
  setText("")
}


  return (
    <div className="app">
      <Header/>
      <Form text={text} setText={setText} addTodo={addTodo}/>
      <Todos newTodos={newTodos}/>
    </div>
  );
}

export default App;

