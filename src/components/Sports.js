import React from 'react'
import Section from './Section'
import styled from "styled-components";
import Slider from "react-slick";
import SportsCard from './SportsCard';
import ReccomandationSection from './ReccomandationSection';
import sport from './SportsApi';

export default function Sports() {
   
    let settings = {
      dots: true,
      infinte: true,
      speed: 500,
      slidesToScroll: 1,
      autoplay: false,
      slidesToShow: 5
      };
      const mystyle={
        "color": "white",
        "fontSize": "20px",
        "marginLeft": "15px",
        "marginTop": "5px",
        "fontWeight": "bold",
        "backgroundColor": "#121927"
    }
      const Caro = styled(Slider)`
    & > button {
      height: 200px;
      width: 5vw;
    }
  `;
  const Wrap = styled.div`
    border-radius: 2px solid red;
  `;
    const my = {
        backgroundColor: "#121927",
        height: "30px",
        color: "white",
        fontSize: "20px",
        margin:"5px 0px 5px 20px"
      };
  return (
    <>
      <Section/>
      <div style={my}>Popular Sports</div>
      <div>
      <Caro {...settings}>
        {
          sport.map((ele)=>{
            return (
              <Wrap>
                <SportsCard name={ele.name} image={ele.image}/>
              </Wrap>
            )
          })
        }
        
        
      </Caro>
      </div>
      <div style={mystyle}><p>Recommended For You</p></div>
      <ReccomandationSection/>
    </>
  )
}
