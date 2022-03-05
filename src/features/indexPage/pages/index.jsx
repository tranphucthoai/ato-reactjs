import React, { useEffect, useState } from "react";
import "../../../assets/scss/app.scss";

import { dataApi } from "../../../api";
import {
  BlockModule01,
  BlockModule02,
  BlockModule03,
  ListingGridNoSidebar01,
  ListingGridNoSidebar02,
  ListingGridHasSidebar,
  BlockSlider01,
} from "../components";
import { Header, Footer } from "../../../components";

function IndexPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const dataList = await dataApi.getAll();
        setData(dataList);
      } catch (error) {
        console.log("Failed to fetch data api", error);
      }
    })();
  }, []);
  return (
    <>
      <Header />
      <main>
        <BlockModule01 data={data?.slice(0, 4)} />
        <BlockModule02 data={data?.slice(4, 8)} />
        <ListingGridNoSidebar01 data={data?.slice(8, 13)} />
        <BlockSlider01 data={data?.slice(13, 17)} />
        <ListingGridNoSidebar02 data={data?.slice(17, 21)} />
        <BlockModule03 data={data?.slice(21, 39)} />
        <ListingGridHasSidebar data={data?.slice(39, 55)} />
      </main>
      <Footer />
    </>
  );
}

export default IndexPage;
