import React from 'react';
import {styled } from "frontity";
import {faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faFacebookSquare} from '@fortawesome/free-brands-svg-icons';

const ContactContainer = styled.div`
    display: flex;
    background-color: #333333;
    color: #fff;
    justify-content: space-around;
    align-content: center;

    @media(max-width: 768px) {
        flex-direction: column;
        justify-content: center;
    }
`;

const ContactElement = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 2rem 0;

    @media(max-width: 768px) {
        padding: 1rem;
        h2 {
            font-size: 1.2rem;
        }
        margin: .5rem 0;
    }

    ul {
        margin: 0;
        padding: 0;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;

        li {
            margin: .5rem 0;
            list-style: none;

            a {
                color : #fff;
                font-size: 1.8rem;
                margin-right: .5rem;
            }
        }

    }

    h2 {
        font-weight: 700;
        letter-spacing: 1px;
    }

    h3 {
        margin-top: 0;
        font-size: 1rem;
        font-weight: 400;
    }
`;

const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
    margin-right: .5rem;
`;


const Contact = () => {

    return ( 
        <ContactContainer>
            <ContactElement>
                <h2>Contact</h2>
                <h3>Stay in touch</h3>
                <ul>
                    <li><FontAwesomeIconStyled icon={faPhone}/>+51 919 038 272</li>
                    <li><a href="mailto:info@mainiti.org"><FontAwesomeIconStyled icon={faEnvelope}/></a>info@mainiti.org</li>
                </ul>
            </ContactElement>

            <ContactElement>
                <h2>Social Media</h2>
                <h3>Follow us to stay tuned about our latest features and releases</h3>
            
                <ul>
                    <li><a href="https://www.youtube.com/channel/UCDAmnlkD-1R0uq9zfCffkzQ" alt="Share on Youtube" aria-label="Link to Youtube" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube}/></a>Youtube</li>
                    <li><a href="https://www.facebook.com/MaiNitiHealingCenter/" alt="Share on Facebook" aria-label="Link to Facebook" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookSquare}/></a>Facebook</li>
                    <li><a href="https://www.instagram.com/mainiti_center/" alt="Share on Instagram" aria-label="Link to Instagram" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram}/></a>Instagram</li>
                </ul>
            </ContactElement>
        </ContactContainer >

    );
}
 
export default Contact;