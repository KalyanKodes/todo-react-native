import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    dark: {
        appWrapper: {
            backgroundColor: "#000000"
        },
        onboarding: {
            primaryButton: {
                backgroundColor: "#8875FF",
                borderRadius: 5,
                paddingVertical: 12,
                paddingHorizontal: 24,
            },
            primaryButtonText: {
                color: "#FFFFFF",
                margin: "auto"
            },
            secondaryButton: {
                borderWidth: 1,
                borderColor: '#8E7CFF',
                paddingVertical: 12,
                paddingHorizontal: 24,
            },
            secondaryButtonText: {
                color: "#FFFFFF",
                margin: 'auto'
            },
            tertiaryButtonText: {
                color: "rgba(255, 255, 255, 0.43)",
            },
            ghostButtonText: {
                color: "#FFFFFF",
            },
            mainHeading: {
                color: "#FFFFFF",
                fontWeight: "bold",
                fontSize: 40
            },
            primaryHeading: {
                color: "rgba(255, 255, 255, 0.87)",
                fontWeight: "bold",
                fontSize: 32
            },
            text: {
                color: "rgba(255, 255, 255, 0.87)",
            },
            screenStepHidden: {
                backgroundColor: "#AFAFAF",
                width: 30,
                height: 4,
                borderRadius: 10
            },
            screenStepActive: {
                backgroundColor: "rgba(255, 255, 255, 0.87)",
                width: 30,
                height: 4,
                borderRadius: 10
            }
        }, 
        auth:{
            primaryHeading:{
                color: "rgba(255, 255, 255, 0.87)",
                fontWeight: 'bold',
                marginBottom: "auto",
                fontSize: 32
            },
            label:{
                color: "rgba(255, 255, 255, 0.87)",
                fontWeight: "regular",
                fontSize: 16
            },
            inputBox:{
                backgroundColor: "#1D1D1D",
                borderWidth: 1,
                borderColor: "#979797",
                padding: 12,
                borderRadius: 4,
                color: "rgb(255, 255, 255)",
                fontWeight: "regular",
                fontSize: 16
            },
            primaryButtonEnabled:{
                backgroundColor: '#8687E7',
                paddingVertical: 12,
                paddingHorizontal: 24,
                borderRadius: 4
            },
            primaryButtonDisabled: {
                backgroundColor: 'rgba(134, 135, 231, 0.5)',
                paddingVertical: 12,
                paddingHorizontal: 24,
                borderRadius: 4
            },
            primaryButtonEnabledText:{
                color: "#FFFFFF",
                margin: "auto"
            },
            primaryButtonDisabledText:{
                color: "rgba(255, 255, 255, 0.5)",
                margin: 'auto'
            },
            secondaryButton: {
                borderWidth: 1,
                borderColor: "#8775ffa2",
                paddingVertical: 12,
                paddingHorizontal: 24,
                borderRadius: 4,
                justifyContent: 'center',
                alignItems: "center",
                flexDirection: 'row',
                gap: 20
            },
            ghostButtonText: {
                color: "#FFFFFF",
            },
        }
    },

    light: {
        appWrapper: {
            backgroundColor: "#ffffffff"
        },
        onboarding: {
            primaryButton: {
                backgroundColor: "#8875FF",
                borderRadius: 5,
                paddingVertical: 12,
                paddingHorizontal: 24,
            },
            primaryButtonText: {
                color: "#FFFFFF",
                margin: 'auto'
            },
            secondaryButton: {
                borderWidth: 1,
                borderColor: '#8E7CFF',
                paddingVertical: 12,
                paddingHorizontal: 24,
            },
            secondaryButtonText: {
                color: "#000000",
                margin: 'auto'
            },
            tertiaryButtonText: {
                color: "rgba(0, 0, 0, 0.43)",
            },
            ghostButtonText: {
                color: "#000000",
            },
            mainHeading: {
                color: "#000000",
                fontWeight: "bold",
                fontSize: 40
            },
            primaryHeading: {
                color: "rgba(0, 0, 0, 0.87)",
                fontWeight: "bold",
                fontSize: 32
            },
            text: {
                color: "rgba(0, 0, 0, 0.87)",
            },
            screenStepHidden: {
                backgroundColor: "#AFAFAF",
                width: 30,
                height: 4,
                borderRadius: 10
            },
            screenStepActive: {
                backgroundColor: "rgba(0, 0, 0, 0.87)",
                width: 30,
                height: 4,
                borderRadius: 10
            }
        },
        auth: {
            primaryHeading: {
                color: "rgba(0, 0, 0, 0.87)", // dark text
                fontWeight: 'bold',
                fontSize: 32
            },
            label: {
                color: "rgba(0, 0, 0, 0.87)", // dark label
                fontWeight: "400",
                fontSize: 16
            },
            inputBox: {
                backgroundColor: "#FFFFFF", // white input box
                borderWidth: 1,
                borderColor: "#979797",
                padding: 12,
                borderRadius: 4,
                color: "#000000", // black text
                fontWeight: "400",
                fontSize: 16
            },
            primaryButtonEnabled: {
                backgroundColor: '#8875FF', // same purple works on light
                paddingVertical: 12,
                paddingHorizontal: 24,
                borderRadius: 4
            },
            primaryButtonDisabled: {
                backgroundColor: 'rgba(136, 117, 255, 0.5)', // faded purple
                paddingVertical: 12,
                paddingHorizontal: 24,
                borderRadius: 4
            },
            primaryButtonEnabledText: {
                color: "#FFFFFF",
                margin: 'auto'
            },
            primaryButtonDisabledText: {
                color: "rgba(255, 255, 255, 0.5)",
                margin: 'auto'
            },
            secondaryButton: {
                borderWidth: 1,
                borderColor: "#8875FF",
                paddingVertical: 12,
                paddingHorizontal: 24,
                borderRadius: 4,
                flexDirection: "row",
                justifyContent: 'center',
                alignItems: "center",
                gap: 20
            },
            ghostButtonText: {
                color: "#000000",
            },
        }
    }
});

export default Styles;
