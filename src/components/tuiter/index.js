import React from "react";
import {Link} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowList from "./WhoToFollowList";
import PostSummaryList from "./PostSummaryList";
import ExploreComponent from "./ExploreScreen/ExploreComponent";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import PostItem from "./PostList/PostItem";
import PostList from "./PostList";
import HomeScreen from "./HomeScreen/HomeScreen";


const Tuiter = () => {
    return (
        <>
            <HomeScreen/>
            {/*<PostList/>*/}
            {/*<PostItem/>*/}
            <ExploreScreen/>
            {/*<PostSummaryList/>*/}
            {/*<ExploreComponent/>*/}
            {/*<NavigationSidebar activeComponent="home"/>*/}
            {/*<WhoToFollowListItem/>*/}
            {/*<WhoToFollowList/>*/}
            {/*<Link to="/hello">*/}
            {/*    Hello*/}
            {/*</Link> |*/}
            {/*<Link to="/">*/}
            {/*    Labs*/}
            {/*</Link>*/}

            {/*Home screen*/}

        </>

    );

}
export default Tuiter;