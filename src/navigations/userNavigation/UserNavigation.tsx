import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ActivityIndicator, View, Text } from 'react-native';

import RouteProvider from '../../constants/routes/Provider';
import ScreenProvider from '../../screens/Provider';
import LayoutProvider from '../../layouts/Provider';
import CoreProvider from '../../core/Provider';
import Tost from '../../components/global/Tost/Tost';
import { useDispatch } from 'react-redux';
import { userSliceLogOut } from '../../store/slices/userSlice/UserSlice';
import AuthRoute from '../../constants/routes/authRoute/AuthRoute';

const Tab = createBottomTabNavigator();

const UserNavigation = ({ navigation }: any) => {
    const [isAuth, setIsAuth] = useState<boolean | null>(null);
    const dispatch = useDispatch()
    useEffect(() => {
        const getToken = async () => {
            const token = await CoreProvider.TOKEN.ACCESS_TOKEN.GET_TOKEN();
            if (token) {
                setIsAuth(true);
            } else {
                setIsAuth(false);
                Tost({
                    status: "error",
                    data: {
                        head: "Invalid Token",
                        subData: "Token not found, login again",
                    },
                });
            }
        };
        getToken();
        if (isAuth === false) {
            dispatch(userSliceLogOut());
            navigation.reset({
                index: 0,
                routes: [{ name: AuthRoute.ROOT_ROUTE }],
            });
        }
    }, [isAuth]);
    if (isAuth === null) {
        return (
            <View className="flex-1 items-center justify-center bg-black">
                <ActivityIndicator color="#10b981" size="large" />
            </View>
        );
    }
    if (!isAuth) {
        return (
            <View className="flex-1 items-center justify-center bg-black">
                <Text className="text-red-500">Invalid Token. Please login again.</Text>
            </View>
        );
    }
    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false }}
            tabBar={(prop) => (
                <LayoutProvider.NAVIGATION.TAB_BAR_NAVIGATION {...prop} />
            )}
            initialRouteName={RouteProvider.USER_ROUTE.MAIN_SCREEN_ROUTE}
        >
            <Tab.Screen
                name={RouteProvider.USER_ROUTE.MAIN_SCREEN_ROUTE}
                component={ScreenProvider.USER_SCREEN.MAIN_SCREEN}
            />
            <Tab.Screen
                name={RouteProvider.USER_ROUTE.STATUS_SCREEN_ROUTE}
                component={ScreenProvider.USER_SCREEN.STATUS_SCREEEN}
            />
            <Tab.Screen
                name={RouteProvider.USER_ROUTE.CONTACT_SCREEN_ROUTE}
                component={ScreenProvider.USER_SCREEN.CONTACT_SCREEN}
            />
            <Tab.Screen
                name={RouteProvider.USER_ROUTE.PROFILE_SCREEN_ROUTE}
                component={ScreenProvider.USER_SCREEN.PROFILE_SCREEN}
            />
        </Tab.Navigator>
    );
};

export default UserNavigation;