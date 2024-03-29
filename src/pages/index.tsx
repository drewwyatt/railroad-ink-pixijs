import React from 'react'
import Head from 'next/head'
import DiceBlock from '../components/DiceBlock'
import Grid from '../components/Grid'
import State from '../components/State'

const Home = () => (
  <div>
    <Head>
      <title>Railroad Ink</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <State>
      <DiceBlock />
      <div className="grid-container">
        <Grid />
      </div>
    </State>

    <style global jsx>{`
      html,
      body {
        background: #0e0e0e;
        color: #ced0cf;
      }

      .grid-container {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  </div>
)

export default Home
