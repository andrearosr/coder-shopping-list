import React, { useState } from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  FlatList,
} from 'react-native';

const List = ({ itemList, handleModal }) => {
  return (
    <FlatList
      data={itemList}
      renderItem={data => {
        return (
          <View style={[styles.item, styles.shadow]}>
            <Text>{data.item.value}</Text>
            <Button
              title="X"
              color="#AAAAAA"
              onPress={() => handleModal(data.item.id)}
            />
          </View>
        );
      }}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  items: {
    marginTop: 20,
  },
  item: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
  },
});

export default List;