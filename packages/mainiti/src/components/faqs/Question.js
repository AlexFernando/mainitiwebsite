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
                <span>Getting Here</span>
              </QuestionTitle>

              <ButtonQuestion onClick={() => setExpanded(!expanded)}>
                {expanded ? <AiOutlineMinusStyled /> : <AiOutlinePlusStyled />}
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
              {expanded ? <AiOutlineMinusStyled /> : <AiOutlinePlusStyled />}
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
              {expanded ? <AiOutlineMinusStyled /> : <AiOutlinePlusStyled />}
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
              {expanded ? <AiOutlineMinusStyled /> : <AiOutlinePlusStyled />}
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
  border-top: 2px solid #eae6eb;
  /* border: 2px solid #eae6eb;
  border: 2px solid gray; */
  margin-bottom: 1rem;
  /* border-radius: .25rem;
  border-radius: 1rem;
  box-shadow: 0 5px 15px rgb(0 0 0 / 10%);
  box-shadow: lightgray; */

  h4 {
    text-transform: none;
    line-height: 1.5;
  }

  p {
    color: var(--clr-grey-3);
    font-size: 1.4rem;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
const QuestionTitle = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }


    h4 {
      font-size: 1.6rem;
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
    width: 4rem;
    height: 4rem;
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


const AiOutlineMinusStyled = styled(AiOutlineMinus)`
    font-size: 1.8rem;
`

const AiOutlinePlusStyled = styled(AiOutlinePlus)`
    font-size: 1.8rem;
`

export default Question