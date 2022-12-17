import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostView from "./Layout-pages/PostView";
import CreatePost from "./Layout-pages/CreatePost";
import LandingPage from "./Layout-pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/post" element={<PostView/>}/>
        <Route path="/create" element={<CreatePost/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
