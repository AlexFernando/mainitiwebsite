import React, { Component, useState, useEffect } from "react";
import { connect, styled, css, Global } from "frontity";
import Image from "@frontity/components/image";
import Loading from './Loading';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle, faMapMarkerAlt, faCheck, faTimes, faStar, faUser, faDoorOpen, faBed, faBath, faArrowLeft, faHome, faUtensils, faHandsHelping, faCarrot, faAppleAlt, faFish } from '@fortawesome/free-solid-svg-icons'
import { faSeedling, faRainbow, faCampground, faHeart} from '@fortawesome/free-solid-svg-icons';

//import preparation styles
import {AboutContainer, ButtonContainer, ButtonStyles} from './Preparation'


// es6
import {Tabs, TabList, Tab, PanelList, Panel} from 'react-tabtab';
import * as customStyle from 'react-tabtab/lib/themes/bootstrap/index';

//card details
import CardDetails from './CardDetails';
import StylesCardDetails from '../components/styles/cardDetails.css'

import {CardDescriptionContainer, ImageDescriptionContainer} from './Ayahuasca';

// scroll effect example
// You can live edit this code below the import statements
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const About = ({ state, actions, libraries }) => {

    //     
    useEffect(() => {
        actions.source.fetch("/about");
    }, []);

    // Get the data of the post.
    const pageAbout = state.source.page[223];

    const[view, setView] = useState(0);
    const [colorsActive, setColorsActive] = useState([
        false,
        false,
        false,
        false,
    ]);

    const setActions = (id, e) => {
        setView(id);
    }


    // Get the html2react component.
    const Html2React = libraries.html2react.Component;
    //const BannerSlider = homepage.acf.banner_slider;  
    return(
        <>
        {typeof pageAbout === "undefined" ? <Loading /> : 
        <MarginPaddingContainer>
            <Fade top duration={2100}>
                <HeaderContainer>
                    <Title>{pageAbout.acf.title_page}</Title>
                    <Separator></Separator>
                </HeaderContainer>
          

                <MainParagraph>
                    <p>{pageAbout.acf.line_text}
                    {pageAbout.acf.paragraph_text}</p>
                </MainParagraph>
            </Fade>

            {/* <CardProduct>
                <ProductDetails>
                    <h1>Our Center</h1>
                    <SeparatorCard></SeparatorCard>
                    <p>{pageAbout.acf.line_text}</p>
                    {
                        pageAbout.acf.paragraph_text.split("%").slice(1).map( elem => {
                            return(
                                <p>{elem.trim()}</p>
                            )
                        })
                    }
                    
                </ProductDetails>

                <ProductImage>
                    <ImageProductCard src={pageAbout.acf.presentation_group.outside_maloka.sizes.large} alt="" />
                </ProductImage>

                <ProductDetails>
                {
                        pageAbout.acf.paragraph_text.split("%").slice(0,1).map( elem => {
                            return(
                                <p>{elem.trim()}</p>
                            )
                        })
                    }
                </ProductDetails>
            </CardProduct> */}

            <>
                <Global styles={StylesCardDetails} />

                <div className="wrapper">
                    <Zoom top duration={2100}>
                        <div className="card">
                            <input type="checkbox" id="card1" className="more" aria-hidden="true" />
                            <div className="content">
                                <div className="front" css={css`background-image: url(${pageAbout.acf.accomodation_section.image_ref.sizes.large});`} >
                                    <div className="inner">
                                        <h2>Accomodation</h2>
                                        <label for="card1" class="button" aria-hidden="true">
                                            Details
                                        </label>
                                    </div>
                                </div>
                                <div className="back">
                                    <div className="inner">
                                        <div className="description">
                                            <p>{pageAbout.acf.accomodation_section.paragraph}</p>
                                            <p>{pageAbout.acf.accomodation_section.note_ref}</p>
                                        </div>
                                        <label for="card1" className="button return" aria-hidden="true">
                                            <FontAwesomeIcon icon={faArrowLeft}/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                  
                        <div className="card">
                            <input type="checkbox" id="card2" className="more" aria-hidden="true" />
                            <div className="content">
                                <div className="front" css={css`background-image: url(${pageAbout.acf.meals_section.image_ref.sizes.large});`} >
                                    <div className="inner">
                                        <h2>Meals</h2>
                                        <label for="card2" class="button" aria-hidden="true">
                                            Details
                                        </label>
                                    </div>
                                </div>
                                <div className="back">
                                    <div className="inner">
                                        <div className="description">
                                            <p>{pageAbout.acf.meals_section.paragraph}</p>
                                            <p>{pageAbout.acf.meals_section.note_ref}</p>
                                        </div>
                                        <label for="card2" className="button return" aria-hidden="true">
                                            <FontAwesomeIcon icon={faArrowLeft}/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <input type="checkbox" id="card3" className="more" aria-hidden="true" />
                            <div className="content">
                                <div className="front" css={css`background-image: url(${pageAbout.acf.volunteering_section.image_ref.sizes.large});`} >
                                    <div className="inner">
                                        <h2>Volunteering</h2>
                                        {/* <p className="subtitle">
                                            This is a subtitle for Volunteering, complete with some text later
                                        </p> */}
                                        <label for="card3" class="button" aria-hidden="true">
                                            Details
                                        </label>
                                    </div>
                                </div>
                                <div className="back">
                                    <div className="inner">
                                        <div className="description">
                                            <p>{pageAbout.acf.volunteering_section.paragraph}</p>

                                            {
                                                pageAbout.acf.volunteering_section.list_task.split("%").map( elem => {
                                                    return(
                                                        <li>{elem.trim()}</li>
                                                    )
                                                })
                                            }
                                            <p>{pageAbout.acf.volunteering_section.note_ref}</p>
                                        </div>
                                        <label for="card3" className="button return" aria-hidden="true">
                                            <FontAwesomeIcon icon={faArrowLeft}/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                </div>
            </>
            
            <Fade top duration={2100}>
                <WarningCard>
                    <h1>WARNING!</h1>
                    {pageAbout.acf.warning_note.split("%").map( elem => {
                        return(
                            <p>{elem.trim()}</p>
                        )
                    })}

                </WarningCard>
            </Fade>

            <ContainerCardImagesFrontText>
                <Fade right duration={2100}>
                    <ContainerImage>
                        <ImageTextFront src={pageAbout.acf.presentation_group.inside_maloka.sizes.large}/>

                        <FrontImageTextCenter>
                            <h3>The Maloka</h3>
                            <p>{pageAbout.acf.presentation_group.maloka_text}</p>
                        </FrontImageTextCenter>
                    </ContainerImage>
                </Fade>

                <Fade left duration={2100}>
                    <ContainerImage>

                        <ImageTextFront src={pageAbout.acf.presentation_group.community_house_image_two.sizes.large}/>

                        <FrontImageTextCenter>
                            <h3>Community House</h3>
                            {pageAbout.acf.presentation_group.community_house_text.split("%").slice(1,2).map( elem => {
                                return(
                                    <p>{elem.trim()}</p>
                                )
                            })}
                        </FrontImageTextCenter>

                    </ContainerImage>
                </Fade>
            </ContainerCardImagesFrontText>

            <ContainerDirections>    
                <Fade right duration={2100}>     
                    <CardDirections>
                        <div>
                            <h2>How to find us</h2>
                            <p>{pageAbout.acf.how_to_find_us.paragraph}</p>
                            <p>{pageAbout.acf.how_to_find_us.note_ref}</p>
                        </div>
                    </CardDirections>
                </Fade>

                <Zoom top duration={2100}>
                    <CardDirections>
                        <Content>
                            <Html2React html={pageAbout.content.rendered} />
                        </Content>
                    </CardDirections>
                </Zoom>
            </ContainerDirections>

        </MarginPaddingContainer>
        }
        </>
    )
}


