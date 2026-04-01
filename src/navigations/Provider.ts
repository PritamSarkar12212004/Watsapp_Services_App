import ProfileSetupNavigation from './profileSetupNavigation/ProfileSetupNavigation';
import rootNavigation from './rootNavigation/RootNavigation';
import authNavigation from './authNavigation/AuthNavigation';
import UserNavigation from './userNavigation/UserNavigation';
import SplashNavigation from './splashNavigation/SplashNavigation';
const Provider = {
  ROOT_NAVIGATION: rootNavigation,
  AUTH_NAVIGATION: authNavigation,
  PROFILE_NAVIGATION: ProfileSetupNavigation,
  USER_NAVIGATION: UserNavigation,
  SPLASH_NAVIGATION: SplashNavigation,
};
export default Provider;
