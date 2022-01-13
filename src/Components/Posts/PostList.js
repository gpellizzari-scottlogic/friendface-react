import Post from "./Post";

function PostList(props) {
  return (
    <div>
      {props.posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          author={post.author}
          date={post.dateTime}
          content={post.contents}
          likes={post.likeCount}
          color={post.color}
        />
      ))}
    </div>
  );
}

export default PostList;
