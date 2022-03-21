import React from "react";
import TodoItem from "./TodoItem";
import todo from "./todos.json";

const TodoList = () => {
    return (
        <ul>
            {
                todo.todos.map(todo => {
                    return (<TodoItem todo={todo}/>);
                })
            }
        </ul>
    );
}
export default TodoList;

