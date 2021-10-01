import React, { Component, useEffect } from "react";
import { connect, styled, css, Global } from "frontity";;
import Image from "@frontity/components/image";
import Loading from './Loading';
import PresentationMode from './testimonials/PresentationMode';

const Retreat = () => {

    return(
        <>
            <MarginTop />
            <PresentationMode />
        </>
    )
}

const MarginTop = styled.div`
    margin-top: 6.5rem;
`

export default connect(Retreat);