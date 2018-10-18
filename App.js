import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import Navigation from './src/components/navigation'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <View style={{flex: 1}}>
            <Navigation />
        </View>
    );
  }
}
