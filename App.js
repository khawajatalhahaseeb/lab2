import { StyleSheet, Text, View, TextInput, Button, Switch } from 'react-native';
import React, { useState } from 'react';

function TwoTexts(props) {
  return (
    <View>
      <Text style={styles.textView}>{props.name} {props.value}</Text>
    </View>
  )
}

export default function App() {
  const [value, setValue] = React.useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  if (isEnabled) {
    return (
      <View style={styles.container} backgroundColor='#000'>
        <TextInput style={styles.inputLabel} clearTextOnFocus='true' onChangeText={text => setValue(text)}>{value}</TextInput>
        <Text style={styles.textView}>{value}</Text>
        <Button title='Clear' onPress={() => setValue('')}></Button>
        <Switch
          ios_backgroundColor="#000"
          onValueChange={toggleSwitch}
          value={isEnabled}>
        </Switch>
      </View >
    );
  }

  else {
    return (
      <View style={styles.container} backgroundColor='#fff'>
        <TextInput style={styles.inputLabel} clearTextOnFocus='true' onChangeText={text => setValue(text)}>{value}</TextInput>
        <Text style={styles.textView}>{value}</Text>
        <Button title='Clear' onPress={() => setValue('')}></Button>
        <Switch
          ios_backgroundColor="#000"
          onValueChange={toggleSwitch}
          value={isEnabled}>
        </Switch>
      </View >
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'

  },
  forText: {
    fontSize: 30,
    color: 'black',
  },
  textView: {
    fontSize: 30,
    color: 'black',
    borderWidth: 2,
    borderColor: 'black',
    width: '70%',
    backgroundColor: 'yellow',
  },
  inputLabel: {
    fontSize: 30,
    color: 'black',
    borderWidth: 2,
    width: '70%',
    backgroundColor: 'orange',

  }

});