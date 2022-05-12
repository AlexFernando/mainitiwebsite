import { connect, styled, css, Global } from "frontity";
import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import IndividualQuestion from './individualQuestion'

const Question = ({question, titleGroup}) => {

  console.log(question," ", titleGroup)
  // console.log("elem: ", question)
  // console.log("title", titleGroup)


  return (

    <>
      <h2>{titleGroup}</h2>

      {Object.keys(question).map( elem => {

          return(
            <IndividualQuestion singleQuestion={question[elem].question} singleAnswer = {question[elem].answer} />    
          )

      })}
    </>
  )
}

export default Question