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

  // Array of buttons to display
  const buttons = [
    '1', '2', '3', '+',
    '4', '5', '6', '-',
    '7', '8', '9', '*',
    'C', '0', '=', '/',
  ];

  return (
    <View style={styles.container}>
      <View style={styles.calculator}>
        <View style={styles.display}>
          <Text style={styles.displayText}>{displayValue}</Text>
        </View>
        <View style={styles.buttonGrid}>
          {/* Mapping over buttons array to generate buttons */}
          {buttons.map((buttonText, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button}
              onPress={() => handleButtonPress(buttonText)}>
              <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}