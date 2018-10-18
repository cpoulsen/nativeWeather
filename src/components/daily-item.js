import React, {Component} from "react";
import {View, Text, StyleSheet} from 'react-native';
import { theDay, roundingDecimal} from "../helpers";

const swapColorAtIndex = [2, 3, 6, 7, 10, 11, 14, 15, 18, 19, 22];

const DailyItem = (props) => {
    return (
        <View style={[styles.hourItem, swapColorAtIndex.includes(props.index) ? styles.colorChange : styles.noChange]}>
            <View style={styles.hourItemInner}>
                <Text style={styles.hourItemText}>{theDay(props.day)}</Text>
                <Text style={[styles.hourItemText, styles.largeText]}>{Math.round(props.temperatureMax)}&deg;C</Text>
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
        alignItems: 'center',
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
        textAlign: 'center'
    },
    largeText: {
        color: '#ffffff',
        fontSize: 45,
        fontWeight: "900",
    },

});

export default DailyItem
