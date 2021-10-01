import React, { Component, useState, useEffect } from "react";
import { connect, styled, css, Global } from "frontity";;
import Image from "@frontity/components/image";
import Loading from './Loading';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle, faMapMarkerAlt, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faSeedling, faRainbow, faCampground, faHeart} from '@fortawesome/free-solid-svg-icons';

//import preparation styles
import {AboutContainer, ButtonContainer, ButtonStyles, CardContainer, CardText} from './Preparation';
import {CardAbout, ImageAboutStyles} from './About';

//Presentation Mode 
import CarouselAllStyles from "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Ayahuasca = ({ state, actions, libraries }) => {

    //     
    useEffect(() => {
        actions.source.fetch("/ayahuasca");
    }, []);

    // Get the data of the post.
    const pageAyahuasca = state.source.page[281];

    return(
        <>
        {typeof pageAyahuasca === "undefined" ? <Loading /> : 
        <>
            <MarginTop />
            
            <AboutContainer>
                <h1>{pageAyahuasca.acf.title_page}</h1>
                <p>{pageAyahuasca.acf.paragraph_one}</p>
                <p>{pageAyahuasca.acf.paragraph_two}</p>

                <CardAbout>
                    <div>
                        <p>{pageAyahuasca.acf.what_is_ayahuasca.paragraph_one}</p>
                    </div>
                    <ImageAboutStyles src={pageAyahuasca.acf.what_is_ayahuasca.image_ref.sizes.large} />
                </CardAbout>

                <CardAbout>
                    <div>
                        <p>{pageAyahuasca.acf.what_is_ayahuasca.paragraph_two}</p>
                    </div>
                    <ImageAboutStyles src={pageAyahuasca.acf.what_is_ayahuasca.image_ref.sizes.large} />
                </CardAbout>


                <CardContainer>
                    {Object.keys(pageAyahuasca.acf.ayahuasca_ceremony).map( (item, index) => {
                        return(
                            <CardText>
                                <p><span>{index+1}.- </span>{pageAyahuasca.acf.ayahuasca_ceremony[item]}</p>
                            </CardText>
                        )
                    })}     
                </CardContainer>


            <div>
                <Global styles={CarouselAllStyles} />

                <Carousel autoFocus={true} showThumbs={false} showStatus={false} useKeyboardArrows className="presentation-mode">
                    <div key="content-0" className="my-slide primary">
                        <p>{pageAyahuasca.acf.preparing_ayahuasca.text_line}</p>
                    </div>

                    <div key="content-3" className="my-slide content">
                        <img src={pageAyahuasca.acf.preparing_ayahuasca.image_one.sizes.large} />
                    </div>
                    <div key="content-11" className="my-slide content">
                        <p>{pageAyahuasca.acf.preparing_ayahuasca.paragraph}</p>     
                    </div>
                    <div key="content-3" className="my-slide content">
                        <img src={pageAyahuasca.acf.preparing_ayahuasca.image_two.sizes.large} />
                    </div>

                    <div key="content-10" className="my-slide secondary">
                        <img src={pageAyahuasca.acf.preparing_ayahuasca.image_three.sizes.large} />
                    </div>

                </Carousel>
            </div>

            </AboutContainer>
        </>
        }
        </>
    )
}

const MarginTop = styled.div`
    margin-top: 6.5rem;
`

export default connect(Ayahuasca);