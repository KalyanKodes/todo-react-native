import React from 'react'
import ONBOARDING_IMAGE from '../../assets/onboarding-screen-1.png';
import OnboardingScreen from '../../components/onboardingScreen';
const Screen1 = () => {
   
    return (
        <OnboardingScreen prevScreen={"/"} nextScreen={"/onboarding/screen2"} title={"Manage your tasks"} description={"You can easily manage all of your daily tasks in DoMe for free"} screenCounter={1} image={ONBOARDING_IMAGE}/>
    )
}
export default Screen1

