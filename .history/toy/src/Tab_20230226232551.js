import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Create, Notification } from './TabScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Create' component={Create} />
            <Tab.Screen name='Notification' component={Notification} />
        </Tab.Navigator>
    );
};

export default TabNavigation;