import React, {Component} from "react";
import {ScrollView, View, ActivityIndicator, StyleSheet, Dimensions} from 'react-native';
import axios from "axios/index";
import Info from '../components/info'
import HourlyItem from '../components/hourly-item'
import Summary from '../components/summary';

class HourlyList extends Component {
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
            loading: false,
        });

        /*axios.get('')
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
            }.bind(this));*/
    }

    renderList() {
        if (this.state.error) {
            return (
                <Info message={'An error occured'} />
            );
        }
        const hourly = this.state.weatherData.hourly.data.slice(0,23);
        return (
            <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
            <Summary style={{height: 400}} summary={this.state.weatherData.hourly.summary}/>
                {hourly.map((hour, index) => {
                    return (
                        <HourlyItem
                            index={index}
                            key={hour.time}
                            day={hour.time}
                            time={hour.time}
                            temperature={hour.temperature}
                            apparentTemperature={hour.apparentTemperature}
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
                {this.state.loading ? <View style={[styles.container, styles.horizontal]}><ActivityIndicator size="large" color="#bbc1f3" /></View> : this.renderList()}
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

export default HourlyList
