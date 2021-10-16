import React, { Component, useEffect } from "react";
import { connect, styled, css, Global } from "frontity";
import Image from "@frontity/components/image";
import StylesCardDetails from '../components/styles/cardDetails.css'


//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle, faMapMarkerAlt, faCheck, faTimes, faStar, faUser, faDoorOpen, faBed, faBath, faArrowLeft, faHome, faUtensils, faHandsHelping} from '@fortawesome/free-solid-svg-icons'
import { faSeedling, faRainbow, faCampground, faHeart} from '@fortawesome/free-solid-svg-icons';

const CardDetails = ({state, actions}) => {

    return (
        <>
            <Global styles={StylesCardDetails} />
        <div className="wrapper">
        <div className="card">
            <input type="checkbox" id="card1" className="more" aria-hidden="true" />
            <div className="content">
                <div className="front" css={css`background-image: url('https://images.unsplash.com/photo-1529408686214-b48b8532f72c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=986e2dee5c1b488d877ad7ba1afaf2ec&auto=format&fit=crop&w=1350&q=80');`} >
                    <div className="inner">
                        <h2>Cozy apartment</h2>
                        <div className="rating">
                            <FontAwesomeIcon icon={faHome}/>
                            <FontAwesomeIcon icon={faUtensils}/>
                            <FontAwesomeIcon icon={faHandsHelping}/>
                        </div>
                        <label for="card1" class="button" aria-hidden="true">
                            Details
                        </label>
                    </div>
                </div>
                <div className="back">
                    <div className="inner">
                        <div className="description">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, accusamus.</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates earum nostrum ipsam
                                ullam, reiciendis nam consectetur? Doloribus voluptate architecto possimus perferendis
                                tenetur nemo amet temporibus, enim soluta nam, debitis.</p>
                        </div>
                        <label for="card1" className="button return" aria-hidden="true">
                            <FontAwesomeIcon icon={faArrowLeft}/>
                        </label>
                    </div>
                </div>
            </div>
        </div>


        <div className="card">
            <input type="checkbox" id="card2" className="more" aria-hidden="true" />
            <div className="content">
                <div className="front" css={css`background-image: url('https://images.unsplash.com/photo-1529408686214-b48b8532f72c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=986e2dee5c1b488d877ad7ba1afaf2ec&auto=format&fit=crop&w=1350&q=80');`} >
                    <div className="inner">
                        <h2>Cozy apartment</h2>
                        <div className="rating">
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                        </div>
                        <label for="card2" class="button" aria-hidden="true">
                            Details
                        </label>
                    </div>
                </div>
                <div className="back">
                    <div className="inner">
                        <div className="info">
                            <span>5</span>
                            <div className="icon">
                                <FontAwesomeIcon icon={faUser}/>
                                <span>people</span>
                            </div>
                        </div>
                        <div className="info">
                            <span>4</span>
                            <div className="icon">
                                <FontAwesomeIcon icon={faDoorOpen}/>
                                <span>rooms</span>
                            </div>
                        </div>
                        <div className="info">
                            <span>3</span>
                            <div className="icon">
                                <FontAwesomeIcon icon={faBed}/>
                                <span>beds</span>
                            </div>
                        </div>
                        <div className="info">
                            <span>1</span>
                            <div className="icon">
                                <FontAwesomeIcon icon={faBath}/>
                                <span>bath</span>
                            </div>
                        </div>
                        <div className="description">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, accusamus.</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates earum nostrum ipsam
                                ullam, reiciendis nam consectetur? Doloribus voluptate architecto possimus perferendis
                                tenetur nemo amet temporibus, enim soluta nam, debitis.</p>
                        </div>
                        <div className="location">Warsaw, Poland</div>
                        <div className="price">38€ / day</div>
                        <label for="card2" className="button return" aria-hidden="true">
                            <FontAwesomeIcon icon={faArrowLeft}/>
                        </label>
                    </div>
                </div>
            </div>
        </div>


        <div className="card">
            <input type="checkbox" id="card3" className="more" aria-hidden="true" />
            <div className="content">
                <div className="front" css={css`background-image: url('https://images.unsplash.com/photo-1529408686214-b48b8532f72c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=986e2dee5c1b488d877ad7ba1afaf2ec&auto=format&fit=crop&w=1350&q=80');`} >
                    <div className="inner">
                        <h2>Cozy apartment</h2>
                        <div className="rating">
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                        </div>
                        <label for="card3" class="button" aria-hidden="true">
                            Details
                        </label>
                    </div>
                </div>
                <div className="back">
                    <div className="inner">
                        <div className="info">
                            <span>5</span>
                            <div className="icon">
                                <FontAwesomeIcon icon={faUser}/>
                                <span>people</span>
                            </div>
                        </div>
                        <div className="info">
                            <span>4</span>
                            <div className="icon">
                                <FontAwesomeIcon icon={faDoorOpen}/>
                                <span>rooms</span>
                            </div>
                        </div>
                        <div className="info">
                            <span>3</span>
                            <div className="icon">
                                <FontAwesomeIcon icon={faBed}/>
                                <span>beds</span>
                            </div>
                        </div>
                        <div className="info">
                            <span>1</span>
                            <div className="icon">
                                <FontAwesomeIcon icon={faBath}/>
                                <span>bath</span>
                            </div>
                        </div>
                        <div className="description">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, accusamus.</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates earum nostrum ipsam
                                ullam, reiciendis nam consectetur? Doloribus voluptate architecto possimus perferendis
                                tenetur nemo amet temporibus, enim soluta nam, debitis.</p>
                        </div>
                        <div className="location">Warsaw, Poland</div>
                        <div className="price">38€ / day</div>
                        <label for="card3" className="button return" aria-hidden="true">
                            <FontAwesomeIcon icon={faArrowLeft}/>
                        </label>
                    </div>
                </div>
            </div>
        </div>
        </div>

        </>
    );
}

export default connect(CardDetails);


