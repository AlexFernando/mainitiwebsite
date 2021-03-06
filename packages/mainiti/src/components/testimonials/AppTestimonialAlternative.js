import React, {useState, useEffect } from "react";
import { connect, styled, Global } from "frontity";
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import People from './TestimonialAlternative';
import data from './data';
import TestimonialStyles from "../styles/testimonialAlternative.css";
import LinkButtonTestimonial from './LinkButtonTestimonials'

function App() {

  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
     const lastIndex = people.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex){
      setIndex(0)
    }
  }, [index, people])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 3000);
    return () => clearInterval(slider)
  }, [index])
    
  return (

    <>
        <Global styles={TestimonialStyles} />
        <section className="section">
            <div className="title">
                <h2>
                    Testimonials
                </h2>
                <div className="underline"></div>
            </div>
            <div className="section-center">
                {people.map((person, personIndex) => {
                        return <People key={person.id} {...person} personIndex={personIndex} index={index} />
                })}
                <button className="prev" onClick={() => setIndex(index - 1)}>
                    <FiChevronLeft />
                </button>
                <button className="next" onClick={() => setIndex(index + 1)}>
                    <FiChevronRight />
                </button>
            </div>

            <LinkButtonTestimonial href="/testimonials">More Testimonials</LinkButtonTestimonial>
        </section> 

       
    </>
  );
}

export default App;