import * as React from 'react';
import {Text} from 'react-native';
import {ListTextProps} from './types';
import {FONT} from '../../constants/fonts';

const ListText = ({bold, italic, children, style, medium, ...props}) =>
  // : ListTextProps
  {
    return (
      <Text
        {...props}
        style={[
          {
            fontFamily: medium
              ? FONT.ROBOTO_MEDIUM
              : italic
              ? FONT.ROBOTO_ITALIC
              : bold
              ? FONT.ROBOTO_BOLD
              : FONT.ROBOTO_REGULAR,
          },
          style,
        ]}>
        {children}
      </Text>
    );
  };
export default ListText;
