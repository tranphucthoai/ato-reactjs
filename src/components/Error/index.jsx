import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <section className="section-block not-found">
      <div className="container">
        <div className="not-found__inner">
          <div className="not-found__thumb object-cover thumb-md">
            <img
              alt=""
              src="https://f.hubspotusercontent40.net/hub/20002096/hubfs/Doris%20500-1-1.png?width=900&height=400&name=Doris%20500-1-1.png"
            />
          </div>

          <p className="f-20">
            Sorry, an internal server error occurred. But have no fear, we're on
            the case!
          </p>
          <Link className="f-22 color-primary" to={"/"}>
            Homepage
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Error;
