import Card from "../UI/Card";
import classes from "./NewPostForm.module.css";
import { useRef } from "react";

function NewPostForm(props) {
  const authorInputRef = useRef();
  const postInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredAuthor = authorInputRef.current.value;
    const enteredPost = postInputRef.current.value;
    const postData = {
      author: enteredAuthor,
      content: enteredPost,
    };
    console.log(postData);
    props.onAddPost(postData);
  }

  return (
    <Card>
      <form className={classes.parent} onSubmit={submitHandler}>
        <input
          className={classes.div1}
          required
          placeholder="author"
          ref={authorInputRef}
        />
        <input
          className={`${classes.div2} ${classes.right_button}`}
          type="color"
        />
        <textarea
          className={classes.div3}
          required
          rows="4"
          placeholder="what's going on?"
          ref={postInputRef}
        ></textarea>
        <input
          className={`${classes.div4} ${classes.right_button}`}
          type="submit"
        ></input>
      </form>
    </Card>
  );
}

export default NewPostForm;
