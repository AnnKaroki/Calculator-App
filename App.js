import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [displayValue, setDisplayValue] = useState('');

  const handleButtonPress = (buttonText) => {
    if (!isNaN(parseInt(buttonText))) {
      // Numeric button clicked
      setDisplayValue(displayValue + buttonText);
    } else if (buttonText === '=') {
      // Equals button clicked
      // Implement calculation logic
    } else if (buttonText === 'C') {
      // Clear button clicked
      setDisplayValue('');
    } else {
      // Operator button clicked
      // Implement operator logic
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.calculator}>
        <View style={styles.display}>
          <Text style={styles.displayText}>{displayValue}</Text>
        </View>
        <View style={styles.buttonGrid}>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('1')}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          {/* Add more buttons similarly */}
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  calculator: {
    width: 300,
    margin: 'auto',
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  display: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    textAlign: 'right',
  },
  displayText: {
    fontSize: 24,
  },
  buttonGrid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    width: '23%', // Adjust as per your preference
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#009688',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
});
