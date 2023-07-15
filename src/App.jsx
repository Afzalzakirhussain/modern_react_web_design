import React from 'react'

import { Navbar, Billing, Business, Button, CTA, CardDeal, Clients, FeedbackCard, Footer, GetStarted, Hero, Stats, Testimonials } from "./components"
import styles from './style'
const App = () =>
{
  return (
    <div className='bg-primary w-full overflow-hidden '>
      {/* navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      {/* hero section*/}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div >
  )
}


export default App
