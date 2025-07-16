import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, useColorScheme } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import GLOBAL_STYLES from '../../Constants/globalStyles';
import { navigate } from 'expo-router/build/global-state/routing';

const Screen4 = () => {
    const theme = useColorScheme();
    const themeStyles = GLOBAL_STYLES[theme].onboarding;
    const moveToPrevScreen = ()=>{
        navigate('/onboarding/screen3')
    }
    const moveToLoginScreen = ()=>{
        navigate('/auth/login')
    }
    const moveToCreateAccountScreen = ()=>{
        navigate('/auth/createAccount')
    }
    return (
        <View style={styles.screenWrapper}>
            <View style={styles.container_1}>
                <TouchableOpacity onPress={moveToPrevScreen}>
                    <FontAwesome name="angle-left" size={24} style={themeStyles.ghostButtonText} />
                </TouchableOpacity>
            </View>

            <View style={styles.container_2}>
                <Text style={themeStyles.primaryHeading}>Welcome to UpTodo</Text>
                <Text style={themeStyles.text}>Please login to your account or create new account to continue</Text>
            </View>

            <View style={styles.container_3}>
                <TouchableOpacity style={themeStyles.primaryButton} onPress={moveToLoginScreen}>
                    <Text style={themeStyles.primaryButtonText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={themeStyles.secondaryButton} onPress={moveToCreateAccountScreen}>
                    <Text style={themeStyles.secondaryButtonText}>CREATE ACCOUNT</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Screen4;

const styles = StyleSheet.create({
    screenWrapper: {
        flex: 1,
        padding: 30,
    },
    container_1: {
        marginBottom: 'auto',
    },
    container_2: {
        alignItems: 'center',
        flex: 0.8,
        gap: 50,
        paddingVertical: 20,
    },
    container_3: {
        gap: 20,
        marginTop: 'auto',
        marginBottom: 40,
    },
});
