import React, { Component, useState, useEffect } from "react";
import { connect, styled, css, Global } from "frontity";;
import Image from "@frontity/components/image";
import Loading from './Loading';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle, faMapMarkerAlt, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faSeedling, faRainbow, faCampground, faHeart} from '@fortawesome/free-solid-svg-icons';

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
        <>
            <MarginTop />
            
            <AboutContainer>

                <h1>Este deberia ser un titulo para agregar</h1>

                <ButtonContainer>
                    <ButtonStyles onClick={(e) => setActions(0, e)}>Food</ButtonStyles>                
                    <ButtonStyles onClick={(e) => setActions(1, e)}>Substances</ButtonStyles>
                    <ButtonStyles onClick={(e) => setActions(2, e)}>Activities</ButtonStyles>             
                    <ButtonStyles onClick={(e) => setActions(3, e)}>What to expect at the center?</ButtonStyles>   
                </ButtonContainer>

                <div>
                    {view === 0 ? 
                        <>
                        <CardContainer>
                            {Object.keys(pagePreparation.acf.food_related).map( (item, index) => {
                                return(
                                    <CardText>
                                        <p><span>{index+1}.- </span>{pagePreparation.acf.food_related[item]}</p>
                                    </CardText>
                                )
                            })}
                            
                        </CardContainer>

                        <FoodItems>
                            <div>
                                <h4>Forbbiden Food</h4>
                                {
                                    pagePreparation.acf.forbidden_food.split(",").map( elem => {
                                        return(
                                            <li><FontAwesomeIconTimes icon={faTimes} />{elem.trim()}</li>
                                        
                                        )
                                    })
                                }
                            </div>

                            <div>
                                <h4>Allowed Food</h4>
                                {
                                    pagePreparation.acf.allowed_food.split(",").map( elem => {
                                        return(
                                            <li><FontAwesomeIconCheck icon={faCheck} />{elem.trim()}</li>
                                        )
                                    })
                                }
                            </div>

                            <div>
                                <p>{pagePreparation.acf.important_note_food}</p>
                            </div>
                        </FoodItems>



                        </>
                        
                    
                    : ''}
                    {view === 1 ? 
                        <>
                            <CardContainer>
                                {Object.keys(pagePreparation.acf.substances).map( (item, index) => {
                                    return(
                                        <CardText>
                                            <p><span>{index+1}.- </span>{pagePreparation.acf.substances[item]}</p>
                                        </CardText>
                                    )
                                })}    
                            </CardContainer>


                            <FoodItems>
                                <div>
                                    <h4>Forbbiden Substances</h4>
                                    {
                                        pagePreparation.acf.forbidden_substances.split(",").map( elem => {
                                            return(
                                                <li><FontAwesomeIconTimes icon={faTimes} />{elem.trim()}</li>
                                            
                                            )
                                        })
                                    }
                                </div>

                                <div>
                                    <p>{pagePreparation.acf.important_note_substances}</p>
                                </div>
                            </FoodItems>
                        </>
                    : ''}
                    {view === 2 ? 
                        <>

                        <FoodItems>

                           
                            <div>
                                <h4>Forbbiden Activities</h4>
                                {
                                    pagePreparation.acf.forbidden_activities.split(",").map( elem => {
                                        return(
                                            <li><FontAwesomeIconTimes icon={faTimes} />{elem.trim()}</li>
                                        
                                        )
                                    })
                                }
                            </div>

                            <div>
                                <h4>Allowed Activities</h4>
                                {
                                    pagePreparation.acf.allowed_activities.split(",").map( elem => {
                                        return(
                                            <li><FontAwesomeIconCheck icon={faCheck} />{elem.trim()}</li>
                                        )
                                    })
                                }
                            </div>

                            <div>
                                <p>{pagePreparation.acf.activities_text}</p>
                            </div>

                        </FoodItems>
                        </>
                    : ''}
                    {view === 3 ? 
                    <>
                        {
                            pagePreparation.acf.what_to_expect.split("%").map( elem => {
                                return(
                                    <p>{elem.trim()}</p>
                                )
                            })
                        }
                    </>
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

export const AboutContainer = styled.div`

    margin-top: 12rem;
    padding: 0 4rem;

    h1{
        text-align: center;
        font-size: 2rem;
        margin-top: 4rem;
        margin-bottom: 4rem;
        margin-left: 1rem;
        color: #444;
    }

    @media (max-width: 768px){
        padding: 0;
    }
`

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

export default connect(Preparation);