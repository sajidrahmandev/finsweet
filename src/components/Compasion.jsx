import React from 'react'
import card1 from "../assets/compasion1.png"
import card2 from "../assets/compasion2.png"
import card3 from "../assets/compasion3.png"

const Compasion = () => {
  return (
    <div id='compasion'>
        <div className="container">
            <div className="compasion-text">
                <h4>sub-headline</h4>
                <h2>love and compassion</h2>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h3>
                <button className='primary-btn'>Read More</button>
            </div>
            <div className="compasion-cards">
                <div className="card1">
                    <img src={card1} alt="Compasion 1" />
                </div>
                <div className="card2">
                    <img src={card2} alt="Compasion 2" />
                </div>
                <div className="card3">
                    <img src={card3} alt="Compasion 3" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Compasion