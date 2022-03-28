import {useDispatch} from "react-redux";
import React from "react";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
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