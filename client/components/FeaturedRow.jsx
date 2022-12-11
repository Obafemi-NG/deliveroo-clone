import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import FeaturedCard from "./FeaturedCard";
import sanityClient from "../sanity";

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == 'featured' && _id == $id]{
        ...,
        restaurants[]->{
          ...,
        }
      }[0]
      `,
        { id }
      )
      .then((data) => setRestaurants(data.restaurants));
  }, []);
  return (
    <View>
      <View className="flex-row justify-between mx-4 py-3 ">
        <View>
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-xs text-gray-500 ">{description}</Text>
        </View>
        <ArrowRightIcon size={20} color="#00CCBB" />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator="false"
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {restaurants?.map((data) => {
          return (
            <FeaturedCard
              key={data._id}
              id={data._id}
              address={data.address}
              rating={data.rating}
              title={data.name}
              imgUrl={data.image}
              dishes={data.dishes}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
