import React from 'react'
import styled from 'styled-components'
import ThisVideo from './demo/ThisVideo'
import UglyVideo from './demo/UglyVideo'
import PrettyVideo from './demo/PrettyVideo'
import './app.css'

function App() {
  return (
    <div className="App">
      <Section>
        <UglyVideo
          src="http://d39tpa37kkhgnr.cloudfront.net/This_LevisSkateboarding_Video02.mp4"
          loop
        />
      </Section>
      <Section>
        <PrettyVideo
          src="http://d39tpa37kkhgnr.cloudfront.net/This_LevisSkateboarding_Video02.mp4"
          loop
        />
      </Section>
      <Section>
        <ThisVideo
          src="https://s3-us-west-2.amazonaws.com/thisdesign/01.mp4"
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
