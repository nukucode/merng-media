import Post from "../../models/Post.js";

export default  {
  Query: {
    async getPosts() {
      try {
        const posts = await Post.find();
        return posts;
      } catch (err) {
        console.log(err.message);
      }
    },
  },
};


