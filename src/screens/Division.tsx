import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export const Division = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');

  const handleDivide = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    let divisionResult;
    if (num1 === 0 && num2 === 0) {
      divisionResult = 'INDETERMINACIÓN';
    } else if (num2 === 0) {
      divisionResult = 'NO EXISTE DIVISIÓN PARA CERO';
    } else {
      divisionResult = (num1 / num2).toString();
    }
    setResult(divisionResult);
  };

  return (
    <View>
      <TextInput
        value={number1}
        onChangeText={setNumber1}
        placeholder=" Inserte el primer Número a Dividir"
        keyboardType="numeric"
      />
      <TextInput
        value={number2}
        onChangeText={setNumber2}
        placeholder="Inserte el segundo Número a Dividir"
        keyboardType="numeric"
      />
      <Button title="Dividir" onPress={handleDivide} />
      <Text>{result}</Text>
    </View>
  );
};



