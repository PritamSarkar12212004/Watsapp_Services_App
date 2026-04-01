import AuthScreen from './authScreens/AuthScreen';
import AuthSplashScreen from './authScreens/AuthSplashScreen';
import ProfileSetupScreen from './profileSetupScreens/ProfileSetupScreen';
import MainScreen from './userScreens/MainScreen';
import StatusScreen from './userScreens/StatusScreen';
import ContactScreen from './userScreens/ContactScreen';
import ProfileScreen from './userScreens/ProfileScreen';
import SplashLoaderScreen from './splashScreen/SplashLoaderScreen';
const Provider = {
  AUTH_SCRREN: {
    SPLASH_SCREEN: AuthSplashScreen,
    LOGIN_SCREEN: AuthScreen,
  },
  PROFILE_SETUP: {
    PROFILE_SETUP_SCREEN: ProfileSetupScreen,
  },
  USER_SCREEN: {
    MAIN_SCREEN: MainScreen,
    STATUS_SCREEEN: StatusScreen,
    CONTACT_SCREEN: ContactScreen,
    PROFILE_SCREEN: ProfileScreen,
  },
  SPLASH_SCREEN: {
    SPLASH_LOADER: SplashLoaderScreen,
  },
};
export default Provider;
