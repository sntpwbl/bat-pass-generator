import React from 'react'
import { View, Text, Image } from 'react-native'

import { styles } from './BatLogoStyle'
import batLogo from '../../../assets/Batman 1989.png'

export function BatLogo() {
  return (
    <>
        <Text style={styles.title}>BAT PASS GENERATOR</Text>
        <Image source={batLogo} style={{resizeMode: 'contain'}}/>
    </>
  )
}