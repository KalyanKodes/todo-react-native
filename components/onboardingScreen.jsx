import { StyleSheet, Text, View, TouchableOpacity, Image, useColorScheme } from 'react-native'
import React from 'react'
import ONBOARDING_IMAGE from '../assets/onboarding-screen-1.png';
import GLOBAL_STYLES from '../Constants/globalStyles';
import { navigate } from 'expo-router/build/global-state/routing';
const OnboardingScreen = ({ prevScreen, nextScreen, title, description, screenCounter , image}) => {
    const theme = useColorScheme();
    const themeStyles = GLOBAL_STYLES[theme].onboarding;
    const moveToNextScreen = () => {
        navigate(nextScreen)
    }
    const moveToPrevScreen = () => {
        navigate(prevScreen)
    }
    const skipScreens = () => {
        navigate('/onboarding/screen4')
    }
    return (
        <View style={Styles.screenWrapper}>

            <View style={Styles.container_1}>
                <TouchableOpacity onPress={skipScreens}>
                    <Text style={[themeStyles.tertiaryButtonText, { letterSpacing: 1 }]}>SKIP</Text>
                </TouchableOpacity>
            </View>

            <View style={Styles.container_2}>
                <View style={Styles.imageWrapper}>
                    <Image source={image} style={Styles.image} />
                </View>
                <View style={Styles.screenStepsContainer}>
                    <View style={[screenCounter === 1 ? themeStyles.screenStepActive : themeStyles.screenStepHidden]}></View>
                    <View style={[screenCounter === 2 ? themeStyles.screenStepActive : themeStyles.screenStepHidden]}></View>
                    <View style={[screenCounter === 3 ? themeStyles.screenStepActive : themeStyles.screenStepHidden]}></View>
                </View>
                <Text style={[themeStyles.primaryHeading]}>{title}</Text>
                <Text style={[themeStyles.text]}>{description}</Text>
            </View>

            <View style={Styles.container_3}>
                <TouchableOpacity onPress={moveToPrevScreen}>
                    <Text style={[themeStyles.tertiaryButtonText, { letterSpacing: 1 }]} >BACK</Text>
                </TouchableOpacity>
                <TouchableOpacity style={themeStyles.primaryButton} onPress={moveToNextScreen}>
                    <Text style={[themeStyles.primaryButtonText]}>NEXT</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default OnboardingScreen

const Styles = StyleSheet.create({
    screenWrapper: {
        flex: 1,
        padding: 30,
    },
    container_1: {
        flexDirection: "column",
        justifyContent: 'flex-start',
        marginBottom: 'auto'
    },
    container_2: {
        alignItems: "center",
        flex: 0.8,
        gap: 50,
        paddingVertical: 20,
    },
    screenStepsContainer: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        gap: 10
    },
    imageWrapper:{
        // backgroundColor: "yellow",
        height: 300,
        width: 300
    },
    image: {
        margin: 'auto'
        // width: "100%", 
        // height: "100%"
    },
    container_3: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        marginTop: 'auto',
        marginBottom: 40
    }
})