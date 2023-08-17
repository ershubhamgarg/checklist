import * as React from 'react';
import {Pressable, View} from 'react-native';
import Icon from '../Icon';
import ListText from '../ListText';
import SwipableComponent from '../SwipableComponent';
import {styles} from './styles';
import {ChecklistItemProps} from './types';
import {formatDate} from '../../helpers';

const ChecklistItem = ({
  item,
  index,
  onCardPress = () => {},
  onPressDelete = () => {},
}: ChecklistItemProps) => {
  const [isOpen, setOpen] = React.useState(false);
  const {title, createdOn, items} = item;

  const br = isOpen ? 0 : 7;
  let LastItem = items?.length ? items[items?.length - 1].title : 'None';

  return (
    <View style={styles.container}>
      {!index && ( // for rendering on first index
        <View style={styles.outer}>
          <ListText medium style={styles.title}>
            {'My Checklists'}
          </ListText>
          <ListText italic style={styles.subtitle}>
            {'Create your own personal checklist'}
          </ListText>
        </View>
      )}
      <SwipableComponent
        onPressDelete={() => onPressDelete(item)}
        deletee={item.personal}
        done={item.mandatory || item.optional}
        skip={item.optional}
        submitted={item.attentionRequired}
        onPressDone={() => {
          console.log(item.title);
        }}
        setOpen={setOpen}>
        <Pressable
          onPress={() => onCardPress(item)}
          style={[styles.headerContainer, {borderRadius: br}]}>
          <View style={styles.titleContainer}>
            <ListText numberOfLines={1} style={styles.title}>
              {title}
            </ListText>
            <ListText style={styles.date}>
              {'Date created: ' + formatDate(createdOn)}
            </ListText>
            <ListText style={styles.last}>
              {'Last item added: ' + LastItem}
            </ListText>
          </View>
          <View style={styles.buttonContainer}>
            {!isOpen && <Icon name={'next'} />}
          </View>
        </Pressable>
      </SwipableComponent>
    </View>
  );
};
export default ChecklistItem;
