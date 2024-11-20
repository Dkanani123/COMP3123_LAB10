import { LOGIN, LOGOUT } from "./actions";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, user: action.payload.user, token: action.payload.token };
        case LOGOUT:
            return { ...state, user: null, token: null };
        default:
            return state;
    }
};

export default reducer;
