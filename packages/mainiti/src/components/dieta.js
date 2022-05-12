import React, { Component, useState, useEffect } from "react";
import { connect, styled, css, Global } from "frontity";;
import Image from "@frontity/components/image";
import Loading from './Loading';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle, faMapMarkerAlt, faCheck, faTimes, faHome, faArrowLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { faSeedling, faRainbow, faCampground, faHeart} from '@fortawesome/free-solid-svg-icons';

//import preparation and about styles
import {AboutContainer, ButtonContainer, ButtonStyles, CardContainer, CardText} from './Preparation';
import {MarginPaddingContainer, HeaderContainer, Title, Separator, MainParagraph, CardAbout, ImageAboutStyles, CardProduct, ProductDetails, ProductImage, ImageProductCard, SeparatorCard} from './About';

//import ayahuasca styles 

import {CardDescriptionContainer, ImageDescriptionContainer, MarginTemporalTab} from './Ayahuasca';

// react tab tab
import {Tabs, TabList, Tab, PanelList, Panel} from 'react-tabtab';
import * as customStyle from 'react-tabtab/lib/themes/bulma/index';

//styled card details
import StylesCardDetails from '../components/styles/cardDetails.css';

//styled four cards
import StylesFourCards from '../components/styles/fourCards.css';

/**CAROUSEL EVENTS */
import Carousel from "react-multi-carousel";
import multiCarouselStyles from  "react-multi-carousel/lib/styles.css";
import generalStyles from '../styles/generalStyles.css';

// scroll effect example
// You can live edit this code below the import statements
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      paritialVisibilityGutter: 60
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30
    }
};


