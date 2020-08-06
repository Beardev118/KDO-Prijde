import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {IconButton, Colors} from 'react-native-paper';
import {Icon} from 'react-native-material-ui';

import Header from './src/component/Header';
import Splash from './src/screen/Splash';
const styles = StyleSheet.create({
  headerRightContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign: 'center',
  },
});

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          // headerTitleStyle: {
          //   fontWeight: 'bold',
          // },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Kalendář',
            headerRight: () => (
              <View style={styles.headerRightContainer}>
                <IconButton
                  icon="plus-circle-outline"
                  color={Colors.white}
                  size={28}
                  onPress={() => console.log('Pressed')}
                />
                <IconButton
                  icon="dots-vertical"
                  color={Colors.white}
                  size={24}
                  onPress={() => console.log('Pressed')}
                />
              </View>
            ),
          }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const App = () => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         flexDirection: 'column',
//       }}>
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name="Home" component={HomeScreen} />
//         </Stack.Navigator>
//       </NavigationContainer>
//       {/* <Splash /> */}
//     </View>
//   );
// };
export default App;
