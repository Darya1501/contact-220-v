import React from 'react'
import { AboutScreen } from './screens/about-screen'
import { MainScreen } from './screens/main-screen'
import { NoveltiesScreen } from './screens/novelties-screen'

export const LandingPage = () => {
  return (
    <div className='container'>
      <MainScreen />
      <NoveltiesScreen />
      <AboutScreen />
    </div>
  )
}
