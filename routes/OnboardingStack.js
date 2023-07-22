import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import OnboardingScreen1 from '../screens/onboarding-screens/OnboardingScreen1';
import OnboardingScreen2 from '../screens/onboarding-screens/OnboardingScreen2';
import OnboardingScreen3 from '../screens/onboarding-screens/OnboardingScreen3';
import OnboardingScreen4 from '../screens/onboarding-screens/OnboardingScreen4';

const onboardingScreens = {
    OnboardingScreen1: {
        screen: OnboardingScreen1
    },
    OnboardingScreen2: {
        screen: OnboardingScreen2
    },
    OnboardingScreen3: {
        screen: OnboardingScreen3
    },
    OnboardingScreen4: {
        screen: OnboardingScreen4
    }
}

const OnboardingStack = createStackNavigator(onboardingScreens, {
    defaultNavigationOptions: {
        headerShown: false 
    }
});

export default createAppContainer(OnboardingStack);

