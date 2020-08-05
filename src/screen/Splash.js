import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  Button,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import SplashImage from '../component/DisplaySplashImage';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: '#E9E6DD',
  },
  spaceText: {
    flex: 0.5,
  },
  titleText: {
    fontFamily: 'sans-serif-medium',
    fontSize: 36,
    color: 'black',
    textAlign: 'center',
    writingDirection: 'ltr',
    textShadowOffset: {height: 3, width: 3},
    textShadowRadius: 2,
  },
  plainText: {
    fontFamily: 'sans-serif',
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 60,
    backgroundColor: 'white',
    borderRadius: 8,
    marginLeft: 24,
    marginTop: 12,
    marginRight: 24,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  startScreenButton: {
    width: 200,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#27842A',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  startText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  btnView: {
    alignItems: 'center',
  },
});

const Splash = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.spaceText}></Text>
      <Text style={styles.titleText}>KDO</Text>
      <Text style={styles.titleText}>PŘIJDE</Text>
      <SplashImage />
      <Text style={styles.plainText}>Kdo jde dnes na trening?</Text>
      <View style={styles.btnView}>
        <TouchableOpacity
          style={styles.startScreenButton}
          onPress={() => Alert.alert('Simple Button pressed')}
          underlayColor="#fff">
          <Text style={styles.startText}>START</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Splash;
