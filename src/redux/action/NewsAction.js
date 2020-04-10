import {SET_ALL_NEWS} from './ActionType';
import NewsService from "../../services/NewsService";
import {GetAllNewsData, News, StoreAllNews} from "../../utils/db";

const setAllNews = (item, category) => ({
  type: SET_ALL_NEWS,
  item,
  category,
});

/**
 * dispatch action after getting success response
 * @param dispatch
 * @param feeds
 * @returns {Promise<boolean>}
 */
export const getNews = async (dispatch, feeds) => {
  try {
    let db = News();
    // start the database transaction
    db.transaction('rw', db.news, async () => {
      // loop through all the feeds
      feeds.map(async (feed) => {
        // Api call to the get the news from different apis
        const allNewsResponse = await NewsService.getAllNews(feed.agency_feed_url);
        if (allNewsResponse.data.status === "ok") {
          StoreAllNews(allNewsResponse.data.items, feed.category);
        }
      });
    }).then(async () => {
      const data = await GetAllNewsData();
      dispatch(setAllNews(data));
    }).catch((e) => {
      console.log(e);
      // alert(e.stack || e);
    });
  } catch (e) {
    throw e.response.data;
  }
  return false;
};
