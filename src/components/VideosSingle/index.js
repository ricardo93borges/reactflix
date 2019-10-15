import React from 'react'

import { Container, Title } from './style.js';

const VideosSingle = ({ id, title }) => (
    <Container>
        <iframe
            title="video"
            height='350'
            src={`https://www.youtube-nocookie.com/embed/${id}`}
            frameBorder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen ></iframe>
        <Title>{title}</Title>
    </Container>
)

export default VideosSingle