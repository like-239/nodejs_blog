/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    StyleSheet,
    useColorScheme
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    Colors
} from 'react-native/Libraries/NewAppScreen';
import AddTransaction from './Screens/AddTransaction';
import BottomTabNavigation from './Screens/BottomTabNavigation';
import CustomHeader from './Screens/CustomHeader';
import DayChart from './Screens/DayChart';
import Home from './Screens/Home';
import Login from './Screens/Login';
import Profile from './Screens/Profile';
import Signup from './Screens/Signup';
import WeekChart from './Screens/WeekChart';
import MonthChart from './Screens/MonthChart';
import ShowChart from './Screens/ShowChart';
const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
  <Stack.Navigator>
  
  <Stack.Screen
          name="BottomTabNavigation"
          component={BottomTabNavigation}
          options={{headerShown: false}}
        />
  <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        
  <Stack.Screen
          name="SignUp"
          component={Signup}
          options={{headerShown: false}}
        />

<Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
  <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />

<Stack.Screen
          name="Chart"
          component={DayChart}
          options={{headerShown: false}}
        />
  <Stack.Screen
          name="AddTransaction"
          component={AddTransaction}
          options={{headerShown: false}}
        />
      <Stack.Screen
          name="CustomHeader"
          component={CustomHeader}
          options={{headerShown: false}}
        />  
          <Stack.Screen
          name="WeekChart"
          component={WeekChart}
          options={{headerShown: false}}
        />    
  <Stack.Screen
          name="MonthChart"
          component={MonthChart}
          options={{headerShown: false}}
        />   
   <Stack.Screen
          name="ShowChart"
          component={ShowChart}
          options={{headerShown: false}}
        />  

   </Stack.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
