import React, { Component, useState, useEffect } from "react";
import { connect, styled, css, Global } from "frontity";;
import Image from "@frontity/components/image";
import Loading from './Loading';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle, faMapMarkerAlt, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faSeedling, faRainbow, faCampground, faHeart} from '@fortawesome/free-solid-svg-icons';

// react tab tab
import {Tabs, TabList, Tab, PanelList, Panel} from 'react-tabtab';
import * as customStyle from 'react-tabtab/lib/themes/bulma/index';

import {GeneralBoxContainer, NewBoxContainer} from './dieta';

//import ayahuasca styles 
import {CardDescriptionContainer, ImageDescriptionContainer, MarginTemporalTab} from './Ayahuasca';

// import about styles
import {MarginPaddingContainer, HeaderContainer, Title, Separator, MainParagraph} from './About';

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



const Preparation = ({ state, actions, libraries }) => {

    //     
    useEffect(() => {
        actions.source.fetch("/preparation");
    }, []);

    // Get the data of the post.
    const pagePreparation = state.source.page[184];

    const data = state.source.get(state.router.link);

    console.log("la data : ", data)
    

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
        {typeof pagePreparation === "undefined" ? <Loading /> : 
        
        <MarginPaddingContainer>
                
                <HeaderContainer>
                    <Slide top duration={1500}>
                        <Title>Preparation</Title>
                        <Separator></Separator>
                    </Slide>
                </HeaderContainer>

                <MarginTemporalTab />

                <InfoWrap>
                    <Slide left duration={2000}>
                        <InfoItem>
                            <AllowedForbbidenContainer>   
                                <h2>Food</h2>
                                <p>{pagePreparation.acf.important_note_food}</p>
                            
                                <div>
                                    <ul>
                                        <h3>Forbbiden Food</h3>
                                        {
                                            pagePreparation.acf.forbidden_food.split(",").map( elem => {
                                                return(
                                                    <li><FontAwesomeIconTimes icon={faTimes} />{elem.trim()}</li>
                                                
                                                )
                                            })
                                        }
                                    </ul>
                            
                
                                    <ul>
                                        <h3>Allowed Food</h3>
                                        
                                        {
                                            pagePreparation.acf.allowed_food.split(",").map( elem => {
                                                return(
                                                    <li><FontAwesomeIconCheck icon={faCheck} />{elem.trim()}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </AllowedForbbidenContainer>
                        </InfoItem>
                    </Slide>

                    <Slide bottom duration={1500}>
                        <InfoItem>
                            <AllowedForbbidenContainer>

                                <h2>Substances</h2>
                                
                                <p>{pagePreparation.acf.important_note_substances}</p>
                            
                                <div>
                    

                                    <ul>
                                        <h3>Forbbiden Substances</h3>
                                        {
                                            pagePreparation.acf.forbidden_substances.split(",").map( elem => {
                                                return(
                                                    <li><FontAwesomeIconTimes icon={faTimes} />{elem.trim()}</li>
                                                
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </AllowedForbbidenContainer>
                        </InfoItem>
                    </Slide>

                    <Slide right duration={2000}>
                        <InfoItem>
                            <AllowedForbbidenContainer>
                                    <h2>Activities</h2>
                                    <p>{pagePreparation.acf.important_note_food}</p>
                                    
                                    <div>
                
                                        <ul>
                                            <h3>Forbbiden Activities</h3>
                                            {
                                                pagePreparation.acf.forbidden_activities.split(",").map( elem => {
                                                    return(
                                                        <li><FontAwesomeIconTimes icon={faTimes} />{elem.trim()}</li>
                                                    
                                                    )
                                                })
                                            }
                                        </ul>

                            
                                        <ul>
                                            <h3>Allowed Activities</h3>
                                            {
                                                pagePreparation.acf.allowed_activities.split(",").map( elem => {
                                                    return(
                                                        <li><FontAwesomeIconCheck icon={faCheck} />{elem.trim()}</li>
                                                    )
                                                })
                                            }
                                        </ul>

                                    </div>
                                    
                            </AllowedForbbidenContainer>
                        </InfoItem>
                    </Slide>
                </InfoWrap>

                <Tabs customStyle={customStyle}>
                    <TabList>
                        <Tab>Food</Tab>
                        <Tab>Substances</Tab>
                        <Tab>What to expect at the center?</Tab>
                    </TabList>
                    
                    <PanelList>
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
                                    {Object.keys(pagePreparation.acf.food_related.cards).map( (item, index) => {

                                        return(
                                            <Slide right duration={1500}>
                                                <NewBoxContainer>
                                                    <h2>{pagePreparation.acf.food_related.cards[item].text}</h2>

                                                    {
                                                        pagePreparation.acf.food_related.cards[item].paragraph.split("%").map(elem => {
                                                            return(
                                                                <p>{elem}</p>
                                                            )
                                                        })
                                                    }

                                                    {/* <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="" /> */}
                                                </NewBoxContainer>
                                            </Slide>
                                        )
                                    })}
                              </Carousel>
                            </GeneralBoxContainer>
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
                                {Object.keys(pagePreparation.acf.substances.cards).map( (item, index) => {
                                    return(
                                        <Slide right duration={1500}>
                                            <NewBoxContainer>
                                                <h2>{pagePreparation.acf.substances.cards[item].text}</h2>

                                                {
                                                    pagePreparation.acf.substances.cards[item].paragraph.split("%").map(elem => {
                                                        return(
                                                            <p>{elem}</p>
                                                        )
                                                    })
                                                }

                                                {/* <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="" /> */}
                                            </NewBoxContainer>
                                        </Slide>
                                    )
                                })}
                              </Carousel>
                            </GeneralBoxContainer>
                        </Panel>

                        <Panel>
                            <AllowedForbbidenContainer>
                                <Slide right duration={1500}>
                                    <h2>Important Information</h2>
                                </Slide>
                                
                                <Slide left duration={2000}>
                                    <ul>
                                        {
                                            pagePreparation.acf.what_to_expect.split("%").map( elem => {
                                                return(
                                                    <li><p><FontAwesomeIconCheck icon={faCheck} />{elem.trim()}</p></li>
                                                )
                                            })
                                        }
                                    </ul>
                                </Slide>
                            </AllowedForbbidenContainer>
                        </Panel>
                    </PanelList>
                </Tabs>
        </MarginPaddingContainer>
        }
        </>
    )
}

export const ButtonContainer = styled.div`
    display: flex;
    margin-left: 1rem;

    @media (max-width: 768px){
        flex-direction: column;
    }
`
export const ButtonStyles = styled.button`
    font-size: 1.3rem;
    display: inline-block;
    padding: .8rem 1.2rem;
    margin: 0 1rem 0 0;
    list-style: none;
    cursor: pointer;
    color: #fff;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    background-color: rgb(236, 139, 34);
    border-color: rgb(255, 255, 255);
    border:none;

    @media (max-width: 768px){
        margin-bottom: .5rem;
    }

`

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 5rem;
    margin: 4rem 0;

    @media (max-width: 768px){
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 1rem;
        margin: 2rem 0;
    }
`

export const CardText = styled.div`
    background-color: green;
    padding: 2rem;
    color: #fff;
    border: none;
    border-radius: .5rem;

    :nth-of-type(1){
        background-color: #12365F;
    }

    :nth-of-type(2){
        background-color: #14CB8B;
        color:#242F3B;
    }

    :nth-of-type(3){
        background-color: #144ECB;
    }

    :nth-of-type(4) {
        background-color: #F8C403;
        color:#242F3B;
    }
    
    p {
        font-size: 1.2rem;
        line-height: 1.5;

        span{
            font-weight: bold;
            font-size: 1.3rem;
        }
    }
`

const FoodItems = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    flex-basis: 50%;
    background-color: #242F3B;
    padding: 2rem;
    color: #fff;
    border: none;
    border-radius: .5rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    
    div{
        flex-basis: 30%;
        text-align: center;

        h4{
            font-size: 1.3rem;
            text-decoration: underline;
        }

        li {
            list-style: none;
            text-align: start;
            font-size: 1.2rem;
        }

        p {
            font-size: 1.2rem;
        }
    }
`


const AllowedForbbidenContainer = styled.div`
    
    padding: 4%;
    color:#565656;
    text-align: justify;

    @media (max-width: 768px){
        padding: 1rem;
    }

    div {
        display: flex;
        justify-content: space-evenly;
    }

    h2{
        font-size: 2.2rem;
        text-align: center;
        line-height: 1.5;

        @media (max-width: 768px){
            font-size: 1.5rem;
        }

    }

    p {
        line-height: 1.5;
        margin: 2rem 0;
        font-size: 1.3rem;

        @media (max-width: 768px){
            font-size: 1rem;
            margin-bottom: 0;
        }
    }

    ul {
        margin-left: 0;
        padding-left: 0;
        margin-right: 2rem;
    }

    li {
        list-style: none;
        line-height: 1.5;
        font-size: 1.2rem;

        @media (max-width: 768px){
            font-size: 1rem;
        }
    }
`

const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
    color: #00A36C;
    font-size: 5rem;
`;

const FontAwesomeIconCheck =  styled(FontAwesomeIcon)`
    color: green;
    margin-right: .5rem;
`

const FontAwesomeIconTimes =  styled(FontAwesomeIcon)`
    color: red;
    margin-right: .5rem;
`
export const InfoWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    background-color: #fff;
    color: #444;
    margin: 2rem 0;

    @media (max-width: 768px){
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const InfoItem = styled.div`
    margin: 1rem 1rem;
    box-shadow: grey 0px 15px 30px 1px;
    border-radius: .5rem;
    padding: 3%;
`;



export default connect(Preparation);