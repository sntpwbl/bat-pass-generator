import React from 'react'
import { Text, StatusBar, View } from 'react-native'

import styles from './Style'

import { BatLogo } from '../components/BatLogo/BatLogo'
import { BatInput } from '../components/BatInput/BatInput'
import { BatButton } from '../components/BatButton/BatButton'


const Home = () => {
  return (
    <View style={styles.appContainer}>
        <StatusBar barStyle={'light-content'} backgroundColor={'#333333'}/>
        <View style={styles.logoContainer}>
          <BatLogo />
        </View>
        <View style={styles.inputContainer}>
          <BatButton/>
        </View>
    </View>
  )
}


export default Home