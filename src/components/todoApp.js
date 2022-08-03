import { useState } from "react";

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
                {title}
            </from>
            <div className="todosContainer">
                {
                    todos.map(item => (
                        // Agregar siempre q hacemos un recorrido una KEY
                        <div key={item.id}>
                            {item.title}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TodoApp;