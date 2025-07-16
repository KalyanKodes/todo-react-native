import { StyleSheet, Text, View, TouchableOpacity, useColorScheme, TextInput } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import GLOBAL_STYLES from '../../Constants/globalStyles';
import { navigate } from 'expo-router/build/global-state/routing';
const CreateAccount = () => {
  const theme = useColorScheme();
  const themeStyles = GLOBAL_STYLES[theme].auth;
  const moveToPrevScreen = () => {
    navigate('/onboarding/screen4')
  }
  return (
    <View style={styles.screenWrapper}>

      <View style={styles.container_1}>
        <TouchableOpacity onPress={moveToPrevScreen}>
          <FontAwesome name="angle-left" size={24} style={themeStyles.ghostButtonText} />
        </TouchableOpacity>
      </View>

      <View>
        <Text style={themeStyles.primaryHeading}>Register</Text>
      </View>

      <View style={styles.form}>
        <View>
          <Text style={[themeStyles.label, { marginVertical: 10 }]}>Username</Text>
          <TextInput
            placeholder="Enter your Username"
            keyboardType="email-address"
            style={themeStyles.inputBox}
            placeholderTextColor="#999"
          />
        </View>
        <View>
          <Text style={[themeStyles.label, { marginVertical: 10 }]}>Password</Text>
          <TextInput
            placeholder="Enter your Password"
            secureTextEntry={true}
            style={themeStyles.inputBox}
            placeholderTextColor="#999"
          />
        </View>

        <View>
          <Text style={[themeStyles.label, { marginVertical: 10 }]}>Confirm Password</Text>
          <TextInput
            placeholder="Confirm your Password"
            secureTextEntry={true}
            style={themeStyles.inputBox}
            placeholderTextColor="#999"
          />
        </View>
        <TouchableOpacity style={[themeStyles.primaryButtonDisabled, { marginTop: 'auto' }]} disabled={true}>
          <Text style={themeStyles.primaryButtonDisabledText}>Register</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.orContainer}>
        <View style={{ height: 1, flex: 1, backgroundColor: themeStyles.inputBox.borderColor }}></View>
        <Text style={{ color: themeStyles.inputBox.borderColor, marginHorizontal: 3 }}>or</Text>
        <View style={{ height: 1, flex: 1, backgroundColor: themeStyles.inputBox.borderColor }}></View>
      </View>
      <View style={{ marginTop: '', gap: 30 }}>
        <TouchableOpacity style={themeStyles.secondaryButton}>
          <FontAwesome name="google" size={24} color={theme === "dark" ? "#FFFFFF" : "#000000"} />
          <Text style={themeStyles.label}>Register with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={themeStyles.secondaryButton}>
          <FontAwesome name="apple" size={24} color={theme === "dark" ? "#FFFFFF" : "#000000"} />
          <Text style={themeStyles.label}>Register with Apple</Text>
        </TouchableOpacity>
      </View>

      <Text style={[themeStyles.label, { marginHorizontal: 'auto' }]}>Already have an account? <Link href={"/auth/login"} style={{ color: "gray" }}>Login</Link></Text>
    </View>
  )
}

export default CreateAccount

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    padding: 30,
    gap: 50
  },
  container_1: {
    // marginBottom: 'auto',
  },
  orContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    gap: 30,
    paddingVertical: 20
  }
});