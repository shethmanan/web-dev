import {useDispatch} from "react-redux";
import React from "react";
import {updateTuit} from "../reducers/actions/tuits-actions";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();

    const dislikeTuit = () => {
        let updatedTuit = tuit;
        if(updatedTuit.disliked){
            updatedTuit.disliked = false;
            updatedTuit.stats.dislikes--;
        }else{
            updatedTuit.disliked = true;
            updatedTuit.stats.dislikes++;
        }
        updateTuit(dispatch,updatedTuit);
    };
    const likeTuit = () => {
        let updatedTuit = tuit;
        if(updatedTuit.liked){
            updatedTuit.liked = false;
            updatedTuit.stats.likes--;
        }else{
            updatedTuit.liked = true;
            updatedTuit.stats.likes++;
        }
        updateTuit(dispatch,updatedTuit);
    };
    return (
        <>

            <div className="wd-item-footer">
                <ul className="wd-reaction-list">
                    <li>
                        <a href="#!" className="anchor-no-effect text-secondary">
                                <span className="">
                                    <i className="far fa-comment">
                                    </i>
                                </span>
                            <span className="wd-reaction-count">{tuit.stats.comments}</span>
                        </a>
                    </li>
                    <li>
                        <a href="#!" className="anchor-no-effect text-secondary">
                            <span className="">
                                <i className="fas fa-retweet">
                                </i>
                            </span>
                            <span className="wd-reaction-count">{tuit.stats.retuits}</span>
                        </a>
                    </li>
                    <li>
                        <a href="#!" className="anchor-no-effect text-secondary">
                            <span onClick={likeTuit}>
                                {
                                    tuit.liked &&
                                    <i className="fas fa-heart me-1"
                                       style={{color: 'red'}}></i>
                                }
                                {
                                    !tuit.liked &&
                                    <i className="far fa-heart me-1"></i>
                                }
                            </span>
                            <span className="wd-reaction-count reaction-active">{tuit.stats.likes}</span>
                        </a>
                    </li>
                    <li>
                        <a href="#!" className="anchor-no-effect text-secondary">
                            <span onClick={dislikeTuit}>
                                {
                                    tuit.disliked &&
                                    <i className="far fa-thumbs-down" style={{color: 'lightblue'}}></i>
                                }
                                {
                                    !tuit.disliked &&
                                    <i className="far fa-thumbs-down"></i>
                                }
                            </span>
                            <span className="wd-reaction-count reaction-active">{tuit.stats.dislikes}</span>
                        </a>
                    </li>
                    <li>
                        <a href="#!" className="anchor-no-effect text-secondary">
                            <span className="wd-reaction-icon">
                                <i className="fas fa-upload">
                                </i>
                            </span>
                        </a>
                    </li>
                </ul>

            </div>
        </>
    );
}
export default TuitStats;