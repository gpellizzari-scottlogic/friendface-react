import NewPostForm from "../Components/Posts/NewPostForm";
import { useState, useEffect } from "react";
import FeedSection from "../Components/Posts/FeedSection";

function PostsPage() {
  const [refreshPost, setRefreshPost] = useState(false); //used to reload the post

  return (
    <div>
      <NewPostForm setRefreshPost={setRefreshPost}/>
      <FeedSection setRefreshPost={setRefreshPost} refreshPost={refreshPost}/>
    </div>
  );
}

export default PostsPage;
