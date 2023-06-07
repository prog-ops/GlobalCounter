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
              width: SCREEN_WIDTH * 0.9,
              height: SCREEN_HEIGHT * 0.5,
              borderTopRightRadius: (SCREEN_WIDTH * 0.06) / 2,
              borderTopLeftRadius: (SCREEN_WIDTH * 0.06) / 2,
            }}
            resizeMode='cover'
        />
      </View>
      <View style={styles.itemContainerButtons}>
        <View style={[{
          ...styles.button,
          backgroundColor: '#fff',
          elevation: 10
        }]}>
          <Text style={{
            fontSize: 20, color: 'black'
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
          <Text style={{
            color: '#fff',
            fontSize: 20
          }}>Dislike</Text>
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
          <TouchableOpacity
              style={{
                borderRadius: 7,
                backgroundColor: '#363ef3',
                paddingHorizontal: 20,
                paddingVertical: 10,
              }}
              onPress={() => setCounters(counters.map((counter) => counter + 1))}>
            <Text style={{color: 'white'}}>Like All</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={{
                borderRadius: 7,
                backgroundColor: '#fff',
                paddingHorizontal: 20,
                paddingVertical: 10,
                elevation: 2,
              }}
              onPress={resetCounters}><Text>Reset All</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={{
                borderRadius: 7,
                backgroundColor: '#ff2d00',
                paddingHorizontal: 20,
                paddingVertical: 10,
              }}
              onPress={() => setCounters(counters.map((counter) => counter - 1))}>
            <Text style={{color: 'white'}}>Dislike All</Text>
          </TouchableOpacity>
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
    marginTop: 20,
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
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 2
  },
  itemContainerButtons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
});

export default LikeApp;
