import React, { useEffect } from "react";
import { connect, styled, Global } from "frontity";
import Link from "../components/link";
import Image from "@frontity/components/image";

import LinkFirstButton from './LinkButtonHome';
import LinkSecondButton from './LinkButtonHomeSecond';
//import ImageServices from '../images/diamond.svg'
import LinkButtonCta from './LinkButtonCta';

import AppTestimonialAlternative from './testimonials/AppTestimonialAlternative';

/**Styles for Card Hover Effects */
import StylesCardHover from '../components/styles/cardHoverEffects.css';

/**awesome words styles */
import AwesomeWordStyles from './styles/wordsAwesone.css';

import Loading from './Loading'

//Images
import fbIconRating from '../images/facebook-five-stars.png';
import googleRating from '../images/google_rating.jpg';
import ayamundoRating from '../images/logo_ayamundo.svg'

import LinkButtonTestimonial from './testimonials/LinkButtonTestimonials';

// scroll effect example
// You can live edit this code below the import statements
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

const HomePage = ({ state, actions, libraries }) => {

    //     
    useEffect(() => {
      actions.source.fetch("/");
    }, []);
  
    // Get information about the current URL.
    const data = state.source.get(state.router.link);
    
    // Get the data of the post.
    const pageHome = state.source.page[6];

    // Get the html2react component.
    const Html2React = libraries.html2react.Component;
    //const BannerSlider = homepage.acf.banner_slider;  
  
    // Load the post, but only if the data is ready.

    return(
        <>
        {typeof pageHome === "undefined" ? <Loading /> : 
        
        <>
            {/* <MainSection> */}
            <Content>
                <MainSection>
                
                    <div>
                        <h1><strong>{pageHome.acf.main_section_title}</strong></h1>
                        <h1>{pageHome.acf.main_section_subtitle}</h1>
                        <>
                        
                            <Global styles={AwesomeWordStyles} />

                            <section class="rw-wrapper">
                                <h2 class="rw-sentence">
                                    <span>A center where you can learn to </span>
                                    <span>heal your</span>
                                    <div class="rw-words rw-words-1">
                                        <span></span>
                                        <span>Body</span>
                                        <span>Mind</span>
                                        <span>Spirit</span>
                                        <span>Self</span>
                                    </div>
                                    <br />
                                    <span>At every moment you will find the support of </span>
                                    <div class="rw-words rw-words-2">
                                        <span></span>
                                        <span>The Maestros</span>
                                        <span>Plant Medicine</span>
                                        <span>Volunteers</span>
                                        <span>YourSelf!</span>
                                    </div>
                                </h2>
                            </section>
                        </>
                        <ButtonSet>
                            <LinkFirstButton href="/ayahuasca" >Retreats</LinkFirstButton>
                            <LinkSecondButton href="/contact">Contact us</LinkSecondButton>
                        </ButtonSet>
                    </div>
                
                </MainSection>
            </Content>

            {/* <ImageCircle src={pageHome.acf.main_section_image.sizes.large} />

            </MainSection> */}

            <HomeServicesContainer>

                <div>
                    <Fade right duration={1500}>
                        <h2>{pageHome.acf.why_mainiti.main_text_group.title_section}</h2>
                        <h4>{pageHome.acf.why_mainiti.main_text_group.main_paragraph}</h4>
                    </Fade>
                </div>

                <HomeServices>
                {
                    Object.keys(pageHome.acf.why_mainiti.icons_paragraph).map( elem => {
                        
                        return(
                            <Fade left duration={1500}>
                                <div>
                                    <Image src={pageHome.acf.why_mainiti.icons_paragraph[elem].url_icon}/>
                                    <h5>
                                        {pageHome.acf.why_mainiti.icons_paragraph[elem].title}
                                    </h5>
                                    <p>
                                        {pageHome.acf.why_mainiti.icons_paragraph[elem].paragraph}
                                    </p>
                                </div>  
                            </Fade>
                        )
                    })
                }
                </HomeServices>

            </HomeServicesContainer>

         
            <CardContainerMaestros>
                <Fade top duration={1500}>
                    <div>
                        <h2>Meet the Healers</h2>
                        <h4>With 70 years of experience between them, the healers at Mai Niti have a profound depth of experience and ancestral knowledge of healing with the plants, which they use to guide ones journey of healing and transformation in the most profound, effective and safe way possible.</h4>
                    </div>
                </Fade>

                <CardMaestros>
                    <Fade left duration={1500}>
                        <div>
                            <Image src={'https://thumb.tildacdn.com/tild3031-3138-4335-b765-363636666634/-/cover/200x200/center/center/-/format/webp/Headshot-Leo.png'} /> 
                            <h5>{pageHome.acf.maestros_section.title_maestro_leonardo}</h5>
                            <span>Maestro Curandero</span>
                            <p>{pageHome.acf.maestros_section.text_maestro_leonardo}</p> 

                        </div>
                    </Fade>

                    <Fade right duration={1500}>
                        <div>
                            <Image src={'https://thumb.tildacdn.com/tild6361-3030-4563-a461-666266663932/-/cover/200x200/center/center/-/format/webp/Headshot-Lucila.png'} /> 
                            <h5>{pageHome.acf.maestros_section.title_maestra_lucila}</h5>
                            <span>Curandera</span>
                            <p>{pageHome.acf.maestros_section.text_maestra_lucila}</p> 
                        </div> 
                    </Fade>
                </CardMaestros>

                <CardVideo>

                    <Fade left duration={1500}>
                        <Container>
                            <Html2React html={pageHome.acf.maestros_section.video_presentation} /> 
                        </Container>
                    </Fade>


                    <Fade right duration={1500}>
                        <div>
                            <h5>A Message from Maestra Lucila</h5>
                            <span>Curandera</span>
                            <p>{pageHome.acf.maestros_section.welcome_text}</p>
                        </div>
                    </Fade>
                </CardVideo>
    
            </CardContainerMaestros>

            {/* <HomeCta>
                <h2>
                    Reach out for Retreats Information
                </h2>

                <p>Review our Personalised Healing Retreats, Ayahuasca Retreats and Master Plant Dietas.</p>

                <div>
                    <LinkButtonCta href="/plantdieta" >Retreats</LinkButtonCta>
                </div>
            </HomeCta> */}
            <Fade left duration={1500}>
                <ContainerStartsSection>
                    <h3>Highest rated on different platforms</h3>
                    <StartsSection>
                        <div>
                            <ImageRating src={fbIconRating}/>
                            <span>Rating: 5/5</span><span>★★★★★</span>
                        </div>

                        <div>
                            <ImageRating src={googleRating}/>
                        </div>

                        <div>
                            <ImageRating src={ayamundoRating}/>
                            <span>Rating: 10/10</span>
                            <span>★★★★★</span>
                        </div>
                    </StartsSection>
                </ContainerStartsSection>`
            </Fade>

            <CardContainerServices>
                <Global styles={StylesCardHover} />             

                {
                    Object.keys(pageHome.acf.cards_presentation).map( elem => {

                        return(
                            <>
                            {/* <div>
                                <TitleServices>{pageHome.acf.cards_presentation[elem].title}</TitleServices>  
                        
                                <div className="view view-first">  
                                    <Image src={pageHome.acf.cards_presentation[elem].image_card.sizes.large} />  

                                    <div className="mask">
                                        <h2>{pageHome.acf.cards_presentation[elem].title}</h2>  
                                        <p>{pageHome.acf.cards_presentation[elem].paragraph}</p>  
                                        <a href={pageHome.acf.cards_presentation[elem].view_more_link} class="info">View More</a>  
                                    </div>  
                                </div> 
                            </div> */}
                            <Fade right duration={1500}>
                                <div>
                                    <ImageCardServices src={pageHome.acf.cards_presentation[elem].image_card.sizes.large} />  
                                
                                    <div>
                                        <h2>{pageHome.acf.cards_presentation[elem].title}</h2>  
                                        <p>{pageHome.acf.cards_presentation[elem].paragraph}</p>  
                                        <LinkButtonTestimonial href={pageHome.acf.cards_presentation[elem].view_more_link}>View More</LinkButtonTestimonial>  
                                    </div>  
                                </div>
                            </Fade>
                            </>
                        )
                    })
                }
      
            </CardContainerServices>

            <AppTestimonialAlternative />

        </>

        }
        </>
    )
};

export default connect(HomePage);


const MainSection = styled.div`
    
    background-image: linear-gradient(to top, rgba(34,49,63, .2), rgba(34, 49, 63, .2));
    color: #FFF;
    display: flex;
    padding: 1.5rem;
    flex-direction: column;
    justify-content: space-between;
    align-content: flex-start;
    overflow-wrap: break-word;
    
    @media (min-width: 768px) {
        margin-top: 5rem;
         justify-content: center;
    }

    @media (min-width:  1366px) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 10rem;
        padding-right: 20%;
        padding-left: 20%;
        margin-top: 5rem;
        /* margin-bottom: 5rem; */
        justify-content: center;
    }

    @media(min-width: 768px) {
        height: 573px;
        padding: 6rem;
    }


    h1 {
        font-size: 2.3rem;
        margin-bottom: 0;
        margin-top: 0;
        text-shadow: 1px 1px 2px black;
    }

    span {
        color: #FFF;

        &:nth-of-type(2n){
            color:#fff;
            text-shadow: 1px 1px 2px black;
        }
        &:nth-of-type(2n+1){
            color:#fff;
            text-shadow: 1px 1px 2px black;
        }
    }

    p {
        font-size: 1.1rem;
    }
`;


const ImageCircle = styled(Image)`
    border-radius: 50%;
    max-height: 100%;
    max-width: 100%;
    margin-top: 2rem;

    @media (min-width: 768px) {
        max-height: 550px;
        max-width: 550px;
        margin-top: 0rem;
    }
`

const ButtonSet = styled.div`
    display: flex;
    justify-items: center;
`


const HomeServicesContainer = styled.div`
    background:#F8F8FA;
    padding-top: 2rem;
    padding-bottom:2rem;
    padding-right: 1rem;
    padding-left: 1rem;

    @media (min-width: 768px) {
        grid-gap: 5rem;
        grid-template-columns: repeat(3, 1fr);
        padding-top: 4rem;
        padding-bottom:4rem;
        padding-right: 10%;
        padding-left: 10%;
    }

    @media (min-width: 992px) {
        padding-top: 75px;
        padding-bottom:75px;
    }

    div{

        text-align: center;

        h2 {
            max-width:539px;
            margin: 3rem auto;
            font-size: 2rem
        }

        h4 {
            padding: 0 20%;
            font-weight: 400;
            font-size: 1.2rem;
            line-height: 1.5;

            @media (max-width: 768px) {
                padding: 1rem;
            }
        }
    }
`

const HomeServices = styled.div`

    display: grid;
    margin-top: 5rem;

    @media (min-width: 768px) {
        grid-gap: 1rem;
        grid-template-columns: repeat(3, 1fr);
    }

    div{

        display: flex;
        flex-direction: column;
        text-align: center;

        img {
            width: 62px;
            height: 62px;
            margin: 0 auto;
        }
        h5 {
            margin-bottom:1rem;
            margin-top:1rem;
            font-size: 1.25rem;
        }
        p {
            padding: 0 3rem;
            line-height: 1.5;

            @media (max-width: 768px) {
                padding: 1rem;
            }
        }
    }
  
`

const HomeCta = styled.div`
    
    padding-top:34px;
    padding-bottom:34px;
    background:var(--brand);
    color:var(--white);
    text-align: center;
    
    @media (min-width: 992px) {
        padding-top: 75px;
        padding-bottom:75px;
    }

    background:var(--brand);
    color:var(--white);

    h2 {
      color:var(--white);
      margin-bottom: 2rem;
      font-size: 2rem;
    }

    p {
        font-size: 18px;
    }

    div {
        margin-top: 2rem;

    }
`
//Section Starts Rating
const ContainerStartsSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    padding-bottom: 5rem;

    h3 {
        font-size: 1.5rem;
        color: gray;
    }
`

const StartsSection = styled.div`

    display: flex;
    justify-content: space-evenly;
        /**box sizing */
    box-sizing: content-box;
    border: solid #f3f3f3 5px;
    padding: 5px;
    width: 40%;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 60%;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-basis: 30%;

        span {
            margin-top: 0;
         

            :nth-of-type(1){
                color: #000;
            }

            :nth-of-type(2){
                color: rgb(255, 215, 0);
            }
        }
    }
`
const ImageRating = styled(Image)`
   width: 100%;
   height: 100px;
`

/*Maestros section*/
export const CardContainerMaestros = styled.div`
    padding-top: 2rem;
    padding-bottom:2rem;
    padding-right: 1rem;
    padding-left: 1rem;

    @media (min-width: 768px) {
        padding-top: 4rem;
        padding-bottom:4rem;
        padding-right: 15%;
        padding-left: 15%;
    }

    @media (min-width: 992px) {
        padding-top: 75px;
        padding-bottom:75px;
    }

    div{

        text-align: center;

        h2 {
            max-width:539px;
            margin: 3rem auto;
            font-size: 2rem
        }

        h4 {
            padding: 0 20%;
            font-weight: 400;
            font-size: 1.2rem;
            line-height: 1.5;

            @media (max-width: 768px) {
                padding: 1rem;
            }
        }
    }
`

export const CardMaestros = styled.div`
    
    display: grid;
    margin-top: 5rem;
    grid-gap: 1rem;

    @media (min-width: 1366px) {
        grid-template-columns: repeat(2, 1fr);
    }

    div{

        display: flex;
        flex-direction: column;
        text-align: center;

        img {
            width: 200px;
            height: 200px;
            margin: 0 auto;
        }

        h5 {
            margin-bottom:0rem;
            margin-top:1rem;
            font-size: 1.25rem;
        }
        p {
            padding: 0 0rem;
            line-height: 1.5;

            @media (max-width: 768px) {
                padding: 1rem;
            }
        }

        span {
            color: #7a7a7a;
            margin-top: 0;
        }
    }
`

const Container = styled.div`

    @media (max-width: 768px) {
        iframe {
            width: 100%;
        }
    }
`

/**Card Video*/

export const CardVideo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 5%;

    div{

        text-align: center;

        h5 {
            margin-bottom:0rem;
            margin-top:1rem;
            font-size: 1.25rem;
        }
        p {
            padding: 0 0rem;
            line-height: 1.5;

            @media (max-width: 768px) {
                padding: 1rem;
            }
        }

        span {
            color: #7a7a7a;
            margin-top: 0;
        }
    }
`
/**Card Maestros End */


/**Card container Services */

const CardContainerServices = styled.div`

    display: flex;
    justify-content: space-evenly;
    padding: 4rem;
    background: #F8F8FA;
   

    div {
        flex-basis: 25%;
        text-align: center;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        //margin: 2rem 0;
        padding: 2rem 0;
        justify-content: center;
        align-items: center;
        
        div{
            flex-basis: 100%;
        }
    }
`

const TitleServices = styled.h1`
    font-size: 1.5rem;
    color: #fff;
    background-color: #000;
    margin-top: 3rem;
    padding: 1rem;
    margin-left: 2rem;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 1.2rem;
        margin-left: 0;
    }
`

const ImageCardServices = styled(Image)`
    width: 100%;
    height: 20.625rem;
    object-fit: cover;
    object-position: 50% 50%;   
`

/**ADD NEW LINES OF MAIN IMAGE BACKGROUND*/
const Content = styled.div`  
    background-image: url("https://mainitiwp.wildfreewalkingtours.com/wp-content/uploads/2021/10/allpeople.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position:center center;
`


/**END NEW LINES OF MAIN IMAGE BACKGROUND */