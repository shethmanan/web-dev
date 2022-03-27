import React from "react";
import HelloReduxExampleComponent from "./hello-redux-example-component";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import hello from "./reducers/hello";
import todosList from "./reducers/todos-reducer";
import Todos from "./todos-component";

const reducers = combineReducers({hello,todosList});
const store = createStore(reducers);
const ReduxExamples = () => {
    return (
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <Todos/>
                <HelloReduxExampleComponent/>
            </div>
        </Provider>
    );
};
export default ReduxExamples;