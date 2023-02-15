import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, View, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Switch, Text, TextInput, RadioButton, Button } from 'react-native-paper';
import NumericInput from 'react-native-numeric-input';
import { LightMode, DarkMode } from './styles/Styles';
import { Feather } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

export default function App() {

  const [fontLoaded] = useFonts({
    unboundedRegular: require('./assets/fonts/Unbounded-Regular.ttf')
  });

  const [darkMode, setDarkMode] = useState(false);
  const mode = darkMode ? DarkMode : LightMode;
  const iconName = darkMode ? 'moon' : 'sun';

  const [weight, setWeight] = useState('');
  const [bottles, setBottles] = useState(1);
  const [hours, setHours] = useState(1);
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState('');

  const LITRES = bottles * 0.33;
  const GRAMS = LITRES * 8 * 4.5;
  const BURNING = weight / 10;
  const GRAMS_LEFT = GRAMS - BURNING * hours;

  if (!fontLoaded) {
    return null;
  };

  function calculate() {
    let val = null;
    gender === 'male' ? val = 0.7 : val = 0.6;
    if (weight != '' && weight != 0) {
      const calc = (GRAMS_LEFT / (weight * val)).toFixed(2);
      calc < 0 ? setResult(0) : setResult(calc);
    } else {
      Alert.alert('Add weight to use Alcometer');
    };
  };

  return (
    <ScrollView>
      <SafeAreaView style={[mode.container, {backgroundColor: mode.fourthColor}]}>
        <StatusBar style="auto"/>
        <View style={mode.switchContainer}>
          <Switch
            style={mode.switch}
            value={darkMode}
            onValueChange={v => setDarkMode(v)}
            thumbColor={mode.mainColor}
            trackColor={{false: mode.thirdColor, true: mode.thirdColor}}
            ios_backgroundColor={mode.thirdColor}
          />
          <Feather
            name={iconName}
            size={mode.icon.size}
            color={mode.secondColor}
          />
        </View>
        <Text style={[mode.title, {color: mode.mainColor}, {fontFamily: 'unboundedRegular'}]}>Alcometer</Text>
        <TextInput
          style={mode.textInput}
          value={weight}
          onChangeText={t => setWeight(t)}
          label={<Text style={{color: mode.mainColor}}>Weight</Text>}
          keyboardType='numeric'
          textColor={mode.mainColor}
          underlineColor={mode.mainColor}
          activeUnderlineColor={mode.mainColor}
          contentStyle={{backgroundColor: mode.thirdColor}}
        />
        <View style={mode.numericInputContainer}>
          <Text style={[mode.numericInputTitle, {color: mode.mainColor}]}>Bottles</Text>
          <NumericInput
            value={bottles}
            onChange={v => setBottles(v)}
            minValue={1}
            rounded
            textColor={mode.mainColor}
            iconStyle={{color: mode.fourthColor}}
            leftButtonBackgroundColor={mode.secondColor}
            rightButtonBackgroundColor={mode.secondColor}
            borderColor={mode.secondColor}
          />
        </View>
        <View style={mode.numericInputContainer}>
          <Text style={[mode.numericInputTitle, {color: mode.mainColor}]}>Hours</Text>
          <NumericInput
            value={hours}
            onChange={v => setHours(v)}
            minValue={1}
            rounded
            textColor={mode.mainColor}
            iconStyle={{color: mode.fourthColor}}
            leftButtonBackgroundColor={mode.secondColor}
            rightButtonBackgroundColor={mode.secondColor}
            borderColor={mode.secondColor}
          />
        </View>
        <RadioButton.Group value={gender} onValueChange={v => setGender(v)}>
          <View style={mode.radioButtonContainer}>
            <RadioButton
              style={mode.radioButton}
              value='male'
              uncheckedColor={mode.mainColor}
              color={mode.mainColor}
            />
            <Text style={[mode.radioButtonTitle, {color: mode.mainColor}]}>Male</Text>
          </View>
          <View style={mode.radioButtonContainer}>
            <RadioButton
              style={mode.radioButton}
              value='female'
              uncheckedColor={mode.mainColor}
              color={mode.mainColor}
            />
            <Text style={[mode.radioButtonTitle, {color: mode.mainColor}]}>Female</Text>
          </View>
        </RadioButton.Group>
        <Button
          style={mode.button}
          onPress={calculate}
          labelStyle={{fontSize: mode.button.fontSize}}
          textColor={mode.fourthColor}
          buttonColor={mode.mainColor}>
          Calculate
        </Button>
        <Text
          style={[
            mode.result,
            result < 0.02 ? {color: mode.green} : result > 0.08 ? {color: mode.red} : {color: mode.yellow}
          ]}>
          {result}
        </Text>
      </SafeAreaView>
    </ScrollView>
  );

};