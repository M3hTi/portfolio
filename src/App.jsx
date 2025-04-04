import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={} />
          <Route path="/about" element={} />
          <Route path="/contact" element={} />
          <Route path="*" element={} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
