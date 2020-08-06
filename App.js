import 'react-native-gesture-handler';
import React from 'react';
import {Text, View, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import NavBar from './src/screen/navigationBar/NavBar';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <NavBar />
      {/* <Splash /> */}
    </View>
  );
};
export default App;
