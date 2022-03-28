import TuitList from "../tuit-list";
import WhatsHappening from "../new-tuit/whats-happening";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

const HomeScreen = () => {
    const dispatcher = useDispatch();
    useEffect(() => {
        dispatcher({type:"update-page",currentPage:"home"});
    }, [dispatcher]);
    return(
        <div>
            <WhatsHappening/>
            <TuitList/>
        </div>
    )
}
export default HomeScreen;