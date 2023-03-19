import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styled from 'styled-components';
import Slider from "react-slick";
const Carousel = styled(Slider)`
    margin-top:20px;
    // margin-left: 30px;
    // margin-right: 30px; 
    overflow: hidden;
    height:371px;
    &> button{
        opacity:0;
        height:400%;
        width:5vw;
        z-index:1;
        &:hover{
            opacity:1;
            transition:opacity 0.2s ease 0s;
        }
    }
    ul li button{
        &:before{
            font-size:10px;
            color:rgb(150,158,171);

        }
    }
    li.slick-active button:before{
        color:white;
    }
    .slick-list{
        overflow:initial;
    }
    slick-prev{
        left:-75px;
    }
    slick-next{
        right:-75px;
    }

    `;
const Wrap =styled.div`
    border-radius:4px;

    a{
        border-radius:4px;
        
    }
    a img{
        // width:1515px
    }
    // @media (max-width:416){
    //     a img{
    //         // width:1711px;
    //         background-color:red;

    //     }
    // }
` ;
export default function Imgslider() {
    let settings={
        dots:true,
        infinte:true,
        speed :500,
        slidesToScroll:1,
        autoplay:true,
    }
    
  return (
    
      <Carousel {...settings} >
        <Wrap>
            <a>
                <img  className ="imgg"src="/images/drishyam.jpg" alt=""/>
            </a>
        </Wrap>
        <Wrap>
            <a>
                <img  className ="imgg"src="/images/mahabharat.jpg" alt=""/>
            </a>
        </Wrap>
        <Wrap>
            <a>
                <img  className ="imgg"src="/images/mallikapuram.jpg" alt=""/>
            </a>
        </Wrap>
        <Wrap>
            <a>
                <img  className ="imgg"src="/images/wakandaforever.jpg" alt=""/>
            </a>
        </Wrap>
        
       
      </Carousel>
    
  )
  
}
