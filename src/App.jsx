import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CreateTodoPage from "./pages/CreateTodoPage.jsx";
import EditTodoPage from "./pages/EditTodoPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateTodoPage />} />
        <Route path="/edit/:id" element={<EditTodoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
