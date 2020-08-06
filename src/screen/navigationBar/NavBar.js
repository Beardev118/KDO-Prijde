import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {IconButton, Colors} from 'react-native-paper';

import Calendar from './Calendar';

const styles = StyleSheet.create({
  headerRightContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign: 'center',
  },
});

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

function NavBar() {
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
          component={Calendar}
          options={navigationOptions}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const navigationOptions = ({navigation}) => {
  return {
    title: 'Kalendář',
    headerRight: () => (
      <View style={styles.headerRightContainer}>
        <IconButton
          icon="plus-circle-outline"
          color={Colors.white}
          size={28}
          onPress={() => navigation.navigate('Details')}
        />
        <IconButton
          icon="dots-vertical"
          color={Colors.white}
          size={24}
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    ),
  };
};

export default NavBar;
