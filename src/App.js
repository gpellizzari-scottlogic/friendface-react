import { Route, Routes } from "react-router-dom";
import PostsPage from "./Pages/PostsPage";
import ProfilePage from "./Pages/ProfilePage";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<PostsPage />} />
        <Route path="/profile" exact element={<ProfilePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
