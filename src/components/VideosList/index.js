import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchVideos } from "../../reducers/videos/actions";
import { selectVideo } from "../../reducers/video-single/actions";

import { Container, Video, VideoThumb, VideoTitle, PlayStyled } from "./style.js";

const VideosList = ({ videos, fetchVideos, handleClick }) => {

    useEffect(() => {
        fetchVideos()
    }, [fetchVideos])

    function click(e, id) {
        e.preventDefault()
        handleClick(id)
    }

    return (
        <Container>
            {Object.keys(videos).map(id => (
                <Video key={id}>
                    <div onClick={(e) => click(e, id)}>
                        <VideoThumb>
                            <PlayStyled />
                        </VideoThumb>
                        <VideoTitle>{videos[id].title}</VideoTitle>
                    </div>
                </Video>
            ))}
        </Container >
    )
}

const mapStateToProps = state => ({
    videos: state.videos
});

const mapDispatchToProps = dispatch => ({
    fetchVideos: () => dispatch(fetchVideos()),
    handleClick: id => dispatch(selectVideo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(VideosList)