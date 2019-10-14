import React from 'react';
import { connect } from 'react-redux'

import RegisterButton from '../RegisterButton';
import { HeaderTitle, Container } from "./styles";

import { openRegisterVideos } from '../../reducers/ui/actions'

const Header = ({ onOpenRegisterVideo }) => {
    return (
        <Container>
            <HeaderTitle>Reactflix</HeaderTitle>
            <RegisterButton onClick={onOpenRegisterVideo} />
        </Container>
    );
}


const mapDispatchToProps = (dispatch) => ({
    onOpenRegisterVideo: () => dispatch(openRegisterVideos())
})

export default connect(null, mapDispatchToProps)(Header)