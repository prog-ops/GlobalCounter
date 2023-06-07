import 'react-native-gesture-handler';

import {StyleSheet, Text, View} from 'react-native';
import LikeApp from "./src/screens/LikeApp";

export default function App() {
  return(
      <LikeApp/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#807159',
    alignItems: 'center',
    justifyContent: 'center',
  },
  teks: {
    color: '#00f'
  }
});
