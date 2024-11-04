import React from 'react'
import Hero from '../components/Hero'
import LastestCollection from '../components/LastestCollection'
import BestSeller from '../components/BestSeller'
import Ourpolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'

const Home = () => {
  return (
    <div>
      <Hero />
      <LastestCollection />
      <BestSeller/>
      <Ourpolicy/>
      <NewsletterBox/>
    </div>
  )
}

export default Home
