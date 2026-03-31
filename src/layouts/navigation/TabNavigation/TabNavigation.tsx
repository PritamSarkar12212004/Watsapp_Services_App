import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from '../../../provider/icons/Icon';

interface TabNavigationProps {
    state: {
        index: number;
        routes: Array<{ name: string; key: string; params?: any }>;
    };
    navigation: any;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ state, navigation }) => {
    const getIconConfig = (routeName: string) => {
        switch (routeName) {
            case 'USER_MAIN_ROUTE':
                return { icon: 'message-text', label: 'Chats' };
            case 'USER_STATUS_ROUTE':
                return { icon: 'update', label: 'Status' };
            case 'USER_CONTACT_ROUTE':
                return { icon: 'account-group', label: 'Contacts' };
            case 'USER_PROFILE_ROUTE':
                return { icon: 'account-circle', label: 'Profile' };
            default:
                return { icon: 'help-circle', label: 'Tab' };
        }
    };

    return (
        <View
            className="flex-row items-center justify-around bg-zinc-900/95 backdrop-blur-md  border-t border-zinc-800 px-2 py-2"
            style={{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: -2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 5,
            }}
        >
            {state.routes.map((route, index) => {
                const isFocused = state.index === index;
                const { icon, label } = getIconConfig(route.name);
                const color = isFocused ? '#10b981' : '#6b7280';
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <TouchableOpacity
                        key={route.key}
                        activeOpacity={0.8}
                        onPress={onPress}
                        className="flex-1 items-center py-2"
                    >
                        <Icon name={icon} size={24} color={color} />
                        <Text
                            className={`text-xs mt-1 ${isFocused ? 'text-green-500' : 'text-zinc-500'}`}
                        >
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default TabNavigation;