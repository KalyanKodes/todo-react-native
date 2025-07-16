import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import { Slot } from 'expo-router';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Styles from '../Constants/globalStyles';
const _layout = () => {
  const theme = useColorScheme();
  console.log(theme)
  const themeStyles = Styles[theme];
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: themeStyles.appWrapper.backgroundColor}}>
      <Slot />
    </SafeAreaView>
  )
}

export default _layout

const styles = StyleSheet.create({})