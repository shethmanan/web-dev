import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json"

const WhoToFollowList = () => {
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <span className="recomm-name fw-bold">Who to follow</span>
            </li>
            {
                who.map(whoItem => {
                    return (
                        <WhoToFollowListItem who={whoItem}/>
                    );
                })}
        </ul>
    );
}

export default WhoToFollowList;
