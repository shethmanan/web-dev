import React from "react";
import TuitItem from "./TuitItem";
import {useSelector} from "react-redux";
const TuitList = () => {
    const TuitList = useSelector(({tuitList}) => tuitList);
    return(
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