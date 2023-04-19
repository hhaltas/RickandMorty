import React, {useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import CharCard from '../../components/CharCard';
import EpisodeCard from '../../components/EpisodeCard';

const EpisodeDetail = props => {
  const episode = props.route.params.episode;

  const renderGridItem = itemData => {
    return (
      <View style={styles.gridItem}>
        <EpisodeCard name={itemData.item} image={itemData.item} />
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{episode.name}</Text>
      <View style={styles.extra}>
        <Text style={styles.text}>{`Release: ${episode.air_date}`}</Text>
        <Text style={styles.text}>{`Episode: ${episode.episode}`}</Text>
      </View>
      <View>
        <Text style={styles.characters}>Characters</Text>
        <FlatList
          data={Object.values(episode.characters)}
          renderItem={renderGridItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default EpisodeDetail;

const styles = StyleSheet.create({
  screen: {
    paddingTop: 15,
    flex: 1,
    alignItems: 'center',
    paddingBottom: 100,
  },
  title: {
    fontSize: 28,
  },
  extra: {
    paddingVertical: 5,
  },
  text: {
    fontSize: 16,
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  characters: {
    paddingTop: 10,
    textAlign: 'center',
    fontSize: 20,
  },
});
