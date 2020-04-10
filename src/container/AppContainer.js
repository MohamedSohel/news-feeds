import React from "react";
import App from "../app/App";
import {NewsFeed} from '../utils/db';

const AppContainer = () => {
  const db = NewsFeed();
  db.transaction('rw', db.agenyfeeds, async () => {
    if ((await db.agenyfeeds.count()) === 0) {
      await db.agenyfeeds.bulkAdd([
        {
          agency_feed_url: 'https://timesofindia.indiatimes.com/rssfeeds/4719148.cms',
          agency_name: "Times Of India",
          category: 'Sports',
        },
        {
          agency_feed_url: 'https://www.hindustantimes.com/rss/sports/rssfeed.xml',
          agency_name: "Hindustan Times",
          category: 'Sports',
        },
        {
          agency_feed_url: 'https://www.hindustantimes.com/rss/sports/rssfeed.xml',
          agency_name: "timesofIndia",
          category: 'Education',
        },
      ]);
    }

    // Make sure we have something in DB:
    /* if ((await db.friends.where('agency_feed_url').equals('Josephine').count()) === 0) {
      let id = await db.friends.add({name: "Josephine", age: 21});
    } */

    // Query:
    const youngFriends = await db.agenyfeeds.toArray();

    // Show result:
    // alert ("My young friends: " + JSON.stringify(youngFriends));
  }).catch((e) => {
    console.log(e);
    // alert(e.stack || e);
  });
  return (
    <App />
  );
};
export default AppContainer;
