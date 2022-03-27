const data = [
    {
        _id: "123",
        do: "Accelerate the world's transition to sustainable energy",
        done: false
    },
    {
        _id: "234",
        do: "Reduce space transportation costs to become a spacefaring civilization",
        done: false
    },
];

const todosReducer = (state = data, action) => {
    switch (action.type){
        case "create-todo":
            return[
                ...state,
                {...action.newTodo, _id: new Date().getTime()+"", done: false}
            ]
        case "delete-todo":
            return state.filter((todo) => todo !== action.todo);
        case "update-todo":
            return state.map((todo) => todo._id === action.todo._id ? action.todo : todo);
        default:
            return state;
    }
}

export default todosReducer;