const InitialParagraph = styled.div`
    margin-top: 3rem;
    padding: 3rem;
    text-align: center;
`;

const FirstSectionAbout = styled.div`
    display: flex;
    background-color: #0c884a;
    padding: 3rem 20rem;
    color: #fff;

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 2rem;
    }

    div {

        :nth-of-type(1){
            flex-basis: 30%;   
            margin-right: 10rem;

            @media (max-width: 768px) {
                margin-right: 0;
            }

            h4 {
                font-size: 1.4rem;
            }
        }

        :nth-of-type(2){
            flex-basis: 60%;
            font-size: 1.2rem;

            h4 {
                font-size: 1.4rem;
            }

            p{
                font-size: 1.3rem;
            }
        }
    }

`
export const CardContainerAll = styled.div`
    display: flex;
    flex-basis: 30%;
    padding: 5rem;
    justify-content: space-between;
`

export const CardAbout = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;
    margin: 3rem 0;
    border-radius: .8rem;

    box-shadow: 0 15px 30px 1px grey;
	background: rgba(255, 255, 255, 0.90);
	text-align: center;

    div {
        padding: 4rem;
        font-size: 1.3rem;
        color: #344055;
        //text-align: justify;

        li {
            text-align: start;
        }
    }
`
export const ImageAboutStyles = styled(Image)`
    border-radius: 0 .8rem .8rem 0;
    max-width: 100%;
    max-height: 100%;
`

const Content = styled.div`

`

/**TITLE SEPARATOR */

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        text-transform: uppercase;
        font-size: 1.5rem;
        padding: 1rem 5rem;

        @media(max-width: 768px) {
            font-size: 1.2rem;
            padding: 1rem;
        }


    }
`

export const Title = styled.h2`

    font-weight: 400;
    line-height: 1;
    letter-spacing: 3px;
    margin: 2rem 15%;
    text-transform: capitalize;
    text-align: center;
 
    @media(min-width: 768px) {
        font-size: 3rem;
    }

    @media(max-width: 768px) {
        font-size: 2rem;
        text-align: center;
    }
`

