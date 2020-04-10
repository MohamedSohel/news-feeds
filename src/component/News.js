import React, {useState, useRef} from "react";
import PropTypes from 'prop-types';
import {getAllNewsByCategory, getNews} from "../redux/action/NewsAction";
import NewsDescription from "./NewsDescription";
import {Const} from "../app/Constants";
import {changeDateTimeFormat} from "../utils/client";
import Loader from "./comon/Loader";

const News = ({dispatch, allNews, allFeeds}) => {
  const [singleNews, setSingleNews] = useState({});
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [loader, setLoader] = useState(true);
  const myRef = useRef(null);
  /**
   * Call action to get all region groups to show in filter
   * @type {Function}
   */
  const getAllNews = React.useCallback(async (feeds) => {
    try {
      const res = await getNews(dispatch, feeds);
      if (res) {
        setLoader(false);
      }
    } catch (e) {
      setLoader(false);
      console.log(e);
    }
  }, [dispatch]);

  const getNewsByCategory = React.useCallback(async (requestParam) => {
    try {
      await getAllNewsByCategory(dispatch, requestParam);
    } catch (e) {
      console.log(e);
    }
  }, [dispatch]);
  const getCategoryByID = (categoryID) => Const.categories.map((category) => {
    if (category.id === categoryID) {
      return category.name;
    }
  });
  const handleChange = async (e) => {
    const id = parseInt(e.target.name, 10);
    const category = [...selectedCategory];
    // check if id exist in array
    if (category.includes(id)) {
      // delete element in array
      category.splice(category.indexOf(id), 1);
    } else {
      category.push(id);
    }
    await setSelectedCategory(category);
    getNewsByCategory(category);
  };
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
  /* const handlePagination = () => {
   getNewsByCategory(selectedCategory, page);
   page += 1;
 }; */
  // Add lazy loading
  /*  React.useEffect(() => {
    myRef.current.addEventListener("scroll", e => {
      if (myRef.current.scrollTop + myRef.current.clientHeight >= myRef.current.scrollHeight) {
        handlePagination();
      }
    });
  }, [handlePagination]); */
  return (
    <>

    <div className="featured-post-area  section-padding-80-50">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3">
            <div className="section-heading mb-u">
              <h6>Category </h6>
            </div>
            <div className="popular-news-widget">
              {Const.categories.map((category) => (
                <div className="single-popular-post" key={category.id}>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="materialChecked"
                      onChange={handleChange}
                      name={category.id}
                      checked={selectedCategory.includes(parseInt(category.id, 10))}
                    />
                    <label className="form-check-label" htmlFor="materialChecked">{category.name}</label>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-9">
            <div className="section-heading">
              <h6>Popular News</h6>
            </div>
            {loader ? (
              <Loader isLoading />
            ) : (
              <div className="row">
                <div className="col-12 col-lg-7">
                  <NewsDescription singleNews={singleNews} getByCategoryID={getCategoryByID} />
                </div>
                <div className="col-12 col-lg-5 height-600" ref={myRef}>
                  {allNews && allNews.map((news) => (
                    <div className="single-blog-post small-featured-post d-flex" key={news.news_id}>
                      <div className="post-thumb">
                        <span><img src={news.news_logo} alt="" /></span>
                      </div>
                      <div className="post-data">
                        <span className="post-catagory">{getCategoryByID(news.category)}</span>
                        <div className="post-meta">
                        <span className="post-title" onClick={() => { setSingleNews(news); }} aria-hidden="true">
                          <h6>{news.news_title}</h6>
                        </span>
                          <p className="post-date">
                            <span>{changeDateTimeFormat(news.news_publish_date_time, 'hh:mm A | MMMM DD')}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
News.propTypes = {
  dispatch: PropTypes.func.isRequired,
  allNews: PropTypes.arrayOf(PropTypes.any).isRequired,
  allFeeds: PropTypes.arrayOf(PropTypes.any).isRequired,
};
export default News;
