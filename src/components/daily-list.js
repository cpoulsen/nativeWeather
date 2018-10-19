import React, {Component} from "react";
import {View, ActivityIndicator, StyleSheet, Dimensions, FlatList} from 'react-native';
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
        const daily = props.screenProps.weatherData.daily.data.slice(0, 8);
        return (
            <View style={{flex: 1, flexWrap: 'wrap', flexDirection: 'row'}}>
                <FlatList
                    data={daily}
                    keyExtractor={item => item.time}
                    ListHeaderComponent={() => (
                        <Summary summary={props.screenProps.weatherData.daily.summary}/>
                    )}
                    numColumns={2}
                    renderItem={({item, index}) => (
                        <DailyItem
                            index={index}
                            key={index}
                            day={item.time}
                            temperatureMax={item.temperatureMax}
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
            {props.screenProps.loading ? <View style={[styles.container, styles.horizontal]}><ActivityIndicator size="large" color="#bbc1f3" /></View>  : renderList()}
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

export default DailyList
