import * as React from 'react';
import {GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler';

import {SwipeActions} from '../SwipeActions.tsx';
import {SwipableComponentProps} from './types.js';

const SwipableComponent = ({
  children,
  done,
  setOpen = () => {},
  deletee,
  skip,
  submitted,
  onPressDone = () => {},
  personal,
  onPressDelete = () => {},
  uncheck,
  onPressSubmitted = () => {},
  onPressSkipped = () => {},
}: SwipableComponentProps) => {
  const swipe = React.useRef();

  const onPressDoneCall = () => {
    swipe?.current.close();
    onPressDone();
  };

  const onPressDeleteCall = () => {
    swipe?.current.close();
    onPressDelete();
  };
  return (
    <GestureHandlerRootView>
      <Swipeable
        ref={swipe}
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
            onPressDone={onPressDoneCall}
            onPressDelete={onPressDeleteCall}
            uncheck={uncheck}
            onPressSubmitted={onPressSubmitted}
            onPressSkipped={onPressSkipped}
          />
        )}>
        {children}
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default SwipableComponent;
