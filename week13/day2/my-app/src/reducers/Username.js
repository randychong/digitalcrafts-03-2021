import { DISPLAY_NAME } from "../action-types/action-types"

const initialState = ""

const Username = (state = initialState, action) => {
    switch (action.type) {
      case DISPLAY_NAME:
        return (state = action.payload);
  
      default:
        return state;
    }
  };
  export default Username;