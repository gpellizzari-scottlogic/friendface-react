import { Route, Routes } from "react-router-dom";
import PostsPage from "./Pages/PostsPage";
import ProfilePage from "./Pages/ProfilePage";
import Navigation from "./Components/Layout/Navigation";
function App() {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path="/" exact element={<PostsPage />} />
        <Route path="/profile" exact element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
