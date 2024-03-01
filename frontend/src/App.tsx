import { Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";

// Define Navigator as an interface
interface Navigator {
  to: string;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/search" element={<>Search Page</>} />
        <Route path="*" element={<Navigator to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
