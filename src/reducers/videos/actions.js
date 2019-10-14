import { ADD_VIDEO } from "./actionTypes";
import { db } from '../../config/firebase'

export const registerVideo = (id, title) => async dispatch => {
    try {
        await db.ref('videos').child(id).update({ id, title })
        dispatch(addVideo({ id, title }))
    } catch (err) {
        console.log(err.message)
    }
}

export const addVideo = (id, title) => ({
    type: ADD_VIDEO,
    payload: { id, title }
})

export const fetchVideos = () => (dispatch) => {
    db.ref('videos').on('value', (snapshot) => {
        snapshot.forEach(child => {
            const { id, title } = child.val()
            dispatch(addVideo(id, title))
        })
    })
}