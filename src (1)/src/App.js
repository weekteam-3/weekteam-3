import "./App.css";
import { Route, Routes } from "react-router-dom";
import Write from "./pages/Write";
import Main from "./pages/Main";
import Todo from "./pages/Todo";
import Edit from "./pages/Edit";
import Card from "./components/card/Card";
import Layout from "./pages/Layout";

function App() {
  return (
    <div>
      <Layout />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/write" element={<Write />} />
        <Route path="/:id" element={<Todo />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/todo/card/:id" element={<Card />} />
      </Routes>
    </div>
  );
}
export default App;
