import React, { Component } from 'react';
import {Dimensions, StyleSheet, View, Text} from "react-native";

const Info = ({message}) => {
    return (
        <View style={styles.loader}>
            <Text style={styles.loaderText}>{message}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    loader: {
        backgroundColor: "#2b323b",
        height: Dimensions.get("window").height,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loaderText: {
        color: '#fff',
    }
});

export default Info;
