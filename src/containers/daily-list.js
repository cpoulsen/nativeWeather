import React, {Component} from "react";
import {ScrollView, View, ActivityIndicator, StyleSheet, Dimensions} from 'react-native';
import axios from "axios/index";
import Info from '../components/info';
import DailyItem from '../components/daily-item';
import Summary from '../components/summary';

class DailyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherData: '',
            loading: true,
            error: false
        };
    }

    componentDidMount() {
        const events = require('./data.json');

        this.setState({
            weatherData: events,
            loading: true,
        });

        /*navigator.geolocation.getCurrentPosition(
            (position) => {
                axios.get(`/forecast/${position.coords.latitude}/${position.coords.longitude}`)
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

    renderList() {
        if (this.state.error) {
            return (
                <Info message={'An error occured'} />
            );
        }
        return (
            <View style={{flex: 1, flexWrap: 'wrap', flexDirection: 'row'}}>
                <Summary summary={this.state.weatherData.daily.summary}/>
                {this.state.weatherData.daily.data.slice(0, 7).map((hour, index) => {
                    return (
                        <DailyItem
                            index={index}
                            key={hour.time}
                            day={hour.time}
                            temperatureMax={hour.temperatureMax}
                            summary={hour.summary}
                            icon={hour.icon}
                            precipIntensity={hour.precipIntensity}
                            windSpeed={hour.windSpeed}
                        />
                    );
                })}
            </View>
        )
    }

    render() {
        return (
            <ScrollView>
                {this.state.loading ? <View style={[styles.container, styles.horizontal]}><ActivityIndicator size="large" color="#bbc1f3" /></View>  : this.renderList()}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        height: Dimensions.get("window").height,
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    }
});

export default DailyList
