const ActivePageReducer = (state = '/', action) => {
    switch (action.type){
        case 'update-page':
            return action.currentPage;
        default:
            return(state);
    }
}

export default ActivePageReducer;