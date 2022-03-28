import React from "react";
import personalDetail from '../data/personaldetail.json';
const PersonalDetailReducer = (state = personalDetail,action) => {
    switch (action.type){
        case 'edit-detail':
            return {...state,firstName: action.detail.firstName,
                lastName: action.detail.lastName,
                bio: action.detail.bio}
        default:
            return state;
    }
}
export default PersonalDetailReducer;