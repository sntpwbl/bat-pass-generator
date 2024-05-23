import React, { useState } from 'react'
import { View, Button, Text, Pressable } from 'react-native'

import gerarSenha from '../../services/passwordService'
import { BatInput } from '../BatInput/BatInput'
import { styles } from './BatButtonStyles'

import * as Clipboard from 'expo-clipboard'

export function BatButton() {
    const [senha, setSenha] = useState('')

  return (
    <>
        <BatInput senha={senha}/>

        <Pressable onPress={() => setSenha(gerarSenha)}
        style={styles.button}>
            <Text style={styles.text}>🌩️ GERAR SENHA</Text>
        </Pressable>

        <Pressable onPress={async()=>await Clipboard.setStringAsync(senha)}
        style={styles.button}>
            <Text style={styles.text}>🌩️ COPIAR</Text>
        </Pressable>
    </>
  )
}