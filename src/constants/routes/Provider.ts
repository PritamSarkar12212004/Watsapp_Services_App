import AuthRoute from './authRoute/AuthRoute';
import ProfileSetupRoute from './profileSetupRoute/ProfileSetupRoute';
import UserRoutes from './userRoute/UserRoutes';
import SlplashRoute from './splashRoute/SlplashRoute';
const Provider = {
  AUTH: AuthRoute,
  PROFILE_SETUP: ProfileSetupRoute,
  USER_ROUTE: UserRoutes,
  SPLASH_ROUTE: SlplashRoute,
};
export default Provider;
