import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
  TouchableHighlight,
} from 'react-native';
import {connect, useDispatch, useSelector} from 'react-redux';
import SearchAndFilter from '../../components/SearchAndFilter';
import {getCharacter} from '../../redux/actions/characterActions';
import {getEpisode} from '../../redux/actions/episodeActions';
import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native-gesture-handler';
import NoDataCard from '../../components/NoDataCard';
import moment from 'moment';
import CharCard from '../../components/CharCard';

const Homeindex = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [searchText, setSearchText] = useState('');
  const [loaded, setLoaded] = useState(true);

  const drawer = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const date = moment().format('MMMM Do YYYY');

  const title = 'characters';
  useEffect(() => {
    dispatch(getCharacter());
    dispatch(getEpisode());
  }, [dispatch]);

  function goToCharacter(itemData) {
    props.navigation.navigate('Character', {
      char: itemData.item,
      title: 'Home',
    });
  }

  const renderGridItem = itemData => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => goToCharacter(itemData)}>
        <View>
          <CharCard name={itemData.item.name} image={itemData.item.image} />
        </View>
      </TouchableOpacity>
    );
  };

  if (props.characters !== null) {
    return (
      <View style={{flex: 1}}>
        <View style={styles.screen}>
          <View style={styles.center}>
            <SearchAndFilter title={title} />
          </View>
          {props.characters.length >= 0 ? (
            <FlatList
              data={props.characters}
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
      <ActivityIndicator size="large" color="#00ff00" />
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

export default connect(mapStateToProps)(Homeindex);
