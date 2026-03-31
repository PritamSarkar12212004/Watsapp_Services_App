import ProfileSetupNavigation from './profileSetupNavigation/ProfileSetupNavigation';
import rootNavigation from './rootNavigation/RootNavigation';
import authNavigation from './authNavigation/AuthNavigation';
import UserNavigation from './userNavigation/UserNavigation';
const Provider = {
  ROOT_NAVIGATION: rootNavigation,
  AUTH_NAVIGATION: authNavigation,
  PROFILE_NAVIGATION: ProfileSetupNavigation,
  USER_NAVIGATION: UserNavigation,
};
export default Provider;
