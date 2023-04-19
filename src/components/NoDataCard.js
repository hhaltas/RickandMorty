import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const NoDataCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Her Hangi Bir karakter Bulunamadı!</Text>
      <Text style={styles.text}>Lütfen başka bir kelime ile arayın</Text>
    </View>
  );
};

export default NoDataCard;

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
    backgroundColor: '#B22222',
    padding: 20,
    borderRadius: 20,
    height: 140,
  },
  text: {
    color: 'white',
    paddingTop: 5,
    fontSize: 18,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
  },
});
