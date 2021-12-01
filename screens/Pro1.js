/**
 * Created by ggoma on 12/17/16.
 */
 import React, {Component} from 'react';
 import {
     View,
     Text,
     Image,
     StyleSheet,
     Dimensions,
     TextInput,
     Animated,
     PanResponder,
     SafeAreaView,
     ScrollView
 } from 'react-native';
 import { theme } from 'galio-framework';
 import Colors from '../constants/Theme';
 import {Ionicons} from '@expo/vector-icons';
 import {randomProfile} from './helpers';
 import moment from 'moment';
 import { Images, materialTheme } from "../constants";
 const {width, height} = Dimensions.get('window');


 import Button from './button';
 
 export default class NewsFeedItem extends Component {
     constructor() {
         super();
         this.state = {
             profile: randomProfile(),
             time: moment().format('hh:mm A MMM Do'),
             buttons: ['Like', 'Comment', 'Track Profit'],
             icons: ['md-thumbs', 'md-chatbubbles', 'md-book'],
             likes: 3087,
             comments: 836,
             showProfit:0
         };
         
     }
 
     buttonOnPress = () => {
  
        this.setState({showProfit:1})
        
     }
 
     renderAvatar() {
         const {profile, time} = this.state;
         return (
             <View style={styles.avatarContainer}>
                 <View style={styles.nameContainer}>
                     <Text style={styles.name}>Ascends Oficial</Text>
                     <Text style={styles.time}>{time} <Ionicons name='md-globe'/></Text>
                 </View>
             </View>
         )
     }
 
     renderLikesAndComments() {
         const {likes, comments} = this.state;
 
         if(likes == 0 && comments == 0) {
             return
         }
 
         return (
             <View  style={styles.likesComments}>
                 <Text  style={styles.likeText}>{likes > 0 ? <Ionicons name='md-thumbs-up' color={Colors.main}/> : ''}{likes == 0 ? '' : ' ' + likes}</Text>
                 <Text style={styles.likeText}>{comments == 0 ? '' : comments + ' Comments'}</Text>
             </View>
         )
     }
 
     renderLikeBar() {
         const {buttons, icons} = this.state;
       
             return (
                <>
                 <Button key={0} name="Like" onPress={this.buttonOnPress} icon='md-thumbs-up' />
                 <Button key={1} name="Comment" onPress={this.buttonOnPress} icon='md-chatbubbles' />
                 <Button key={2} name="Invest & Track" onPress={this.buttonOnPress} icon='md-book' />
                 </>
             )
        }
 
     renderContent() {
        
       
 
         return (
             <View style={styles.content}>
                 <Image style={[styles.imageBlock, { width: width - (theme.SIZES.BASE * 2), height: 252 }]}
                imageStyle={{ width: width - (theme.SIZES.BASE * 2), height: 252 }} 
                 source={{uri: Images.Post2}} />
                 <Text>COIN NAME: #BCH/USDT
                     {"\n"}{"\n"}

LONG SET-UP
{"\n"}{"\n"}
#BCH just broke the trend line in 2hr time frame and looking bullish. So buy a bag of #BCH in our given buy zone and hold it for good profit.
{"\n"}{"\n"}

Entry: 593 - 585 - 550$(Buy partially)
{"\n"}{"\n"}
Target: 610 - 617 - 624 - 632 - 641 - 670 - 700 - 730$+(Short-mid term)
{"\n"}{"\n"}
Stoploss: 501$</Text>
             </View>
         )
     }



     renderTrack(){

        if(!this.state.showProfit){
            return
        } 
        
     }
 
     render() {
         return (
             <SafeAreaView style={styles.container}>
             <ScrollView >
                 <View>
                     {this.renderAvatar()}
                     {this.renderContent()}
                     {this.renderLikesAndComments()}
                     <View style={styles.line} />
                 </View>
                 <View style={styles.buttonContainer}>
              
                    <Button key={0} name="Like" icon='md-thumbs-up' />
                    <Button key={1} name="Comment" icon='md-chatbubbles' />
                    <Button key={2} name="Save to Calendar" icon='md-calendar' />
                    <Button key={3} name="Invest & Track" onPress={this.buttonOnPress} icon='md-book' />
            
                 </View>
                
                <View>{this.renderTrack()}</View>
             </ScrollView>
             </SafeAreaView>
         )
     }
 }
 
 const styles = StyleSheet.create({
     container: {
         flex: 1,
         backgroundColor: 'white',
         marginBottom: 10,
     },
 
     content: {
         padding: 16,
         paddingTop: 0,
         paddingBottom: 0
     },
     tracker:{
         padding: 20,
         fontSize:14
     },
 
     line: {
         margin: 16,
         marginBottom: 0,
         borderColor: '#ddd',
         borderBottomWidth: StyleSheet.hairlineWidth
     },
 
     avatarContainer: {
         padding: 16,
         paddingBottom: 0,
         flexDirection: 'row',
         marginBottom: 10,
     },
 
     nameContainer: {
         marginLeft: 10,
         justifyContent: 'space-around'
     },
 
     name: {
         fontSize: 14,
         color: 'black',
         fontWeight: '600'
     },
 
     time: {
         color: 'gray',
         fontSize: 12,
     },
 
     profile: {
         backgroundColor: 'black',
         height: 40,
         width: 40,
     },
 
     buttonContainer: {
         flexDirection: 'row',
 
         height: 42,
         borderBottomWidth: StyleSheet.hairlineWidth
     },
 
 
     buttonItem: {
         flex: 1,
         flexDirection: 'row',
         justifyContent: 'center',
         alignItems: 'center',
     },
 
     text: {
         fontSize: 14,
         fontWeight: '700',
         marginLeft: 8,
         color: Colors.like
     },
 
     likeText: {
         fontSize: 12,
         color: Colors.grayText
     },
     input: {
        width: 150,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:5,
      },
 
     likesComments: {
         padding: 16,
         paddingBottom: 0,
         flexDirection: 'row',
         justifyContent: 'space-between'
     },
     imageContainer: {
        height: height/2.5,
    }
 })
 