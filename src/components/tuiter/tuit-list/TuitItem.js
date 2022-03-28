import React from "react";
import './tuitlist.css';
import {useDispatch} from "react-redux";
import TuitStat from "./tuit-stat";

const TuitItem = ({
                      post = {
                          "_id": "123",
                          "topic": "Web Development",
                          "postedBy": {
                              "username": "ReactJS"
                          },
                          "liked": true,
                          "verified": false,
                          "handle": "ReactJS",
                          "time": "2h",
                          "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                          "tuit": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                          "attachments": {
                              "image": "../tuiter/images/spacex.jpg"
                          },
                          "logo-image": "../tuiter/images/react.png",
                          "avatar-image": "../tuiter/images/react.png",
                          "stats": {
                              "comments": 123,
                              "retuits": 234,
                              "likes": 345
                          }
                      }
                  }) => {

    const dispatcher  = useDispatch();
    const deleteTuitHandler = (tuiToDelete) => {
        const action = {
            type: "delete-tuit",
            tuit: tuiToDelete
        }
        dispatcher(action);
    }
    return (
            <li className="wd-bookmark-item">
                <div className="wd-left-child">
                    <img className="wd-avatar" alt="avatar" src={post["logo-image"]}>
                    </img>
                </div>
                <div className="wd-right-child">
                    <div className="wd-item-head">
                        <span className="wd-item-author">{post.postedBy.username}</span>
                        <span className="wd-item-author-tag  ml-5">{post.tag}</span>
                        <span className="wd-item-author-tag dot-before ml-5">- {post.time}</span>
                        <a href="#!" className="anchor-no-effect">
                        <span className="wd-tweet-setting wd-row">
                            <i className="fas fa-times" onClick={() => deleteTuitHandler(post)}>
                            </i>
                        </span>
                        </a>
                        <span className="wd-item-content wd-row">{post.tuit}
                            {/*<a*/}
                            {/*href={post.externalLink}>{post.tagInTitle}</a> {post.topic2}*/}
                        </span>
                    </div>
                    {post.attachments ?
                        (
                            <div className="wd-item-body">
                                <img src={post.attachments.image} alt="banner" className="wd-item-poster-img">
                                </img>
                                {post.overlayTextPresent ?(
                                    <>
                                        <span className={`wd-body-title wd-row ${post.overlayTextPresent === 'false' ? "d-none"
                                            : ""}`}>{post.overlayTextHeading}</span>
                                        <span
                                            className={`wd-body-content wd-row ${post.overlayTextPresent === 'false' ? "d-none"
                                                : ""}`}>{post.overlayText}</span>
                                        <span
                                            className={`wd-body-content wd-row ${post.overlayTextPresent === 'false' ? "d-none"
                                                : ""}`}>
                                <a className="text-secondary anchor-no-effect" href={post.externalLink}>
                                    <i className="fas fa-link">
                                    </i>
                                    {post.overlayLinkText}
                                </a>
                                </span>
                                    </>
                                    )

                                    : <></>}

                            </div>
                        ) : <></>}
                    <TuitStat tuit={post}/>
                    {/*<div className="wd-item-footer">*/}
                    {/*    <ul className="wd-reaction-list">*/}
                    {/*        <li>*/}
                    {/*            <a href="#!" className="anchor-no-effect text-secondary">*/}
                    {/*            <span className="">*/}
                    {/*                <i className="far fa-comment">*/}
                    {/*                </i>*/}
                    {/*            </span>*/}
                    {/*                <span className="wd-reaction-count">{post.stats.comments}</span>*/}
                    {/*            </a>*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*            <a href="#!" className="anchor-no-effect text-secondary">*/}
                    {/*        <span className="">*/}
                    {/*            <i className="fas fa-retweet">*/}
                    {/*            </i>*/}
                    {/*        </span>*/}
                    {/*                <span className="wd-reaction-count">{post.stats.retuits}</span>*/}
                    {/*            </a>*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*            <a href="#!" className="anchor-no-effect text-secondary">*/}
                    {/*        <span className="wd-reaction-icon">*/}
                    {/*            <i className="fas fa-heart reaction-active">*/}
                    {/*            </i>*/}
                    {/*        </span>*/}
                    {/*                <span className="wd-reaction-count reaction-active">{post.stats.likes}</span>*/}
                    {/*            </a>*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*            <a href="#!" className="anchor-no-effect text-secondary">*/}
                    {/*        <span className="wd-reaction-icon">*/}
                    {/*            <i className="fas fa-upload">*/}
                    {/*            </i>*/}
                    {/*        </span>*/}
                    {/*            </a>*/}
                    {/*        </li>*/}
                    {/*    </ul>*/}

                    {/*</div>*/}
                </div>
            </li>
    );
}
export default TuitItem;
