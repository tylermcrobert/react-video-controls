import React from 'react'
import PrettyVideo from './PrettyVideo/index.js'
import UglyVideo from './UglyVideo/index.js'
import ThisVideo from './ThisVideo/index.js'
import './app.css'
import styled from 'styled-components'

function App() {
  return (
    <div className="App">
      <Section>
        <UglyVideo
          src="http://d39tpa37kkhgnr.cloudfront.net/This_LevisSkateboarding_Video02.mp4"
          muted
          autoPlay
          loop
        />
      </Section>
      <Section>
        <PrettyVideo
          src="http://d39tpa37kkhgnr.cloudfront.net/This_LevisSkateboarding_Video02.mp4"
          muted
          autoPlay
          loop
        />
      </Section>
      <Section>
        <ThisVideo
          src="http://d39tpa37kkhgnr.cloudfront.net/This_LevisSkateboarding_Video02.mp4"
          muted
          loop
        />
      </Section>
    </div>
  )
}

const Section = styled.div`
  max-width: 1500px;
  width: 75%;
  margin: 10rem auto;
`

export default App
