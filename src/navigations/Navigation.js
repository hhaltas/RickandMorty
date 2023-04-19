import * as React from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//pages List
import Homeindex from '../pages/Home';
import Episodeindex from '../pages/Episode';
import CharDetail from '../pages/Character/CharDetail';
//Bottom Tab List
import Favoriesindex from '../pages/Favories';
import {ActiveTabColor} from '../assets/color/color';
import {Provider} from 'react-redux';

//import {store} from '../stores/store';
import store from '../redux/store';
import EpisodeDetail from '../pages/Episode/EpisodeDetail';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false, animationEnabled: false}}>
      <Stack.Screen name="Home" component={Homeindex} />
      <Stack.Screen
        name="Character"
        component={CharDetail}
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function EpisodeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false, animationEnabled: false}}>
      <Stack.Screen name="Home" component={Episodeindex} />
      <Stack.Screen
        name="Episode"
        component={EpisodeDetail}
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function FavoriesStack() {
  return (
    <Stack.Navigator
      initialRouteName="Favories"
      screenOptions={{headerShown: false, animationEnabled: false}}>
      <Stack.Screen name="Favories" component={Favoriesindex} />
      <Stack.Screen
        name="Character"
        component={CharDetail}
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: ActiveTabColor,
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle: still.tabText,
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({}) => (
            <Image
              style={still.iconStill}
              source={require('../assets/images/t1.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Episodes"
        component={EpisodeStack}
        options={{
          tabBarLabel: 'Episodes',
          tabBarLabelStyle: still.tabText,
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({}) => (
            <Image
              style={still.iconStill}
              source={require('../assets/images/t4.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favories"
        component={FavoriesStack}
        options={{
          tabBarLabel: 'Favories',
          tabBarLabelStyle: still.tabText,
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({}) => (
            <Image
              style={still.iconStill}
              source={require('../assets/images/t2.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function Navigation() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: true}}>
          <Stack.Screen
            name="Home"
            component={BottomTabs}
            options={{
              // eslint-disable-next-line react/no-unstable-nested-components
              headerTitle: () => (
                <Image
                  style={still.headerImage}
                  source={require('../assets/images/header.png')}
                />
              ),
              headerTitleAlign: 'center',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default Navigation;

const still = StyleSheet.create({
  iconStill: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  tabText: {
    fontSize: 13,
    fontWeight: '600',
    paddingBottom: 5,
  },
  headerImage: {
    width: 200,
    height: 45,
    resizeMode: 'contain',
  },
});
