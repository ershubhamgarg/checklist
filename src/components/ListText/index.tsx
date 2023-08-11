import * as React from 'react';
import {Text} from 'react-native';

const ListText = ({bold, italic, children, style, medium, ...props}) => {
  return (
    <Text
      {...props}
      style={[
        {
          fontFamily: medium
            ? 'Roboto-Medium'
            : italic
            ? 'Roboto-Italic'
            : bold
            ? 'Roboto-Bold'
            : 'Roboto-Regular',
        },
        style,
      ]}>
      {children}
    </Text>
  );
};
export default ListText;
