import React, {useEffect} from "react";
import TuitItem from "./TuitItem";
import {useDispatch, useSelector} from "react-redux";
import {findAllTuits} from "../reducers/actions/tuits-actions";

const TuitList = () => {
    const TuitList = useSelector(({tuitList}) => tuitList);
    const dispatch = useDispatch();

    useEffect(() => findAllTuits(dispatch));


    return (
        <ul className="list-group">
            {
                TuitList.map(tuit => {
                    return (
                        <TuitItem key={tuit._id} post={tuit}/>
                    );
                })}
        </ul>
    );
}
export default TuitList;