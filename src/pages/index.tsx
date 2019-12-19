import React from 'react'
import Head from 'next/head'
import { DIE1 } from '../models'
import Die from '../components/Die'
import Grid from '../components/Grid'

const Home = () => (
  <div>
    <Head>
      <title>Railroad Ink</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Die faces={DIE1} />
    <div className="grid-container">
      <Grid />
    </div>

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
