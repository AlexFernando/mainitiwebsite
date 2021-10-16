import React, { Component, useState, useEffect } from "react";
import { connect, styled, css, Global } from "frontity";;
import Image from "@frontity/components/image";
import Loading from './Loading';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle, faMapMarkerAlt, faCheck, faTimes, faHome, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faSeedling, faRainbow, faCampground, faHeart} from '@fortawesome/free-solid-svg-icons';

//import preparation styles
import {AboutContainer, ButtonContainer, ButtonStyles, CardContainer, CardText} from './Preparation';
import {MarginPaddingContainer, HeaderContainer, Title, Separator, CardProduct, ProductDetails, ProductImage, ImageProductCard, SeparatorCard} from './About';

//Presentation Mode 
import CarouselAllStyles from "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// react tab tab
import {Tabs, TabList, Tab, PanelList, Panel} from 'react-tabtab';
import * as customStyle from 'react-tabtab/lib/themes/bootstrap/index';

//styled card details
import StylesCardDetails from '../components/styles/cardDetails.css'

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
        <MarginPaddingContainer>
            <HeaderContainer>
                <Title>{pageAyahuasca.acf.title_page}</Title>
                <Separator></Separator>
            </HeaderContainer>

            <MainParagraph>
                <p>{pageAyahuasca.acf.paragraph_one}</p>
            </MainParagraph>
            
            <Tabs customStyle={customStyle}>
                <TabList>
                    <Tab>Description</Tab>
                    <Tab>Preparation</Tab>
                    <Tab>Ceremony</Tab>
                </TabList>
                
                <PanelList>
                    <Panel>
                        <CardDescriptionContainer>

                            <ImageDescriptionContainer src={pageAyahuasca.acf.image_description.sizes.large} />

                            <div>
                                <h2>Deep Healing</h2>

                                {
                                    pageAyahuasca.acf.paragraph_two.split("%").map( elem => {
                                        return(
                                            <p>{elem.trim()}</p>
                                        )
                                    })
                                }
                            </div>

                        </CardDescriptionContainer>
                    </Panel>

                    <Panel>
                        
                        <Global styles={StylesCardDetails} />

                        <div className="wrapper">
                        {
                        Object.keys(pageAyahuasca.acf.preparing_ayahuasca).map( (elem,index) => {

                            return(
                                <div className="card">
                                    <input type="checkbox" id={"card"+`${index+1}`} className="more" aria-hidden="true" />
                                    <div className="content">
                                        <div className="front" css={css`background-image: url(${pageAyahuasca.acf.preparing_ayahuasca[elem].image_card.sizes.large});`} >
                                            <div className="inner">
                                                <h2>{pageAyahuasca.acf.preparing_ayahuasca[elem].title}</h2>
                                                <div className="rating">
                                                    <FontAwesomeIcon icon={faHome}/>
                                                    <FontAwesomeIcon icon={faHome}/>
                                                    <FontAwesomeIcon icon={faHome}/>
                                                </div>
                                                <label for={"card"+`${index+1}`} class="button" aria-hidden="true">
                                                    Details
                                                </label>
                                            </div>
                                        </div>
                                        <div className="back">
                                            <div className="inner">
                                                <div className="description">
                                                    <p>{pageAyahuasca.acf.preparing_ayahuasca[elem].paragraph}</p>
                                                </div>
                                                <label for={"card"+`${index+1}`} className="button return" aria-hidden="true">
                                                    <FontAwesomeIcon icon={faArrowLeft}/>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        }
                        </div>
                    </Panel>

                    <Panel>
                        
                        <Global styles={StylesCardDetails} />

                        <div className="wrapper">
                        {
                        Object.keys(pageAyahuasca.acf.ayahuasca_ceremony).map( (elem,index) => {

                            return(
                                <div className="card">
                                    <input type="checkbox" id={"card"+`${index+1}`} className="more" aria-hidden="true" />
                                    <div className="content">
                                        <div className="front" css={css`background-image: url(${pageAyahuasca.acf.ayahuasca_ceremony[elem].image_card.sizes.large});`} >
                                            <div className="inner">
                                                <h2>{pageAyahuasca.acf.ayahuasca_ceremony[elem].title}</h2>
                                                <div className="rating">
                                                    <FontAwesomeIcon icon={faHome}/>
                                                    <FontAwesomeIcon icon={faHome}/>
                                                    <FontAwesomeIcon icon={faHome}/>
                                                </div>
                                                <label for={"card"+`${index+1}`} class="button" aria-hidden="true">
                                                    Details
                                                </label>
                                            </div>
                                        </div>
                                        <div className="back">
                                            <div className="inner">
                                                <div className="description">
                                                    <p>{pageAyahuasca.acf.ayahuasca_ceremony[elem].paragraph}</p>
                                                </div>
                                                <label for={"card"+`${index+1}`} className="button return" aria-hidden="true">
                                                    <FontAwesomeIcon icon={faArrowLeft}/>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        }
                        </div>
                    </Panel>
                </PanelList>
            </Tabs>
        </MarginPaddingContainer>
        }
        </>
    )
}

export const MainParagraph = styled.div`
    p {
        margin: 2rem 20rem;
        font-size: 1.2rem;
        color: #3c3c3c;
        line-height: 1.5;

        @media (max-width: 768px) {
            margin: 2rem;
            font-size: 1rem;
        } 
    }
`

/**Card DESCRIPTION */
export const CardDescriptionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 3rem 5rem;
    padding: 2rem 4rem;

    @media (max-width: 768px) {
        margin: 1rem;
        padding: 0;
    } 

    div {
        flex-basis: 60%;


        @media (max-width: 768px) {
            flex-basis: 100%;
        } 

        h2{
            font-size: 1.8rem;
            line-height: 1.2;
            margin-right: 2rem;

            @media (max-width: 768px) {
                font-size: 1.3rem;
            } 
        }

        p {
            font-size: 1rem;
            color: #000;
            line-height: 1.5;
        }
    }
	
`
export const ImageDescriptionContainer = styled(Image)`
    max-width: 480px;
    max-height: 580px;

    @media (max-width: 768px) {
        display: none;
    } 
	
`


export default connect(Ayahuasca);