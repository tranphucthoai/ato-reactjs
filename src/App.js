import { React } from "react";
import { Route, Routes } from "react-router-dom";
import { IndexPage, SinglePage, ListPage } from "./features";
import { Header, Footer, NotFound } from "./components";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route index element={<IndexPage />} />
          <Route path="/single" element={<SinglePage />} />
          <Route path="/listing" element={<ListPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
