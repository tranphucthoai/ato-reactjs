import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="section-block not-found">
      <div className="container">
        <div className="not-found__inner">
          <div className="not-found__thumb object-cover thumb-md">
            <img
              alt=""
              src="https://f.hubspotusercontent40.net/hub/20002096/hubfs/page-404-1.jpg?width=900&height=400&name=page-404-1.jpg"
            />
          </div>

          <p className="f-20">
            Come back, you're wandering too far! <br /> We couldn't find the
            page you're looking for. Try searching or go back to the
          </p>
          <Link className="f-22 color-primary" to={"/"}>
            Homepage
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
