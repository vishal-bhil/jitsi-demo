import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';

const EnterCodeScreen = ({navigation, route}) => {
  const [code, setCode] = useState('');

  const onSubmit = () => {
    if (code.length != 6) {
      Alert.alert(
        'Error',
        'Please enter valid code',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    } else {
      navigation.push('VideoCallScreen', {code: code});
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Code"
        onChangeText={(text) => setCode(text)}
        maxLength={6}
      />
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity style={styles.buttonContainer} onPress={onSubmit}>
          <Text style={styles.buttonText}>Join</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 30,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 15,
  },
  buttonContainer: {
    backgroundColor: 'blue',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
});

export default EnterCodeScreen;
