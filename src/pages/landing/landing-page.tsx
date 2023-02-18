import React from 'react'
import { MainScreen } from './screens/main-screen'
import { NoveltiesScreen } from './screens/novelties-screen'

export const LandingPage = () => {
  return (
    <div className='container'>
      <MainScreen />
      <NoveltiesScreen />
    </div>
  )
}
