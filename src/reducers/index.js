import { combineReducers } from "redux";
import videos from './videos'
import ui from './ui'

const reducers = combineReducers({
  videos,
  ui
});

const rootReducer = (state, action) => {
  return reducers(state, action);
};

export default rootReducer;
