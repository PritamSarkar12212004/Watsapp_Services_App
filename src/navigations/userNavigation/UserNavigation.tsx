import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RouteProvider from '../../constants/routes/Provider'
import ScreenProvider from '../../screens/Provider'
import LayoutProvider from '../../layouts/Provider'
const Tab = createBottomTabNavigator();
const UserNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
        }}
            tabBar={(prop) => <LayoutProvider.NAVIGATION.TAB_BAR_NAVIGATION {...prop} />}
            initialRouteName={RouteProvider.USER_ROUTE.MAIN_SCREEN_ROUTE}>

            <Tab.Screen name={RouteProvider.USER_ROUTE.MAIN_SCREEN_ROUTE} component={ScreenProvider.USER_SCREEN.MAIN_SCREEN} />
            <Tab.Screen name={RouteProvider.USER_ROUTE.STATUS_SCREEN_ROUTE} component={ScreenProvider.USER_SCREEN.STATUS_SCREEEN} />
            <Tab.Screen name={RouteProvider.USER_ROUTE.CONTACT_SCREEN_ROUTE} component={ScreenProvider.USER_SCREEN.CONTACT_SCREEN} />
            <Tab.Screen name={RouteProvider.USER_ROUTE.PROFILE_SCREEN_ROUTE} component={ScreenProvider.USER_SCREEN.PROFILE_SCREEN} />

        </Tab.Navigator>
    )
}
export default UserNavigation