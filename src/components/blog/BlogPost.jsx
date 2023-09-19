import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();
  return <div>This is the blog post with ID: {id}</div>;
};

export default BlogPost;
