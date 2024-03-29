import React from 'react'
import Cor from '../Coursel/Coursel';
import EventPage from '../Events/EventsPage';
import FactsAndFig from '../FactsAndFigures/FactsAndFig';
import Footer from '../Footer/Footer';
import GalleryPage from '../Gallery/GalleryPage';
import TeamPage from '../TeamPage/TeamPage'

function HomePage() {
    return (
        <>
            <Cor/>
            
            <FactsAndFig />

            <EventPage />

            <GalleryPage />
            
            <TeamPage />
            
            <Footer />
        </>
    )
}

export default HomePage;
