import React, {useEffect} from "react";
import PersonalDetail from "./components/PersonalDetail";
import {useDispatch} from "react-redux";

const ProfileScreen = () => {
    const dispatcher = useDispatch();
    useEffect(() => {
        dispatcher({type:"update-page",currentPage:"profile"});
    }, [dispatcher]);
    return (
        <>
            <PersonalDetail/>
        </>
    )
}

export default ProfileScreen;