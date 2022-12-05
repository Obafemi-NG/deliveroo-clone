import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoriesCard from "./CategoriesCard";

const FoodCategories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator="false"
      // className="bg-gray-200"
    >
      <CategoriesCard
        imgUrl="https://www.happyfoodstube.com/wp-content/uploads/2016/03/homemade-sushi-picture.jpg"
        title="Sushi"
        bgColor="10A19D"
      />
      <CategoriesCard
        imgUrl="https://media-cdn.greatbritishchefs.com/media/0txfk5kz/img75645.jpg"
        title="African"
        bgColor="540375"
      />
      <CategoriesCard
        imgUrl="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1214757157.png"
        title="Asian"
        bgColor="FF7000"
      />
      <CategoriesCard
        imgUrl="https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/07/1296x728-header.jpg"
        title="Thai"
        bgColor="FFBF00"
      />
      <CategoriesCard
        imgUrl="https://static.toiimg.com/photo/msid-87930581/87930581.jpg"
        title="Pizza"
        bgColor="CFFDE1"
      />
    </ScrollView>
  );
};

export default FoodCategories;
