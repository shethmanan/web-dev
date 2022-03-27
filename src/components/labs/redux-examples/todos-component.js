import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

const Todos = () => {

    const todos = useSelector(state => state.todosList);
    const [newTodo, setTodo] = useState({do: '', done: false});
    const dispatch = useDispatch();
    const addNewTodoHandler = () => {
        const action = {
            type: "create-todo",
            newTodo
        };
        dispatch(action);
        setTodo({do: '', done: false});
    }
    const todoChangeHandler = (event) => {
        const todoNewValue = event.target.value;
        const temp = {
            do: todoNewValue
        };
        setTodo(temp);
    }
    const deleteTodoClickHandler = (todo) => {
        const action = {
            type: "delete-todo",
            todo
        };
        dispatch(action);
    }
    const changeTodoStatusHandler = (todo) => {
        const action = {
            type: "update-todo",
            todo
        }
        dispatch(action);
    }
    return (
        <>
            <h3>Todos</h3>
            <ul className="list-group">
                <li className="list-group-item" key={"new"}>
                    <input value={newTodo.do} onChange={todoChangeHandler}/>
                    <button className="btn btn-primary" onClick={addNewTodoHandler}>Create new todo</button>
                </li>
                {
                    todos.map(todo =>
                        <li className="list-group-item" key={todo._id}>
                            <input type="checkbox" checked={todo.done}
                                   onChange={(event) => changeTodoStatusHandler({...todo,done:event.target.checked})}/>
                            {todo.do}
                            <button onClick= {() => {deleteTodoClickHandler(todo)}} className="btn btn-danger float-end">
                                Delete
                            </button>
                        </li>
                    )
                }
            </ul>
        </>
    );
}

export default Todos;