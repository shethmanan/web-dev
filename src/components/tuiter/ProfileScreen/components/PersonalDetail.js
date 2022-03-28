import React from "react";
import './personaldetail.css'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const PersonalDetail = () => {


    const details = useSelector(({personalDetail = {
        firstName: "Manav",
        lastName: "Sheth",
        handle: "m.sheth",
        profilePicture: "../../tuiter/images/profile.jpg",
        bannerPic: "../../tuiter/images/spacex.jpg",
        bio: "MSCS@Northeastern University | Software Engineer | Tech Enthusiast | Love travelling, music and movies",
        website: 'https://www.linkedin.com/in/shethmanan/',
        location: 'Boston, MA', dateOfBirth: 'Aug 01, 2000', dateJoined: 'Feb, 2015',
        followingCount: 312, followersCount: 180, tuits: 121
    }}) => personalDetail)



        return (
            <>
                <div className="row">
                    <div className="d-flex gap-3 align-items-baseline">

                        <Link to="/tuiter/">
                            <i className="fas fa-arrow-left "></i>
                        </Link>

                        <div>
                            <span className="fs-5 fw-bold">{details.firstName} {details.lastName}</span>
                            <br/>
                            <small>{details.tuits}<span> Tweets</span></small>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={details.bannerPic} className="h-10"></img>
                </div>
                <div>
                    <img src={details.profilePicture}
                         className="img-thumbnail rounded-circle w-25 overlapProfile">
                    </img>

                    <Link className="btn border-1 border-white rounded-pill fw-bold mt-2 float-right flr"
                          to="/tuiter/profile/edit">
                        Edit Profile
                    </Link>
                </div>
                <div className="row">
                    <span className="fs-4 fw-bold">{details.firstName} {details.lastName}</span>
                    <small> {details.handle && <span>@{details.handle}</span>}</small>
                </div>
                <div className="row">
                    {details.bio}
                </div>
                <div className="d-flex gap-4">
                    <span>
                        {details.location && <i className="fas fa-map-marker-alt"></i>}
                        <span className="p-1">{details.location}</span>

                    </span>
                    <span>
                        {details.dateOfBirth && <i className="fas fa-birthday-cake"></i>}
                        <span className="p-1">{details.dateOfBirth}</span>

                    </span>
                    <span>
                        {details.dateJoined && <i className="far fa-calendar"></i>}
                        <span className="p-1">{details.dateJoined}</span>
                    </span>
                </div>
                <div className="d-flex gap-3">
                    <span><span
                        className="fw-bold">{details.followingCount}</span> {details.followingCount && <>Following</>}</span>
                    <span><span
                        className="fw-bold">{details.followersCount}</span> {details.followersCount && <>Followers</>}</span>
                </div>
            </>
        );
    }

export default PersonalDetail;