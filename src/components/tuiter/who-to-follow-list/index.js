import React from "react";
import {useSelector} from "react-redux";
import WhoToFollowListItem from "./WhoToFollowListItem";


const WhoToFollowList = () => {
    const whoToFollowList = useSelector(({followList}) => followList);
    return(
        <div>
            <ul className="list-group">
                <li className="list-group-item">
                    <span className="recomm-name fw-bold">Who to follow</span>
                </li>
                {
                    whoToFollowList.map(item => {
                        return (
                            <WhoToFollowListItem key={item._id} who={item}/>
                        );
                    })}
            </ul>
        </div>

    );
};

export default WhoToFollowList;
