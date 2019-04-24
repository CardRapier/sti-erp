import React from 'react'
import { Container } from 'mdbreact';

function Start () {
    if(!localStorage.getItem('user')){

    }
    return (
        <Container>
            <h1>Welcome {localStorage.getItem('user')} </h1>
        </Container>
    )
}

export default Start