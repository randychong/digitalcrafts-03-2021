import { DISPLAY_NAME, DISPLAY_PASSWORD } from "../action-types/action-types"

export const displayName = (dispatch, inputValue) => {
    return dispatch({
        type: DISPLAY_NAME, payload: inputValue
    })
}

export const displayPassword = (dispatch, inputValue) => {
    return dispatch({
        type: DISPLAY_PASSWORD, payload: inputValue
    })
}