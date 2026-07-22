import React from 'react'
import NavBar from '../components/NavBar.jsx'
import Header from '../components/Header.jsx'
import BlogList from '../components/BlogList.jsx'
import Newsletter from '../components/Newsletter.jsx'

const Home = () => {
  return (
    <>
      <NavBar/>
      <Header/>
      <BlogList/>
      <Newsletter/>
    </>
  )
}

export default Home
