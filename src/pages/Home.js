import React from 'react'
import Navbar from '../components/Navbar'
import Featured from '../components/Featured'
import Content from '../components/Content'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div>
    <Navbar/>
    <Featured/>
    <Content/>
    <Cards/>
    <Footer/>
    </div>
  )
}

export default Home