import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ChecklistStack from './ChecklistStack';

export const Navigation = () => {
  return (
    <NavigationContainer>
      <ChecklistStack />
    </NavigationContainer>
  );
};
