import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { urlFor } from "../sanity";

const CategoriesCard = ({ id, imgUrl, title }) => {
  return (
    <TouchableOpacity className="mr-3  rounded-md shadow">
      <Image source={{ uri: urlFor(imgUrl).url() }} className="h-20 w-20" />
      <Text className="py-1 font-thin text-xs text-gray-800"> {title} </Text>
    </TouchableOpacity>
  );
};

export default CategoriesCard;
