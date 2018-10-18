import React, {Component} from "react";
import {ScrollView, View, ActivityIndicator, StyleSheet, Dimensions} from 'react-native';
import Info from '../components/info'
import HourlyItem from '../components/hourly-item'
import Summary from '../components/summary';

class HourlyList extends Component {
    renderList() {
        if (this.props.error) {
            return (
                <Info message={'An error occured'} />
            );
        }
        const hourly = this.props.screenProps.weatherData.hourly.data.slice(0,23);
        return (
            <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
            <Summary style={{height: 400}} summary={this.props.screenProps.weatherData.hourly.summary}/>
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
                {this.props.screenProps.loading ? <View style={[styles.container, styles.horizontal]}><ActivityIndicator size="large" color="#bbc1f3" /></View> : this.renderList()}
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
