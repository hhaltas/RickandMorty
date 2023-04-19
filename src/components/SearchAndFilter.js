import {ActiveTabColor} from '../assets/color/color';
import React, {useState} from 'react';
import {
  View,
  Switch,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';

//Redux
import {connect, useDispatch} from 'react-redux';
import {
  getCharacter,
  getCharFiltersAction,
} from '../redux/actions/characterActions';
import {
  getEpisode,
  getEpisodeFiltersAction,
} from '../redux/actions/episodeActions';

const SearchAndFilter = ({
  title,
  getCharFiltersAction,
  getEpisodeFiltersAction,
}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [inputState, setInputState] = useState('');
  const dispatch = useDispatch();

  function searchInfo(e) {
    let target = e;
    setInputState(target);

    if (target.length > 2) {
      if (title === 'characters') {
        !isEnabled
          ? getCharFiltersAction(target, '')
          : getCharFiltersAction('', target);
      }
      if (title === 'episodes') {
        getEpisodeFiltersAction(target, target);
      }
    }
    if (target.length == '0') {
      title === 'characters'
        ? dispatch(getCharacter())
        : dispatch(getEpisode());
    }
  }

  function clearSearch() {
    if (title === 'characters') {
      dispatch(getCharacter());
    }
    if (title === 'episodes') {
      dispatch(getEpisode());
    }
    setInputState('');
  }

  return (
    <View style={styles.inputContainer}>
      <View style={styles.barContainer}>
        <TextInput
          style={styles.input}
          blurOnSubmit
          autoCorrect={false}
          onChangeText={searchInfo}
          placeholder={`Search ${title}`}
          value={inputState}
        />

        <TouchableOpacity onPress={clearSearch} style={styles.Touch}>
          <View style={styles.button}>
            <Text>Clear</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

function mapState(state) {
  return {};
}

export default connect(mapState, {
  getCharFiltersAction,
  getCharacter,
  getEpisode,
  getEpisodeFiltersAction,
})(SearchAndFilter);

const styles = StyleSheet.create({
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  barContainer: {
    flexDirection: 'row',
  },
  input: {
    width: 200,
    textAlign: 'center',
    backgroundColor: ActiveTabColor,
    borderRadius: 5,
  },
  button: {
    width: 50,
  },
  Touch: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.4,
    marginLeft: 5,
    borderRadius: 5,
  },
});
