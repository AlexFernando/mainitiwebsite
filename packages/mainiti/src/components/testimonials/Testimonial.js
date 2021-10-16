import React, { Component, useEffect } from "react";
import { connect, styled, css, Global } from "frontity";
import CarouselAllStyles from "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "@frontity/components/image";
import Loading from '../../components/Loading'

const Testimonial = ({state, actions}) => {

    //     
    useEffect(() => {
        actions.source.fetch("/");
    }, []);

    // Get the data of the post.
    const pageHome = state.source.page[6];
    

    return (

    <>
    {typeof pageHome === "undefined" ? <Loading /> : 
    
    <>
    <ContainerTestimonials>
    <Global styles={CarouselAllStyles} />

    <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
    >
    
        <div>

{/*             <ImageStyled src={pageHome.acf.testimonial_one.image_testimonial.sizes.thumbnail} /> */}
            <div className="myCarousel">
                <h3>{pageHome.acf.testimonial_one.testimonial_name}</h3>
                <h4>{pageHome.acf.testimonial_one.testimonial_year}</h4>
                <p>
                    {pageHome.acf.testimonial_one.paragraph_testimonial}
                </p>
            </div>
        </div>

        <div>
{/*             <ImageStyled src={pageHome.acf.testimonial_two.image_testimonial.sizes.thumbnail} /> */}
            <div className="myCarousel">
                <h3>{pageHome.acf.testimonial_two.testimonial_name}</h3>
                <h4>{pageHome.acf.testimonial_two.testimonial_year}</h4>
                <p>
                    {pageHome.acf.testimonial_two.paragraph_testimonial}
                </p>
            </div>
        </div>

        <div>
            {/* <ImageStyled src={pageHome.acf.testimonial_three.image_testimonial.sizes.thumbnail} /> */}
            <div className="myCarousel">
                <h3>{pageHome.acf.testimonial_three.testimonial_name}</h3>
                <h4>{pageHome.acf.testimonial_three.testimonial_year}</h4>
                <p>
                    {pageHome.acf.testimonial_three.paragraph_testimonial}
                </p>
            </div>
        </div>
    </Carousel>
    </ContainerTestimonials>
    </>
        }
        </>
    );
}

export default connect(Testimonial);

const ContainerTestimonials = styled.div`
    height: 700px;
`
const ImageStyled = styled(Image)`
    max-width: 100px;
    max-height: 200px;
`