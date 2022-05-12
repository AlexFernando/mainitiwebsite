import React, { Component, useState, useEffect } from "react";
import { connect, styled, css, Global } from "frontity";;
import Image from "@frontity/components/image";
import Loading from './Loading';
import PageError from './page-error'

/**Using the library */
import CarouselAllStyles from "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ReactPlayer from 'react-player';

// import about styles
import {MarginPaddingContainer, HeaderContainer, Title, Separator, MainParagraph} from './About';
import carouselTestimonialStyles from '../styles/carouselTestimonials.css';

//Images importing 
import fbIcon from '../images/facebook_small_icon.png';
import positiveIcon from '../images/positive-min.png';
import testimonialImage from '../images/testimonial_img.jpg';

// scroll effect example
// You can live edit this code below the import statements
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

const YoutubeSlide = ({ url, isSelected }) => (
    <ReactPlayerStyles url={url} /> 
);

const TestimonialPage  = ({state, actions, libraries}) => {

          // get data starts
          useEffect(() => {
            actions.source.fetch("/testimonials");
        }, []);
    
        // Get the data of the post.
        const pageTestimonial = state.source.page[566];
  
    
        //get data ends


    const customRenderItem = (item, props) => <item.type {...item.props} {...props} />;

    const getVideoThumb = (videoId) => `https://img.youtube.com/vi/${videoId}/default.jpg`;

    const getVideoId = (url) => url.substr('https://www.youtube.com/embed/'.length, url.length);

    const customRenderThumb = (children) =>
        children.map((item) => {
            const videoId = getVideoId(item.props.url);
            return <img src={getVideoThumb(videoId)} />
        });

        /**Weird code */

    let myInner = window.innerWidth;

    let myPercentage = myInner < 600 ? 100 : 50;

    /**weird code */
    
    return (

        <>

        {typeof pageTestimonial === "undefined" ? <Loading /> : 
        <MarginPaddingContainer>
                
        <HeaderContainer>
            <Slide left duration={2500}>
                <Title>{pageTestimonial.acf.testimonial_title}</Title>
                <Separator></Separator>
            </Slide>
        </HeaderContainer>

        <MainParagraph>
            <Slide right duration={2500}>
                <p>{pageTestimonial.acf.subtitle_one}</p> 
                <p>{pageTestimonial.acf.subtitle_two}</p>
            </Slide>
        </MainParagraph>

        <CarouselContainer>
            <Global styles={CarouselAllStyles} />
            <Global styles={carouselTestimonialStyles} />

            <Carousel renderItem={customRenderItem} renderThumbs={customRenderThumb} centerMode={true} showIndicators={false} centerSlidePercentage={myPercentage}>
                {
                    Object.keys(pageTestimonial.acf.videos_url).map( (elem, index) => {
                        return(
                            <YoutubeSlide key={`youtube-`+index} url={pageTestimonial.acf.videos_url[elem]}/>
                        )
                    })
                }
            </Carousel>

            <Carousel centerMode={true} showIndicators={false} centerSlidePercentage={myPercentage} showThumbs={false} >

                {Object.keys(pageTestimonial.acf.text_testimonial).map( (elem, index) => {
                    return(
                        <TestimonialContainer>
                            <TextTestimonial>
                                <p>
                                    <ImageStyledIconPositive src={positiveIcon} />

                                    <span>
                                        {pageTestimonial.acf.text_testimonial[elem].text}
                                    </span>
                                    <ImageStyledFbIcon src={fbIcon} /> 
                                </p>
                            </TextTestimonial>

                            <DetailTestimonial>
                                <span>
                                    <ImageStyledTestimonial src={pageTestimonial.acf.text_testimonial[elem].image.sizes.thumbnail}/>
                                </span>

                                <span>
                                    {pageTestimonial.acf.text_testimonial[elem].name}
                                    {pageTestimonial.acf.text_testimonial[elem].date}
                                </span>
                            </DetailTestimonial>

                        </TestimonialContainer>
                    )
                })}

            </Carousel>
        </CarouselContainer>

        </ MarginPaddingContainer >
        }
        
        </>
    );
};


