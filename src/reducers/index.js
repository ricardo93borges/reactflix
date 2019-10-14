import { combineReducers } from "redux";
import videos from './videos'
import ui from './ui'
import videoSingle from './video-single'

const reducers = combineReducers({
  videos,
  ui,
  videoSingle
});

const rootReducer = (state, action) => {
  return reducers(state, action);
};

export default rootReducer;
