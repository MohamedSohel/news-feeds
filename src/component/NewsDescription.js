import React from "react";

const NewsDescription = ({singleNews}) => {
  return (
    <div className="single-blog-post featured-post">
      <div className="post-thumb">
        <a href="#"><img src={singleNews && singleNews.news_logo} alt="" /></a>
      </div>
      <div className="post-data">
        <a href="#" className="post-catagory">{singleNews && singleNews.category}</a>
        <a href="#" className="post-title">
          <h6>{singleNews && singleNews.news_title}</h6>
        </a>
        <div className="post-meta">
          <p className="post-excerp">{singleNews && singleNews.news_description} </p>
          <div className="d-flex align-items-center">
            <a href="#" className="post-like"><span>392</span></a>
            <a href="#" className="post-comment">
              <span>10</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
};
export default NewsDescription;
