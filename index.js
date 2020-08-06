/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {COLOR, ThemeContext, getTheme} from 'react-native-material-ui';
import {Provider as PaperProvider} from 'react-native-paper';

const uiTheme = {
  palette: {
    primaryColor: COLOR.green500,
  },
  toolbar: {
    container: {
      height: 50,
    },
  },
};

export default function Main() {
  return (
    <ThemeContext.Provider value={getTheme(uiTheme)}>
      <App />
    </ThemeContext.Provider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
