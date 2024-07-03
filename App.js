import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontSize:20,fontWeight:'bold'}}>Hello!</Text>
    </View>
  );
}

function Scan() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',paddingHorizontal:20 }}>
      <Image
        style={styles.image}
        source={require('./assets/image.png')}
      />
      <Text style={{fontSize:20, fontWeight:'bold',marginBottom:20}}>Scan, Pay & Enjoy</Text>
      <Text style={{fontSize:18,textAlign:'center'}}>scan products you want to buy at your favourite store and pay by your phone & enjoy happy, friendly Shopping</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Nothing</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e91e63"
      labeled={false}
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={Scan}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="line-scan" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="History"
        component={Notifications}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="history" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={Notifications}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  image:{
    width: 200,
    height: 200,
    marginBottom:20
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
