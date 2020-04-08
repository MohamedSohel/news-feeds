import React from "react";

const News = () => {
  return(
    <div className="featured-post-area  section-padding-80-50">
      <div className="container">
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
                <div className="single-blog-post featured-post">
                  <div className="post-thumb">
                    <a href="#"><img src="img/bg-img/16.jpg" alt="" /></a>
                  </div>
                  <div className="post-data">
                    <a href="#" className="post-catagory">Finance</a>
                    <a href="#" className="post-title">
                      <h6>Financial news: A new company is born today at the stock market</h6>
                    </a>
                    <div className="post-meta">
                      <p className="post-author">By <a href="#">Christinne Williams</a></p>
                      <p className="post-excerp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu metus
                        sit amet odio sodales placerat. Sed varius leo ac leo fermentum, eu cursus nunc maximus. Integer
                        convallis nisi nibh, et ornare neque ullamcorper ac. Nam id congue lectus, a venenatis massa.
                        Maecenas justo libero, vulputate vel nunc id, blandit feugiat sem. </p>
                      <div className="d-flex align-items-center">
                        <a href="#" className="post-like"><span>392</span></a>
                        <a href="#" className="post-comment">
                          <span>10</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-5">
                <div className="single-blog-post small-featured-post d-flex">
                  <div className="post-thumb">
                    <a href="#"><img src="img/bg-img/19.jpg" alt="" /></a>
                  </div>
                  <div className="post-data">
                    <a href="#" className="post-catagory">Finance</a>
                    <div className="post-meta">
                      <a href="#" className="post-title">
                        <h6>Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.</h6>
                      </a>
                      <p className="post-date"><span>7:00 AM</span> | <span>April 14</span></p>
                    </div>
                  </div>
                </div>
                <div className="single-blog-post small-featured-post d-flex">
                  <div className="post-thumb">
                    <a href="#"><img src="img/bg-img/20.jpg" alt="" /></a>
                  </div>
                  <div className="post-data">
                    <a href="#" className="post-catagory">Politics</a>
                    <div className="post-meta">
                      <a href="#" className="post-title">
                        <h6>Sed a elit euismod augue semper congue sit amet ac sapien.</h6>
                      </a>
                      <p className="post-date"><span>7:00 AM</span> | <span>April 14</span></p>
                    </div>
                  </div>
                </div>
                <div className="single-blog-post small-featured-post d-flex">
                  <div className="post-thumb">
                    <a href="#"><img src="img/bg-img/21.jpg" alt="" /></a>
                  </div>
                  <div className="post-data">
                    <a href="#" className="post-catagory">Health</a>
                    <div className="post-meta">
                      <a href="#" className="post-title">
                        <h6>Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.</h6>
                      </a>
                      <p className="post-date"><span>7:00 AM</span> | <span>April 14</span></p>
                    </div>
                  </div>
                </div>
                <div className="single-blog-post small-featured-post d-flex">
                  <div className="post-thumb">
                    <a href="#"><img src="img/bg-img/22.jpg" alt="" /></a>
                  </div>
                  <div className="post-data">
                    <a href="#" className="post-catagory">Finance</a>
                    <div className="post-meta">
                      <a href="#" className="post-title">
                        <h6>Augue semper congue sit amet ac sapien. Fusce consequat.</h6>
                      </a>
                      <p className="post-date"><span>7:00 AM</span> | <span>April 14</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default News;
