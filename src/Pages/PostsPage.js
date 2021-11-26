import NewPostForm from "../Components/Posts/NewPostForm";
import PostList from "../Components/Posts/PostList";

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
  function addPostHandler(postData) {
    fetch(
      "https://friendface-react-90972-default-rtdb.europe-west1.firebasedatabase.app/posts.json",
      {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
  return (
    <div>
      <NewPostForm onAddPost={addPostHandler} />
      <PostList posts={EXAMPLE_POSTS} />
    </div>
  );
}

export default PostsPage;
