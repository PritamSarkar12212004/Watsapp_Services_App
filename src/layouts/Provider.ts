import AnimationLottie from './animation/AnimationLottie';
import ProfileSetupLoader from './loader/ProfileSetup/ProfileSetupLoader';
import AuthLoader from './loader/auth/AuthLoader';
import TabNavigation from './navigation/TabNavigation/TabNavigation';
const Provider = {
  ANIMATION: {
    LOTTI_ANIMATION: AnimationLottie,
  },
  LOADER: {
    PROFILE_SETUP_LOADER: ProfileSetupLoader,
    AUTH_LOADER: AuthLoader,
  },
  NAVIGATION: {
    TAB_BAR_NAVIGATION: TabNavigation,
  },
};
export default Provider;
