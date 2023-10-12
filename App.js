import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './screens/LandingScreen';
import LoginScreen from './screens/Login';
import SignUpScreen from './screens/Signup';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import Detail from './screens/Detail';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Menu" component={MenuScreen} />    
        <Stack.Screen name="Detail" component={Detail} options={{ headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;