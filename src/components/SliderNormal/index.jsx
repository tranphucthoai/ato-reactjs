import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React, { forwardRef, useImperativeHandle, useRef } from "react";
import OwlCarousel from "react-owl-carousel";
import PostHorizontalSm from "../PostHorizontalSm";

function SliderNormal(props, ref) {
  const { data } = props;
  const owlCarouselRef = useRef();
  useImperativeHandle(ref, () => ({
    prev() {
      owlCarouselRef.current.prev();
    },
    next() {
      owlCarouselRef.current.next();
    },
  }));
  const options = {
    nav: false,
    loop: true,
    dots: false,
    smartSpeed: 600,
    autoWidth: false,
    responsive: {
      0: {
        autoWidth: false,
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
      },
      680: {
        autoWidth: true,
        dots: false,
      },
    },
  };

  return (
    <>
      {data.length > 0 && (
        <OwlCarousel
          ref={owlCarouselRef}
          {...options}
          className="owl-carousel owl-theme js-carousel-3i-center owl-dot-normal"
        >
          {data?.map((dataItem, index) => (
            <div key={dataItem?.dataId || index} className="item">
              <PostHorizontalSm data={dataItem} />
            </div>
          ))}
        </OwlCarousel>
      )}
    </>
  );
}

export default forwardRef(SliderNormal);
