import React, { Component, useState, useEffect } from "react";
import { connect, styled, css, Global } from "frontity";;
import Image from "@frontity/components/image";
import Loading from './Loading';

import PresentationMode from './testimonials/PresentationMode';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle, faMapMarkerAlt, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faSeedling, faRainbow, faCampground, faHeart} from '@fortawesome/free-solid-svg-icons';


//Presentation Mode 
import CarouselAllStyles from "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

//import preparation styles
import {AboutContainer, ButtonContainer, ButtonStyles} from './Preparation'

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
        <>
            <MarginTop />

            <h1>{pageAbout.acf.title_page}</h1>
            
            <FirstSectionAbout>
                
                <div>
                    {
                        pageAbout.acf.warning_note.split("%").map( elem => {
                            return(
                                <h4>{elem.trim()}</h4>
                            )
                        })
                    }
                </div>


                <div>
                    {
                        <>
                            <h4>Our Center</h4>
                            <p>{pageAbout.acf.line_text}</p>
                        </>
                    }

                    {
                        pageAbout.acf.paragraph_text.split("%").map( elem => {
                            return(
                                <p>{elem.trim()}</p>
                            )
                        })
                    }
                </div>
            </FirstSectionAbout>

            <div>
                <Global styles={CarouselAllStyles} />

                <Carousel autoFocus={true} showThumbs={false} showStatus={false} useKeyboardArrows className="presentation-mode">
                    <div key="content-0" className="my-slide primary">
                        <h1>The Maloka</h1>
                        <p>{pageAbout.acf.presentation_group.maloka_text}</p>
                    </div>

                    <div key="content-3" className="my-slide content">
                        <img src={pageAbout.acf.presentation_group.outside_maloka.sizes.large} />
                    </div>
                    <div key="content-3" className="my-slide content">
                        <img src={pageAbout.acf.presentation_group.inside_maloka.sizes.large} />
                    </div>
                    <div key="content-10" className="my-slide secondary">
                        <h2>Community House</h2>
                        <img src={pageAbout.acf.presentation_group.community_house_image_one.sizes.large} />
                    </div>
                    <div key="content-11" className="my-slide content">
                        <p>
                            {pageAbout.acf.presentation_group.community_house_text}
                        </p>
                        <img src={pageAbout.acf.presentation_group.community_house_image_two.sizes.large} />            
                    </div>
                </Carousel>
            </div>

            <AboutContainer>

                <h1>Este deberia ser un titulo para agregar</h1>

                <ButtonContainer>
                    <ButtonStyles onClick={(e) => setActions(0, e)}>Accomodation</ButtonStyles>                
                    <ButtonStyles onClick={(e) => setActions(1, e)}>Meals</ButtonStyles>
                    <ButtonStyles onClick={(e) => setActions(2, e)}>Volunteering</ButtonStyles>             
                    <ButtonStyles onClick={(e) => setActions(3, e)}>How to find us?</ButtonStyles>   
                </ButtonContainer>

                <div>
                    {view === 0 ? 
                        <CardAbout>
                            <div>
                                <h2>Accomodation</h2>
                                <p>{pageAbout.acf.accomodation_section.paragraph}</p>
                                <p>{pageAbout.acf.accomodation_section.note_ref}</p>
                            </div>
                            <ImageAboutStyles src={pageAbout.acf.accomodation_section.image_ref.sizes.large} />
                        </CardAbout>
                    : ''}

                    {view === 1 ?      
                        <CardAbout>
                            <div>
                                <h2>Meals</h2>
                                <p>{pageAbout.acf.meals_section.paragraph}</p>
                                <p>{pageAbout.acf.meals_section.note_ref}</p>
                            </div>
                            <ImageAboutStyles src={pageAbout.acf.meals_section.image_ref.sizes.large} />
                        </CardAbout>
                    : ''}

                    {view === 2 ? 
                        <CardAbout>
                            <div>
                                <h2>Meals</h2>
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
                            <ImageAboutStyles src={pageAbout.acf.volunteering_section.image_ref.sizes.large} />
                        </CardAbout>
                    : ''}
                    {view === 3 ? 
                        <CardAbout>
                            <div>
                                <h2>How to find us</h2>
                                <p>{pageAbout.acf.how_to_find_us.paragraph}</p>
                                <p>{pageAbout.acf.how_to_find_us.note_ref}</p>
                            </div>

                            <Content>
                                <Html2React html={pageAbout.content.rendered} />
                            </Content>
                        </CardAbout>
                    : ''}
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
        padding: 8rem;
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

`

const Content = styled.div`

`

export default connect(About);