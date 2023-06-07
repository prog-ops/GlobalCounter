import React, {useState} from 'react';
import {View, Text, Button, FlatList, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import RN from 'react-native'

const SCREEN_WIDTH = RN.Dimensions.get('window').width;
const SCREEN_HEIGHT = RN.Dimensions.get('window').height;

const CounterItem = ({counter, onIncrement, onDecrement}) => (
    <View style={styles.itemContainer}>
      <View>
        <Image
            source={require('../../assets/1.jpg')}
            style={{
              resizeMode: 'cover',
              width: SCREEN_WIDTH * 0.8,
              height: SCREEN_HEIGHT * 0.5,
              borderTopRightRadius: (SCREEN_HEIGHT * 0.04)/2,
              borderTopLeftRadius: (SCREEN_HEIGHT * 0.04)/2,
            }}
            resizeMode='cover'
        />
      </View>
      <View style={styles.itemContainerButtons}>
          <View style={[{
            ...styles.button,
            backgroundColor: '#363ef3'
          }]}>
            <Text style={{
              fontSize: 20
            }}>{counter} Like</Text>
          </View>
          <TouchableOpacity onPress={onIncrement} style={[{
            ...styles.button,
            backgroundColor: '#363ef3'
          }]}>
            <Icon name='heart-outline' size={20} color='white'/>
          </TouchableOpacity>
          <TouchableOpacity onPress={onDecrement} style={[{
            ...styles.button,
            backgroundColor: '#ff2d00'
          }]}>
            <Text style={styles.buttonText}>Dislike</Text>
          </TouchableOpacity>
      </View>
    </View>
);

const LikeApp = () => {
  const [counters, setCounters] = useState([0, 0, 0]);

  const incrementCounter = (index) => {
    const newCounters = [...counters];
    newCounters[index] += 1;
    setCounters(newCounters);
  };

  const decrementCounter = (index) => {
    const newCounters = [...counters];
    newCounters[index] -= 1;
    setCounters(newCounters);
  };

  const resetCounters = () => {
    setCounters([0, 0, 0]);
  };

  return (
      <View style={styles.container}>
        <View style={styles.topButtonContainer}>
          <Button style={{borderRadius: 20}} title="Like All" onPress={() => setCounters(counters.map((counter) => counter + 1))}/>
          <Button style={{borderRadius: 20}} title="Dislike All" onPress={() => setCounters(counters.map((counter) => counter - 1))}/>
          <Button style={{borderRadius: 20}} title="Reset All" onPress={resetCounters}/>
        </View>
        <FlatList
            data={counters}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
                <CounterItem
                    counter={item}
                    onIncrement={() => incrementCounter(index)}
                    onDecrement={() => decrementCounter(index)}
                />
            )}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  topButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  itemContainer: {
    width: SCREEN_WIDTH * 0.9,
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 8,
    backgroundColor: 'brown',
    borderRadius: 15
  },
  itemContainerButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 16,
    padding: 12,
  },
  button: {
    paddingHorizontal: 10,
    height: 40,
    borderRadius: 4,
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff'
  }
});

export default LikeApp;
