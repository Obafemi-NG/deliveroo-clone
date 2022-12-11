import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { urlFor } from "../sanity";
import { useNavigation, useRoute } from "@react-navigation/native";

const Restaurant = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { imgUrl } = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <ScrollView className="relative">
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        className="w-full h-60"
      />
      <View></View>
    </ScrollView>
  );
};

export default Restaurant;
