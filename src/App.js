import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainView from "./views/MainView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainView />} />
    </Routes>
  );
}

export default App;
