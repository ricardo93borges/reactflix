import React from 'react'

import { Container, Video, VideoThumb, VideoTitle, PlayStyled } from "./style.js";

const VideosList = () => (
    <Container>
        {
            Array.from({ length: 10 }).map((item, index) => (
                <Video key={index}>
                    <VideoThumb>
                        <PlayStyled />
                    </VideoThumb>
                    <VideoTitle>Title</VideoTitle>
                </Video>
            ))
        }
    </Container>
)

export default VideosList