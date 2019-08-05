# react-video-controls

> Gives video controller components to use with HTML5 videos

[![NPM](https://img.shields.io/npm/v/react-video.svg)](https://www.npmjs.com/package/react-video) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-video
```

## Usage

```jsx
import React from 'react'
import VideoProvider, {
  VideoCtx,
  Mute,
  Play,
  Pause,
  Unmute,
  Fullscreen,
  SeekBar,
} from 'react-video'

function Video() {
  return (
    <VideoProvider>
      <VideoCtx.Consumer>
        {({ video, state }) => (
          <div>
            {video}
            <SeekBar />
            <Play>Play</Play>
            <Pause>Pause</Pause>
            {state.formatted.time} / {state.formatted.duration}
            <Mute>Mute</Mute>
            <Unmute>Un-Mute</Unmute>
            <Fullscreen>FullScreen</Fullscreen>
          </div>
        )}
      </VideoCtx.Consumer>
    </VideoProvider>
  )
}
```

## Styling

Components can be styled easily using the className attribute, or css-in-jss

### CSS

```jsx
<Play className="playButton">Play</Play>
```

### Styled Components

```jsx
import { Play } from 'react-video-controls'

const StyledPlay = styled(Play)`
  padding: 10px;
  background: blue;
  border-radius: 2px;
`

```

## Progressbar Styling
Progressbar can be controlled individually of its wrapper

```jsx
<SeekBar className="progressBar">
  <SeekBar.Progress className="progressBar--progress" />
</SeekBar>
```

## License

MIT © [tylermcrobert](https://github.com/tylermcrobert)
