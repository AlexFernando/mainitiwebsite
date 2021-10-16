import React, { Component, useEffect } from "react";
import { connect, styled, css, Global } from "frontity";
import Image from "@frontity/components/image";
import StylesCardHover from '../components/styles/cardHoverEffects.css';
import ImageCardEffect from '../images/background.jpg';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle, faMapMarkerAlt, faCheck, faTimes, faStar, faUser, faDoorOpen, faBed, faBath, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faSeedling, faRainbow, faCampground, faHeart} from '@fortawesome/free-solid-svg-icons';

const CardDetails = ({state, actions}) => {

    return (
        <>
            <Global styles={StylesCardHover} />
            <div className="view view-first">  
                <Image src={ImageCardEffect} />  
                <div className="mask">  
                    <h2>Title</h2>  
                    <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>  
                    <a href="#" class="info">Read More</a>  
                </div>  
            </div>  
        </>
    )

}

export default connect(CardDetails);