import "./App.css";
import { Route, Routes } from "react-router-dom";
import Write from "./pages/Write";
import Main from "./pages/Main";
import Todo from "./pages/Todo";
import Edit from "./pages/Edit";
import Card from "./components/card/Card";
import CardEdit from "./components/card/CardEdit";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/write" element={<Write />} />
      <Route path="/:id" element={<Todo />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/todo/card/:id" element={<Card />} />
      <Route path="/todo/card/:id/edit" element={<CardEdit />} />
    </Routes>
  );
}
export default App;
