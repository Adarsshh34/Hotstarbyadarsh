import React from 'react'
import Section from './Section'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import ReccomandationSection from './ReccomandationSection';
// import Recomm from "./Reccom";

export default function Disneyplus() {
    const mystyle={
        "color": "white",
        "fontSize": "20px",
        "marginLeft": "15px",
        "marginTop": "5px",
        "fontWeight": "bold",
        "backgroundColor": "#121927"
    }
    const my = {
        backgroundColor: "#121927",
        height: "321px",
        color: "white",
        textAlign: "center",
      };
   
    
    
  return (
    <>
        <Section/>
        
        <div className='video-section'>
            <div className='vc1'  >
                <img  className="imgg" src="../images/disney.png" alt=""  />
                <video className='v1' src="../videos/disney.mp4" loop autoPlay muted  id='disney'>
                    
                </video>
            </div>
            <div className='vc1'>
                <img className='imgg' src="../images/pixar.png" alt=""  />
                <video className='v1' src="../videos/pixar.mp4" loop autoPlay muted  id='disney'>
                </video>
            </div>
            <div className='vc1'>
                <img className='imgg' src="../images/marvel.png" alt=""  />
                <video className='v1' src="../videos/marvel.mp4" loop autoPlay muted  id='disney'></video>
            </div>
            <div className='vc1'>
                <img className='imgg' src="../images/starwars.png" alt=""  />
                <video className='v1' src="../videos/starwars.mp4" loop autoPlay muted  id='disney'></video>
            </div>
            <div className='vc1'>
                <img className='imgg' src="../images/national.png" alt=""  />
                <video className='v1' src="../videos/natgeo.mp4" loop autoPlay muted  id='disney'></video>
                
                
            </div>
            
        </div>

        <div style={mystyle}><p>Recommended For You</p></div>
  
        {/* make component for recommendde section */}
       {/* Recommended section */}
       <ReccomandationSection/>
       <div style={my}>Made By Adarsh</div>

    </>
  )
}
