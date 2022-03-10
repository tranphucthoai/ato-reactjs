import { React } from "react";
import { Route, Routes } from "react-router-dom";
import { IndexPage, SinglePage, ListPage } from "./features";
import { Header, Footer, NotFound, Error } from "./components";
import "./assets/scss/app.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route index path="/" element={<IndexPage />} />
          <Route path="/single/*" element={<SinglePage />}>
            <Route path=":id" element={<SinglePage />} />
          </Route>
          <Route path="/listing" element={<ListPage />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
