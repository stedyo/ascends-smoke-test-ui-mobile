import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  SafeAreaView, 
  View,
  Text
} from 'react-native';


export default class Statistics extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.paragraph}>Results from Trading Signals Community</Text>
          <Text>Period of Acquisition: 4 months</Text>
          <Text>Subscription Cost: 4m * 39,90 = 159,60  </Text>
          <Text>Signals Followed: 17</Text>
          <Text>Total Money Invested: 900 USD</Text>
          <Text>Profit: 700 = 77,78% </Text>
          <Text>Total ROI: 438% </Text>
          <Text>Last Close Position: 
            You enter a day later after the signal was posted and took profit from DODO at +15% in date
          </Text>
          <Text>Current open positions: </Text>
          <Text>LOOKING GOOD COLOCAR EM VERDE</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    margin: 15,
    shadowOffset:{  width: 3,  height: 3,  },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    borderRadius:3,
    backgroundColor: '#F0E9D2',
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'left',
    padding: 20,
    marginBottom: 25,
    color: '#000'
  },
})
