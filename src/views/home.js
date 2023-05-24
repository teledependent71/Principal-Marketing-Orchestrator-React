import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Principal Marketing Orchestrator</title>
        <meta property="og:title" content="Principal Marketing Orchestrator" />
      </Helmet>
    </div>
  )
}

export default Home
