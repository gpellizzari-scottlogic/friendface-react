import Post from "./Post";

function PostList(props) {
  return (
    <div>
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
    </div>
  );
}

export default PostList;
