import React from "react";
import Cardlist from "./Cardlist";
import Recomm from "./Reccom";
import styled from "styled-components";
import Slider from "react-slick";
export default function ReccomandationSection() {
  let settings = {
    dots: true,
    infinte: true,
    speed: 500,
    slidesToScroll: 8,
    autoplay: false,
    slidesToShow: 8,
  };
  const Carousel = styled(Slider)`
    & > button {
      height: 250px;
      width: 5vw;
    }
  `;
  const Wrap = styled.div`
    border-radius: 2px solid red;
  `;
  return (
    <div 
      className="reccom-section"
      style={{ backgroundColor: "#121927", color: "white", height: "250px" }}
    >
      {/* slider */}
      <Carousel {...settings}>
        {Recomm.map((element) => {
          return (
            <Wrap className="r-card">
              <Cardlist className="a-card" image={element.image} />
            </Wrap>
          );
        })}
      </Carousel>
    </div>
  );
}
