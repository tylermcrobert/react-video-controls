import screenfull from 'screenfull'
import formatSecs from '../util/formatSecs'

export default function useContextSuppliment(ctxValue) {
  const [video, state, functions, ref] = ctxValue

  const togglePlay = state.isPlaying ? functions.pause : functions.play

  function fullScreen(el) {
    if (ref.current && screenfull.enabled) {
      screenfull.request(el || ref.current)
    }
  }

  return {
    state: {
      ...state,
      formatted: {
        duration: formatSecs(state.duration),
        time: formatSecs(state.time),
      },
    },
    ref,
    controls: { ...functions, togglePlay, fullScreen },
    video,
  }
}
