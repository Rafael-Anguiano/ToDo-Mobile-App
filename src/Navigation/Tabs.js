import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CalendarScreen from '../screens/Tasks/CalendarScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {

    return (
        <NavigationContainer>
        <Tab.Navigator
            screenOptions={{
                tabBarActiveBackgroundColor:'#45B39D',
                tabBarInactiveBackgroundColor:'#A9DFBF',
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={HomeScreen}
                options={{
                    activeBackgroundColor:'#45B39D',
                    tabBarIcon: ({focused}) => <Ionicons size={25} name={ focused ? 'sunny': 'sunny-outline'} color={focused ? 'black' : '#616A6B' } />,
                    // tabBarLabel:'Hoy',
                    tabBarShowLabel: false,
                    title: 'Por hacer Hoy',
                }}
            />
            <Tab.Screen 
                name="Calendar" 
                component={CalendarScreen} 
                options={{
                    activeBackgroundColor:'#45B39D',
                    tabBarIcon: ({focused}) => <Ionicons size={25} name={focused ?  'calendar' : 'calendar-outline'} color={focused ? 'black' : '#616A6B' } />,
                    // tabBarLabel:'Agregar',
                    tabBarShowLabel: false,
                    title: 'Calendario',
                }}
            />
        </Tab.Navigator>
        </NavigationContainer>
  );
}

export default Tabs;