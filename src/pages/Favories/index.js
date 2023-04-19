import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {AddFavories, RemoveFavories} from '../../redux/actions/favoriesActions';
import {connect} from 'react-redux';
import NoDataCard from '../../components/NoDataCard';
import CharCard from '../../components/CharCard';

const Favoriesindex = props => {
  useEffect(() => {
    console.log('*-*', props.favories);
  }, [props.favories]);

  function goToCharacter(itemData) {
    props.navigation.navigate('Character', {
      char: itemData.item,
      title: 'Favories',
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

  if (props.favories !== null) {
    return (
      <View style={{flex: 1}}>
        <View style={styles.screen}>
          {props.favories.favories.length !== 0 ? (
            <FlatList
              data={props.favories.favories}
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
  // return (
  //   <View style={styles.main}>
  //     <Text>Favories</Text>
  //     <Text style={styles.text} onPress={() => props.decreaseTheValue()}>
  //       -
  //     </Text>

  //     <Text style={styles.text}>{props.favories.value}</Text>

  //     <Text style={styles.text} onPress={() => props.increaseTheValue()}>
  //       +
  //     </Text>
  //   </View>
  // );
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
  main: {
    flex: 1,
    padding: 10,
  },
  text: {
    margin: 10,
    fontSize: 14,
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

export default connect(mapStateToProps, mapDispatchToProps)(Favoriesindex);
