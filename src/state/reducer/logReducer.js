import { getStorage, setStorage } from "../../services";

const initialState = getStorage('user') ? true : false


export const logReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOGIN' :
            setStorage('user', action.id); 
            return true;
        case 'LOGOUT':
            localStorage.removeItem('user');
            return false;
        default :
            return state;
    }
}