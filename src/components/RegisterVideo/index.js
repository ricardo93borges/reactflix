import React, { useState } from 'react'
import { connect } from 'react-redux'

import { Form, ButtonClose } from './style.js';
import { registerVideo } from '../../reducers/videos/actions.js';

import { closeRegisterVideos } from '../../reducers/ui/actions'

const RegisterVideo = ({ onSubmit, onCloseRegisterVideo }) => {
    const [id, setId] = useState('')
    const [title, setTitle] = useState('')

    async function handleSubmit() {
        await onSubmit(id, title)
        setId('')
        setTitle('')
    }

    return (
        <Form>
            <h2>Register video</h2>

            <label htmlFor="id">ID</label>
            <input
                id="id"
                name="id"
                type="text"
                value={id}
                onChange={e => setId(e.target.value)} />

            <label htmlFor="title">Title</label>
            <input
                id="title"
                type="text"
                name="title"
                value={title}
                placeholder="title"
                onChange={e => setTitle(e.target.value)} />

            <button type='submit' onClick={handleSubmit}>Register</button>

            <ButtonClose type='button' onClick={onCloseRegisterVideo} >&times;</ButtonClose>
        </Form >
    )
}

const mapDispatchToProps = (dispatch) => ({
    onSubmit: async (id, title) => {
        await dispatch(registerVideo(id, title))
    },
    onCloseRegisterVideo: () => dispatch(closeRegisterVideos())
})

export default connect(null, mapDispatchToProps)(RegisterVideo)