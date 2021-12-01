import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Alert,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default class EventsView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:8, day:19, month: 'Jan'},
        {id:2, day:20, month: 'Jan'}, 
        {id:9, day:12, month: 'May'},
        {id:5, day:29, month: 'Jul'}, 
        {id:3, day:17, month: 'Aug'}, 
        {id:1, day:11, month: 'Sep'}, 
        {id:7, day:16, month: 'Sep'},
        {id:6, day:12, month: 'Oct'}, 
        {id:4, day:15, month: 'Dec'}, 
       
      
        
       
       
      ],
    };
  }

  eventClickListener = (viewId) => {
    Alert.alert("alert", "event clicked");
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList 
          enableEmptySections={true}
          style={styles.eventList}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={() => this.eventClickListener("row")}>
                <View style={styles.eventBox}>
                  <View style={styles.eventDate}>
                     <Text  style={styles.eventDay}>{item.day}</Text>
                     <Text  style={styles.eventMonth}>{item.month}</Text>
                  </View>
                  <View style={styles.eventContent}>
                    <Text  style={styles.eventTime}>00:00 am</Text>
                    <Text  style={styles.userName}>Coin Listing</Text>
                    <Text  style={styles.description}>Lorem ipsum dolor sit amet, elit consectetur</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )
          }}/>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#DCDCDC",
  },
  eventList:{
    marginTop:20,
  },
  eventBox: {
    padding:10,
    marginTop:2,
    marginBottom:5,
    flexDirection: 'row',
  },
  eventDate:{
    marginLeft: 10,
    flexDirection: 'column',
  },
  eventDay:{
    fontSize:50,
    color: "#000",
    fontWeight: "600",
  },
  eventMonth:{
    fontSize:16,
    color: "#000",
    fontWeight: "600",
  },
  eventContent: {
    flex:1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft:10,
    marginRight: 10,
    backgroundColor: '#FFFFFF',
    padding:10,
    borderRadius:10
  },
  description:{
    fontSize:15,
    color: "#646464",
  },
  eventTime:{
    fontSize:18,
    color:"#151515",
  },
  userName:{
    fontSize:16,
    color:"#151515",
  },
});