const CarouselContainer = styled.div`
    padding: 2rem;
    margin-top: 2rem;


    @media (max-width: 768px){
        margin-top: 6rem;
        padding: 0;
    }

    h3 {
        margin-bottom: 2rem;
    }
`

const ReactPlayerStyles = styled(ReactPlayer)`
   max-width: 100%;
`

const TestimonialContainer = styled.div`

`
const DetailTestimonial = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;

    span {
        font-size: .8rem;
    }
`

const TextTestimonial = styled.div`

    bottom: 0;
    box-shadow: rgb(0 0 0 / 10%) 2px 2px 2px 0px;
    box-sizing: border-box;
    color: #000;
    height: auto;
    left: 0;
    position: relative;
    right: 0;
    text-size-adjust: 100%;
    top: 0;
    column-rule-color: #fff;
    perspective-origin: 277.5px 69px;
    transform-origin: 277.5px 69px;
    background: #fff none repeat scroll 0% 0%/auto padding-box border-box;
    border: 1px solid #f5f5f5;
    font: normal normal normal normal 13px/20.8px "Helvetica Neue",Helvetica,Arial,sans-serif;
    margin: 0 3rem;
    outline: #fff none 0px;
    padding: 20px 20px 20px 48px;

    &:before {
        bottom: 47px;
        box-sizing: border-box;
        color: #bbb;
        content: '❝';
        display: block;
        height: 96px;
        left: 55px;
        position: absolute;
        right: 515.391px;
        text-size-adjust: 100%;
        top: 20px;
        width: 24.6094px;
        column-rule-color: #bbb;
        perspective-origin: 12.2969px 48px;
        transform-origin: 12.2969px 48px;
        border: 0 none #bbb;
        font: normal normal normal normal 60px/96px Georgia,serif;
        margin: -25px 0 0 -40px;
        outline: #bbb none 0px;
    }

    &:after {
        bottom: -30px;
        box-sizing: border-box;
        color: #fff;
        content: '';
        display: block;
        height: 30px;
        left: 80px;
        position: absolute;
        right: 445px;
        text-size-adjust: 100%;
        width: 30px;
        column-rule-color: #fff;
        perspective-origin: 15px 15px;
        transform-origin: 15px 15px;
        filter: drop-shadow(2px 2px 1px rgba(0,0,0,.0980392));
        border-top: 30px solid #fff;
        border-right: 30px solid rgba(0,0,0,0);
        border-bottom: 0 solid rgba(0,0,0,0);
        border-left: 0 solid rgba(0,0,0,0);
        font: normal normal normal normal 13px/20.8px "Helvetica Neue",Helvetica,Arial,sans-serif;
        outline: #fff none 0px;
    }

    p {
        span{
            margin-left: .5rem;
            margin-right: .5rem;
            color: #777;
            font-style: italic;
        }
    }
`

const ImageStyledIconPositive = styled(Image)`

    max-width: 15px;
    height: 15px;
`

const ImageStyledFbIcon = styled(Image)`
    max-width: 25px;
    height: 25px;
`

const ImageStyledTestimonial = styled(Image)`
    max-width: 60px;
    height: 60px;

    box-sizing: border-box;
    color: #fff;
    display: block;
    text-size-adjust: 100%;
    column-rule-color: #fff;
    perspective-origin: 30px 30px;
    transform-origin: 30px 30px;
    border: 0 none #fff;
    border-radius: 50% !important;
    font: normal normal normal normal 13px/20.8px "Helvetica Neue",Helvetica,Arial,sans-serif;
    margin: 0 2rem;
    outline: #fff none 0px;
`

export default connect(TestimonialPage);