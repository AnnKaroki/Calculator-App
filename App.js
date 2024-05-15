import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const calculateResult = (expression) => {
  try {
    if (expression.includes('/0')) {
      throw new Error('Division by zero');
    }
    const result = eval(expression);
    if (isNaN(result) || !isFinite(result)) {
      throw new Error('Invalid expression');
    }
    return result.toString();
  } catch (error) {
    if(error.message === 'Division by zero'){
      return 'Cannot divide by zero';
    } else if(error.message === 'Invalid expression'){
      return 'Invalid expression';
    } else{
      return 'An error occured'
    }
    }
};

export default function App() {
  const [displayValue, setDisplayValue] = useState('');

  const handleButtonPress = (buttonText) => {
    switch (buttonText) {
      case 'C':
        setDisplayValue('');
        break;
      case '←':
        setDisplayValue(displayValue.slice(0, -1));
        break;
      case '=':
        setDisplayValue(calculateResult(displayValue));
        break;
      case '%':
        setDisplayValue((parseFloat(displayValue) / 100).toString());
        break;
      default:
        setDisplayValue(displayValue + buttonText);
        break;
    }
  };

  const buttonRows = [
    ['C', '%', '÷', '×'],
    ['7', '8', '9', '×'],
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
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#009688',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 24,
  },
});

