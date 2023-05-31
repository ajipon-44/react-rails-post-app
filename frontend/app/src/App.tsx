import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Index } from "./components/Post/Index";
import { Show } from "./components/Post/Show";
import { New } from "./components/Post/New";
import { Edit } from "./components/Post/Edit";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/posts/index" element={<Index />} />
        <Route path="/posts/:postIdParams" element={<Show />} />
        <Route path="/posts/new" element={<New />} />
        <Route path="/posts/edit/:postIdParams" element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
