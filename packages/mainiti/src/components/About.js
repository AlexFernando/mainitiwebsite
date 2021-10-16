import React, { Component, useState, useEffect } from "react";
import { connect, styled, css, Global } from "frontity";
import Image from "@frontity/components/image";
import Loading from './Loading';

import PresentationMode from './testimonials/PresentationMode';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle, faMapMarkerAlt, faCheck, faTimes, faStar, faUser, faDoorOpen, faBed, faBath, faArrowLeft, faHome, faUtensils, faHandsHelping, faCarrot, faAppleAlt, faFish } from '@fortawesome/free-solid-svg-icons'
import { faSeedling, faRainbow, faCampground, faHeart} from '@fortawesome/free-solid-svg-icons';


//Presentation Mode 
import CarouselAllStyles from "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

//import preparation styles
import {AboutContainer, ButtonContainer, ButtonStyles} from './Preparation'


// es6
import {Tabs, TabList, Tab, PanelList, Panel} from 'react-tabtab';
import * as customStyle from 'react-tabtab/lib/themes/bootstrap/index';

//card details
import CardDetails from './CardDetails';
import StylesCardDetails from '../components/styles/cardDetails.css'


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

            <HeaderContainer>
                <Title>{pageAbout.acf.title_page}</Title>
                <Separator></Separator>
            </HeaderContainer>

            <CardProduct>
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
            </CardProduct>

            <>
                <Global styles={StylesCardDetails} />

                <div className="wrapper">

                    <div className="card">
                        <input type="checkbox" id="card1" className="more" aria-hidden="true" />
                        <div className="content">
                            <div className="front" css={css`background-image: url(${pageAbout.acf.accomodation_section.image_ref.sizes.large});`} >
                                <div className="inner">
                                    <h2>Accomodation</h2>
                                    <div className="rating">
                                        <FontAwesomeIcon icon={faHome}/>
                                        <FontAwesomeIcon icon={faHome}/>
                                        <FontAwesomeIcon icon={faHome}/>
                                    </div>
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
                                    <div className="rating">
                                        <FontAwesomeIcon icon={faAppleAlt}/>
                                        <FontAwesomeIcon icon={faCarrot}/>
                                        <FontAwesomeIcon icon={faFish}/>
                                    </div>
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
                                    <div className="rating">
                                        <FontAwesomeIcon icon={faHandsHelping}/>
                                        <FontAwesomeIcon icon={faHandsHelping}/>
                                        <FontAwesomeIcon icon={faHandsHelping}/>
                                    </div>
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
                </div>
            </>

            <WrapWarningCarousel>
            
                <CardWarning>
                    <ImageCardWarning src={pageAbout.acf.presentation_group.outside_maloka.sizes.large}/>
                    <TextCircle>
                        <h1>Warning!</h1>
                        {
                            pageAbout.acf.warning_note.split("%").map( elem => {
                                return(
                                    <h4>{elem.trim()}</h4>
                                )
                            })
                        }
                    </TextCircle>

                </CardWarning>

                <div css= {css`max-width: 45%;  @media (max-width: 768px) {max-width: 100%;}`}>
                    <Global styles={CarouselAllStyles} />

                    <Carousel autoFocus={true} showThumbs={false} showStatus={false} useKeyboardArrows className="presentation-mode" autoPlay={true} interval={3000}>
                        <div key="content-0" className="my-slide primary">
                            <h1>The Maloka</h1>
                            <p>{pageAbout.acf.presentation_group.maloka_text}</p>
                        </div>

                        <div key="content-3" className="my-slide content">
                            <h2>Outside the Maloka</h2>
                            <img src={pageAbout.acf.presentation_group.outside_maloka.sizes.large} />
                        </div>
                        <div key="content-3" className="my-slide content">
                            <h2>Inside the Maloka</h2>
                            <img src={pageAbout.acf.presentation_group.inside_maloka.sizes.large} />
                        </div>
                        <div key="content-10" className="my-slide content">
                            <h2>Community House</h2>
                            <img src={pageAbout.acf.presentation_group.community_house_image_one.sizes.large} />

                            <p>
                                {pageAbout.acf.presentation_group.community_house_text.split("%").slice(1,2).map( elem => {
                                return(
                                    <p>{elem.trim()}</p>
                                )
                                })}
                            </p>
                        </div>
                        <div key="content-11" className="my-slide content">
                            <img src={pageAbout.acf.presentation_group.community_house_image_two.sizes.large} />  
                            <p>
                                {pageAbout.acf.presentation_group.community_house_text.split("%").slice(2).map( elem => {
                                return(
                                    <p>{elem.trim()}</p>
                                )
                                })}
                            </p>          
                        </div>
                    </Carousel>
                </div>

            </WrapWarningCarousel>

            <ContainerDirections>         
                <CardDirections>
                    <div>
                        <h2>How to find us</h2>
                        <p>{pageAbout.acf.how_to_find_us.paragraph}</p>
                        <p>{pageAbout.acf.how_to_find_us.note_ref}</p>
                    </div>
                </CardDirections>

                <CardDirections>
                    <Content>
                        <Html2React html={pageAbout.content.rendered} />
                    </Content>
                </CardDirections>
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
    margin: 2rem 20rem;
    text-transform: uppercase;
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
    margin: 10rem 2rem 2rem 2rem;

    @media (max-width: 768px) {
        margin: 4rem 0 1rem 0;
    } 
`

export const CardProduct = styled.div`
    display: flex;
    justify-content: center;
	text-align: center;
    padding: 2rem 10rem;

    @media (max-width: 768px) {
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

const WrapWarningCarousel = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    max-width: 100%;
    margin-bottom: 3rem;

    @media (max-width: 768px) {flex-direction: column; padding: 0; margin: 0;}
`

const CardWarning = styled.div`
    position: relative;
    flex-basis: 45%;
    justify-content: center;
    margin-top: 2rem;
    padding-right: 1rem;
    padding-left: 1rem;

    @media (max-width: 768px) {
        position: unset; 
        flex-basis: 100%; 
        padding: 1rem; 
        margin: 0rem; 
    }
`

const TextCircle = styled.div`
    position: absolute;
    border-radius: 50%;
    height: 50%;
    width: 40%;
    background-color: yellow;
    padding: 2rem;
    right: 2rem;
    top: 5rem;
    text-align: center;

    @media (max-width: 768px) {
        position: unset;
        height: 100%!important;
        width: 100%!important;
        right: 0!important;
        top: 0!important;
        bottom: 0!important;
        left: 0!important;
        margin: 0!important;
        border-radius: .5rem;
        padding: 0!important;
    }

    h1{
        font-size: 2rem;
        @media (max-width: 768px) {
            font-size: 1.2rem;
            padding: .5rem 2rem;
        }
        color: #000;
    }

    h4 {
        font-size: 1rem;
        color: #000;

        @media (max-width: 768px) {
            font-size: .9rem;
            padding: .5rem 2rem;
        }
    }

    @media (min-width: 768px) {
        max-height: 100%;
        max-width: 100%;
    }
`


const ImageCardWarning = styled(Image)`
    max-width: 100%;
    max-height: 100%;
    filter: grayscale(50%);

    @media (max-width: 768px) {
        display: none;
    }
`

const ContainerDirections = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
    padding: 5rem;

    @media(max-width: 768px) {
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
    padding: 3rem;
    margin: 2rem;
    text-align: center;

    p {
        font-size: 1.3rem;
    }


    @media(max-width: 768px) {

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