import {GET_USER} from "./action";


export const formReducer = (state=[], action) => {
    switch (action.type) {
        case GET_USER: {
            return [...state, {user: action.user}]
        }

        default: {
            return state
        }

    }
}