import Card from "../Components/UI/Card";
import { useContext, useRef } from "react";
import ProfileContext from "../Store/profile-context";

function ProfilePage() {
  const profileCtx = useContext(ProfileContext);
  const authorInputRef = useRef();
  const colorInputRef = useRef();

  function submitHandler(event){
      event.preventDefault();
      const enteredAuthor = authorInputRef.current.value;
      const enteredColor = colorInputRef.current.value;
      profileCtx.updateAuthor(enteredAuthor);
      profileCtx.updateColor(enteredColor);
  }

  return (
    <div>
      <Card>
        <div>
          <p>Author: {profileCtx.author}</p>
          <p>Color: {profileCtx.color}</p>
        </div>
      </Card>
      <Card>
        <form onSubmit={submitHandler}>
          <input
            required
            placeholder={profileCtx.author}
            ref={authorInputRef}
            pattern="([A-z0-9À-ž .,!?&$%()\s]){1,}"
          />
          <input
            type="color"
            ref={colorInputRef}
            value={profileCtx.color}
          />
          <input
            type="submit" value="Update"
          ></input>
        </form>
      </Card>
    </div>
  );
}

export default ProfilePage;
