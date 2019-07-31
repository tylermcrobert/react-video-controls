import React from 'react'
import PrettyVideo from './PrettyVideo/index.js'

function App() {
  return (
    <div className="App">
      <PrettyVideo
        src="http://d39tpa37kkhgnr.cloudfront.net/This_LevisSkateboarding_Video02.mp4"
        muted
        autoPlay
        loop
      >
        asdf
      </PrettyVideo>
    </div>
  )
}

export default App
