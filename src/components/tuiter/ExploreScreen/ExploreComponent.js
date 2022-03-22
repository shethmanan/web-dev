import React from "react";
import PostSummaryList from "../PostSummaryList/index";

const ExploreComponent = () => {
    return (
        <>
            <div className="row">
                {/*// <!-- search field and cog -->*/}
                <div className="col-11">
                    <div className="input-group border rounded-pill">
                        <span className="input-group-text bg-transparent border-0">
                            <i className="fas fa-search">
                            </i>
                        </span>
                        <input type="text" placeholder="Search Twitter" style={{"color":" #fff"}}
                               className="form-control bg-transparent border-0 white-typer"/>
                    </div>
                </div>
                <div className="col-1 text-primary">
                    <i className="fas fa-cog fa-2x p-1 f-button-color">
                    </i>
                </div>
            </div>
            <ul className="nav mb-2 nav-tabs">
                {/*// <!-- tabs -->*/}
                <li className="nav-item">
                    <a className="nav-link active" data-bs-toggle="tab" href="#foryou">For you</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#trending">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#news">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#sports">Sports</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#entertainment">Entertainment</a>
                </li>
            </ul>
            <ul className="list-group border-0">
                <li className="list-group-item border-0 m-0 p-0">
                    <div className="position-relative text-white">
                        <img src="../tuiter/images/spacex.jpg" className="img-fluid" alt="tesla">
                        </img>
                            <div className="fw-bold fs-2 position-absolute">
                                {/*style={{"bottom": "10px", "left": "10px"}}*/}
                                SpaceX's Starship
                            </div>
                    </div>
                </li>
            </ul>
            {/*// <!-- image with overlaid text  -->*/}
            {<PostSummaryList></PostSummaryList>}
        </>
);
}
export default ExploreComponent;
