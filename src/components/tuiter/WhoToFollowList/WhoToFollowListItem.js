import React from "react";

const WhoToFollowListItem = ({
                                 who = {
                                     avatarIcon: '../tuiter/images/java.jpg',
                                     userName: 'Java',
                                     handle: 'Java'
                                 }
                             }) => {
    return (
        <li className="list-group-item ">
            <div className="row">
                <div className="col-sm-2 p-0">
                    <img src={who.avatarIcon} alt="avatar" className="rounded-circle img-fluid w-75">
                    </img>
                </div>
                <div className="col-sm-7 recomm-text p-0">
                    <span className="recomm-name fw-bold">{who.userName}</span>
                    <i className="fas fa-check-circle ml-5"></i>
                    <span className="recomm-tag d-block">@{who.handle}</span>
                </div>
                <button type="submit" className="col-sm-3 btn rounded-pill btn btn-primary">Follow</button>
            </div>
        </li>
    );
}
export default WhoToFollowListItem;
