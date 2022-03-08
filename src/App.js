import { React } from "react";
import { Route, Routes } from "react-router-dom";
import { IndexPage, SinglePage } from "./features";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<IndexPage />} />
        <Route path="/single" element={<SinglePage />} />
      </Routes>
    </div>
  );
}

export default App;
