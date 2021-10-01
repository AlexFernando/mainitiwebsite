import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "../components/link";
import Image from "@frontity/components/image";
import MyBgImage from '../images/background.jpg'

import LinkFirstButton from './LinkButtonHome';
import LinkSecondButton from './LinkButtonHomeSecond';
import ImageServices from '../images/diamond.svg'
import LinkButtonCta from './LinkButtonCta';

import AppTestimonial from './testimonials/AppTestimonial';
import PresentationMode from './testimonials/PresentationMode';

import Loading from './Loading'

const HomePage = ({ state, actions, libraries }) => {

    //     
    useEffect(() => {
      actions.source.fetch("/");
    }, []);
  
    // Get information about the current URL.
    const data = state.source.get(state.router.link);

    console.log("la data : ", data)
    
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
            <MainSection>

                <div>
                    <h1><strong>{pageHome.acf.main_section_title}</strong></h1>
                    <h1>{pageHome.acf.main_section_subtitle}</h1>
                    <p>
                        {pageHome.acf.paragraph_welcome}
                    </p>
                    <ButtonSet>
                        <LinkFirstButton href="#" >Retreats</LinkFirstButton>
                        <LinkSecondButton href="#">Contact us</LinkSecondButton>
                    </ButtonSet>
                </div>

                <ImageCircle src={pageHome.acf.main_section_image.sizes.large} />
            </MainSection>

            <HomeServicesContainer>

                <div>
                    <h2>Why Mai Niti?</h2>
                    <p>Mi in nulla posuere sollicitudin aliquam ultrices sagittis. Egestas quis ipsum suspendisse ultrices gravida.</p>
                </div>

                <HomeServices>                
                    <div>
                        <Image src={ImageServices} />

                        <h5>
                            Adept Healers
                        </h5>
                        <p>
                            With over 70 years of experience between them, the healers have a profound depth 
                            of experience and ancestral wisdom of working with the plants which they use to guide 
                            each patient in their journey of healing and transformation.
                        </p>
                    </div>

                    <div>
                        <Image src={ImageServices} />

                        <h5>
                            Adept Healers
                        </h5>
                        <p>
                            With over 70 years of experience between them, the healers have a profound depth 
                            of experience and ancestral wisdom of working with the plants which they use to guide 
                            each patient in their journey of healing and transformation.
                        </p>
                    </div>
                

                    <div>
                        <Image src={ImageServices} />

                        <h5>
                            Adept Healers
                        </h5>
                        <p>
                            With over 70 years of experience between them, the healers have a profound depth 
                            of experience and ancestral wisdom of working with the plants which they use to guide 
                            each patient in their journey of healing and transformation.
                        </p>
                    </div>              
                </HomeServices>

            </HomeServicesContainer>

            <HomeCta>
                <h2>
                    Reach out for Retreats Information
                </h2>

                <p>Review our Personalised Healing Retreats, Ayahuasca Retreats and Master Plant Dietas.</p>

                <div>
                    <LinkButtonCta>Retreats</LinkButtonCta>
                </div>
            </HomeCta>

            <AppTestimonial />
        </>

        }
        </>
    )
};

export default connect(HomePage);


const MainSection = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    margin-top: 2rem;
    padding-right: 1rem;
    padding-left: 1rem;
  

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 5rem;
        padding-right: 22rem;
        padding-left: 22rem;
        margin-top: 8rem;
        margin-bottom: 5rem;
        justify-items: center;
        align-items: center;
    }

    h1 {
        font-size: 2.3rem;
        margin-bottom: 0;
        margin-top: 0;
    }

    p {
        font-size: 1.1rem;
    }

`;


const ImageCircle = styled(Image)`
    border-radius: 50%;
    max-height: 100%;
    max-width: 100%;

    @media (min-width: 768px) {
        max-height: 550px;
        max-width: 550px;
    }
`

const ButtonSet = styled.div`
    display: flex;
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
        padding-right: 20rem;
        padding-left: 20rem;
    }

    @media (min-width: 992px) {
        padding-top: 75px;
        padding-bottom:75px;
    }

    div{
        text-align: center;
        margin-bottom: 3rem;

        h2 {
            max-width:539px;
            margin:0 auto;
        }
    }
`

const HomeServices = styled.div`

    display: grid;
    margin-top: 3rem;

    @media (min-width: 768px) {
        grid-gap: 5rem;
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
            position:relative;
         
        }
    }
  
`

const HomeCta = styled.div`
    
    padding-top: 34px;
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

