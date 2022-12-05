import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";

const FeaturedCard = ({ id, imgUrl, title, rating, category, address }) => {
  return (
    <TouchableOpacity className="bg-white shadow ">
      <Image source={{ uri: imgUrl }} className="h-32 w-64" />
      <View className="mx-2 py-3">
        <Text className="font-bold text-lg ">{title}</Text>
        <View className="flex-row items-center ">
          <StarIcon size={18} color="green" />
          <Text className=" text-gray-700 ">
            {" "}
            <Text className="text-green-800 font-semibold text-xs ">
              {" "}
              {rating}{" "}
            </Text>
            · {category}{" "}
          </Text>
        </View>
        <View className="flex-row items-center">
          <MapPinIcon size={18} color="gray" />
          <Text className=" text-gray-700 font-normal text-xs ">
            {" "}
            Nearby · {address}{" "}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FeaturedCard;
