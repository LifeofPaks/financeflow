import React from 'react'
import "./HomePage.scss"
import Hero from './Hero'
import FinanceFlow from './FinanceFlow'
import CryptoPortfolio from './CryptoPortfolio'
import DailyRewards from './DailyRewards'
import Explore from './Explore'
import Testimonial from './Testimonial'
import GetStarted from './GetStarted'
import LatestNews from './LatestNews'
import DownloadApp from './DownloadApp'

const HomePage = () => {
  return (
    <div className='homePage'>
        <Hero/>
        <FinanceFlow/>
        <CryptoPortfolio/>
        <DailyRewards/>
        <Explore/>
        <Testimonial/>
        <GetStarted/>
        <LatestNews/>
        <DownloadApp/>
    </div>
  )
}

export default HomePage