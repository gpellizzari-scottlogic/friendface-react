import NewPostForm from "../Components/Posts/NewPostForm";
import PostList from "../Components/Posts/PostList";
import {useState, useEffect} from 'react';


const EXAMPLE_POSTS = [
  {
    id: 1,
    author: "FriendFace User",
    date: "01/10/2019",
    likes: 0,
    content:
      "Today I started using FriendFace! It's the best social media site I've ever used.",
  },
  {
    id: 2,
    author: "AlienInteraction User",
    date: "01/10/2019",
    likes: 7,
    content:
      "Today I started using AlienInteraction! It's by far the best social media site I've ever used.",
  },
];

function PostsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPosts, setLoadedPosts] = useState([]);

  function addPostHandler(postData) {
    fetch(
      "https://friendface-react-90972-default-rtdb.europe-west1.firebasedatabase.app/posts.json",
      {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  useEffect(() => {
    setIsLoading(true);
    console.log("isLoading" + isLoading);
    fetch(
      "https://friendface-react-90972-default-rtdb.europe-west1.firebasedatabase.app/posts.json"
    ).then(response => {
      return response.json();
    }).then(data => {
      const posts = [];
      console.log("LoadedPosts: " + isLoading);
      for (const key in data){
        const post = {
          id: key,
          ...data[key]
        };

        posts.push(post);
      }
      setIsLoading(false);
      setLoadedPosts(posts);
      console.log("LoadedPosts: " + loadedPosts);
    });
  }, []);

  

  if(isLoading) {
    return (
        <section>Loading</section>
    );
  }

  return (
    <div>
      <NewPostForm onAddPost={addPostHandler} />
      <PostList posts={loadedPosts} />
    </div>
  );
}

export default PostsPage;
