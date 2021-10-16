import React, { Component, useState, useEffect } from "react";
import { connect, styled, css, Global } from "frontity";;
import Image from "@frontity/components/image";
import Loading from './Loading';
import PageError from './page-error'


const TestimonialPage = ({ state, actions, libraries }) => {
    return(
        <ContainerCenter>
            <PageError></PageError>
        </ContainerCenter>
    )
}

const ContainerCenter = styled.div`
    display: flex;
    justify-content: center;
`


export default connect(TestimonialPage);