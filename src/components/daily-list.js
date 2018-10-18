import React, {Component} from "react";
import {ScrollView, View, ActivityIndicator, StyleSheet, Dimensions} from 'react-native';
import Info from './info';
import DailyItem from './daily-item';
import Summary from './summary';

const DailyList = (props) => {
    function renderList() {
        if (props.screenProps.error) {
            return (
                <Info message={'An error occured'} />
            );
        }
        return (
            <View style={{flex: 1, flexWrap: 'wrap', flexDirection: 'row'}}>
                <Summary summary={props.screenProps.weatherData.daily.summary}/>
                {props.screenProps.weatherData.daily.data.slice(0, 7).map((hour, index) => {
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

    return (
        <ScrollView>
            {props.screenProps.loading ? <View style={[styles.container, styles.horizontal]}><ActivityIndicator size="large" color="#bbc1f3" /></View>  : renderList()}
        </ScrollView>
    );
};

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
