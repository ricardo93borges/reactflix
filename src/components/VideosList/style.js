import styled from "styled-components";
import Play from "../Play";

export const PlayStyled = styled(Play)`
    height: 50px;
    width: 50px;
    fill: #999;
    transition: all .15s ease-in-out;
`

export const Video = styled.section`
    &:hover ${PlayStyled} {
        transform: scale(1.5);
    }    
`

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 10px;

    & ${Video} {
        flex: 1 1 300px;
        margin: 0 5px 5px;
    }
`

export const VideoThumb = styled.div`
    border: 1px solid #999;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const VideoTitle = styled.h2`
    font-size: 18px;
`