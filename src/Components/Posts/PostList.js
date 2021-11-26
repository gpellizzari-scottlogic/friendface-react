import Card from "../UI/Card";
import Post from "./Post";

function PostList(props) {
  console.log(props.posts);
  return (
    <div>
      {props.posts.map((post) => (
        <Card>
          <Post
            key={post.id}
            id={post.id}
            author={post.author}
            date={post.date}
            content={post.content}
            likes={post.likes}
          />
        </Card>
      ))}
    </div>
  );
}

export default PostList;
