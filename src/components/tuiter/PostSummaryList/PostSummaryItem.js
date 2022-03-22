import React from "react";
const PostSummaryItem = ({
                             post = {
                                 "topic": "Web Development",
                                 "userName": "ReactJS",
                                 "time": "2h",
                                 "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                                 "image": "../tuiter/images/react.png"
                             }
    }) => {
    return (
            <li className="list-group-item d-flex justify-content-between primary-bg-color secondary-color">
                    <div className="left-child w-85">
                        <span className="f-border-color text-secondary">{post.topic}</span>
                        <span className="row"></span>
                        <span>
                            <span className={`fw-bold ${post.userName === '' ? 'd-none' : ''}`}>
                                {post.userName}
                                <i className="fas fa-check-circle ml-2  ml-5">
                                </i>
                            </span>
                            <small className="f-border-color text-secondary ml-5">{post.time}</small>
                        </span>
                        <span className="row">
                        </span>
                        <span className="f-border-color">{post.title}</span>
                    </div>
                    <div className="right-child w-15">
                        <img src={post.image} className="" width="80px"  height="80px" alt="tesla">
                        </img>
                    </div>
                </li>
    );
}
export default PostSummaryItem;
