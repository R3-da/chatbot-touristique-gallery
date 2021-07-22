import React from 'react';
import {  View } from 'react-native';
import {  createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';


import GalleryScreen from 'C:/Users/Reda/Desktop/gallery/PhotoSharingAppUI-complete/PhotoSharingAppUI-complete/src/navigation/index';
import ChatScreen from './ChatScreen';
import Tata from './Tata';
import MoroccoScreen from './MoroccoScreen';

import DataSaver from '../data/DataSaver';

import { createStackNavigator } from '@react-navigation/stack';
import Home from './home';

const Stack = createStackNavigator();
const data = new DataSaver();
const test4 = createStackNavigator({HomeScreen: Home});

/* const tata = () => {
    <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home"  options={{ title: 'الرئيسية' }}>
            {props => <Home {...props} data={data}/>}
        </Stack.Screen>
        {data.component.map((c,i)=>
            <Stack.Screen name={c.name} options={{headerShown: false}} key={i}>
            {props => <Chat {...props} data={data} theme={c.name} />}
            </Stack.Screen>
        )}  
    </Stack.Navigator>
}
 */
const TabNavigator = createMaterialBottomTabNavigator(
  { 
    Gallery: {
      screen: GalleryScreen,
      navigationOptions: {
        tabBarLabel: 'Gallery',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'ios-images-sharp'} />
          </View>
        ),
      },
    },

    Chat: {
      screen: test4,
      navigationOptions: {
        tabBarLabel: 'Chat',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon
              style={[{ color: tintColor }]} size={25} name={'ios-chatbubbles-sharp'} />
          </View>
        ),
       
      },
    },

    Morocco: {
      screen: MoroccoScreen,
      navigationOptions: {
        tabBarLabel: 'Morocco',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'ios-book-sharp'} />
          </View>
        ),
      },
    }


  },

     
  {
    initialRouteName: 'Chat',
    activeColor: '#fff',
    inactiveColor: '#787878',
    barStyle: { backgroundColor: '#282828' },
  }
);

export default createAppContainer(TabNavigator);





