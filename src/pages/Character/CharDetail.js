import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import {AddFavories, RemoveFavories} from '../../redux/actions/favoriesActions';

const CharDetail = props => {
  const [loaded, setLoaded] = useState(false);
  const [visibleBT, setVisibleBT] = useState(false);

  const character = props.route.params.char;

  useEffect(() => {
    let jsonArray = JSON.stringify(props.favories.favories);
    setVisibleBT(jsonArray.includes(character.name));
  }, []);

  return (
    <View style={styles.screen}>
      <View style={styles.BackPress}>
        <TouchableOpacity
          style={styles.BackTouch}
          onPress={() => props.navigation.goBack()}>
          <Text>Back</Text>
        </TouchableOpacity>
      </View>

      {!visibleBT ? (
        <View style={styles.FavoriesPress}>
          <TouchableOpacity
            style={styles.BackTouch}
            onPress={() => {
              if (props.favories.favories.length <= 9) {
                props.favories.favories.push(props.route.params.char);
                props.increaseTheValue();
                setVisibleBT(true);
              } else {
                Alert.alert(
                  'You cannot add more favourites. You have reached your favorite limit...',
                );
              }
            }}>
            <Text>Favories Add </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.FavoriesPress}>
          <TouchableOpacity
            style={styles.BackTouch}
            onPress={() => {
              let index = null;
              props.favories.favories.map((x, i) => {
                if (x.name.indexOf(character.name) !== -1) {
                  index = i;
                }
              });
              props.favories.favories.splice(index, 1);
              props.decreaseTheValue();
              props.navigation.goBack();
            }}>
            <Text>Favories Remove</Text>
          </TouchableOpacity>
        </View>
      )}

      <Image source={{uri: character.image}} style={styles.image} />
      <Text style={styles.title}>{character.name}</Text>
      <View style={styles.extra}>
        <Text style={styles.text}>{`Gender: ${character.gender}`}</Text>
        <Text style={styles.text}>{`Species: ${character.species}`}</Text>
        {character.type ? (
          <Text style={styles.text}>{`Type: ${character.type}`}</Text>
        ) : (
          <Text style={styles.text}>Type: No data</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BackPress: {
    position: 'absolute',
    left: 10,
    top: 10,
    borderRadius: 5,
    height: 35,
    width: 100,
  },
  FavoriesPress: {
    position: 'absolute',
    right: 10,
    top: 10,
    borderRadius: 5,
    height: 35,
    width: 100,
  },
  BackTouch: {
    height:'100%',
    width: 100,
    borderWidth: 0.4,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  FavoriTouch: {
    width: 160,
    borderWidth: 0.4,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '70%',
    width: '80%',
    marginTop:30
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
});

const mapStateToProps = state => {
  return {
    favories: state.favories,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increaseTheValue: () => {
      dispatch(AddFavories());
    },

    decreaseTheValue: () => {
      dispatch(RemoveFavories());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharDetail);
