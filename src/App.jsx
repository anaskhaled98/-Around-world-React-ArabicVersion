import { Route, BrowserRouter as Router, Routes } from "react-router";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Country from "./pages/Country";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":country" element={<Country />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
