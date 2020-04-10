
import Dexie from 'dexie';

/**
 * initialise feeds database
 * @returns {Dexie}
 * @constructor
 */
const NewsFeed = () => {
  const db = new Dexie('NewsFeed');
  db.version(1).stores({ agenyfeeds: "++id,agency_feed_url,category" });
  return db;
};
/**
 * initialise news database
 * @returns {Dexie}
 * @constructor
 */
const News = () => {
  const db = new Dexie('News');
  db.version(1).stores({news: "++news_id,news_link,news_publish_date_time"});
  return db;
};
/**
 * Store all items to news database
 * @param allNews
 * @param category
 * @returns {Promise<void>}
 * @constructor
 */
const StoreAllNews = (allNews, category) => {
  const db = News();
  // Map and store to database
  allNews.map(async (news) => {
    if ((await db.news.where('news_link').equals(news.link).count()) === 0) {
      await db.news.add(
        {
          news_title: news.title,
          news_description: news.description,
          news_publish_date_time: news.pubDate,
          news_link: news.link,
          news_logo: news.thumbnail ? news.thumbnail : news.enclosure.link,
          click_count: 0,
          category,
        },
      );
    }
  });
};

const GetAllNewsData = async () => {
  const db = News();
  const data = await db.news.toArray();
  return data;
};
export {
  NewsFeed,
  News,
  StoreAllNews,
  GetAllNewsData,
};
