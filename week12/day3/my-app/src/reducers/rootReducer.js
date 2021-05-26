const initialState = {
    counter: 0,
    userName: "",
    address: {},
}

function rootReducer(state = initialState,action){
    switch(action.type){
        case "ADD":
            return {...state, counter: state.counter + 1};

        case "SUBTRACT":
            return {...state, counter: state.counter - 1};

        default:
            return state;
    }
}

export default rootReducer