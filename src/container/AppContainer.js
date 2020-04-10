import React from "react";
import App from "../app/App";
import {NewsFeed} from '../utils/db';

const AppContainer = () => {
  const db = NewsFeed();
  db.transaction('rw', db.agenyfeeds, async () => {
    if ((await db.agenyfeeds.count()) === 0) {
      await db.agenyfeeds.bulkAdd([
        {
          agency_feed_url: 'https://www.hindustantimes.com/rss/sports/rssfeed.xml',
          agency_name: "Hindustan Times",
          category: 1,
        },
        {
          agency_feed_url: 'https://www.hindustantimes.com/rss/education/rssfeed.xml',
          agency_name: "Hindustan Times",
          category: 2,
        },
        {
          agency_feed_url: 'https://www.hindustantimes.com/rss/business/rssfeed.xml',
          agency_name: "Hindustan Times",
          category: 3,
        },
        {
          agency_feed_url: 'https://timesofindia.indiatimes.com/rssfeeds/4719148.cms',
          agency_name: "Times Of India",
          category: 1,
        },
        {
          agency_feed_url: 'https://timesofindia.indiatimes.com/rssfeeds/1898055.cms',
          agency_name: "Times Of India",
          category: 3,
        },
        {
          agency_feed_url: 'https://www.hindustantimes.com/rss/sports/rssfeed.xml',
          agency_name: "Times Of India",
          category: 2,
        },
      ]);
    }
  }).catch((e) => {
    console.log(e);
    // alert(e.stack || e);
  });
  return (
    <App />
  );
};
export default AppContainer;
