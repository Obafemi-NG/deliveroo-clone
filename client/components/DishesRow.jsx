import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import Currency from "react-currency-formatter";
import { urlFor } from "../sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItemFromBasket,
  addItemToBasket,
  selectBasketItemById,
} from "../redux/slice/basketSlice";

const DishesRow = ({ id, title, shortDesciption, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state) => selectBasketItemById(state, id));
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setIsPressed(!isPressed);
        }}
        className={`border-y border-gray-200 py-4 px-4 bg-white ${
          isPressed && "border-b-0"
        } `}
      >
        <View className="flex-row">
          <View className="flex-1">
            <Text className=" font-medium text-lg pb-1"> {title} </Text>
            <Text className="text-gray-700 pb-1 "> {shortDesciption} </Text>
            <Text className="font-bold text-md ">
              <Currency quantity={price} currency="GBP" />
            </Text>
          </View>
          <View>
            <Image
              source={{
                uri: urlFor(image).url(),
              }}
              className="w-20 h-20"
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View>
          <View className="flex-row px-4 space-x-3 items-center bg-white pb-3 pt-1">
            <TouchableOpacity
              disabled={items.length === 0}
              onPress={() => {
                if (items.length < 1) return;
                dispatch(
                  removeItemFromBasket({
                    id,
                    title,
                    shortDesciption,
                    price,
                    image,
                  })
                );
              }}
            >
              <MinusCircleIcon
                color={items.length > 0 ? "#00CCBB" : "gray"}
                size={40}
              />
            </TouchableOpacity>
            <Text> {items.length} </Text>
            <TouchableOpacity
              onPress={() =>
                dispatch(
                  addItemToBasket({ id, title, shortDesciption, price, image })
                )
              }
            >
              <PlusCircleIcon size={40} color="#00CCBB" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishesRow;