export const Separator = styled.span`
    display: block;
    width: 12rem;
    height: 12px;
    margin-top: .5rem;
    margin-bottom: 1rem;
    border-radius: 20px;
    background-color: #44841a;
    align-self:center;


    @media(max-width: 768px) {
        width: 6rem;
        height: 8px;
    }
`
export const MarginPaddingContainer = styled.div`
    margin: 10% 8% 3% 8%;

    @media (max-width: 768px) {
        margin: 15% 0 3% 0;
    } 
`
export const MainParagraph = styled.div`
    p {
        margin: 3% 1%;
        font-size: 1.2rem;
        color: #3c3c3c;
        line-height: 1.5;
        text-align: justify;

        @media (max-width: 768px) {
            margin: 3%;
            font-size: 1rem;
        } 
    }
`
export const CardProduct = styled.div`
    display: flex;
    justify-content: center;
	text-align: center;
    padding: 2rem 6%;

    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
        height: 100%;
        padding: 2rem 0rem;
        padding-bottom: 0;
    } 
`
export const ProductDetails = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-direction: column;
	height: auto;
    padding: 3rem;
    flex-basis: 50%;
    background: #0c884a;


    @media (max-width: 768px) {
        flex-basis: 100%;
        padding: 2rem 1rem;
    } 

    h1 {
        font-family: 'Old Standard TT', serif;
        display: inline-block;
        font-size: 34px;
        color: #FFF;
        margin: 0;

        @media (max-width: 768px) {
            font-size: 1.6rem;
        } 
    }

    p {
        font-family: 'Farsan', cursive;
	    font-size: 20px;
	    color: #fff;

        @media (max-width: 768px) {
            font-size: 1rem;
            padding-left: 1rem;
            padding-right: 1rem;
        } 
	
    }

    li {
        font-family: cursive;
	    font-size: 18px;
	    color: #fff;
        margin-bottom: .5rem;
        text-align: start;

        @media (max-width: 768px) {
            font-size: 1rem;
            padding-left: 1rem;
            padding-right: 1rem;
        } 
    }
`

export const SeparatorCard = styled.span`
    display: block;
    width: 6rem;
    height: 4px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-radius: 20px;
    background-color: #fff;

    @media(max-width: 768px) {
        width: 3rem;
        height: 3px;
    }
`

export const ImageProductCard = styled(Image)`
    width: 100%;height: 100%;
`

export const ProductImage = styled.div`
    display: flex;
	height: auto;
    flex-basis: 40%;
	//float: right;
	width: 100%;

    @media (max-width: 768px) {
        flex-basis: 100%;
	    width: 100%;
    } 
`

const WarningCard = styled.div`

    display: flex;
    flex-direction: column;
    border-radius: .5rem;
    //background-color: yellow;
    padding: 2%;
    text-align: center;
    margin: 5% 2%;
    border: 1px solid #c1c1c1;

    @media (max-width: 768px) {
        margin: 0!important;
        padding: 0!important;
    }

    h1{
        font-size: 1.8rem;
        
        @media (max-width: 768px) {
            font-size: 1.2rem;
            padding: .5rem 2rem;
        }
        
        color: #000;
    }

    p {
        font-size: 1.2rem;
        color: #000;
        margin: .5rem;

        @media (max-width: 768px) {
            font-size: .9rem;
            padding: .5rem 2rem;
        }
    }
`
export const ContainerCardImagesFrontText = styled.div`


`

export const ContainerImage = styled.div`
    position: relative;
    text-align: center;
    color: #000;

    @media(max-width: 768px) {
        position: unset;
    }
`
export const ImageTextFront = styled(Image)`
    max-width: 100%;
    max-height: 100%;
`

// const FrontImageText = styled.div`
//     position: absolute;
//     top: 10px;
//     left: 10px;
//     font-size: 1.8rem;
// `

export const FrontImageTextCenter = styled.div`
    max-width: 20%;
    max-height: 50%;
    position: absolute;
    top: 50%;
    left: 25%;

    font-size: 1rem;

    //new lines 
    background-color: #f7f7f2;
    background-position: center center;
    border-color: transparent;
    border-style: solid;
    padding: 2%;

    @media(max-width: 1366px) {
        max-width: 30%;
        max-height: 40%;
        top: 60%;
        left: 10%;
    }

    @media(max-width: 1055px) {
        max-width: 40%;
        max-height: 40%;
        top: 50%;
        left: 10%;
    }
    
    @media(max-width: 768px) {
        position: unset;
        max-width: 100%;
        max-height: 100%;
    }


    
`

const ContainerDirections = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
    padding: 2%;

    @media(max-width: 1768px) {
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 0rem;
    }
`

const CardDirections = styled.div`
    flex-basis: 50%;
    border-radius: .4rem;
    box-shadow: 0 15px 30px 1px grey;
    background: rgba(255, 255, 255, 0.90);
    padding: 3%;
    margin: 2%;
    text-align: center;

    p {
        font-size: 1.3rem;
    }


    @media(max-width: 1768px) {

        padding: 1rem;
        margin: 1rem;

        h2 {
            font-size: 1.2rem;
        }
        p {
            font-size: 1rem;
        }

        iframe {
            width: 100%;
            height: 100%;
        }
    }
`




export default connect(About);