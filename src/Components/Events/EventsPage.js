import React from 'react' 
// import { Carousel } from 'react-responsive-carousel';
import EventCard from './EventCard';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './EventsPage.css'
import { EventData } from './EventsData';
import {CheckBox, CheckBoxOutlineBlank } from '@material-ui/icons';


class EventPage extends React.Component{
    
    constructor(props){
        super();
        this.state = {
            firstImg:'https://res.cloudinary.com/nishantdev/image/upload/v1618650680/undraw_work_together_h63l_ijp1q3.svg',
            secondImg:'https://res.cloudinary.com/nishantdev/image/upload/v1618650680/undraw_dev_focus_b9xo_p7798i.svg',
            data: EventData,
            control:{
                upcoming:true,
                past:true,
                technical:true,
                social:true,
                fashion:true,
                liveSession:true,
                recreational:true,
                other:true
            },
            controlList:[
                {tag:"upcoming",name:"Upcoming Events"},
                {tag:"past",name:"Past Events"},
                {tag:"technical",name:"Tecnical Events"},
                {tag:"social",name:"Social Events"},
                {tag:"fashion",name:"Fashion/Art Events"},
                {tag:"recreational",name:"Recreational Events"},
                {tag:"liveSession",name:"Live Session /Workshops /Webinar /Seminars"}
            ]
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(name){

        var value = this.state.control[name];
        value = !value;
        this.setState((state)=>{
            state.control[name] = value;
            return state;
        })
    }
    render(){
        
        const EventSectionHeader = ()=>{
            return(
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
            )
        }
        const EventSectionImg = ({imgUrl,nameofClass})=>{
            return(
                <div className={nameofClass+" event-page-section-img"}>
                    <img src={imgUrl} alt="" className="event-page-section-img-item"/>
                </div>
            )
        }
        const EventSectionControlItem = (data)=>{
            return(
                    <div className="event-section-control-item">
                        {
                            (data.status) 
                            ?
                            <CheckBox className="fifth" onClick={()=>data.handle(data.tag)} />
                            :
                            <CheckBoxOutlineBlank className="fourth" onClick={()=>data.handle(data.tag)} />
                        }
                        <label htmlFor="unknown" className="event-label" onClick={()=>data.handle(data.tag)}>
                            {data.name}
                        </label>
                    </div>
            )
        }
        const EventSectionControl = ()=>{
            
            return(
                <div className="event-section-control-section">
                    <h1>Filter the events list</h1>
                    <div className="event-section-control">
                        {this.state.controlList.map(item=>
                        <EventSectionControlItem 
                            status={this.state.control[item.tag]}
                            {...item} 
                            handle={this.handleClick} />     
                        )}        
                    </div>
                </div>
            )
        }

        const EventCardsList = ()=>{
            
            return this.state.data.map( item=>{
            for( let i = 0; i < item.tags.length; i++){
                if(this.state.control[item.tags[i]]){
                    return <EventCard {...item}/>
                }
            }
            return null
        
        })}
        const EventsPageTagsList = ()=>{
            let tagsList = []
            for(let i=0; i<this.state.controlList.length; i++){
                if(this.state.control[this.state.controlList[i].tag])tagsList.push(this.state.controlList[i].name)
            }
            
            return (
                <div className="event-tags-list">
                    {tagsList.map(item=>{
                        return(
                            <div className="event-tag">
                                {item}
                            </div>
                        )
                    })}
                </div>
            )
        }
        return(

            <div className="event-page-container">

                <div className="event-page-section">  
                    <EventSectionImg imgUrl={this.state.firstImg} />
                    <EventSectionHeader />
                </div>
                
                <div className="event-page-section">
                    <EventSectionControl />
                    <EventSectionImg imgUrl={this.state.secondImg} nameofClass={"mobileHide"} />
                </div>
                
                <div className="event-page-tags">
                    <EventsPageTagsList />
                </div>

                <div className="event-card-container">
                    <EventCardsList />
                </div>
            
            </div>
        
        )
    }
}

export default EventPage