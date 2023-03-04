import React from 'react'
import { AboutScreen } from './screens/about-screen'
import { FormScreen } from './screens/form-screen'
import { MainScreen } from './screens/main-screen'
import { NoveltiesScreen } from './screens/novelties-screen'

export const LandingPage = () => {
  const formRef: React.RefObject<HTMLDivElement> = React.createRef()

  return (
    <div className='container'>
      <MainScreen formRef={formRef} />
      <NoveltiesScreen />
      <AboutScreen />
      <FormScreen formRef={formRef} />
    </div>
  )
}
