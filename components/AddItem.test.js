import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import AddItem from './AddItem';

describe('Componente AddItem', () => {
  it('Ejecuta el callback handleAddItem al presionar el botón', () => {
    // GIVEN
    const handleAddItem = jest.fn();

    const { getByText } = render(<AddItem handleAddItem={handleAddItem} />)
    const button = getByText('ADD');

    // WHEN
    fireEvent.press(button);
    fireEvent.press(button);

    // THEN
    expect(handleAddItem).toBeCalledTimes(2);
  });
});


const sum = (a, b) => a + b

describe('Funcion sum', () => {
  it('Suma dos numeros', () => {
    // GIVEN
    const a = 1;
    const b = 2;

    // WHEN
    const result = sum(a, b)

    // THEN
    expect(result).toEqual(3);
  })
})