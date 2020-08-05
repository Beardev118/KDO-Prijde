import React from 'react';
import { Text, View } from 'react-native';

import Header from './src/component/Header';
import Splash from './src/screen/Splash';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column'
      }}>
      <Splash />
    </View>
  )
}
export default App;