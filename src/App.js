import "./App.css";
import { Route, Routes } from "react-router-dom";
import Write from "./pages/Write";
import Main from "./pages/Main";
import Todo from "./pages/Todo";
import Edit from "./pages/Edit";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/write" element={<Write />} />
      <Route path="/:id" element={<Todo />} />
      <Route path="/edit/:id" element={<Edit />} />
    </Routes>
  );
}
export default App;
