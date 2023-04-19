import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';

const CharCard = props => {
  return (
    <View style={styles.item}>
      <View style={styles.card}>
        <View style={styles.row}>
          <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{props.name}</Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    </View>
  );
};

export default CharCard;

const styles = StyleSheet.create({
  item: {
    height: '100%',
    width: '100%',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
  },
  bgImage: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    resizeMode:'contain'
  },
  row: {
    flexDirection: 'row',
    height: '100%',
    borderWidth:1
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
  },
  card: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 5,
  },
});
