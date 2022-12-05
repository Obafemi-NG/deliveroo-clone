import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import FeaturedCard from "./FeaturedCard";

const FeaturedRow = ({ title, description }) => {
  return (
    <View className="flex-row justify-between mx-4 py-5 ">
      <View>
        <Text className="font-bold text-lg">{title}</Text>
        <Text className="text-xs text-gray-500 ">{description}</Text>
      </View>
      <ArrowRightIcon size={20} color="#00CCBB" />
    </View>
  );
};

export default FeaturedRow;
