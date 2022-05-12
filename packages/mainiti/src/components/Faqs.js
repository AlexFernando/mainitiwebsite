import React, {useState, useEffect } from "react";
import { connect, styled } from "frontity";
import Image from "@frontity/components/image";
import Loading from './Loading';

import dataAccordion from './data/dataAccordion';
import SingleQuestion from './faqs/Question';

// import about styles
import {MarginPaddingContainer, HeaderContainer, Title, Separator} from './About';
import { MainParagraph } from "./Ayahuasca";

const Faqs = ({state, actions, libraries}) => {

    useEffect(() => {
        actions.source.fetch("/faqs");
    }, []);

    // Get information about the current URL.
    const data = state.source.get(state.router.link);

    const pageFaqs = state.source.page[29];
    /**Start Question app */

    let dataFaqsFinal = [];

    if(typeof pageFaqs !== "undefined"){
        dataFaqsFinal = Object.keys(pageFaqs.acf).map( elem => pageFaqs.acf[elem]);
    }
    
    const [questions, setQuestions] = useState(dataFaqsFinal);

    let arrTitleGroupFaqs = ['Getting Here', 'Ayahuasca', 'Staying Here', 'Prevention']
    
    return(

        <>
        {typeof pageFaqs === "undefined" ? <Loading /> : 
        
            <MarginPaddingContainer>
                <HeaderContainer>
                    <Title>FAQS</Title>
                    <Separator></Separator>
                </HeaderContainer>
                <main>
                    <Container>
                        <section>
                            
                            {questions.map( (question, index ) => (
                                <SingleQuestion question = {question} titleGroup = {arrTitleGroupFaqs[index]}/>
                            ))}
                        </section> 
                    </Container>

                </main>
                
            </MarginPaddingContainer>
        }    
        
        </>
    )
};

const Container = styled.div`
    margin: 5% auto;
    background: var(--clr-white);
    padding: 3% 2%;
    max-width: 90vw;
    display: grid;
    gap: 1% 2%;

    h3 {
        line-height: 1.2;
        font-weight: 500;
    }

`

export default connect(Faqs);
