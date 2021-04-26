import React from 'react'
import {} from 'react-icons'
import MemberCard from './MemberCard';
import { MemberData } from './MemberData';
import './TeamPage.css'

class TeamPage extends React.Component{
    
    constructor(props){
        super();
        this.state = {
            initial:'none',
            membersData:MemberData
        }
    }
    render(){
        const TeamMemberCardList = this.state.membersData.map( member=>{
            return <MemberCard {...member} />
        })

        return (
            <div className="team-container">
                <div className="team-container-header">
                    <div className="team-header-left">
                        <h1 className="header-heading">
                            One Team <span className="third">One Dream</span>
                        </h1>
                        <p className="header-subheading">
                            The Core of Sapphire team
                            <br/>
                            As our tagline states , 
                            sapphire is a team of creative geeks
                        </p>
                    </div>
                    <div className="team-header-right">
                        <img src="https://res.cloudinary.com/nishantdev/image/upload/v1618469554/undraw_teamwork_hpdk_vnnnbt.svg" alt="" />
                    </div>
                </div>
                <div className="team-container-main">
                    {TeamMemberCardList}
                </div> 
            </div>
        )
    }
}

export default TeamPage;