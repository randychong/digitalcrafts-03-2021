import { combineReducers } from "redux";
import Username from "./Username"
import Password from "./Password"

const rootReducer = combineReducers({
    Username,
    Password
})

export default rootReducer