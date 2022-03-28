import tuits from "../data/tuits.json";

const tuitsReducer = (state = tuits, action) => {
    switch (action.type){
        case "create-tuit":
            const newTuitObject = {
                _id: new Date().getDay() + "",
                tuit: action.tuit,
                topic: "Web Development",
                handle: "ReactJS",
                time: "now",
                postedBy: {
                    username: "ReactJS"
                },
                stats: {
                    comments: 111,
                    retuits: 222,
                    likes: 333
                },
                'logo-image': "../tuiter/images/react.png",
                'avatar-image': "../tuiter/images/react.png",
            }
            return [newTuitObject,...state];
        case "delete-tuit":
            return state.filter(tuit => tuit._id !== action.tuit._id);
        case "like-tuit":
            return state.map((tuit) =>{
                if(tuit._id === action.tuit._id){
                    if(action.tuit.liked){
                        tuit.liked = false;
                        tuit.stats.likes--;
                    }else{
                        tuit.liked = true;
                        tuit.stats.likes++;
                    }
                }
                return tuit;
            })
        default:
            return tuits;
    }

}

export default tuitsReducer;