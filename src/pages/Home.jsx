import React from 'react'
import HeroComponent from '../components/HeroComponent'
import TradingArticle from './UpcomingMatches'
import PointTable from '../components/PointTable'
import Number from '../components/Number'
import VideoSection from '../components/VideoSection'
import TeamMember from '../components/TeamMember'
import Partner from '../components/Partner'
import AboutSection from '../components/AboutSection'
import BlogsNews from '../components/BlogsNews'
import InstaNews from '../components/InstaNews'
import OurTradingTeams from '../components/homeComponents/OurTradingTeams'
import UpcomingEvent from '../components/homeComponents/UpcomingEvent'

function Home() {
  return (
    <div>
        <HeroComponent/>
        <UpcomingEvent/>
        {/* <TradingArticle/> */}
        <OurTradingTeams/>
        <PointTable/>
        <Number/>
        <VideoSection/>
        <TeamMember/>
        <BlogsNews/>
        <Partner/>
        <AboutSection/>
        <InstaNews/>
    </div>
  )
}

export default Home