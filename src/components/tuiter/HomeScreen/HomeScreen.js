import React from "react";
import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostList from "../PostList/index.js"

const HomeScreen = () => {
    return (
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar activeComponent="home"/>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-7 col-xl-6">
                <PostList/>
            </div>
            <div className="d-md-none d-lg-block col-lg-4">
                <PostSummaryList/>
            </div>
        </div>
    );
}


export default HomeScreen;