import React, {useCallback, useEffect, useMemo, useState} from 'react'
import {stylessheet} from './styles'
import {View, TouchableOpacity, Text, Alert} from 'react-native'
import {useTranslation} from 'react-i18next'
import {useNavigation} from '@react-navigation/native'
import {useSelector} from 'react-redux'
import {ToastTypes, WordModeTypes, WordStatusList} from '@/constants/general'
import {Blurhash} from 'react-native-blurhash'
import {
  deleteWordByIdRequest,
  userChangeWordStatusRequest
} from '@/api/requests/word'
import {useToast} from 'react-native-toast-notifications'
import Icon from '@/components/Icon'
import Colors from '@/constants/theme'
import {createSound, playSound} from '@/utils/playSound'
import SoundBtn from '@/components/Sound'

const initialProps = {
  item: null,
  order: null,
  wordMode: WordModeTypes.default,
  onUpdateWordsByTopic: () => {},
  topicItem: null
}

const WordItem = props => {
  const {theme} = useSelector(store => store.theme || {})
  const {t} = useTranslation()
  const navigation = useNavigation()
  const styles = stylessheet(theme)
  const {userInfo} = useSelector(store => store.user || {})
  const {item, order, wordMode, topicItem, onUpdateWordsByTopic} = {
    ...initialProps,
    ...props
  }
  const [currentWordStatus, setCurrentWordStattus] = useState(item?.status)
  const [isLoadingChangeStatus, setIsLoadingChangeStatus] = useState(false)
  const [isRemoveLoading, setIsRemoveLoading] = useState(false)
  const toast = useToast()
  const [playing, setPlaying] = useState()
  const audio = useMemo(() => {
    if (item?.voice) {
      return createSound(item.voice)
    }
    return null
  }, [item.voice])
  console.log('audio', audio)
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
  useEffect(() => {
    setCurrentWordStattus(item?.status)
  }, [item?.status])

  const onChangeWordStatus = useCallback(() => {
    const statusId = WordStatusList.findIndex(
      item => item.value === currentWordStatus
    )
    const newStatusId =
      statusId + 1 <= WordStatusList?.length - 1 ? statusId + 1 : 0
    const newStatusVal = WordStatusList[newStatusId]?.value
    onChangeStatusAction({wordId: item?.id, status: newStatusVal})
  }, [currentWordStatus, item])
  const onChangeStatusAction = async ({wordId, status}) => {
    setIsLoadingChangeStatus(true)
    try {
      const response = await userChangeWordStatusRequest({wordId, status})
      if (response.status === 200) {
        setCurrentWordStattus(status)
      }
    } catch (err) {
      toast.show(err?.message, {type: ToastTypes.danger})
    } finally {
      setIsLoadingChangeStatus(false)
    }
  }
  const removeTopic = async () => {
    setIsRemoveLoading(true)
    try {
      const response = await deleteWordByIdRequest(item?.id)
      if (response?.status === 200) {
        onUpdateWordsByTopic()
      }
    } catch (err) {
      toast.show(err.message, {type: ToastTypes.danger})
    } finally {
      setIsRemoveLoading(false)
    }
  }
  const handleRemoveWordPress = () => {
    Alert.alert(`${t('texts.removeWord')}:"${item?.word}"`, '', [
      {
        text: t('buttons.cancel'),
        onPress: () => {},
        style: 'cancel'
      },
      {
        text: t('buttons.confirm'),
        onPress: () => {
          removeTopic()
        }
      }
    ])
  }
  const renderModeContent = mode => {
    return (
      <View style={styles.wrapperTitle}>
        <Blurhash
          blurhash={
            mode === WordModeTypes.translation
              ? 'LGFFaXYk^6#M@-5c,1J5@[or[Q6.'
              : null
          }
          style={mode === WordModeTypes.translation && styles.blurStyle}>
          <Text style={styles.title}>{item?.word}</Text>
          <Text style={styles.secondaryTitle}>{item?.wordPhonetic}</Text>
        </Blurhash>
        <View>
          <Blurhash
            blurhash={
              mode === WordModeTypes.word
                ? 'LGFFaXYk^6#M@-5c,1J5@[or[Q6.'
                : null
            }
            style={mode === WordModeTypes.word && styles.blurStyle}>
            <Text style={[styles.translation]}>{item?.wordTranslate}</Text>
          </Blurhash>
        </View>
      </View>
    )
  }

  return (
    <View style={[styles.mainWrapper]}>
      <View style={styles.contentWrapper}>
        <View style={styles.wrapperTopBlock}>
          {renderModeContent(wordMode)}
        </View>
        <Text style={styles.description}>{item?.description}</Text>
      </View>
      <TouchableOpacity
        disabled={isLoadingChangeStatus}
        onPress={() => onChangeWordStatus(currentWordStatus)}
        style={styles.wrapperStatusBtn}>
        <Text style={[styles.countText, styles[currentWordStatus]]}>
          {currentWordStatus}
        </Text>
      </TouchableOpacity>
      <View style={styles.wrapperButtons}>
        {item.voice && <SoundBtn soundUrl={item?.voice} />}

        {topicItem?.userId === userInfo?.id && (
          <TouchableOpacity
            disabled={isRemoveLoading}
            onPress={handleRemoveWordPress}
            style={styles.wrapperActionBtn}>
            <Icon name="trash" size={22} color={Colors[theme].colors.red} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}
export default WordItem
