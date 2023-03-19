
import React from 'react'

export default function SportsCard(props) {
    const card={
        height:"150px",
        width:"290px",
        borderRadius:"12px",
        
    }
    const imgStyle={
      height:"140px",
        width:"240px",
        border:"2px solid red",
        borderRadius:"12px",
        opacity:"0.5"
    }
    const namee={
      color: "white",
    position: "relative",
    
    left: "58px",
    
    bottom: "94px",
    fontWeight: "600",
    
    fontSize: "27px"
   

    }
  return (
    <>
      <div style={card}>
        <img  style={imgStyle} src={props.image} alt={props.name} />
        <span style={namee}>{props.name}</span>
      </div>
    </>
  )
}
