import React from 'react'
import './MemberCard.css'


const SocialIcon = (item)=>{
    
    return(
        <a href={item.link} className="team-card-social-item">
            <i className={`fa fa-${item.name}`}></i>
        </a>
    )
}
const SocialHandles = (member) =>{

    const handlesList = member.social.map( item =>{
        return <SocialIcon {...item} />
    })
    return(
        <div className="team-card-social">
            {handlesList}
        </div>
    )
}
function MemberCard(member) {
    
    return(
        <div className="team-card">

            <div className="team-card-circle">
            </div>
            
            <div className="team-card-content">
                <div className="team-card-img-sec">
                    <img src="https://res.cloudinary.com/nishantdev/image/upload/v1618469636/undraw_male_avatar_323b_xu7f5q.svg" alt="" class="team-card-img" />
                </div>
                <div className="team-card-content-text">
                <h1>
                    {member.name}
                </h1>
                <h4>
                    {member.designation}
                </h4>
                <p>
                    {member.about}
                </p>
                </div>
            </div>

            <SocialHandles {...member} />
        </div>
    )
}

export default MemberCard
