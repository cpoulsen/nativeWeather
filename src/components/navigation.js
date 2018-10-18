import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import DailyList from '../containers/daily-list';
import HourlyList from '../containers/hourly-list';
import {StyleSheet} from "react-native";

export default createBottomTabNavigator(
    {
    Hourly: HourlyList,
    Daily: DailyList,
    },
    {
        tabBarOptions: {
            activeTintColor: '#bbc1f3',
            inactiveTintColor: 'gray',
            activeBackgroundColor : '#262c35',
            inactiveBackgroundColor  : '#262c35',
            labelStyle: {
                fontSize: 16,
                paddingBottom: 10
            },
            style: {
                borderTopWidth: 1,
                borderTopColor: '#bbc1f3',
            }
        },
    }
);
