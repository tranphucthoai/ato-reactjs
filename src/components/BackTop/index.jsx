import React, { useState, useEffect } from "react";
import clsx from "clsx";

BackTop.propTypes = {};

function BackTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const checkScrollHeight = () => {
      if (!showButton && window.pageYOffset > 400) {
        setShowButton(true);
      } else if (showButton && window.pageYOffset <= 400) {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", checkScrollHeight);
    return () => {
      window.removeEventListener("scroll", checkScrollHeight);
    };
  }, [showButton]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      className={clsx("back-top", !showButton && "hide")}
      onClick={scrollToTop}
    >
      <i className="fa fa-angle-up"></i>
    </div>
  );
}

export default BackTop;
