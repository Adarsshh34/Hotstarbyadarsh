import React from 'react'
import ReccomandationSection from './ReccomandationSection'
import Section from './Section'

export default function Movies() {
    const my = {
        backgroundColor: "#121927",
        height: "30px",
        color: "white",
        fontSize: "20px",
        margin:"5px 0px 5px 20px"
      };
      const myy = {
        backgroundColor: "#121927",
        height: "321px",
        color: "white",
        textAlign: "center",
      };
  return (
    <>
        <Section/>
        <div style={my}>Tops Pick For U</div>
        <ReccomandationSection/>
        <div style={my}>Popular Movies</div>
        <ReccomandationSection/>
        <div style={myy}>Made By Adarsh</div>
    </>
  )
}
