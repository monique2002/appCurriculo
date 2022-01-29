import React from 'react';
import { } from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';

import foto from './assets/monique.png';

const App = () => {
  return (
    <>
      <View style={style.page}>
        <View>
          <Image source={foto}/>
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1
  },
  image: {
    width: 250,
    height: 250,
  }
});
export default App;
