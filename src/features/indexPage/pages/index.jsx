import React, { useEffect, useState } from "react";
import { dataApi } from "../../../api";
import "../../../assets/scss/app.scss";
import { PreLoad } from "../../../components";
import {
  BlockModule01,
  BlockModule02,
  BlockModule03,
  BlockSlider01,
  ListingGridHasSidebar,
  ListingGridNoSidebar01,
  ListingGridNoSidebar02,
} from "../components";

function IndexPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const dataList = await dataApi.getAll();
        setData(dataList);
      } catch (error) {
        console.log("Failed to fetch data api", error);
      }
      setLoading(false);
    })();
  }, []);

  if (loading) return <PreLoad />;
  return (
    <>
      <BlockModule01 data={data?.slice(0, 4)} />
      <BlockModule02 data={data?.slice(4, 8)} />
      <ListingGridNoSidebar01 data={data?.slice(8, 13)} />
      <BlockSlider01 data={data?.slice(13, 17)} />
      <ListingGridNoSidebar02 data={data?.slice(17, 21)} />
      <BlockModule03 data={data?.slice(21, 39)} />
      <ListingGridHasSidebar data={data?.slice(39, 55)} />
    </>
  );
}

export default IndexPage;
