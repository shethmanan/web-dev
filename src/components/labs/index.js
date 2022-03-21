import React from "react";
import {Link} from "react-router-dom";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
const Index = () => {
    return (
        <>
            <h1>Labs</h1>
            <Styles/>
            <Classes/>
            <ConditionalOutput/>

            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter">
                Tuiter
            </Link>
        </>

    );

}
export default Index;