import React, {Component} from "react";
import {View, Text, StyleSheet} from 'react-native';
import { theDay, cutTime, roundingDecimal} from "../helpers";

const swapColorAtIndex = [1, 2, 5, 6, 9, 10, 13, 14, 17, 18, 21, 22];

const HourlyItem = (props) => {
    return (
        <View style={[styles.hourItem, swapColorAtIndex.includes(props.index) ? styles.colorChange : styles.noChange]}>
            <View style={styles.hourItemInner}>
                <Text style={styles.hourItemText}>{theDay(props.day)}</Text>
                <Text style={styles.hourItemText}>{cutTime(props.time)}</Text>
                <Text style={[styles.hourItemText, styles.largeText]}>{Math.round(props.temperature)}&deg;C</Text>
                <Text style={styles.hourItemText}>Feels like {Math.round(props.apparentTemperature)}&deg;C</Text>
                <Text style={styles.hourItemText}>{props.summary}</Text>
                {/*<Text><Skycons style={icon} color='white' icon={this.props.icon.toUpperCase().replace(/-/g, "_")}/></Text>*/}
                <Text style={styles.hourItemText}>{roundingDecimal(props.precipIntensity)} mm</Text>
                <Text style={styles.hourItemText}>{roundingDecimal(props.windSpeed)} m/s</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    hourItem: {
        width: 50+'%',
        backgroundColor: "#2b323b",
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20
    },
    hourItemInner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    colorChange: {
        backgroundColor: "#262c35",
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "#bbc1f3"
    },
    hourItemText: {
        color: 'lightgrey',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        marginBottom: 10,
        paddingLeft: 15,
        paddingRight: 15
    },
    largeText: {
        color: '#ffffff',
        fontSize: 45,
        fontWeight: "900",
    },

});

export default HourlyItem
