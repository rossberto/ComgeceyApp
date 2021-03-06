import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

function FormInput(props) {
  const [value, setValue] = useState(props.value);

  useEffect(() => {
    props.handleValueChange(props.id, value);
  }, [value]);

  return (
    <View style={styles.container}>
      {<Text style={styles.text}>{value !== '' ? props.name : ''}</Text> }
      <TextInput
        style={styles.input}
        placeholder={props.name}
        onChangeText={input => setValue(input)}
        value={value}
        autoCompleteType={'off'}
        secureTextEntry={props.id === 'password' ? true : false }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  text: {
    fontSize: 12,
    paddingBottom: 1
  },
  input: {
    padding: 10,
    backgroundColor: 'lightgray',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5
  }
});

export default FormInput;
