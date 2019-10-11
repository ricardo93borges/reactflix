import React from 'react'

import { Container, Title } from './style.js';

const VideosSingle = () => (
    <Container>
        <iframe title="video" width='560' height='450' src='https://www.youtube-nocookie.com/embed/sYe4r8WXGQg' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
        <Title>Video title</Title>
    </Container>
)

export default VideosSingle