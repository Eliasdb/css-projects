import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project1 from "./pages/Project-1";
import Project2 from "./pages/Project-2";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/css-project-1" element={<Project1 />} />
          <Route path="/css-project-2" element={<Project2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
