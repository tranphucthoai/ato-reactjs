import React, { useEffect, useState } from "react";
import { dataApi } from "../../../api";
import { Footer, Header, PostVerticalFullWidth } from "../../../components";
import { AuthorVerticel } from "../components";

SinglePage.propTypes = {};

function SinglePage() {
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
        <section className="single">
          <div className="single-header">
            <PostVerticalFullWidth data={data[0]} />
          </div>
          <div className="single-content">
            <div className="container">
              <div className="row">
                <div className="sub-col">
                  <AuthorVerticel />
                </div>
                <div className="main-col">main</div>
              </div>
              <div></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default SinglePage;
