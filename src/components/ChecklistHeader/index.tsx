import * as React from 'react';
import {Pressable, View} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import {COLORS} from '../../constants/colors';
import Icon from '../Icon';
import ListText from '../ListText';
import {styles} from './styles';

const ChecklistHeader = ({onCardPress}) =>
  // : ChecklistHeaderProps
  {
    return (
      <View style={styles.container}>
        <ListText medium style={styles.headerTitle}>
          {'Pre-Departure Documents List'}
        </ListText>
        <ListText italic style={styles.headerSubTitle}>
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
              <ListText bold style={styles.percentText}>
                {'60%'}
              </ListText>
            </ProgressCircle>
          </View>
          <View style={styles.titleContainer}>
            <ListText style={styles.rl}>{'Review List'}</ListText>
          </View>
          <View style={styles.buttonContainer}>
            <Icon name={'next'} />
          </View>
        </Pressable>
      </View>
    );
  };

export default ChecklistHeader;
