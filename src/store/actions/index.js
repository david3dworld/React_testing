import {
    SHOW_LOADER,
    TOGGLE_COLLAPSED_NAV,
    WINDOW_WIDTH,
    UPDATE_USER,
    SET_SETTINGS,
} from '../actionTypes';


/**
 *  settings
 */

 export function setSettings(data) {
    return {
        type: SET_SETTINGS,
        payload: data
    }; 
 }

/**
 * user
 */

export function updateUser(data) {
    return {
        type: UPDATE_USER,
        payload: data
    };
}


/**
 * Ui
 */

export const toggleCollapsedNav = (isNavCollapsed) => {
    return {
        type: TOGGLE_COLLAPSED_NAV, 
        payload: isNavCollapsed
    };
};

export const updateWindowWidth = (width) => {
    return {
        type: WINDOW_WIDTH,
        payload: width
    };
}

export function showLoader(flag){
    return {
        type: SHOW_LOADER,
        payload: flag
    };
}