const PlantDieta = ({ state, actions, libraries }) => {

    //     
    useEffect(() => {
        actions.source.fetch("/plantdieta");
    }, []);

    // Get the data of the post.
    const pagePlantDieta = state.source.page[283];

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

    return(
        <>
        {typeof pagePlantDieta === "undefined" ? <Loading /> : 
        <MarginPaddingContainer>
            <Fade right duration={2100}>
                <HeaderContainer>
                    <Title>{pagePlantDieta.acf.title_page}</Title>
                    <Separator></Separator>
                </HeaderContainer>
            </Fade>
            
            <Fade left duration={2100}>
                <MainParagraph>
                    <p>{pagePlantDieta.acf.paragraph}</p>
                </MainParagraph>
            </Fade>

            <MasterPlantsContainer>

                <h2>The Master Plants</h2>

                <Global styles={StylesCardDetails} />

                <div className="wrapper">
                    {
                        Object.keys(pagePlantDieta.acf.the_plants).map( (elem,index) => {

                            return(
                                <Zoom top duration={1500}>
                                    <div className="card">
                                        <input type="checkbox" id={"card"+`${index+1}`} className="more" aria-hidden="true" />
                                        <div className="content">
                                            <div className="front" css={css`background-image: url(${pagePlantDieta.acf.the_plants[elem].image.sizes.large});`} >
                                                <div className="inner">
                                                    <h2>{pagePlantDieta.acf.the_plants[elem].title}</h2>
                                
                                                    <label for={"card"+`${index+1}`} class="button" aria-hidden="true">
                                                        Details
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="back">
                                                <div className="inner">
                                                    <div className="description">
                                                        <p>{pagePlantDieta.acf.the_plants[elem].text}</p>
                                                    </div>
                                                    <label for={"card"+`${index+1}`} className="button return" aria-hidden="true">
                                                        <FontAwesomeIcon icon={faArrowLeft}/>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Zoom>
                            )
                        })
                    }
                </div>
            </MasterPlantsContainer>

                <MarginTemporalTab />

                <Tabs customStyle={customStyle}>
                    <TabList>
                        <Tab>Description</Tab>
                        <Tab>How Can a dieta help me</Tab>
                        <Tab>How does it work?</Tab>
                        <Tab>Types of Dieta</Tab>
                    </TabList>
                    
                    <PanelList>
                        <Panel>
                        
                                <CardDescriptionContainer>

                                    <Fade left duration={1500}>
                                        <ImageDescriptionContainer src={pagePlantDieta.acf.description.image.sizes.large} />
                                    </Fade>

                                    <Fade right duration={1500}>
                                        <div>
                                            <h2>{ pagePlantDieta.acf.description.title}</h2>

                                            {
                                                pagePlantDieta.acf.description.paragraph.split("%").map( elem => {
                                                    return(
                                                        <p>{elem.trim()}</p>
                                                    )
                                                })
                                            }
                                        </div>
                                    </Fade>
                                </CardDescriptionContainer>
                          
                        </Panel>

                        <Panel>
                            <Fade bottom duration={1500}>
                                <DietaHelpContainer>
                        
                                    <h2>How Can a Dieta help me?</h2>
                                
                                    <p><FontAwesomeCheck icon={faArrowAltCircleRight} /> {pagePlantDieta.acf.how_can.text_one}</p>

                                    <div>
                                        <ul>
                                            {
                                                pagePlantDieta.acf.how_can.list_items.split("%").slice(0,4).map( elem => {
                                                    return(
                                                        <li><FontAwesomeCheck icon={faCheck}/>{elem.trim()}</li>
                                                    )
                                                })
                                            }
                                        </ul>

                                        <ul>
                                            {
                                                pagePlantDieta.acf.how_can.list_items.split("%").slice(4,8).map( elem => {
                                                    return(
                                                        <li><FontAwesomeCheck icon={faCheck}/>{elem.trim()}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>

                                    <p><FontAwesomeCheck icon={faArrowAltCircleRight} /> {pagePlantDieta.acf.how_can.paragraph_one}</p>
                            
                                </DietaHelpContainer>
                            </Fade>
                        </Panel>

                        <Panel>

                    
                            <GeneralBoxContainer>
                                <Global styles={multiCarouselStyles} />
                                <Global styles={generalStyles} />
                            
                                <Carousel
                                    ssr
                                    partialVisbile
                                    itemClass="image-item"
                                    responsive={responsive}
                                >
                            
                                {Object.keys(pagePlantDieta.acf.how_does.cards).map( (item, index) => {
                                    
                                    return(
                                        <Fade right duration={2000}>
                                            <NewBoxContainer>
                                                <h2>{pagePlantDieta.acf.how_does.cards[item].header}</h2>

                                                {
                                                    pagePlantDieta.acf.how_does.cards[item].paragraph.split("%").map(elem => {
                                                        return(
                                                            <p>{elem}</p>
                                                        )
                                                    })
                                                }

                                                {/* <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="" /> */}
                                            </NewBoxContainer>
                                        </Fade>
                                    )
                                })}
                            
                         
                                </Carousel>

                                
                            </GeneralBoxContainer>
 
                            <FinalTextSection>
                                <Fade left duration={2000}>
                                    <h2>{'"'+ pagePlantDieta.acf.how_does.text_line + '"'}</h2>
                                    <SeparatorCardDieta></SeparatorCardDieta>
                                </Fade>

                                <Fade right duration={2000}>
                                    <h3>Post Dieta</h3>
                                    <p><FontAwesomeCheck icon={faArrowAltCircleRight} /> {pagePlantDieta.acf.how_does.paragraph_post_dieta_one}</p>
                                    <p><FontAwesomeCheck icon={faArrowAltCircleRight} />{pagePlantDieta.acf.how_does.paragraph_post_dieta_two}</p>
                                </Fade>
                            </FinalTextSection>

                        </Panel>

                        <Panel>
                            <GeneralBoxContainer>
                                <Global styles={multiCarouselStyles} />
                                <Global styles={generalStyles} />
                                <Carousel
                                    ssr
                                    partialVisbile
                                    itemClass="image-item"
                                    responsive={responsive}
                                >
                                {Object.keys(pagePlantDieta.acf.types_of_dieta).map( (item, index) => {
                                    return(
                                        <Fade right duration={1500}>
                                            <NewBoxContainer>
                                                <h2>{pagePlantDieta.acf.types_of_dieta[item].header}</h2>
                                                {
                                                    pagePlantDieta.acf.types_of_dieta[item].paragraph.split("%").map(elem => {
                                                        return(
                                                            <p>{elem}</p>
                                                        )
                                                    })
                                                }

                                                {/* <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="" /> */}
                                            </NewBoxContainer>
                                        </Fade>
                                    )
                                })}
                                 </Carousel>
                            </GeneralBoxContainer>
                        </Panel>
                    </PanelList>
                </Tabs>

        </MarginPaddingContainer>
        }
        </>
    )
}

const MasterPlantsContainer = styled.div`
    margin-top: 5rem;
    margin-bottom: 0;

    h2 {
        text-align: center;
        font-size: 2rem;
    }
`;

const CardDietaContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3rem;

`

/**How Can a Dieta Help me? styles */

const DietaHelpContainer = styled.div`

    padding: 2% 4%;

    @media (max-width: 768px) {
        padding: 1%;
    } 

    div {
        display: flex;
        justify-content: space-between;
        text-align: justify;

        @media (max-width: 768px) {
            flex-direction: column;
        } 
    }

    h2{
        font-size: 2.2rem;
        text-align: center;
        line-height: 1.5;

        @media (max-width: 768px) {
            font-size: 1.8rem;
        } 
    }

    p {
        line-height: 1.5;
        margin: 2% 0;
        font-size: 1.3rem;
        text-align: justify;

        @media (max-width: 768px) {
            font-size: 1rem;
        } 
    }

    ul {
        margin-left: 0;
        padding-left: 0;
        margin-right: 2rem;
        @media (max-width: 768px) {
            margin-right: 0;
        } 
    }

    li {
        list-style: none;
        line-height: 1.5;
        font-size: 1.2rem;
        text-align: justify;

        @media (max-width: 768px) {
            font-size: 1rem;
        } 
    }
`

export const SeparatorCardDieta = styled.span`
    display: block;
    width: 100%;
    height: 3px;
    margin-top: 2rem;
    margin-bottom: 2rem;
    border-radius: 20px;
    background-color: #777;
    text-align: center;
    align-self: center;
    align-content: center;
    align-items: center;

    @media(max-width: 768px) {
        height: 3px;
    }
`
export const FontAwesomeCheck = styled(FontAwesomeIcon)`
    margin-right: .5rem;
    color: #0c884a;
`

export const FinalTextSection = styled.div`

    margin: 8% 4% 4% 4%;
    text-align: center;

    @media (max-width: 768px) {
        margin: 4% 1% 1% 1%;
    } 

    h2{
        font-size: 2rem;
        color: #444;
        font-style: italic;
        line-height: 1.5;

        @media (max-width: 768px) {
            font-size: 1.3rem;
        } 

    }

    h3{
        font-size: 1.5rem;
        font-style: italic;
        color: #444;
        margin-bottom: .5rem;


        @media (max-width: 768px) {
            font-size: 1.1rem;
        } 
    }

    p {
        line-height: 1.5;
        font-size: 1.2rem;
        font-style: italic;
        color: #444;

        @media (max-width: 768px) {
            font-size: 1rem;
        } 
    }
`

/**Four Card Styles */
export const RowOneContainer = styled.div`

    @media (min-width: 950px) {
        display: grid;
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: repeat(3, 1fr);
        justify-content: center;
        grid-gap:4%;
    }
`
export const BoxContainer = styled.div`
    border-radius: 5px;
    box-shadow: 0px 30px 40px -20px hsl(229, 6%, 66%);;
    padding: 10%;
    margin: 6%;  
    //new line
    text-align: justify;

    img {
        float: right;
    }

    p {
        color: hsl(229, 6%, 66%);
    }

    h2 {
        color: hsl(234, 12%, 34%);
        font-weight: 600;
    }

    :nth-of-type(1) {
        border-top: 3px solid hsl(180, 62%, 55%);
    }

    :nth-of-type(2) {
        border-top: 3px solid hsl(0, 78%, 62%);
        grid-column: 2;
    }

    :nth-of-type(3) {
        border-top: 3px solid hsl(212, 86%, 64%);
        grid-column: 3;
    }

    :nth-of-type(4) {
        border-top: 3px solid hsl(34, 97%, 64%);
        grid-column: 2;
        grid-row: 2;
    }

    @media (max-width: 450px) {
        height: 100%;
    }

    @media (max-width: 950px) and (min-width: 450px) {        
        text-align: center;
        height: 100%;
    }

    @media (min-width: 950px) {
        width: 80%;

        :nth-of-type(2n+1){
            position: relative;
            top: 250px;
        }
    }
`

export const GeneralBoxContainer = styled.div`
    margin-top: 2rem;
`


export const NewBoxContainer = styled.div`
    box-shadow: 0 1px 12px 1px grey;
    flex-basis: 100%;
    flex-wrap: wrap;
    margin: 1rem;
    padding: 1rem;

    @media (min-width: 768px){
        flex-basis: 30%;
        margin: 1rem;
    }

    :nth-of-type(1) {
        border-top: 3px solid hsl(180, 62%, 55%);
    }

    :nth-of-type(2) {
        border-top: 3px solid hsl(0, 78%, 62%);
        
    }

    :nth-of-type(3) {
        border-top: 3px solid hsl(212, 86%, 64%);
        
    }

    :nth-of-type(4) {
        border-top: 3px solid hsl(34, 97%, 64%);
    }
`


export default connect(PlantDieta);