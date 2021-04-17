import React from 'react' 
// import { Carousel } from 'react-responsive-carousel';
import EventCard from './EventCard';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './EventsPage.css'
import { EventData } from './EventsData';

class EventPage extends React.Component{
    
    constructor(props){
        super();
        this.state = {
            firstImg:'https://res.cloudinary.com/nishantdev/image/upload/v1618650680/undraw_work_together_h63l_ijp1q3.svg',
            data: EventData
        }
    }
    render(){
        
        const EventPageSection = ()=>{
            return(
                <div className="event-page-section">
                    
                    <div className="event-page-section-img">
                        <img src={this.state.firstImg} alt="" className="event-page-section-img-item"/>
                    </div>
                    
                    <div className="event-page-section-header">

                        <h1 className="event-page-section-header-heading">
                            Happenings At 
                            <span className="third"> Sapphire</span>
                        </h1>
                        <p className="event-page-section-header-info">
                            The Experiement and Experience of the Creative and Curious 
                            geeks at Sapphire turn into super hit reality
                            <br/><br/>
                            This is Sapphire's Happenings
                        </p>
                    
                    </div>
                    
                </div>
            )
        }

        const EventCardsList = this.state.data.map(event=>{
            return <EventCard {...event} />
        })

        return(

            <div className="event-page-container">

                <EventPageSection />

                <div className="event-card-container">
                    {EventCardsList}
                </div>
            </div>
        
        )
    }
}

export default EventPage