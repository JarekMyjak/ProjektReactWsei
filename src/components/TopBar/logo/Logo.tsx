import React from 'react'
import logo from "./logo.png"
import styled from "styled-components";

const LogoDiv = styled.div`
    padding-right: 2rem;
`

export default function Logo() {
    return (
        <LogoDiv>
            <img src={logo} alt="logo" height="40px"/>
        </LogoDiv>
    )
}
