import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CategoriesCard = ({ imgUrl, title, bgColor }) => {
  return (
    <TouchableOpacity className="mx-1 relative rounded-md bg-yellow-100">
      <Image source={{ uri: imgUrl }} className="h-20 w-20" />
      <Text className="py-1 font-thin text-xs text-gray-800"> {title} </Text>
    </TouchableOpacity>
  );
};

export default CategoriesCard;
