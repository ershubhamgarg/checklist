import * as React from 'react';
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
}) =>
  // : AppHeaderProps
  {
    const f1 = children ? 0.3 : 0.2;
    const f2 = children ? 0.5 : 0.8;
    const fs = children ? 14 : 16;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={[styles.backIconContainer, {flex: f1}]}>
            <Pressable
              style={backButtonBackgroundStyle}
              onPress={() =>
                backLabel == 'Cancel' ? onCancelPress() : onBackPress()
              }>
              <Icon />
            </Pressable>
            {children ? (
              <ListText style={{fontSize: fs}}>{backLabel}</ListText>
            ) : null}
          </View>
          <View style={[styles.titleContainer, {flex: f2}]}>
            {children ? null : (
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
