import React from 'react';
import {
  StyleSheet,
  FlatList,
} from 'react-native';
import ListItem from './ListItem';

const List = ({ itemList, handleModal }) => {
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