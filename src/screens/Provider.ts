import AuthScreen from './authScreens/AuthScreen';
import AuthSplashScreen from './authScreens/AuthSplashScreen';
import ProfileSetupScreen from './profileSetupScreens/ProfileSetupScreen';
const Provider = {
  AUTH_SCRREN: {
    SPLASH_SCREEN: AuthSplashScreen,
    LOGIN_SCREEN: AuthScreen,
  },
  PROFILE_SETUP: {
    PROFILE_SETUP_SCREEN: ProfileSetupScreen,
  },
  
};
export default Provider;
