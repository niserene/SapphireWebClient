import React from 'react'
// import CountUp from 'react-countup'
import './FactsAndFig.css'

function FactsAndFig(props) {
    return (

        <div className="facts-container">
            
            <div className="facts-container-header">
                <h1 className="facts-container-heading">
                    <span className="third">Facts </span> 
                    <span className="secondary"> & </span>
                    <span className="sixth"> Figures </span>
                </h1>

                <p className="facts-container-info">
                    Holding a tier 2 tag sapphire is well
                    known team for its efficient management 
                    and successfull completion.
                    The numbers says it all  
                </p>
                <div className="facts-img-section">
                    <img src="https://res.cloudinary.com/nishantdev/image/upload/v1618524383/undraw_events_2p66_1_je3qwx.svg" alt="" className="facts-img"/>
                </div>
            </div>
            <div className="facts-container-main">
                <div className="facts-card bg1">
                    <h1>30+</h1>
                    <p>Events</p>
                </div>
                <div className="facts-card bg2">
                    <h1>2500+</h1>
                    <p>Participants</p>
                </div>
                <div className="facts-card bg3">
                    <h1>150+</h1>
                    <p>Active Members</p>
                </div>
                <div className="facts-card bg2">
                    <h1>tier-II</h1>
                    <p>Organisation</p>
                </div>
                <div className="facts-card bg1">
                    <h1>20+</h1>
                    <p>Sponsors</p>
                </div>
                <div className="facts-card bg3">
                    <h1>+MORE</h1>
                    <p>details</p>
                </div>
            </div>
        </div>
    )
}

export default FactsAndFig
