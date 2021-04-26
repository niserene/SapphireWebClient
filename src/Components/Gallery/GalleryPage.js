import React from 'react'
import './GalleryPage.css'
import {GalleryData} from './GalleryData'
import GalleryImgCard from './GalleryImgCard';


class GalleryPage extends React.Component{
    
    constructor(props){
        super();
        this.state = {
            'count':6,
            'btnText':'+More',
            
            'pageInfo':`Memories, the timeless treasures of the heart that never fades.
                        captured some of the good times and crazy team at sapphire`,
            
            'data':GalleryData
        }
        
        this.handleMoreBtn = this.handleMoreBtn.bind(this)

    }
    handleMoreBtn(){
        // var count = this.state.count
        // var len = this.state.data.length
        // var text = "+More"
        // if(count===len){
        //     count = 6;
        // }
        // else{
        //     count = Math.min(count+6,len)
        //     if(count===len){
        //         text = "Less"
        //     }
        // }
        // this.setState(state=>{
        //     state['btnText'] = text
        //     state['count'] = count
        //     return state;
        // })
    }
    render(){
        var item = this.state.data[Math.floor(Math.random()*this.state.data.length)]
        // var count = this.state.count

        var sectionBgStyle = {
            'background':`linear-gradient(to right,var(--first),transparent),url(${item.imgUrl})`,
            'background-repeat': 'no-repeat',
            'background-size': 'cover',
            'background-position': 'center',
            'background-attachment': ''
        }

        const GalleryImgCardList = this.state.data.map((cardItem,index)=>{
            return <GalleryImgCard {...cardItem}/>
        })
        return(
            <div className="gallery-page-container">
                <div className="gallery-page-section" style={{...sectionBgStyle}}>
                    <div className="gallery-page-section-sideDesign"></div>
                    <div className="gallery-page-section-text">
                        <h1>
                            <div className="gallery-page-text-first">
                                Gallery view
                            </div>
                            <div className="gallery-page-text-second">
                                of Sapphire
                            </div>
                        </h1>
                        <p>{this.state.pageInfo}</p>
                    </div>
                </div>

                <div className="gallery-page-ImageCardSection">
                    {GalleryImgCardList}
                </div>

                <div className="gallery-page-ImgControl">
                    <div className="gallery-control-section">
                        <div className="gallery-control-btn" onClick={this.handleMoreBtn}>
                            <div className="gallery-control-btn-info">
                                view
                            </div>
                            <div className="gallery-control-btn-main">
                                {this.state.btnText}
                            </div>
                            <div className="gallery-control-btn-info">
                                from gallery
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GalleryPage