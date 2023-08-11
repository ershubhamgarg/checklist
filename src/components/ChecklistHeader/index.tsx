import * as React from 'react';
import {SafeAreaView, View, Text, Pressable} from 'react-native';
import {styles} from './styles';
import Icon from '../Icon';
import ProgressCircle from 'react-native-progress-circle';
import ListText from '../ListText';
import {COLORS} from '../../constants/colors';

const ChecklistHeader = ({title, children, onBackPress, onCardPress}) => {
  return (
    <View style={styles.container}>
      <ListText medium style={{fontSize: 14}}>
        {'Pre-Departure Documents List'}
      </ListText>
      <ListText
        italic
        style={{
          fontSize: 12,
          marginBottom: 12,
          marginTop: 4,
        }}>
        {'List of all required documents for your upcoming assignment'}
      </ListText>

      <Pressable onPress={onCardPress} style={styles.headerContainer}>
        <View style={styles.progressContainer}>
          <ProgressCircle
            percent={60}
            radius={22}
            borderWidth={4}
            color={COLORS.MARLOW_BLUE}
            shadowColor={COLORS.WHITE}
            bgColor={COLORS.WHITE}>
            <ListText bold style={{fontSize: 13}}>
              {'60%'}
            </ListText>
          </ProgressCircle>
        </View>
        <View style={styles.titleContainer}>
          <ListText style={{fontSize: 14}}>{'Review List'}</ListText>
        </View>
        <View style={styles.buttonContainer}>
          <Icon name={'next'} />
        </View>
      </Pressable>
    </View>
  );
};

export default ChecklistHeader;
