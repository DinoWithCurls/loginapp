import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import First from './First';
import Login from './Login';
import Register from './Register';
import Final from './Final';
import { NavigationContainer } from '@react-navigation/native';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <NavigationContainer>
        <RootStack.Navigator headerMode='none'>
            <RootStack.Screen name="First" component={First} />
            <RootStack.Screen name="Login" component={Login} />
            <RootStack.Screen name="Register" component={Register} />
            <RootStack.Screen name="Final" component={Final} />
        </RootStack.Navigator>
    </NavigationContainer>
);

export default RootStackScreen;