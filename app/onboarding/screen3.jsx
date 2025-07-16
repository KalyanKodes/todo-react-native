import React from 'react'
import ONBOARDING_IMAGE from '../../assets/onboarding-screen-3.png';
import OnboardingScreen from '../../components/onboardingScreen';
const Screen3 = () => {

    return (
        <OnboardingScreen prevScreen={"/onboarding/screen2"} nextScreen={"/onboarding/screen4"} title={"Orgonaize your tasks"} description={"You can organize your daily tasks by adding your tasks into separate categories"} screenCounter={3} image={ONBOARDING_IMAGE} />
    )
}
export default Screen3

