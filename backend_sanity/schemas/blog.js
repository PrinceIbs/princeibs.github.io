export default {
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "link",
      title: "Link",
      type: "string",
    },
    {
      name: "publication",
      title: "Publication",
      type: "string",
    },
    {
      name: "imgUrl",
      title: "Image Url",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
