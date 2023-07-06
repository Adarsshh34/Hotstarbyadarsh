import React, { useState } from "react";
import Cardlist from "./Cardlist";
import Recomm from "./Reccom";
import styled from "styled-components";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";

export default function ReccomandationSection() {
  const [a,setA] =useState("Adarsh")
  let settings = {
    dots: true,
    infinte: true,
    speed: 500,
    slidesToScroll: 8,
    autoplay: false,
    slidesToShow: 8,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          // centerMode: true,
          // centerPadding: 40,
          infinite: true,
          slidesToScroll: 1,
          slidesToShow: 3
        }
      }
    ],
  };
  const set=()=>{
      setA("setting value");
  }
 
  const Carousel = styled(Slider)`
    & > button {
      height: 250px;
      
    }
  `;
  const Wrap = styled.div`
    border-radius: 2px solid red;
  `;
  return (
    <div className="reccom-section" style={{ backgroundColor: "#121927", color: "white", height: "250px" }}>
      {/* slider */}
      <Carousel {...settings}>
        {Recomm.map((element) => {
          return (
            <Wrap className="r-card" style={{border:"5px solid red"}}>
              <NavLink to="/video" onClick={set}>
                <Cardlist className="a-card" image={element.image}  />

              </NavLink>
            </Wrap>
          );
        })}
      </Carousel>
    </div>
  );
}
