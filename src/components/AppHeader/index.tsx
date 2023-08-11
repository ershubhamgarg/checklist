import * as React from 'react';
import {SafeAreaView, View, Text, Pressable} from 'react-native';
import {styles} from './styles';
import Icon from '../Icon';
import ListText from '../ListText';

const Header = ({title, children, onBackPress, backLabel}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.backIconContainer(children)}>
          <Pressable onPress={onBackPress}>
            <Icon />
          </Pressable>
          {children ? (
            <ListText style={styles.txt(children)}>{backLabel}</ListText>
          ) : null}
        </View>
        <View style={styles.titleContainer(children)}>
          {children ? null : (
            <ListText bold style={{fontSize: 16}}>
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
