import { combineReducers } from "redux";
import outputReducer from "./outputReducer";


const rootReducer = combineReducers({
    output: outputReducer,
    input: inputReducer
})

export default rootReducer;