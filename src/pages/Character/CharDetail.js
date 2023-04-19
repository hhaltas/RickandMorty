import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Modal,
  Pressable,
} from 'react-native';
import {connect} from 'react-redux';
import {AddFavories, RemoveFavories} from '../../redux/actions/favoriesActions';

const CharDetail = props => {
  const [loaded, setLoaded] = useState(false);
  const [visibleBT, setVisibleBT] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const character = props.route.params.char;

  useEffect(() => {
    let jsonArray = JSON.stringify(props.favories.favories);
    setVisibleBT(jsonArray.includes(character.name));
  }, []);
  const deleteFavories = () => {
    let index = null;
    props.favories.favories.map((x, i) => {
      if (x.name.indexOf(character.name) !== -1) {
        index = i;
      }
    });
    props.favories.favories.splice(index, 1);
    props.decreaseTheValue();
    props.navigation.goBack();
  };
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
                  'Favori karakter ekleme sayısını aştınız. Başka bir karakteri favorilerden çıkarmalısınız.',
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
              setModalVisible(!modalVisible);
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
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Silme işlemi yapılmak istendiğinde kullanıcıya {character.name}{' '}
              isimli karakteri favorilerden kaldırmak istediğinize emin
              misiniz?”
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Pressable
                style={[
                  styles.button,
                  styles.buttonNo,
                  {width: '48%', marginRight: 5},
                ]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>NO</Text>
              </Pressable>
              <Pressable
                style={[
                  styles.button,
                  styles.buttonYes,
                  {width: '48%', marginLeft: 5},
                ]}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  deleteFavories()
                }}>
                <Text style={styles.textStyle}>YES</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
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
    height: '100%',
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
    marginTop: 30,
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  buttonNo: {
    backgroundColor: 'red',
  },
  buttonYes: {
    backgroundColor: 'green',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
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
