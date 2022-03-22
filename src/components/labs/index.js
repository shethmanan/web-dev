import React from "react";
import {Link} from "react-router-dom";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoList from "./todo/TodoList";
const Index = () => {
    return (
        <>
            <h1>Labs</h1>
            <TodoList/>
            <Styles/>
            <Classes/>
            <ConditionalOutput/>

            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter/home">
                Tuiter
            </Link>
        </>

    );

}
export default Index;