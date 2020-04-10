import React, {useState} from "react";
import {getNews} from "../redux/action/NewsAction";
import NewsDescription from "./NewsDescription";

const News = ({dispatch, allNews, allFeeds}) => {
  const [singleNews, setSingleNews] = useState({});
  /**
   * Call action to get all region groups to show in filter
   * @type {Function}
   */
  const getAllNews = React.useCallback(async (feeds) => {
    try {
      const res = await getNews(dispatch, feeds);
    } catch (e) {
      console.log(e);
    }
  }, [dispatch]);
  /**
   * Call methods get all propeties and customers during page load.
   */
  React.useEffect(() => {
    getAllNews(allFeeds);
  }, [getAllNews, allFeeds]);
  // initialize the singleNews description when all news loaded
  React.useEffect(() => {
    setSingleNews(allNews[0]);
  }, [allNews]);
  return (
    <div className="featured-post-area  section-padding-80-50">
      <div className="container">
        {console.log(allFeeds)}
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3">
            <div className="section-heading mb-u">
              <h6>Category </h6>
            </div>
            <div className="popular-news-widget">
              <div className="single-popular-post">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="materialChecked" />
                    <label className="form-check-label" htmlFor="materialChecked">category 1</label>
                </div>
              </div>
              <div className="single-popular-post">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="materialChecked" />
                  <label className="form-check-label" htmlFor="materialChecked">Category 2</label>
                </div>
              </div>
              <div className="single-popular-post">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="materialChecked" />
                  <label className="form-check-label" htmlFor="materialChecked">category 3</label>
                </div>
              </div>
              <div className="single-popular-post">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="materialChecked" />
                  <label className="form-check-label" htmlFor="materialChecked">Category 4</label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-9">
            <div className="section-heading">
              <h6>Popular News</h6>
            </div>
            <div className="row">
              <div className="col-12 col-lg-7">
                  <NewsDescription singleNews={singleNews} />
              </div>
              <div className="col-12 col-lg-5 height-600">
                {allNews && allNews.map((news) => (
                  <div className="single-blog-post small-featured-post d-flex">
                    <div className="post-thumb">
                      <a href="#"><img src={news.news_logo} alt="" /></a>
                    </div>
                    <div className="post-data">
                      <a href="#" className="post-catagory">{news.category}</a>
                      <div className="post-meta">
                        <a href={news.news_link} className="post-title">
                          <h6>{news.news_title}</h6>
                        </a>
                        <p className="post-date"><span>7:00 AM</span> | <span>April 14</span></p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default News;
