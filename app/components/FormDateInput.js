import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialIcons';

function FormDateInput(props) {
  const [value, setValue] = useState('');
  const [date, setDate] = useState(new Date(props.value));
  const [dateText, setDateText] =  useState('');
  const [show, setShow] = useState(false);

  useEffect(() => {
    props.handleValueChange(props.id, date);
    setDateText(date.toISOString().slice(0, 10));
  }, [date]);

  function handleDateChange(event, input) {
    setShow(false);
    setDate(input);
  }

  return (
    <View style={styles.container}>
      <View style={styles.columns}>
        <View>
          {<Text style={styles.text}>{dateText !== '' ? props.name : ''}</Text> }
          <Text style={styles.input}>{dateText}</Text>

          {show && <DateTimePicker
            value={date}
            mode={'date'}
            display="default"
            onChange={handleDateChange}
          />}
        </View>
        <TouchableOpacity style={styles.navtouch} onPress={() => setShow(true)}>
          <Icon style={styles.icon} name="today" size={40} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  columns: {
    flexDirection: 'row'
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
  },
  navtouch: {
    justifyContent: 'center',
    paddingTop: 19,
    paddingHorizontal: 5
  }
});

export default FormDateInput;
