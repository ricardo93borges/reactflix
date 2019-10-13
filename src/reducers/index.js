import { combineReducers } from "redux";
import videos from './videos'

const reducers = combineReducers({
  videos
});

const rootReducer = (state, action) => {
  return reducers(state, action);
};

export default rootReducer;
