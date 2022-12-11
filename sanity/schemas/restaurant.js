export default {
  name: "restaurant",
  title: "Restaurants",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Restaurant name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short Description",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "image",
      type: "image",
      title: "Image of the Restaurant",
    },
    {
      name: "lat",
      type: "number",
      title: "Latitude of the Restaurant",
    },
    {
      name: "long",
      type: "number",
      title: "Longitude of the Restaurant",
    },
    {
      name: "address",
      type: "string",
      title: "Address of the Restaurant",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      type: "number",
      title: "Enter a rating from (1 to 5stars)",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(5)
          .error("Please enter a value between 1 to 5"),
    },
    {
      name: "type",
      title: "category",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "dishes",
      title: "Dishes",
      type: "array",
      of: [{ type: "reference", to: [{ type: "dish" }] }],
    },
  ],
};
