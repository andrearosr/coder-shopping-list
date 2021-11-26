import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  Button,
  Text,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/actions/items.action';

const AddItem = () => {
  const [inputText, setInputText] = useState('');
  const [inputError, setInputError] = useState('');

  const dispatch = useDispatch();

  const handleChangeText = (text) => {
    setInputText(text);
    setInputError('');
  };

  const handleAddItem = () => {
    if (inputText) {
      setInputText('');
      setInputError('');
      dispatch(addItem({
        value: inputText,
        id: Math.random().toString(),
      }));
    } else {
      setInputError('Required');
    }
  }

  return (
    <React.Fragment>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Agregar item"
          style={styles.input}
          onChangeText={handleChangeText}
          value={inputText}
        />
        <Button
          title="ADD"
          color="#3D9970"
          onPress={handleAddItem}
        />
      </View>
      <Text style={styles.inputError}>{inputError}</Text>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: 200,
  },
  inputError: {
    color: 'red',
  },
});

export default AddItem;