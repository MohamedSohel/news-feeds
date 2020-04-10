import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import News from "../component/News";
import {NewsFeed} from "../utils/db";

const NewsContainer = () => {
  const [allFeeds, setAllFeeds] = useState([]);
  // let allFeeds;
  React.useEffect(() => {
    const db = NewsFeed();
    db.transaction('rw', 'agenyfeeds', async () => {
      const feeds = await db.agenyfeeds.toArray();
      setAllFeeds(feeds);
    }).catch((e) => {
      console.log(e);
    });
  }, []);

  const dispatch = useDispatch();
  const allNews = useSelector((state) => state.NewsReducer.allNews);
  return (
    <>
      <News
        dispatch={dispatch}
        allNews={allNews}
        allFeeds={allFeeds}
      />
    </>
  );
};
export default NewsContainer;
