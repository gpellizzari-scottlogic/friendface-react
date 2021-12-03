import Card from "../UI/Card";
import classes from "./NewPostForm.module.css";
import { useRef, useState, useContext } from "react";
import ProfileContext from "../../Store/profile-context";
import icon from "../../Images/user_icon.png";
import Avatar from "../Profile/Avatar";

function NewPostForm(props) {
  const postInputRef = useRef();
  const [update, setUpdate] = useState(false);
  const profileCtx = useContext(ProfileContext);

  function clearInputFields() {
    postInputRef.current.value = "";
    setUpdate(update ? true : false);
  }

  function getCurrentDate() {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    return today.toLocaleDateString();
  }

  function submitHandler(event) {
    event.preventDefault();
    const enteredPost = postInputRef.current.value;
    const postData = {
      author: profileCtx.author,
      content: enteredPost,
      date: getCurrentDate(),
      likes: 0,
      color: profileCtx.color,
    };
    console.log(postData);

    fetch(
      "https://friendface-react-90972-default-rtdb.europe-west1.firebasedatabase.app/posts.json",
      {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      props.setRefreshPost(true);
      clearInputFields();
    });
  }

  return (
    <Card>
      <form className={classes.parent} onSubmit={submitHandler}>
        <div className={`${classes.div1} ${classes.right_button}`}>
          <Avatar color={profileCtx.color} icon={icon} size="60px"/>
        </div>
        <div className={classes.div2}>
          {profileCtx.author}
        </div>

        <textarea
          className={classes.div3}
          required
          rows="4"
          placeholder="what's going on?"
          ref={postInputRef}
          pattern="([A-z0-9À-ž .,!?&$%()\s]){1,}"
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
