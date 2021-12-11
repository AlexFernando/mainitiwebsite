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
import {MarginPaddingContainer, HeaderContainer, Title, Separator} from './About';

//Images importing 
import fbIcon from '../images/facebook_small_icon.png';
import positiveIcon from '../images/positive-min.png';
import testimonialImage from '../images/testimonial_img.jpg';

const YoutubeSlide = ({ url, isSelected }) => (
    <ReactPlayerStyles url={url} /> 
);

export const YoutubeAutoplayWithCustomThumbs = () => {
    const customRenderItem = (item, props) => <item.type {...item.props} {...props} />;

    const getVideoThumb = (videoId) => `https://img.youtube.com/vi/${videoId}/default.jpg`;

    const getVideoId = (url) => url.substr('https://www.youtube.com/embed/'.length, url.length);

    const customRenderThumb = (children) =>
        children.map((item) => {
            const videoId = getVideoId(item.props.url);
            return <img src={getVideoThumb(videoId)} />
        });


        /**Weird code */
    console.log("aca el window: ", window.innerWidth)

    let myInner = window.innerWidth;

    console.log("lsanflks: " ,myInner)



    let myPercentage = myInner < 600 ? 100 : 50;

    console.log(myPercentage)

    /**weird code */
    

    return (

        <>

        {typeof myPercentage === "undefined" ? <Loading /> : 
        <MarginPaddingContainer>
                
        <HeaderContainer>
            <Title>AYAHUASCA RETREAT TESTIMONIALS</Title>
            <Separator></Separator>

        </HeaderContainer>
        <CarouselContainer>
            <Global styles={CarouselAllStyles} />

            <h3>Testimonials from people who have stayed with us.</h3>
            <Carousel renderItem={customRenderItem} renderThumbs={customRenderThumb} centerMode={true} showIndicators={false} centerSlidePercentage={myPercentage}>
                <YoutubeSlide key="youtube-1" url="https://www.youtube.com/embed/qX9st7FALDU" />
                <YoutubeSlide key="youtube-2" url="https://www.youtube.com/embed/rpICg_H9Xbw" />
                <YoutubeSlide key="youtube-3" url="https://www.youtube.com/embed/rpICg_H9Xbw" />
                <YoutubeSlide key="youtube-4" url="https://www.youtube.com/embed/G1IIxPh7E7M" />
                <YoutubeSlide key="youtube-5" url="https://www.youtube.com/embed/qX9st7FALDU" />
                <YoutubeSlide key="youtube-6" url="https://www.youtube.com/embed/rpICg_H9Xbw" />
                <YoutubeSlide key="youtube-7" url="https://www.youtube.com/embed/rpICg_H9Xbw" />
                <YoutubeSlide key="youtube-8" url="https://www.youtube.com/embed/G1IIxPh7E7M" />
            </Carousel>


            <h3>Click on the left and right arrows, to see all the testimonials</h3>

            <Carousel centerMode={true} showIndicators={false} centerSlidePercentage={myPercentage} showThumbs={false} >

                <TestimonialContainer>
                    <TextTestimonial>
                

                            <p> 
                                <ImageStyledIconPositive src={positiveIcon} />

                                <span>
                                    I arrived in Mai Niti as a volunteer, planning to stay not more than 3 weeks, helping out with some tasks at the center. 
                                    But as soon as I arrived I realized it was such a special place and I felt like I needed to stay longer. 
                                    The people there were so welcoming to me, the place is cozy and everything is set in a way so that everybody always stay together. 
                                    I feel we were a family. Lucila, the shaman, is always attentive to the guests and spreading her care and high energy around. 
                                    She is usually up to hear everybody's opinions about the events, the ceremony, the place, looking for improvements and mainly, checking how we all are feeling during the day. 
                                    Finally, what I can say it impressed me most was definitely the energy of this place. It has some kind of mystery, which is really hard for me to explain, but I simply felt like there I was facing my truth and fears, there was no way out other than looking inside me. 
                                    Thanks loads to Lucy, who received me openly and helped me in the way I needed, and also, to all of the guests, volunteers and workers I met there. 
                                    All of them were undoubtedly unique in my experience and so grateful for it! Thank you!
                                </span> 

                                <ImageStyledFbIcon src={fbIcon} />                           
                            </p>
                        
                    </TextTestimonial>

                    <DetailTestimonial>
                        <span>
                            <ImageStyledTestimonial src={testimonialImage}/>
                        </span>

                        <span>
                            JULIANA W.
                            JULY 15, 2019
                        </span>
                    </DetailTestimonial>
                </TestimonialContainer>


                <TestimonialContainer>
                    <TextTestimonial>
                        <p> 

                            <ImageStyledIconPositive src={positiveIcon} />

                            <span>
                                I went to the healing center for the 12 day retreat, finding out about it from a friend who had recommended it to me. 
                                I was searching for a Ayahuasca center that was still authentic, as it is very difficult to find one in Peru that is not based off money and tourism. 
                                I can truely say, Mai Niti was everything I could have hoped for, and more. If you are looking for a fully authentic, affordable, and personable retreat, 
                                look no further. Lucia, Leonardo, their family, and their friends, take you in like you are part of the family instantly. This place becomes your home, 
                                and you make friends that you will never forget here. Aside from the Ayahuasca ceremonies, they teach you about some of the thousands of other medicinal plants 
                                used for healing, and teach you the ways of their culture. The Shipibo tribe is one of the pioneers of the Ayahuasca healing tradition and Shamanism, 
                                and Leonardo is possibly one of the most experienced Shamans in Peru. You learn about the people and their culture, you learn about the plant knowledge 
                                passed through the generations, and most importantly you learn about yourself. If you feel the call, Mai Niti will answer and you will come out a different person!
                            </span>

                            <ImageStyledFbIcon src={fbIcon} />  
                        </p>
                    </TextTestimonial>
                    
                    <DetailTestimonial>
                        <span>
                            <ImageStyledTestimonial src={testimonialImage}/>
                        </span>

                        <span>
                            JOSH H.
                            JULY 26, 2019
                        </span>
                    </DetailTestimonial>
                </TestimonialContainer>

                <TestimonialContainer>
                    <TextTestimonial>
                

                            <p> 
                                <ImageStyledIconPositive src={positiveIcon} />

                                <span>
                                    I arrived in Mai Niti as a volunteer, planning to stay not more than 3 weeks, helping out with some tasks at the center. 
                                    But as soon as I arrived I realized it was such a special place and I felt like I needed to stay longer. 
                                    The people there were so welcoming to me, the place is cozy and everything is set in a way so that everybody always stay together. 
                                    I feel we were a family. Lucila, the shaman, is always attentive to the guests and spreading her care and high energy around. 
                                    She is usually up to hear everybody's opinions about the events, the ceremony, the place, looking for improvements and mainly, checking how we all are feeling during the day. 
                                    Finally, what I can say it impressed me most was definitely the energy of this place. It has some kind of mystery, which is really hard for me to explain, but I simply felt like there I was facing my truth and fears, there was no way out other than looking inside me. 
                                    Thanks loads to Lucy, who received me openly and helped me in the way I needed, and also, to all of the guests, volunteers and workers I met there. 
                                    All of them were undoubtedly unique in my experience and so grateful for it! Thank you!
                                </span> 

                                <ImageStyledFbIcon src={fbIcon} />                           
                            </p>
                        
                    </TextTestimonial>

                    <DetailTestimonial>
                        <span>
                            <ImageStyledTestimonial src={testimonialImage}/>
                        </span>

                        <span>
                            JULIANA W.
                            JULY 15, 2019
                        </span>
                    </DetailTestimonial>
                </TestimonialContainer>


                <TestimonialContainer>
                    <TextTestimonial>
                        <p> 

                            <ImageStyledIconPositive src={positiveIcon} />

                            <span>
                                I went to the healing center for the 12 day retreat, finding out about it from a friend who had recommended it to me. 
                                I was searching for a Ayahuasca center that was still authentic, as it is very difficult to find one in Peru that is not based off money and tourism. 
                                I can truely say, Mai Niti was everything I could have hoped for, and more. If you are looking for a fully authentic, affordable, and personable retreat, 
                                look no further. Lucia, Leonardo, their family, and their friends, take you in like you are part of the family instantly. This place becomes your home, 
                                and you make friends that you will never forget here. Aside from the Ayahuasca ceremonies, they teach you about some of the thousands of other medicinal plants 
                                used for healing, and teach you the ways of their culture. The Shipibo tribe is one of the pioneers of the Ayahuasca healing tradition and Shamanism, 
                                and Leonardo is possibly one of the most experienced Shamans in Peru. You learn about the people and their culture, you learn about the plant knowledge 
                                passed through the generations, and most importantly you learn about yourself. If you feel the call, Mai Niti will answer and you will come out a different person!
                            </span>

                            <ImageStyledFbIcon src={fbIcon} />  
                        </p>
                    </TextTestimonial>
                    
                    <DetailTestimonial>
                        <span>
                            <ImageStyledTestimonial src={testimonialImage}/>
                        </span>

                        <span>
                            JOSH H.
                            JULY 26, 2019
                        </span>
                    </DetailTestimonial>
                </TestimonialContainer>

                <TestimonialContainer>
                    <TextTestimonial>
                

                            <p> 
                                <ImageStyledIconPositive src={positiveIcon} />

                                <span>
                                    I arrived in Mai Niti as a volunteer, planning to stay not more than 3 weeks, helping out with some tasks at the center. 
                                    But as soon as I arrived I realized it was such a special place and I felt like I needed to stay longer. 
                                    The people there were so welcoming to me, the place is cozy and everything is set in a way so that everybody always stay together. 
                                    I feel we were a family. Lucila, the shaman, is always attentive to the guests and spreading her care and high energy around. 
                                    She is usually up to hear everybody's opinions about the events, the ceremony, the place, looking for improvements and mainly, checking how we all are feeling during the day. 
                                    Finally, what I can say it impressed me most was definitely the energy of this place. It has some kind of mystery, which is really hard for me to explain, but I simply felt like there I was facing my truth and fears, there was no way out other than looking inside me. 
                                    Thanks loads to Lucy, who received me openly and helped me in the way I needed, and also, to all of the guests, volunteers and workers I met there. 
                                    All of them were undoubtedly unique in my experience and so grateful for it! Thank you!
                                </span> 

                                <ImageStyledFbIcon src={fbIcon} />                           
                            </p>
                        
                    </TextTestimonial>

                    <DetailTestimonial>
                        <span>
                            <ImageStyledTestimonial src={testimonialImage}/>
                        </span>

                        <span>
                            JULIANA W.
                            JULY 15, 2019
                        </span>
                    </DetailTestimonial>
                </TestimonialContainer>


                <TestimonialContainer>
                    <TextTestimonial>
                        <p> 

                            <ImageStyledIconPositive src={positiveIcon} />

                            <span>
                                I went to the healing center for the 12 day retreat, finding out about it from a friend who had recommended it to me. 
                                I was searching for a Ayahuasca center that was still authentic, as it is very difficult to find one in Peru that is not based off money and tourism. 
                                I can truely say, Mai Niti was everything I could have hoped for, and more. If you are looking for a fully authentic, affordable, and personable retreat, 
                                look no further. Lucia, Leonardo, their family, and their friends, take you in like you are part of the family instantly. This place becomes your home, 
                                and you make friends that you will never forget here. Aside from the Ayahuasca ceremonies, they teach you about some of the thousands of other medicinal plants 
                                used for healing, and teach you the ways of their culture. The Shipibo tribe is one of the pioneers of the Ayahuasca healing tradition and Shamanism, 
                                and Leonardo is possibly one of the most experienced Shamans in Peru. You learn about the people and their culture, you learn about the plant knowledge 
                                passed through the generations, and most importantly you learn about yourself. If you feel the call, Mai Niti will answer and you will come out a different person!
                            </span>

                            <ImageStyledFbIcon src={fbIcon} />  
                        </p>
                    </TextTestimonial>
                    
                    <DetailTestimonial>
                        <span>
                            <ImageStyledTestimonial src={testimonialImage}/>
                        </span>

                        <span>
                            JOSH H.
                            JULY 26, 2019
                        </span>
                    </DetailTestimonial>
                </TestimonialContainer>

            </Carousel>
        </CarouselContainer>

        </ MarginPaddingContainer >
        }
        
        </>
    );
};

const TestimonialPage = ({ state, actions, libraries }) => {
    return(

            <YoutubeAutoplayWithCustomThumbs />

    )
}

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