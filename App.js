import Icon from 'react-native-vector-icons/ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React,{Component} from 'react';

import beranda from './beranda';
import pesanan from './pesanan' ;
import batal from './batal';
import lain from './lain';

const Tab = createBottomTabNavigator();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  };
  render(){
    return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown:false}}>
          <Tab.Screen name="beranda" component={beranda} 
            options={{
            headerShown: false,
            tabBarLabel :'Beranda',
            tabBarIcon:()=>(
            <Icon name={'home'}  size={30}/>
              )
            }}
          /> 
          <Tab.Screen name="pesanan" component={pesanan}
            options={{
            headerShown: false,
            tabBarLabel :'Pemesanan Saya',
            tabBarIcon:()=>(
            <Icon name={'bookmarks'}  size={30}/>
                )
            }}
          />
          <Tab.Screen name="batal" component={batal}
            options={{
            headerShown: false,
            tabBarLabel :'Pembatalan',
            tabBarIcon:()=>(
            <Icon name={'close-circle'} size={30}/>
                )
            }}
          />
          <Tab.Screen name="lain" component={lain}
          options={{
          headerShown: false,
          tabBarLabel :'Lainnya',
          tabBarIcon:()=>(
          <Icon name={'podium'}  size={30}/>
              )
          }}
        />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}
export default App;