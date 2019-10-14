import { SELECT_VIDEO_SINGLE } from "./actionTypes";

export const selectVideo = id => ({
    type: SELECT_VIDEO_SINGLE,
    payload: { id }
})
