import { StyleSheet, Dimensions } from "react-native";

const LightMode = StyleSheet.create({
  mainColor: '#046e8f',
  secondColor: '#e7c100',
  thirdColor: '#def2f7',
  fourthColor: '#ffffff',
  green: '#6bbd62',
  yellow: '#e9d753',
  red: '#d64c4c',
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20,
    paddingTop: 40,
    height: Dimensions.get('window').height
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7
  },
  switch: {
    marginRight: 10
  },
  icon: {
    size: 20
  },
  title: {
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 25,
    fontSize: 25
  },
  textInput: {
    marginTop: 10,
    marginBottom: 10
  },
  numericInputContainer: {
    marginTop: 10,
    marginBottom: 10
  },
  numericInputTitle: {
    marginBottom: 5,
    fontSize: 15
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  radioButtonTitle: {
    fontSize: 15
  },
  button: {
    marginTop: 13,
    marginBottom: 13,
    padding: 3,
    fontSize: 17
  },
  result: {
    alignSelf: 'center',
    marginTop: 15,
    fontSize: 22,
    fontWeight: 'bold'
  }
});

const DarkMode = StyleSheet.create({
  ...LightMode,
  mainColor: '#ffe873',
  secondColor: '#def2f7',
  thirdColor: '#034d64',
  fourthColor: '#046e8f',
  green: '#8dd386',
  yellow: '#ece292',
  red: '#e97d7d'
});

export {LightMode, DarkMode};