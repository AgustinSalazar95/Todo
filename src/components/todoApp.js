import { useState } from "react";
import Todo from "./todo";
import './todoApp.css';


const TodoApp = () => {
    const [title,setTitle] = useState('');
    const [todos,setTodos] = useState([]);

    function handleChange(e){
        const value = e.target.value;
        setTitle(value);
    }
    function handleSubmit(e){
        e.preventDefault();
        const newTodo = {
            id: crypto.randomUUID(),
            title,
            completed: false
        }

        setTodos([...todos, newTodo]);

        setTitle('');
    }

    function handleUpdate(id,value){
        const temp = [...todos];
        const item = temp.find(item => item.id === id);
        item.title = value;
        setTodos(temp);
    }
    function handleDelete(id){
        const temp = todos.filter(item => item.id !== id);
        setTodos(temp);     
    }

    return (
        <div className='todoContainer'>
            <from className='todoCreateForm' onSubmit={handleSubmit}>
                <input onChange={handleChange} className="todoInput" value={title}/>
                <input 
                    onClick={handleSubmit} 
                    type='submit' 
                    value='Create todo'
                    className='buttonCreate'
                />
            </from>
            <div className="todosContainer">
                {
                    todos.map(item => (
                        // Agregar siempre q hacemos un recorrido una KEY
                        <Todo 
                            key={item.id} 
                            item={item} 
                            onUpdate={handleUpdate}
                            onDelete={handleDelete} 
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default TodoApp;