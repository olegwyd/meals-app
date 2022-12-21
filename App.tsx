import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';

export default function App() {
  const [search, setSearch] = useState<string>('');

  const handleOnChange = (
    searchValue: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    setSearch(`${searchValue}`);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBarWrapper}>
        <Searchbar value={search} onChange={handleOnChange} />
      </View>
      <View style={styles.listContainer}>
        <Text>list</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  searchContainer: {
    backgroundColor: 'green',
    padding: 10,
  },
  listContainer: {
    backgroundColor: 'red',
    padding: 10,
    flex: 1,
  },
  searchBarWrapper: {
    padding: 10,
  },
});
