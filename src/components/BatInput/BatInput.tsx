import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './BatInputStyles';

interface BatInput{
  senha:string
}

export function BatInput(props : BatInput) {
  return (
        <TextInput placeholder='pass' style={styles.inputer} multiline={true} value={props.senha}/>
  );
}