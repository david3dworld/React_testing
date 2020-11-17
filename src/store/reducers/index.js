import {
    TOGGLE_COLLAPSED_NAV,
    WINDOW_WIDTH,
    SHOW_LOADER,
    SET_SETTINGS,
    UPDATE_USER,
} from '../actionTypes';
import store from 'store';


const INIT_STATE = {
    navCollapsed: false,
    width: window.innerWidth,
    isLoader: false,
    user: store.get('user'),
    settings: store.get('settings') || {
        allowInviteOnly : false,
    }
};

export default (state = INIT_STATE, action) => {

    switch (action.type) {

        /**
         * Ui
         */
        
        case SHOW_LOADER:
            return {
                ...state,
                isLoader: action.payload,
            };

        case TOGGLE_COLLAPSED_NAV:{
                return {
                    ...state,
                    navCollapsed: action.payload
                };
            }

        case WINDOW_WIDTH: {
            return {
                ...state,
                width: action.payload
            };
        }

        /** 
         * Settings 
         */

         case SET_SETTINGS:
             return {
                 ...state,
                 setting: action.payload
             }
        
        /**
         * User
         */

        case UPDATE_USER:

            store.set('user', action.payload);
            
            return {
                ...state,
                user: action.payload,
            };

        

        default:
            return state;

    }

}