import React from "react";
import './postlist.css';

const PostItem = ({
                      post = {
                          topic1: "Amazing show about",
                          topic2: "misson!",
                          tagInTitle: "@Inspiration4x",
                          externalLink: "https://www.wikipedia.org/",
                          time: "23h",
                          userName: "Elon Musk",
                          tag: "@elonmusk",
                          overlayTextPresent: "true",
                          overlayTextHeading: "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
                          overlayText: "From training to launch to landing, this all access docuseries rides along with the inspiration4 crew on the first all-civilian orbital space ...",
                          overlayLinkText: "netflix.com",
                          image: "../tuiter/images/elon_profile.png",
                          bannerUrl: "../tuiter/images/inspiration4.jpg",
                          likeCount: "37.5k",
                          commentCount: "4.2k",
                          retweetCount: "3.5k"
                      }
                  }) => {
    return (
        <>
            <li className="wd-bookmark-item">
                <div className="wd-left-child">
                    <img className="wd-avatar" alt="avatar" src={post.image}>
                    </img>
                </div>
                <div className="wd-right-child">
                    <div className="wd-item-head">
                        <span className="wd-item-author">{post.userName}</span>
                        <span className="wd-item-author-tag  ml-5">{post.tag}</span>
                        <span className="wd-item-author-tag dot-before ml-5">- {post.time}</span>
                        <a href="#!" className="anchor-no-effect">
                        <span className="wd-tweet-setting wd-row">
                            <i className="fas fa-ellipsis-h">
                            </i>
                        </span>
                        </a>
                        <span className="wd-item-content wd-row">{post.topic1} <a
                            href={post.externalLink}>{post.tagInTitle}</a> {post.topic2}</span>
                    </div>
                    <div className="wd-item-body">
                        <img src={post.bannerUrl} alt="banner" className="wd-item-poster-img">
                        </img>
                        <span className={`wd-body-title wd-row ${post.overlayTextPresent === 'false' ? "d-none"
                            : ""}`}>{post.overlayTextHeading}</span>
                        <span className={`wd-body-content wd-row ${post.overlayTextPresent === 'false' ? "d-none"
                            : ""}`}>{post.overlayText}</span>
                        <span className={`wd-body-content wd-row ${post.overlayTextPresent === 'false' ? "d-none"
                            : ""}`}>
                        <a className="text-secondary anchor-no-effect" href={post.externalLink}>
                            <i className="fas fa-link">
                            </i>
                            {post.overlayLinkText}
                        </a>
                    </span>
                    </div>
                    <div className="wd-item-footer">
                        <ul className="wd-reaction-list">
                            <li>
                                <a href="#!" className="anchor-no-effect text-secondary">
                                <span className="">
                                    <i className="far fa-comment">
                                    </i>
                                </span>
                                    <span className="wd-reaction-count">{post.commentCount}</span>
                                </a>
                            </li>
                            <li>
                                <a href="#!" className="anchor-no-effect text-secondary">
                            <span className="">
                                <i className="fas fa-retweet">
                                </i>
                            </span>
                                    <span className="wd-reaction-count">{post.retweetCount}</span>
                                </a>
                            </li>
                            <li>
                                <a href="#!" className="anchor-no-effect text-secondary">
                            <span className="wd-reaction-icon">
                                <i className="fas fa-heart reaction-active">
                                </i>
                            </span>
                                    <span className="wd-reaction-count reaction-active">{post.likeCount}</span>
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
                </div>
            </li>
        </>
    );
}
export default PostItem;
