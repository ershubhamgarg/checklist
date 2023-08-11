import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Checklists} from '../containers/Checklists';
import {Login} from '../containers/Login';
import {PreDepartureList} from '../containers/PreDepartureList';

const Stack = createNativeStackNavigator();

const ChecklistStack = (): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Checklists" component={Checklists} />
      <Stack.Screen name="PreDepartureList" component={PreDepartureList} />
    </Stack.Navigator>
  );
};

export default ChecklistStack;
