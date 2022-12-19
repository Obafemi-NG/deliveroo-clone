import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import Currency from "react-currency-formatter";
import { selectBasketItem, selectTotalPrice } from "../redux/slice/basketSlice";

const BasketIcon = () => {
  const navigation = useNavigation();
  const item = useSelector(selectBasketItem);
  const itemTotalPrice = useSelector(selectTotalPrice);
  return (
    <View className="absolute bottom-10 z-10 w-full">
      <TouchableOpacity className=" bg-[#00CCBB] flex-row items-center mx-5 p-5 rounded-lg ">
        <Text className="font-bold bg-[#037e74] text-lg text-white py-1 px-1">
          {" "}
          {item.length}{" "}
        </Text>
        <Text className="flex-1 text-lg font-extrabold text-center text-white ">
          {" "}
          Open Basket{" "}
        </Text>
        <Text className="text-lg font-extrabold text-white ">
          <Currency quantity={itemTotalPrice} currency="GBP" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
