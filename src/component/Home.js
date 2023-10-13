import React from 'react'
import Header from './Header'
import Services from './Services'
import Testinomial from './Testinomial'
import Team from './Team'
import Technology from './Technology'
import Contact from './Contact'
import Layout from '../layout/Layout'
import Slider from './Slider';

export const Home = () => {
  return (
   <>
   <Layout>
   <Header/>
    <Slider/>
     <Services/>
    <Testinomial/>
    <Team/>
    <Technology/>
    <Contact/>
    </Layout>
   </>
  )
}
