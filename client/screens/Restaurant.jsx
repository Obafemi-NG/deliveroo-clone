import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { urlFor } from "../sanity";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/outline";
import { StarIcon, MapPinIcon } from "react-native-heroicons/solid";
import DishesRow from "../components/DishesRow";
import BasketIcon from "../components/BasketIcon";

const Restaurant = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {
    id,
    imgUrl,
    title,
    rating,
    shortDescription,
    category,
    address,
    dishes,
    long,
    lat,
  } = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View className="relative">
          <Image
            source={{
              uri: urlFor(imgUrl).url(),
            }}
            className="w-full h-60"
          />
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            className=" absolute top-14 left-3 bg-gray-100 p-2 rounded-full"
          >
            <ArrowLeftIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View className="bg-white px-4  ">
          <Text className="text-xl font-bold  pt-4 "> {title} </Text>
          <View className="flex-row items-center space-x-3 py-2 ">
            <View className="flex-row items-center space-x-1 ">
              <StarIcon size={18} color="green" />
              <Text className="text-gray-700 text-xs ">
                {" "}
                <Text className="text-green-800">{rating}</Text> · Offers{" "}
              </Text>
            </View>
            <View className="flex-row items-center space-x-1  ">
              <MapPinIcon size={18} color="gray" />
              <Text className=" text-gray-700 font-normal text-xs ">
                {" "}
                Nearby · {address}{" "}
              </Text>
            </View>
          </View>
          <Text className="text-gray-500 pt-1 pb-4">{shortDescription}</Text>
          <TouchableOpacity className="flex-row items-center space-x-2 border-y py-3 border-gray-300 ">
            <QuestionMarkCircleIcon opacity={0.6} size={18} color="gray" />
            <Text className="flex-1 pl-2 font-bold">Have a food allergy </Text>
            <ChevronRightIcon size={20} color="#00ccbb" />
          </TouchableOpacity>
        </View>

        <View className="pb-28">
          <Text className="font-bold text-xl px-4 pt-6 pb-3"> Menu </Text>

          {/* Dishes Row! */}
          {dishes.map((dish) => {
            return (
              <DishesRow
                key={dish._id}
                id={dish._id}
                title={dish.name}
                shortDesciption={dish.short_description}
                price={dish.price}
                image={dish.image}
              />
            );
          })}
        </View>
      </ScrollView>
    </>
  );
};

export default Restaurant;
