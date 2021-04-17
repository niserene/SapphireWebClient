import React from 'react'
import './EventCard.css'

function EventCard(props) {

    return (
        <div className="event-card">

            <span></span><span></span><span></span><span></span>
            
            <div className="event-card-img-section">
                <img src={props.imgUrl} alt={props.name} className="event-card-img" />
            </div>
            <div className="event-card-text-section">
                <div className="event-card-content event-card-first">
                    <h1 className="event-card-heading">
                        {props.name}
                    </h1>
                    <p className="event-card-info">
                        {props.info}
                    </p>
                    <div className="event-card-detail">
                        <p className="event-card-category">
                            {props.category}
                        </p>
                        <p className="event card-timing">
                            {props.timing}
                        </p>
                    </div>
                </div>
                <div className="event-card-content event-card-second">
                    <a href="#knowmore">
                        <button className="event-card-btn">
                            Know more
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default EventCard
