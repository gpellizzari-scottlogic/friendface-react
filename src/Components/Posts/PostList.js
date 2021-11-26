import Post from "./Post";

function PostList(props) {
  console.log(props.posts);
  return (
    <ul>
      {props.posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          author={post.author}
          date={post.date}
          content={post.content}
          likes={post.likes}
        />
      ))}
    </ul>
  );
}

export default PostList;
