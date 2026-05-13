import React from 'react'
import icon1 from '../assets/Group.png'
import icon2 from '../assets/Icon2.png'
import icon3 from '../assets/Icon1.png'

const Services = () => {
  return (
    <div id='services'>
        <div className="container">
            <div className="service-text">
                <h4>sub-headline</h4>
                <h2>a church that's relevant</h2>
            </div>
            <div className="service-cards">
                <div className="card">
                    <div className="card-img">
                        <img src={icon1} alt="icon1" />
                    </div>
                    <h3>About Us</h3>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src={icon2} alt="icon2" />
                    </div>
                    <h3>Get involved</h3>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src={icon3} alt="icon3" />
                    </div>
                    <h3>Giving back</h3>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services