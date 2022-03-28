import './App.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css'
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeScreen from "./components/tuiter/home-screen";
import ExploreScreen from "./components/tuiter/ExploreScreen/ExploreScreen";
import Tuiter from "./components/tuiter";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/">
                        <Route index element={<Labs/>}/>
                        <Route path="labs" element={<Labs/>}/>
                        <Route path="hello" element={<HelloWorld/>}/>
                        <Route path="tuiter" element={<Tuiter/>}>
                            <Route path="explore" element={<ExploreScreen/>}/>
                            <Route index element={<HomeScreen/>}/>
                        </Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
