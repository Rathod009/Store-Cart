import { getStorage, setStorage } from "../../services";

const initialState = getStorage('admin') ? true : false;

export const adminReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADMININ' :
            setStorage('admin', action.id);
            return true;
        case 'ADMINOUT':
            localStorage.removeItem('admin');
            return false;
        default :
            return state;
            
    }
}