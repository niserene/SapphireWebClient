import React from 'react'
import {} from 'react-icons'
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
        const SocialIcon = (item)=>{
            return(
                <a href={item.link} className="social-icon">
                    <i className={`fa fa-${item.name}`}></i>
                </a>
            )
        }
        const SocialHandles = (member) =>{
    
            const handlesList = member.social.map( item =>{
                return <SocialIcon {...item} />
            })
            return(
                <div className="social-handles">
                    {handlesList}
                </div>
            )
        }
        const TeamMemberCard = (member)=>{
            return(
                <div className="team-member-card">
                    <div className="member-card-img">
                        <img src="https://res.cloudinary.com/nishantdev/image/upload/v1618469636/undraw_male_avatar_323b_xu7f5q.svg" alt="pic" />
                    </div>

                    <div className="member-info">
                        <h3 className="member-name">
                            {member.name}
                        </h3>
                        <p className="member-desig">
                            {member.designation}
                        </p>
                        <p className="member-about">
                            {member.about}
                        </p>
                        <SocialHandles {...member} />
                    </div>
                </div>
            )
        }
        const TeamMemberCardList = this.state.membersData.map( member=>{
            return <TeamMemberCard {...member} />
        })

        return (
            <div className="team-container">
                <div className="team-container-header">
                    <div className="team-header-left">
                        <h1 className="header-heading">
                            One Team <span className="third">One Dream</span>
                        </h1>
                        <p className="header-subheading">
                            The Core of Sapphire lies here
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