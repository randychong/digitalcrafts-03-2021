import { DISPLAY_PASSWORD } from "../action-types/action-types"

const initialState = ""

const Password = (state = initialState, action) => {
    switch (action.type) {
      case DISPLAY_PASSWORD:
        return "";
  
      default:
        return state;
    }
  };
  export default Password;