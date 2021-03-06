import DOMPurify from "dompurify";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { authorApi, postsApi } from "../../../api";
import { BackTop, PostVerticalFullWidth, PreLoad } from "../../../components";
import {
  AuthorVerticel,
  PostsNavigation,
  PostsRelative,
  SocialVertical,
} from "../components";

function SinglePage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});
  const [author, setAuthor] = useState({});
  const [postRelative, setPostRelative] = useState([]);
  const { id } = useParams();

  let uid;

  if (id) {
    uid = id;
  } else {
    uid = posts[0]?.id;
  }

  useEffect(() => {
    (async () => {
      try {
        const res = await postsApi.getAll();
        setPosts(res);
      } catch (error) {
        console.log("Failed to fetch data api", error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const res = await postsApi.get(uid.replace(":", ""));
        setPost(res);
      } catch (error) {
        console.log("Failed to fetch posts api", error);
      }
    })();
  }, [uid]);

  useEffect(() => {
    (async () => {
      try {
        const res = await authorApi.get(post.authorId);
        setAuthor(res);
      } catch (error) {
        console.log("Failed to fetch author api", error);
      }
      setLoading(false);
    })();
  }, [post]);

  useEffect(() => {
    const getRandomPosts = (arr, itemCount) => {
      let arrNew = [];
      const arrOld = [...arr];
      for (let index = 0; index < itemCount; index++) {
        const numberRandom = Math.floor(Math.random() * arrOld.length);
        arrNew.push(arrOld[numberRandom]);
        arrOld.splice(numberRandom, 1);
      }
      return arrNew;
    };

    setPostRelative([...getRandomPosts(posts, 3)]);
  }, [uid, posts]);

  const getNavPosts = (arr, id) => {
    const arrOld = [...arr];
    const result = {
      prev: {},
      next: {},
    };

    const indexId = arrOld.findIndex((item) => item.id === id);

    if (indexId >= 0) {
      const indexPrev = indexId - 1 < 0 ? -1 : indexId - 1;
      const indexNext = indexId + 1 >= arrOld.length ? -1 : indexId + 1;
      if (indexPrev !== -1) {
        result.prev = arrOld[indexPrev];
      }
      if (indexNext !== -1) {
        result.next = arrOld[indexNext];
      }
    }
    return result;
  };

  const dataPostNavigation = getNavPosts(posts, uid?.replace(":", ""));

  const htmlClear = DOMPurify.sanitize(post.content);

  if (loading) return <PreLoad />;
  return (
    <>
      <section className="single">
        <div className="single-header">
          <PostVerticalFullWidth data={post} disabledLink={true} />
        </div>
        <div className="single-content">
          <div className="container">
            <div className="row">
              <div className="sub-col">
                <AuthorVerticel data={author} />
                <SocialVertical data={post.authorSocial} />
              </div>
              <div className="main-col main-style">
                <div
                  className="main-content"
                  dangerouslySetInnerHTML={{ __html: htmlClear }}
                />
                <PostsNavigation data={dataPostNavigation} />
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="single-footer">
          <PostsRelative data={postRelative} />
        </div>
      </section>
      <BackTop />
    </>
  );
}

export default SinglePage;
