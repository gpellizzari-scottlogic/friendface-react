import Card from "../Components/UI/Card";
import { useContext, useRef } from "react";
import ProfileContext from "../Store/profile-context";
import classes from "./ProfilePage.module.css";
import Avatar from "../Components/Profile/Avatar";
import icon from "../Images/user_icon.png";

function ProfilePage() {
  const profileCtx = useContext(ProfileContext);
  const authorInputRef = useRef();
  const colorInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredAuthor = authorInputRef.current.value;
    const enteredColor = colorInputRef.current.value;
    profileCtx.updateAuthor(enteredAuthor);
    profileCtx.updateColor(enteredColor);
    const authorData = {
      colour: enteredColor,
      username: enteredAuthor
    }

    //add the user to the database
    fetch(
      "http://localhost:8080/users",
      {
        method: "PUT",
        body: JSON.stringify(authorData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      console.log("updated the user in the database!!");
    });

  }

  return (
    <div>
      <Card>
        <div className={classes.profile_wrapper}>
          <div className={classes.author}>Welcome: {profileCtx.author}</div>
          <Avatar color={profileCtx.color} icon={icon} size="60px" />
        </div>
      </Card>
      <Card>
        <form onSubmit={submitHandler} className={classes.profile_form}>
          <label>Name:</label>
          <input
            required
            placeholder={profileCtx.author}
            ref={authorInputRef}
            pattern="([A-z0-9À-ž .,!?&$%()\s]){1,}"
          />
          <label>Color:</label>
          <input
            type="color"
            ref={colorInputRef}
            className={classes.colorPicker}
          />
          <input type="submit" value="Update"></input>
        </form>
      </Card>
    </div>
  );
}

export default ProfilePage;
