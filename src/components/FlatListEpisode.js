import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {API} from '../config/config';
import axios from 'axios';

const FlatListEpisode = props => {
  const [page, setPage] = useState('1');
  const [loading, setLoading] = useState(false);
  const [contacts, setcontacts] = useState([]);
  const [allContacts, setallContacts] = useState([]);
  const [refreshing, setrefreshing] = useState(false);

  useEffect(() => {
    setLoading(true);

    // const data = axios.get(API).then(response => {
    //   console.log('data', JSON.stringify(response.data, null, 2));
    //   setcontacts(response.data);
    // });

    const users = [...allContacts, ...contacts];

    if (refreshing) {
      users.reverse();
    }
    setcontacts(users);
    setallContacts(users);
    setLoading(false);
    setrefreshing(false);
  }, []);

  const renderContactsItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={[
          styles.itemContainer,
          {backgroundColor: index % 2 === 1 ? '#fafafa' : ''},
        ]}
        onPress={() => __OnPress(item.id, item)}>
        <Image
          style={styles.avatar}
          source={require('../assets/images/rckmrty.jpeg')}
        />
        <View style={{marginTop: 10}}>
          <View style={styles.textContainer}>
            <Text style={styles.name}>{item.episode} </Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.name}>{item.name} </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const __OnPress = (id, item) => {
    props.onCallBack(id, item);
  };

  return (
    <View>
      <FlatList
        ListFooterComponent={this.renderFooter}
        renderItem={renderContactsItem}
        keyExtractor={(item, index) => index}
        data={contacts.results != null ? contacts.results : contacts}
        onMomentumScrollBegin={() => {
          this.duringMomentum = false;
        }}
      />
    </View>
  );
};

export default FlatListEpisode;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  textContainer: {
    justifyContent: 'space-around',
  },
  name: {
    fontSize: 16,
  },
  searchContainer: {
    padding: 10,
  },
  searchInput: {
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    padding: 10,
  },
});
