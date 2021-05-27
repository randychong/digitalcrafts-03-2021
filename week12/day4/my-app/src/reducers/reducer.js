import { INSERT_OBJECT } from "../action-types/action.types"

const initialState = {
    fakeData: [{ userName:"Randy", height: "8.0" }],
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case INSERT_OBJECT:
            return {
                fakeData: [{ userName:"Joe", height: "7.1" }]
            }
        default:
            return state
    }
}