import ProfileSetupNavigation from './profileSetupNavigation/ProfileSetupNavigation';
import rootNavigation from './rootNavigation/RootNavigation';
import authNavigation from './authNavigation/AuthNavigation';
const Provider = {
  ROOT_NAVIGATION: rootNavigation,
  AUTH_NAVIGATION: authNavigation,
  PROFILE_NAVIGATION: ProfileSetupNavigation,
};
export default Provider;
