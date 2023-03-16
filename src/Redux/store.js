import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import userReducer from "./users/user.reducer";

let rootReducer = combineReducers({
    userReducer:userReducer
})
export const store = legacy_createStore(rootReducer,applyMiddleware(thunk)) //rootReducer,applyMiddleware(thunk)