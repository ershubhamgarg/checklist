import React from 'react';
import {Pressable, SafeAreaView, View} from 'react-native';
import Icon from '../Icon';
import ListText from '../ListText';
import {styles} from './styles';
import {AppHeaderProps} from './types';

const Header = ({
  title,
  children,
  onBackPress,
  backLabel,
  backButtonBackgroundStyle,
  onCancelPress,
}: AppHeaderProps) => {
  const flex1Value = children ? 0.3 : 0.2;
  const flex2Value = children ? 0.5 : 0.8;
  const fontSizeValue = children ? 14 : 16;

  const handleBackPress = () => {
    if (backLabel === 'Cancel') {
      onCancelPress?.();
    } else {
      onBackPress?.();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={[styles.backIconContainer, {flex: flex1Value}]}>
          <Pressable
            style={backButtonBackgroundStyle}
            onPress={handleBackPress}>
            <Icon />
          </Pressable>
          {children && (
            <ListText style={{fontSize: fontSizeValue}}>{backLabel}</ListText>
          )}
        </View>
        <View style={[styles.titleContainer, {flex: flex2Value}]}>
          {!children && (
            <ListText bold style={styles.title}>
              {title}
            </ListText>
          )}
        </View>
        <View style={styles.buttonContainer}>{children}</View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
