const intialState = {
    users: [],
    loading: false,
    error: null,
    status: null,
    currentuser:''
};

export const usersReducer = (state = intialState, action) => {
    switch (action.type) {
        case "REGISTER":
            return {
                ...state,
                loading: false,
            };
        case "LOGIN":
            return {
                ...state,
                loading: false,
                status:'success',
                currentuser: action.payload
            };
        default:
            return state;
    }
};