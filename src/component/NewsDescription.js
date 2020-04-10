import React from "react";
import PropTypes from 'prop-types';

const NewsDescription = ({singleNews, getByCategoryID}) => (
  <div className="single-blog-post featured-post">
    <div className="post-thumb">
      <span><img src={singleNews && singleNews.news_logo} alt="" /></span>
    </div>
    <div className="post-data">
      <span className="post-catagory">{singleNews && getByCategoryID(singleNews.category)}</span>
      <a href={singleNews && singleNews.news_link} className="post-title">
        <h6>{singleNews && singleNews.news_title}</h6>
      </a>
      <div className="post-meta">
        <p className="post-excerp">
          {singleNews && singleNews.news_description}
        </p>
        <div className="d-flex align-items-center">
          <span className="post-like"><span>392</span></span>
        </div>
      </div>
    </div>
  </div>
);
NewsDescription.propTypes = {
  singleNews: PropTypes.objectOf(PropTypes.any),
  getByCategoryID: PropTypes.func.isRequired,
};
NewsDescription.defaultProps = {
  singleNews: {},
};
export default NewsDescription;
