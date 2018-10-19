import React, {Component} from "react";
import {View, ActivityIndicator, FlatList, StyleSheet, Dimensions} from 'react-native';
import Info from './info'
import HourlyItem from './hourly-item'
import Summary from './summary';

const HourlyList = (props) => {
    function renderList() {
        if (props.error) {
            return (
                <Info message={'An error occured'} />
            );
        }
        const hourly = props.screenProps.weatherData.hourly.data.slice(0,24);
        return (
            <View style={{flex: 1, flexWrap: 'wrap', flexDirection: 'row'}}>
                <FlatList
                    data={hourly}
                    keyExtractor={item => item.time}
                    ListHeaderComponent={() => (
                        <Summary summary={props.screenProps.weatherData.hourly.summary}/>
                    )}
                    numColumns={2}
                    renderItem={({item, index}) => (
                        <HourlyItem
                            index={index}
                            key={index}
                            day={item.time}
                            time={item.time}
                            temperature={item.temperature}
                            apparentTemperature={item.apparentTemperature}
                            summary={item.summary}
                            icon={item.icon}
                            precipIntensity={item.precipIntensity}
                            windSpeed={item.windSpeed}
                        />
                        )}
                    />
            </View>
        )
    }

    return (
        <View style={{flex: 1}}>
            {props.screenProps.loading ? <View style={[styles.container, styles.horizontal]}><ActivityIndicator size="large" color="#bbc1f3" /></View> : renderList()}
        </View>
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

export default HourlyList
