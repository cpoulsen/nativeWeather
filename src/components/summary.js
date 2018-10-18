import React, {Component} from "react";
import { View, Text, StyleSheet } from 'react-native'

const Summary = ({summary}) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.summary}>{summary}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 50+'%',
        backgroundColor: "#bbc1f3",
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
    },
    summary: {
        color: "#fff",
        paddingLeft: 20,
        paddingRight: 20
    }
});

export default Summary
