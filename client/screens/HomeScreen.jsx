import { View, Text, SafeAreaView, TextInput, ScrollView } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import FoodCategories from "../components/FoodCategories";
import FeaturedRow from "../components/FeaturedRow";
import FeaturedCard from "../components/FeaturedCard";
import client from "../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredMenu, setFeaturedMenu] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    client
      .fetch(
        `
        *[_type == "featured"]{
          ...,
          restaurants[]->{
            ...,
            dishes[]->
          }
        }
      `
      )
      .then((data) => setFeaturedMenu(data));
  }, []);

  return (
    <SafeAreaView className="bg-white">
      {/* Header */}
      <View className="flex-row items-center pb-3 mx-3 space-x-2 ">
        <Image
          source={require("../assets/user.png")}
          className=" h-7 w-7 rounded-full "
        />
        <View className="flex-1">
          <Text className="text-xs font-bold text-gray-500 ">Deliver now!</Text>
          <Text className=" text-xl font-bold ">
            Current Location <ChevronDownIcon size={20} color="#00CCBB" />{" "}
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Search Section */}
      <View className="flex-row mx-4 items-center pb-2 space-x-2">
        <View className="flex-row space-x-2 flex-1 p-2 rounded-sm bg-gray-200 ">
          <MagnifyingGlassIcon size={25} color="gray" />
          <TextInput
            placeholder="restaurants and cuisines near you"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon size={25} color="#00CCBB" />
      </View>

      {/* Body */}
      <ScrollView className="bg-gray-100">
        {/* Food Categories */}
        <FoodCategories />

        {/* Featured Row */}
        {/* Featured */}
        {featuredMenu?.map((category) => {
          return (
            <FeaturedRow
              key={category._id}
              id={category._id}
              title={category.name}
              description={category.short_description}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
