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
        const videos = snapshot.val()

        const ordered = Object.keys(videos)
            .sort((a, b) => videos[a].title < videos[b].title ? -1 : 1)
            .map(id => ({ id, title: videos[id].title }))

        ordered.forEach(video => {
            const { id, title } = video
            dispatch(addVideo(id, title))
        })
    })
}