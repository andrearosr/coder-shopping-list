import React from 'react';
import {
  StyleSheet,
  FlatList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../../store/actions/items.action';
import ListItem from './ListItem';

const List = () => {
  const dispatch = useDispatch();
  const itemList = useSelector(state => state.items.list);

  const handleModal = (id) => dispatch(removeItem(id));
  
  return (
    <FlatList
      data={itemList}
      renderItem={(data) => <ListItem handleModal={handleModal} data={data} />}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  items: {
    marginTop: 20,
  },
});

export default List;