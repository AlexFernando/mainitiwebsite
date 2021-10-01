import React, {useState, useEffect } from "react";
import { connect, styled } from "frontity";
import Image from "@frontity/components/image";
import Loading from './Loading';

import dataAccordion from './data/dataAccordion';
import SingleQuestion from './faqs/Question';

const Faqs = ({state, actions, libraries}) => {

    useEffect(() => {
        actions.source.fetch("/faqs");
    }, []);

    // Get information about the current URL.
    const data = state.source.get(state.router.link);

    const pageFaqs = state.source.page[29];
    /**Start Question app */
    
    let objFaqs = pageFaqs.acf;


    let dataFaqsFinal = []

    dataFaqsFinal = Object.keys(objFaqs).map( elem => objFaqs[elem]);
    
/*         if(objFaqs[key].GroupType === "Getting here") {
            gettinghere.push(objFaqs[key]);
        }
        else if(objFaqs[key].GroupType === "Ayahuasca") {
            ayahuasca.push(objFaqs[key]);
        }
        else if(objFaqs[key].GroupType === "Staying here") {
            staying.push(objFaqs[key]);
        }
        else {
            preparation.push(objFaqs[key]);
        }  */



    const [questions, setQuestions] = useState(dataFaqsFinal);

    console.log("elem 1: ", questions[0])

    return(

        <main>
            <Container>
                <h3>questions and answers about login</h3>
                <section>
                    {questions.map( (question ) => (
                        <SingleQuestion question = {question} />
                    ))}
                </section> 
            </Container>
        </main>
    )
};

const Container = styled.div`
    width: 90vw;
    margin: 5rem auto;
    background: var(--clr-white);
    border-radius: var(--radius);
    padding: 2.5rem 2rem;
    max-width: var(--fixed-width);
    display: grid;
    gap: 1rem 2rem;

    h3 {
    line-height: 1.2;
    font-weight: 500;
    }

    @media screen and (min-width: 992px) {
        display: grid;
        grid-template-columns: 250px 1fr;
    }
`

const Info = styled.section`
    
`

export default connect(Faqs);
