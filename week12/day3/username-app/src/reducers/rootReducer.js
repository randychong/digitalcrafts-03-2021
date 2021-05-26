const initialState = {
    username: "Randy",
    array: []
}

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case "CHANGE_NAME":
            return { ...state, username: "Joe" }

        case "FILL_ARRAY":
            return { ...state, array: [{name: "Joe"}, {name: "Mikael"}]}

        default:
            return state
    }
}

export default rootReducer