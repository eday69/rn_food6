import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet, FlatList, Image} from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ route }) => {
  const [result, setResult] = useState(null);
  const id = route.params.id;

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id)
  }, []);

  if (!result) {
    return <Text>Loading ...</Text>;
  }

  return (
    <View>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) =>photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300
  }
});

export default ResultsShowScreen;
