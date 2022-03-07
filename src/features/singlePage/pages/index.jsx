import React, { useEffect, useState } from "react";
import { dataApi } from "../../../api";
import { Footer, Header, PostVerticalFullWidth } from "../../../components";
import { AuthorVerticel, PostsNavigation, SocialVertical } from "../components";

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

  const dataAuthor = {
    thumb:
      "https://f.hubspotusercontent40.net/hubfs/20002096/hannah-skelly-g5A9gO59ERU-unsplash-180x180-2.jpg",
    name: "Ava Isabella",
    time: "2021-06-20T15:40:08.729Z",
  };
  const dataSocial = [
    {
      name: "facebook",
      link: "fb.com",
    },
    {
      name: "twitter",
      link: "twitter.com",
    },
    {
      name: "linked",
      link: "linked.com",
    },
  ];
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
                  <AuthorVerticel data={dataAuthor} />
                  <SocialVertical data={dataSocial} />
                </div>
                <div className="main-col main-style">
                  <div className="main-content">
                    <p>
                      Met to launch on the manufacturer’s new A330neo aircraft
                      in 2017, it’s offering lots of extra space, including
                      wider seats as standard, no control boxes under seats for
                      the in-flight entertainment system, which means it’s all
                      open for you to stretch your legs.
                    </p>
                    <p>
                      The planes will offer improved built-in broadband
                      connectivity that’ll allow passengers to use their phones
                      and tablets as normal, even making calls and sending and
                      receiving text messages.
                    </p>
                    <h3>The overall design</h3>
                    <p>
                      The layout and design of the cabin has been made more
                      modular so each airline can customize the layout of their
                      planes, which should mean wider aisles that aren’t taken
                      over by lavatories and trollies.
                    </p>
                    <img
                      src="https://f.hubspotusercontent40.net/hub/20002096/hubfs/Imported_Blog_Media/6-1024x683-Jul-03-2021-08-06-37-87-AM.jpg?width=1024&height=683&name=6-1024x683-Jul-03-2021-08-06-37-87-AM.jpg"
                      alt=""
                    />
                    <p>
                      The overall design offers more space for you and your
                      luggage, more room to walk around and actually enjoy the
                      surroundings on your journey and not be completely
                      disorientated when you land, thanks to better
                      environmental controls and changeable mood lighting.
                    </p>
                    <h3>Features</h3>
                    <p>
                      Being able to stay connected with the ground below via
                      Wi-Fi and now making calls and texts from 35,000 ft makes
                      flying a less daunting experience for anyone who’s
                      nervous. If it gets a little bumpy or you’re feeling
                      anxious, you can now call your friend for a distraction or
                      get lost on Twitter for a while.
                    </p>
                    <blockquote>
                      <p>
                        I am enough of an artist to draw freely upon my
                        imagination. Imagination is more important than
                        knowledge. Knowledge is limited. Imagination encircles
                        the world.
                      </p>
                      <footer>
                        <cite>Albert Einstein</cite>
                      </footer>
                    </blockquote>
                    <p>
                      The overall design offers more space for you and your
                      luggage, more room to walk around and actually enjoy the
                      surroundings on your journey and not be completely
                      disorientated when you land, thanks to better
                      environmental controls and changeable mood lighting.
                    </p>
                    <p>
                      Being able to stay connected with the ground below via
                      Wi-Fi and now making calls and texts from 35,000 ft makes
                      flying a less daunting experience for anyone who’s
                      nervous. If it gets a little bumpy or you’re feeling
                      anxious, you can now call your friend for a distraction or
                      get lost on Twitter for a while.
                    </p>
                  </div>
                  <PostsNavigation />
                </div>
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
