import React, { Component } from 'react'
import Header from './components/Header'
import Kittehs from './components/Kittehs'
import Footer from './components/Footer.js'

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Kittehs />
        <Footer />
      </>
    )
  }
}

export default App
