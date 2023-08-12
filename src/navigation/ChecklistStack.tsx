import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Checklists} from '../containers/Checklists';
import {Login} from '../containers/Login';
import {PreDepartureList} from '../containers/PreDepartureList';
import {AddList} from '../containers/AddList';
import {COLORS} from '../constants/colors';
import {EditList} from '../containers/EditList';

const Stack = createNativeStackNavigator();

const ChecklistStack = (): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Checklists" component={Checklists} />
      <Stack.Screen name="PreDepartureList" component={PreDepartureList} />
      <Stack.Screen name="EditList" component={EditList} />

      <Stack.Screen
        name="AddList"
        options={{
          presentation: 'transparentModal',
          animation: 'fade',
        }}
        component={AddList}
      />
    </Stack.Navigator>
  );
};

export default ChecklistStack;
