import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import {connect, useDispatch} from 'react-redux';
import SearchAndFilter from '../../components/SearchAndFilter';
import NoDataCard from '../../components/NoDataCard';
import CharCard from '../../components/CharCard';
import {getEpisode} from '../../redux/actions/episodeActions';
import {useNavigation} from '@react-navigation/native';
import InfoCard from '../../components/InfoCard';
import {ActiveTabColor} from '../../assets/color/color';

const Episodeindex = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [searchText, setSearchText] = useState('');
  const [loaded, setLoaded] = useState(true);

  const drawer = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);

  const title = 'episodes';
  useEffect(() => {
    dispatch(getEpisode());
  }, [dispatch]);

  function goToEpisode(itemData) {
    props.navigation.navigate('Episode', {
      episode: itemData.item,
    });
  }
  const renderGridItem = itemData => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => goToEpisode(itemData)}>
        <View>
          <InfoCard title="episode" data={itemData.item} />
        </View>
      </TouchableOpacity>
    );
  };

  if (props.episodes !== null) {
    return (
      <View style={{flex: 1}}>
        <View style={styles.screen}>
          <View style={styles.center}>
            <SearchAndFilter title={title} />
          </View>
          {props.episodes !== null ? (
            <FlatList
              data={props.episodes}
              renderItem={renderGridItem}
              numColumns={2}
              keyExtractor={item => item.id}
            />
          ) : (
            <View style={styles.noData}>
              <NoDataCard />
            </View>
          )}
        </View>
      </View>
    );
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" color={ActiveTabColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    padding: 10,
  },
  screen: {
    flex: 1,
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 20,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  noData: {
    paddingHorizontal: 35,
    paddingTop: 50,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '100%',
    height: '100%',
    margin: 20,
    backgroundColor: '#FAFAFA',
    padding: 35,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#F194FF',
    padding: 10,
    borderRadius: 5,
    elevation: 2,
    width: 100,
    marginBottom: 40,
  },
  textButton: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 15,
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 320,
  },
});

function mapStateToProps(state) {
  return {
    episodes: state.episodes.episode,
    characters: state.characters.character,
  };
}

export default connect(mapStateToProps)(Episodeindex);
