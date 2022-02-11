import { combineReducers } from "redux";
import { userReducer } from "../modules/users";
// import bankReducer from "./bankReducer"


const reducers = combineReducers({
  user: userReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>