import * as React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {SwipeActions} from '../SwipeActions.tsx';
import {SwipableComponentProps} from './types.js';
const SwipableComponent = ({
  children,
  done,
  setOpen,
  deletee,
  skip,
  submitted,
  onPressDone,
  personal,
}) =>
  // : SwipableComponentProps
  {
    return (
      <GestureHandlerRootView>
        <Swipeable
          overshootRight={false}
          onSwipeableWillOpen={() => setOpen(true)}
          onSwipeableWillClose={() => setOpen(false)}
          renderRightActions={() => (
            <SwipeActions
              personal={personal}
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
