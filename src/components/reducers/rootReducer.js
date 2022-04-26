import { combineReducers } from "redux";
import { calendarReducer } from "./calendarReduces";
import { uiReducer } from "./uiReducer";


export const rootReducer = combineReducers({
    ui: uiReducer,
    calendar: calendarReducer,
    // TODO: AuthReducer,

    
})