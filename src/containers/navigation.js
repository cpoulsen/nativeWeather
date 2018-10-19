import React, { Component } from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import axios from 'axios';
import DailyList from '../components/daily-list';
import HourlyList from '../components/hourly-list';

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherData: '',
            loading: true,
            error: false
        };
    }

    componentDidMount() {
        const events = require('../containers/data.json');

        this.setState({
            weatherData: events,
            loading: false,
        });

        /*navigator.geolocation.getCurrentPosition(
            (position) => {
                axios.get(`forecast/${position.coords.latitude}/${position.coords.longitude}`)
                .then(function (response) {
                    this.setState({
                        weatherData: response.data,
                        loading: false,
                        error: false
                    });
                    console.log('done')
                }.bind(this))
                .catch(function (error) {
                    this.setState({
                        loading: false,
                        error: error
                    });
                    console.log('error')
                }.bind(this));
            },
            (error) => this.setState({ error: error.message }),
        );*/
    }

    render() {
        const Navigator = createBottomTabNavigator(
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
        return (
            <View style={{flex: 1}}>
                <Navigator screenProps={{ weatherData: this.state.weatherData, error: this.state.error, loading: this.state.loading }}  />
            </View>
         );
    }
}
