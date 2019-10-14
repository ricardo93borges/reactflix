import React from 'react'

import { Button } from './style.js';

const RegisterButton = ({ onClick }) => {

    return (
        <Button onClick={onClick}>Register video</Button>
    )
}

export default RegisterButton