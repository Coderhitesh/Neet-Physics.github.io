import React from 'react'
import Hero from '../Hero/Hero'
import NeetPhysicsByNaveen from '../NeetPhysicsByNaveen/NeetPhysicsByNaveen'
import StudentSays from '../StudentSays/StudentSays'
import AboutTiwariClassesHome from '../AboutTiwariClassesHome/AboutTiwariClassesHome'
import StudentSuccess from '../StudentSuccess/StudentSuccess'
import Query from '../Quarycomponent/Query'

function Home() {
  return (
    <>
      <Hero />
      <NeetPhysicsByNaveen />
      {/* <StudentSays /> */}
      <AboutTiwariClassesHome />
      <StudentSuccess />
      <Query />
    </>
  )
}

export default Home
