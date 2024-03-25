import {TouchableOpacity} from 'react-native'
import Icon from '@/components/Icon'
import Colors from '@/constants/theme'
import React, {useMemo, useState} from 'react'
import {createSound} from '@/utils/playSound'
import {useSelector} from 'react-redux'
import {stylessheet} from './styles'
const initialProps = {
  soundUrl: null
}
const SoundBtn = props => {
  const {theme} = useSelector(store => store.theme || {})
  const styles = stylessheet(theme)
  const {soundUrl} = {...initialProps, ...props}
  const [playing, setPlaying] = useState()
  const audio = useMemo(() => {
    if (soundUrl) {
      return createSound(soundUrl)
    }
    return null
  }, [soundUrl])
  const playPause = () => {
    if (audio.isPlaying()) {
      audio.pause()
      setPlaying(false)
    } else {
      setPlaying(true)
      audio.play(success => {
        if (success) {
          setPlaying(false)
          console.log('successfully finished playing')
        } else {
          setPlaying(false)
          console.log('playback failed due to audio decoding errors')
        }
      })
    }
  }
  return (
    <TouchableOpacity style={styles.voiceBtn} onPress={playPause}>
      <Icon
        color={Colors[theme].colors.gray_100}
        size={16}
        name={playing ? 'pause-filled' : 'play'}
      />
    </TouchableOpacity>
  )
}
export default SoundBtn
