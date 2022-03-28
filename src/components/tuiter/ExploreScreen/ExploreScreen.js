import React, {useEffect} from "react";
import ExploreComponent from "./ExploreComponent";
import {useDispatch} from "react-redux";

const ExploreScreen = () => {
    const dispatcher = useDispatch();
    useEffect(() => {
        dispatcher({type:"update-page",currentPage:"explore"});
    }, [dispatcher]);
    return (
        <>
            <div className="row mt-2">
                {/*<div className="col-2 col-md-2 col-lg-1 col-xl-2">*/}
                {/*    <NavigationSidebar activeComponent={"explore"}/>*/}
                {/*</div>*/}
                <div >
                    {/*className="col-md-10 col-lg-7 col-xl-6"*/}
                    <ExploreComponent/>
                </div>
                {/*<div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">*/}
                {/*    /!*<WhoToFollowList/>*!/*/}
                {/*</div>*/}
            </div>
        </>
    );
}

export default ExploreScreen;