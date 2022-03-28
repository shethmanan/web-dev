import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import "./personaldetail.css"

const EditProfile = () => {

    const personalDetails = useSelector(({personalDetail}) => personalDetail)
    const data = {
        firstName: personalDetails.firstName,
        lastName: personalDetails.lastName,
        bio: personalDetails.bio,
        bannerPic: personalDetails.bannerPic,
        profilePicture: personalDetails.profilePicture

    }
    let [details, updateDetail] = useState(data);
    const firstNameHandler = (fName) => {
        updateDetail({...details,firstName: fName});
    }
    const lastNameHandler = (lName) => {
        updateDetail({...details,lastName: lName});
    }
    const bioHandler = (myBio) => {
        updateDetail({...details,bio: myBio});
    }
    const dispatch = useDispatch();
    const saveDetail = () =>{
        dispatch({
            detail: details, type:"edit-detail"
        });
    }
    return (
        <>
            <div className="">
                <div className="d-flex justify-content-between">
                    <div className="d-flex gap-3 align-items-center">
                        <Link className=""
                              to="/tuiter/profile">
                            <i className="fas fa-times" >
                            </i>
                        </Link>
                        <span className="fs-5 fw-bold">Edit Profile</span>
                    </div>
                    <Link className="btn btn-dark border-1 border-white rounded-pill fw-bold mt-2 w-25 m-1"
                          onClick={saveDetail}
                          to="/tuiter/profile">
                        Save
                    </Link>
                </div>
            </div>
            <div>
                <img src={details.bannerPic} className="h-10"></img>
            </div>
            <div>
                <img src={details.profilePicture}
                     className="img-thumbnail rounded-circle w-25 overlapProfile">
                </img>
            </div>
            <div className="mb-3">
                <label className="form-label" >First Name</label>
                <input type="text" className="form-control bg-transparent text-white" id="fname" value={details.firstName}
                       placeholder="first name"
                       onChange={(event) => firstNameHandler(event.target.value)}>
                </input>
            </div>
            <div className="mb-3">
                <label className="form-label" >Last Name</label>
                <input type="text" className="form-control bg-transparent text-white" id="lname" value={details.lastName}
                       placeholder="last name"
                       onChange={(event) => lastNameHandler(event.target.value)}>
                </input>
            </div>
            <div className="mb-3">
                <label className="form-label" >Bio</label>
                <textarea rows="3" className="form-control bg-transparent text-white" id="bio" placeholder="bio"
                value={details.bio}
                onChange={(event) => bioHandler(event.target.value)}>
                </textarea>
            </div>

        </>
    );
}
export default EditProfile;