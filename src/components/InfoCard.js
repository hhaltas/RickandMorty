import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {ActiveTabColor} from '../assets/color/color';

const InfoCard = props => {
  return (
    <View style={styles.card}>
      <Text style={styles.title} numberOfLines={2}>
        {props.data.name}
      </Text>

      <Text style={[styles.text, {marginTop: 40}]} numberOfLines={2}>
        Episode: {props.data.episode}
      </Text>
    </View>
  );
};

export default InfoCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: ActiveTabColor,
    padding: 20,
    borderRadius: 10,
    height: 140,
    flexDirection: 'column',
  },
  text: {
    color: 'white',
    paddingTop: 2,
  },
  title: {
    textAlign: 'center',
    color: 'white',
  },
});
