import { connect, styled, css, Global } from "frontity";
import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const Question = ({question}) => {

  let questionString = question.question;
  let answerString = question.answer; 

  const [expanded, setExpanded] = useState(false)

  return (

    <QuestionContainer>

      {question.GroupType === "Getting here" ? 
        <>
          <header>
              <QuestionTitle onClick={() => setExpanded(!expanded)}>
                <h4>{questionString}</h4>
                <span>Getting <br></br>Here</span>
              </QuestionTitle>

              <ButtonQuestion onClick={() => setExpanded(!expanded)}>
                {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </ButtonQuestion>        
          </header>
          {expanded && <p>{answerString}</p>}
        </>

        : question.GroupType === "Ayahuasca" ? 
        <>
          <header>
              
              <QuestionTitle onClick={() => setExpanded(!expanded)}>
                <h4>{questionString}</h4>
                <span>Ayahuasca</span>
              </QuestionTitle>
              <ButtonQuestion onClick={() => setExpanded(!expanded)}>
              {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </ButtonQuestion>        
          </header>
          {expanded && <p>{answerString}</p>}
        </>

        : question.GroupType === "Staying here" ? 
        <>
          <header>
              
              <QuestionTitle onClick={() => setExpanded(!expanded)}>
                <h4>{questionString}</h4>
                <span>Staying here</span>
              </QuestionTitle>
              <ButtonQuestion onClick={() => setExpanded(!expanded)}>
              {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </ButtonQuestion>        
          </header>
          {expanded && <p>{answerString}</p>}
        </>

        : 
        <>
          <header>
              
              <QuestionTitle onClick={() => setExpanded(!expanded)}>
                <h4>{questionString}</h4>
                <span>Prevention</span>
              </QuestionTitle>
              <ButtonQuestion onClick={() => setExpanded(!expanded)}>
              {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </ButtonQuestion>        
          </header>
          {expanded && <p>{answerString}</p>}
        </>
      }
    </QuestionContainer>
  )
}

const QuestionContainer = styled.article`
  padding: 1rem 1.5rem;
  border: 2px solid #eae6eb;
  border: 2px solid gray;
  margin-bottom: 1rem;
  border-radius: .25rem;
  border-radius: 1rem;
  box-shadow: 0 5px 15px rgb(0 0 0 / 10%);
  box-shadow: lightgray;

  h4 {
    text-transform: none;
    line-height: 1.5;
  }

  p {
    color: var(--clr-grey-3);
    margin-bottom: 0;
    margin-top: 0.5rem;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
        margin-bottom: 0;
    }
  }
`
const QuestionTitle = styled.div`
    display: flex;
    align-items: center;

    h4 {
      cursor: pointer;
      margin-top: 0;
    }

    span {
      background-color: #ff9800;
      border-radius: 0rem .8rem .8rem 0;
      padding: .5rem .8rem;
      margin-left: 1rem;
      font-weight: bold;
      font-size: .8rem;
      color: #000;
      text-align: center;
    }
`

const ButtonQuestion = styled.button`

    background: transparent;
    border-color: transparent;
    width: 2rem;
    height: 2rem;
    background: var(--clr-grey-special);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: var(--clr-red-special);
    cursor: pointer;
    margin-left: 1rem;
    align-self: center;
    min-width: 2rem;
`;



export default Question