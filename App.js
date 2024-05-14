import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

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
      setDisplayValue(displayValue + buttonText);
    }
  };

  const buttonRows = [
    ['C', '%', '/', 'x'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '00', '.', '='],
  ];

  return (
    <View style={styles.container}>
      <View style={styles.calculator}>
        <View style={styles.display}>
          <Text style={styles.displayText}>{displayValue}</Text>
        </View>
        <View style={styles.buttonGrid}>
          {buttonRows.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.buttonRow}>
              {row.map((buttonText, colIndex) => (
                <TouchableOpacity
                  key={colIndex}
                  style={styles.button}
                  onPress={() => handleButtonPress(buttonText)}>
                  <Text style={styles.buttonText}>{buttonText}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </View>
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
    width: '80%',
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#009688',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 24,
  },
});
