import React, {useState} from "react";
import './whats-happening.css'
import {useDispatch} from "react-redux";
import {createTuit} from "../reducers/actions/tuits-actions";

const WhatsHappening = () => {
    let [newTuit, setNewTuit] = useState('');
    const setTuitHandler = (newTuit) => {
        setNewTuit(newTuit);
    }
    const dispatcher = useDispatch();
    const addNewTuitHandler = () => {
        createTuit(dispatcher,newTuit);
        setNewTuit('');
    }
    return (
        <>
            <div className="row">

                <div className="leftChild col-1 mr-3">
                    <img className="wd-avatar" alt="avatar" src="../../tuiter/images/profile.jpg">
                    </img>
                </div>
                <div className="rightChild col-10">
                <textarea value={newTuit}
                          onChange={(event) => setTuitHandler(event.target.value)}
                          placeholder="What's Happening?"
                          className="bg-transparent w-100 border-bottom-only text-white">
            </textarea>
                    <div className="d-flex justify-content-between">
                        <span className="d-flex gap-3">
                            <i className="far fa-image text-primary"></i>
                            <i className="far fa-chart-bar text-primary"></i>
                            <i className="far fa-smile text-primary"></i>
                            <i className="far fa-calendar text-primary"></i>

                        </span>
                        <button className="btn btn-primary rounded-pill"
                                onClick={addNewTuitHandler}>Tuit
                        </button>
                    </div>
                </div>
            </div>

        </>
    );
}

export default WhatsHappening;