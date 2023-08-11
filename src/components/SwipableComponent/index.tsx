import * as React from 'react';
import {SafeAreaView, View, Text, Pressable} from 'react-native';
import {styles} from './styles';
import Icon from '../Icon';
import ProgressCircle from 'react-native-progress-circle';
import ListText from '../ListText';
import {COLORS} from '../../constants/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SwipeActions} from '../SwipeActions.tsx';
const SwipableComponent = ({
  children,
  done,
  setOpen,
  deletee,
  skip,
  submitted,
  onPressDone,
}) => {
  return (
    <GestureHandlerRootView>
      <Swipeable
        overshootRight={false}
        onSwipeableWillOpen={() => setOpen(true)}
        onSwipeableWillClose={() => setOpen(false)}
        renderRightActions={() => (
          <SwipeActions
            done={done}
            skip={skip}
            deletee={deletee}
            submitted={submitted}
            onPressDone={onPressDone}
          />
        )}>
        {children}
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default SwipableComponent;
