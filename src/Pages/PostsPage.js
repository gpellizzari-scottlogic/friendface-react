import NewPostForm from "../Components/Posts/NewPostForm";
import PostList from "../Components/Posts/PostList";
import { useState, useEffect } from "react";

function PostsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPosts, setLoadedPosts] = useState([]);

  function showPosts() {
    console.log("showing posts");
    console.log("isLoading (before): " + isLoading);
    setIsLoading(true);
    console.log("isLoading (after): " + isLoading);
    fetch(
      "https://friendface-react-90972-default-rtdb.europe-west1.firebasedatabase.app/posts.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const posts = [];
        for (const key in data) {
          const post = {
            id: key,
            ...data[key],
          };

          posts.push(post);
        }
        setIsLoading(false);
        setLoadedPosts(posts);
        console.log("LoadedPosts: " + loadedPosts);
      });
  }

  useEffect(showPosts, []);

  if (isLoading) {
    return <section>Loading</section>;
  }

  return (
    <div>
      <NewPostForm onAddPost={showPosts} />
      <PostList posts={loadedPosts} />
    </div>
  );
}

export default PostsPage;
