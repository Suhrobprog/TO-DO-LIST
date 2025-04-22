import { useState } from 'react'
import './App.css'

export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  function removeTodo(id) {
    const result = todos.filter((el) => el.id !== id);
    setTodos(result);
  }

  function editTodo(id) {
    const result = todos.map((el) => {
      if (el.id === id) {
        return { title: prompt("Yangi element kiriting:"), id: el.id };
      } else {
        return el;
      }
    });
    setTodos(result);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const res = {
      title: formData.get("title"),
      id: Date.now()
    };
    addTodo(res);
    e.target.reset();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className='input' placeholder='Malumot kiriting' name="title" type="text" />
        <button className='btn'>Submit</button>
      </form>

      <ul>
        {todos.map(({ title, id }) => (
          <div className='fatherdiv'>
            <div className='li' key={id}>
            {title}{" "}
            <button className='btn2' onClick={() => editTodo(id)}>✏️</button>
            <button className='btn2' onClick={() => removeTodo(id)}>🗑️</button>
          </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

