import React from 'react';  
import {StyleSheet, Text, View,Button} from 'react-native';  
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/FontAwesome';

import Pie from './tabs/Pie';
import LineChart from './tabs/LineChart';
import BarChart from './tabs/Bar'


const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center'  
    },  
});  
const TabNavigator = createMaterialBottomTabNavigator(  
    {  
        Pie: { screen: Pie,  
            navigationOptions:{  
                tabBarLabel:'Pie',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'pie-chart'}/>  
                    </View>),  
            }  
        },  
        Line: { screen: LineChart,  
            navigationOptions:{  
                tabBarLabel:'LineChart',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'line-chart'}/>  
                    </View>),  
                activeColor: '#0366fc',  
                inactiveColor: '#f65a22',  
                barStyle: { backgroundColor: '#ffffff' },  
            }  
        },
        Bar: { screen: BarChart,  
          navigationOptions:{  
              tabBarLabel:'BarChart',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Icon style={[{color: tintColor}]} size={25} name={'bar-chart'}/>  
                  </View>),  
              activeColor: '#0366fc',  
              inactiveColor: '#f65a22',  
              barStyle: { backgroundColor: '#ffffff' },  
          }  
        },    
    },  
    {  
      initialRouteName: "Pie",  
      activeColor: '#615af6',  
      inactiveColor: '#f65a22',  
      barStyle: { backgroundColor: '#ffffff' },  
    },  
);  
  
export default createAppContainer(TabNavigator);