import React, { Component, useState, useEffect } from "react";
import { connect, styled, css, Global } from "frontity";;
import Image from "@frontity/components/image";
import Loading from './Loading';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle, faMapMarkerAlt, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faSeedling, faRainbow, faCampground, faHeart} from '@fortawesome/free-solid-svg-icons';

//import preparation and about styles
import {AboutContainer, ButtonContainer, ButtonStyles, CardContainer, CardText} from './Preparation';
import {CardAbout, ImageAboutStyles} from './About';

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
        <>
            <MarginTop />
            
            <div>

                <h1>{pagePlantDieta.acf.title_page}</h1>
                {
                    pagePlantDieta.acf.paragraph.split("%").map( elem => {
                        return(
                            <p>{elem.trim()}</p>
                        )
                    })
                }
            </div>

            <AboutContainer>
                <ButtonContainer>
                    <ButtonStyles onClick={(e) => setActions(0, e)}>How Can a Dieta Help me?</ButtonStyles>                
                    <ButtonStyles onClick={(e) => setActions(1, e)}>How does it work?</ButtonStyles>
                    <ButtonStyles onClick={(e) => setActions(2, e)}>Types of Dieta</ButtonStyles>             
                    <ButtonStyles onClick={(e) => setActions(3, e)}>The Plants</ButtonStyles>   
                </ButtonContainer>

                <div>
                    {view === 0 ? 
                        <CardAbout>
                            <div>
                                <h2>Dieta</h2>
                                <p>{pagePlantDieta.acf.how_can.text_one}</p>
                                {
                                    pagePlantDieta.acf.how_can.list_items.split("%").map( elem => {
                                        return(
                                            <li>{elem.trim()}</li>
                                        )
                                    })
                                }

                                <p>{pagePlantDieta.acf.how_can.paragraph_one}</p>
                            </div>
                            <ImageAboutStyles src={pagePlantDieta.acf.how_can.image_ref.sizes.large} />
                        </CardAbout>
                    : ''}

                    {view === 1 ?
                    <>   
                        <CardContainer>
                            {Object.keys(pagePlantDieta.acf.how_does).splice(0,4).map( (item, index) => {
                                return(
                                    <CardText>
                                        <p><span>{index+1}.- </span>{pagePlantDieta.acf.how_does[item]}</p>
                                    </CardText>
                                )
                            })}
                    
                        </CardContainer>
                        
                        <CardAbout>
                            <div>
                                <h2>{pagePlantDieta.acf.how_does.text_line}</h2>
                                <p>{pagePlantDieta.acf.how_does.paragraph_post_dieta_one}</p>
                                <p>{pagePlantDieta.acf.how_does.paragraph_post_dieta_two}</p>
                            </div>
                            <ImageAboutStyles src={pagePlantDieta.acf.how_does.image_post_dieta.sizes.medium} />
                        </CardAbout>
                    </>    
                    : ''}

                    {view === 2 ? 
                        <CardContainer>
                            {Object.keys(pagePlantDieta.acf.types_of_dieta).map( (item, index) => {
                                return(
                                    <CardText>
                                        <p><span>{index+1}.- </span>{pagePlantDieta.acf.types_of_dieta[item]}</p>
                                    </CardText>
                                )
                            })}
                    
                        </CardContainer>
                    : ''}
                    {view === 3 ? 
                     <CardDietaContainer>
                            {Object.keys(pagePlantDieta.acf.the_plants).map( (item, index) => {

                               
                                        return(
                                            <CardAbout>
                                            <div>
                                                <p>{pagePlantDieta.acf.the_plants[item].text}</p>
                                            </div>
        
                                            <ImageAboutStyles src={pagePlantDieta.acf.the_plants[item].image.sizes.large} />
        
                                            </CardAbout>
                                    
                                        )
                                    
                                
                            })}
                    </CardDietaContainer>
                        
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

const CardDietaContainer = styled.div`

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3rem;

`

export default connect(PlantDieta);