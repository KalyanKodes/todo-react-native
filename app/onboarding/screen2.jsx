import React from 'react'
import ONBOARDING_IMAGE from '../../assets/onboarding-screen-2.png';
import OnboardingScreen from '../../components/onboardingScreen';
const Screen2 = () => {

    return (
        <OnboardingScreen prevScreen={"/onboarding/screen1"} nextScreen={"/onboarding/screen3"} title={"Create daily routine"} description={"In Uptodo you can create your personalized routine to stay productive"} screenCounter={2} image={ONBOARDING_IMAGE} />
    )
}
export default Screen2

