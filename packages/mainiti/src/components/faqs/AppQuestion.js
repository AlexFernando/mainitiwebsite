import React, { useState } from 'react';
import { connect, styled, css, Global } from "frontity";
import data from '../data/dataAccordion';
import SingleQuestion from './Question';

const AppQuestion = () => {

  const [questions, setQuestions] = useState(data)

  return (
    <main>
      <Container>
        <h3>questions and answers about login</h3>
        <section>
          {questions.map((question) => (
            <SingleQuestion key={question.id} {...question} />
          ))}
        </section>
      </Container>
    </main>
  )
}

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

export default AppQuestion