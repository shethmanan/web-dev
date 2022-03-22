import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = ({
                               activeComponent = 'explore'
                           }) => {
    return (
        <>
            <div className="list-group">
                <a className="list-group-item" href="#!">
                    <i className="fab fa-twitter">
                    </i></a>
                <Link className={`${activeComponent === 'home' ? 'active' : ''} list-group-item`}
                      to="/tuiter/home">
                    <i className="fas fa-home">
                    </i>
                    <span className="d-none d-l-inline-block d-xl-inline-block ml-5">Home</span>
                </Link>
                {/* <a className={`${activeComponent === 'home' ? 'active' : ''} list-group-item`}*/}
                {/*    href="../HomeScreen/oldhome.html">*/}

                {/*     <i className="fas fa-home">*/}
                {/*     </i>*/}
                {/*     <span className="d-none d-l-inline-block d-xl-inline-block ml-10">Home</span>*/}
                {/*</a>*/}

                <Link className={`${activeComponent === 'explore' ? 'active' : ''} list-group-item`}
                      to="/tuiter/explore">
                    <i className="fas fa-hashtag">
                    </i>
                    <span className="d-none d-l-inline-block d-xl-inline-block ml-5">Explore</span>
                </Link>
                <a className={`${activeComponent === 'notifications' ? 'active' : ''} list-group-item`} href="#!">
                    <i className="fas fa-bell">
                    </i>
                    <span className="d-none d-l-inline-block d-xl-inline-block ml-5">Notifications</span>
                </a>
                <a className={`${activeComponent === 'messages' ? 'active' : ''} list-group-item`} href="#!">
                    <i className="fas fa-envelope">
                    </i>
                    <span className="d-none d-l-inline-block d-xl-inline-block  ml-5">Messages</span>
                </a>
                <a className={`${activeComponent === 'explore' ? 'bookmarks' : ''} list-group-item`} href="#!">
                    <i className="fas fa-bookmark">
                    </i>
                    <span className="d-none d-l-inline-block d-xl-inline-block ml-5">Bookmarks</span>
                </a>
                <a className={`${activeComponent === 'lists' ? 'active' : ''} list-group-item`} href="#!">
                    <i className="fas fa-list"></i>
                    <span className="d-none d-l-inline-block d-xl-inline-block ml-5">Lists</span>
                </a>
                <a className={`${activeComponent === 'profile' ? 'active' : ''} list-group-item`} href="#!">
                    <i className="fas fa-user"></i>
                    <span className="d-none d-l-inline-block d-xl-inline-block ml-5">Profile</span>
                </a>
                <a className={`list-group-item ${activeComponent === "more" ? "active" : ""}`} href="#!">
                    <i className="fas fa-circle"></i>
                    <span className="d-none d-l-inline-block d-xl-inline-block ml-5">More</span>
                </a>
            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
        </>
    );
}
export default NavigationSidebar;
