import React from "react";
import {Link} from "react-router-dom";
import ReduxExamples from "./redux-examples";
import Demo from "./Demo";
const Labs = () => {
    return (
        <>
            <h1>Labs</h1>
            <ReduxExamples/>
            <div>asd</div>
            <Demo/>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter/">
                Tuiter
            </Link>
        </>

    );

}
export default Labs;