import { StyleSheet, Text, View, Image, useColorScheme } from 'react-native'
import React, { useEffect } from 'react'
import MAIN_LOGO from '../assets/onboarding-main-logo.png'
import GLOBAL_STYLES from '../Constants/globalStyles';
import { navigate } from 'expo-router/build/global-state/routing';
const index = () => {
    const theme = useColorScheme();
    const themeStyles = GLOBAL_STYLES[theme].onboarding;
    useEffect(() => {
        setTimeout(() => {
            navigate('/onboarding/screen1')
        }, 2000);
    }, [])
    return (
        <View style={Styles.container}>
            <Image source={MAIN_LOGO} />
            <Text style={[themeStyles.mainHeading, Styles.mainHeading]}>UpTodo</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    mainHeading: {
        transform: 'translateX(-5px)'
    }
})



export default index