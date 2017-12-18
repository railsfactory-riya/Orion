const UserReducer = (state = {
    email: "Admin",
    password: "rails123"
}, action) => {
    switch (action.type) {
        case "SET_EMAIL":
            state = {
                ...state,
                email: action.payload
            };
            break;
        case "SET_PASSWORD":
            state = {
                ...state,
                password: action.payload
            };
            break;
    }
    return state;
};

export default UserReducer;
