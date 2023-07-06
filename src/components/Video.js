import React from 'react'
import testing from '../asserts/testing.mp4'
import ReccomandationSection from '../components/ReccomandationSection'
export default function Video() {
    const my = {
        backgroundColor: "#121927",
        height: "30px",
        color: "white",
        fontSize: "20px",
        margin:"5px 0px 5px 20px"
      };
    return (
        <>
            <div className='movie-section'>
                <h1>Watch This Movie</h1>
                <div className='d-flex justify-content-center'>
                    <video width="90%" height="90%" controls>
                        <source src={testing} type='video/mp4' />
                    </video>

                </div>
                <div style={my}>Tops Pick For U</div>
                <ReccomandationSection/>
            </div>

        </>
    )
}
