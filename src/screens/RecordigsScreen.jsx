import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";

import Item from "../components/Item";

import DATA from "../data.json";

const RecordingsScreen = () => {
  const [data, setData] = useState([]);

  const getQuacks = async () => {
    try {
      setData(DATA);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getQuacks();
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Item
            iconName="play"
            key={item.id}
            title={item.title}
            description={item.description}
            likes={item.likes}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RecordingsScreen;
