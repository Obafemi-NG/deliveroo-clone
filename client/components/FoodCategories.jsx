import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoriesCard from "./CategoriesCard";
import sanityClient from "../sanity";

const FoodCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == 'category']{
          ...
        }
      `
      )
      .then((data) => setCategories(data));
  }, []);
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator="false"
    >
      {categories?.map((category) => {
        return (
          <CategoriesCard
            key={category._id}
            id={category._id}
            imgUrl={category.image}
            title={category.name}
          />
        );
      })}
    </ScrollView>
  );
};

export default FoodCategories;
