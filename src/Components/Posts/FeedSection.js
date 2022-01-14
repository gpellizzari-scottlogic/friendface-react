import { useRef, useState, useEffect } from "react";
import PostList from "./PostList";
import classes from "./FeedSection.module.css";

function FeedSection(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPosts, setLoadedPosts] = useState([]);
  const [renderPosts, setRenderPosts] = useState(false); //used to rerender the sorted posts
  const sorterRef = useRef();

  function sortHandler() {
    const chosenOption = sorterRef.current.value;
    //sortPosts(chosenOption);
    showPosts(chosenOption);
  }

  function sortPosts(option) {

    // const compareAuthors = (itemA, itemB) => {
    //   if (itemA.author.toLowerCase() < itemB.author.toLowerCase()) {
    //     return -1;
    //   }
    //   if (itemA.author > itemB.author) {
    //     return 1;
    //   }
    //   return 0;
    // };
    // const compareDates = (itemA, itemB) => {
    //   let secondsA = new Date(itemA.date);
    //   let secondsB = new Date(itemB.date);
    //   if (secondsA < secondsB) {
    //     return -1;
    //   }
    //   if (secondsA > secondsB) {
    //     return 1;
    //   }
    //   return 0;
    // };

    // if (option === "author") {
    //   let tempPosts = loadedPosts;
    //   tempPosts.sort(compareAuthors);
    //   setLoadedPosts(tempPosts);
    //   //temporary function because "setLoadedPosts" doesn't refresh the page for some reason
    //   setRenderPosts(renderPosts === true ? false : true);
    // } else if (option === "date-posted") {
    //   let tempPosts = loadedPosts;
    //   tempPosts.sort(compareDates);
    //   setLoadedPosts(tempPosts);
    //   setRenderPosts(renderPosts === true ? false : true);
    // }
  }

  function showPosts(option) {
    const url = "http://localhost:8080/userposts";
    if(option == "author"){
      url+="/sortByAuthor";
    }
    props.setRefreshPost(false);
    console.log("fetching posts from API");
    setIsLoading(true);
    fetch(
      url
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const posts = [];
        for (const key in data) {
          const post = {
            id: data[key].id,
            author: data[key].author.username,
            dateTime: data[key].dateTime,
            contents: data[key].contents,
            likeCount: data[key].likeCount,
            color: data[key].author.colour
          };
          console.log(post);
          posts.push(post);
        }
        setIsLoading(false);
        setLoadedPosts(posts);
        console.log("posts from the post page: " + loadedPosts);
      });
  }
  useEffect(showPosts, [props.refreshPost]);

  if (isLoading) {
    return <section>Loading</section>;
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.sorter}>
        <label>Sort by:</label>
        <select
          id="sort-option"
          className="dropdown"
          onChange={sortHandler}
          ref={sorterRef}
        >
          <option value="date-posted">Date posted</option>
          <option value="author">Author</option>
        </select>
      </div>

      <div>
        <PostList posts={loadedPosts} />
      </div>
    </div>
  );
}

export default FeedSection;
