import NewPostForm from "../Components/Posts/NewPostForm";
import PostList from "../Components/Posts/PostList";
import { useState, useEffect } from "react";
import Sorter from "../Components/Posts/Sorter";

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

  function sortPosts(option) {
    const compareAuthors = (itemA, itemB) => {
      console.log("comparing authors");
      if (itemA.author.toLowerCase() < itemB.author.toLowerCase()) {
        return -1;
      }
      if (itemA.author > itemB.author) {
        return 1;
      }
      return 0;
    };

    const compareDates = (itemA, itemB) => {
      let secondsA = new Date(itemA.date);
      let secondsB = new Date(itemB.date);
      if (secondsA < secondsB) {
        return -1;
      }
      if (secondsA > secondsB) {
        return 1;
      }
      return 0;
    };

    if (option === "author") {
      console.log(loadedPosts);
      console.log("sorting by author");
      setLoadedPosts(() => {
        return loadedPosts.sort(compareAuthors);
      });
      console.log(loadedPosts);
      //setLoadedPosts(loadedPosts.sort(compareAuthors));
    } else if (option === "date-posted") {
      console.log("sorting by date-posted");
      loadedPosts.sort(compareDates);
    }

    return 0;
  }

  useEffect(showPosts, []);

  if (isLoading) {
    return <section>Loading</section>;
  }

  return (
    <div>
      <NewPostForm onAddPost={showPosts} />
      <Sorter onSort={sortPosts} />
      <PostList posts={loadedPosts} />
    </div>
  );
}

export default PostsPage;
