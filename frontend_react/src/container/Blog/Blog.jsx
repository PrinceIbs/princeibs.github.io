import React from "react";
import { FiExternalLink } from "react-icons/fi";

import { images } from "../../constants";
import "./Blog.scss";

const blog = [
  {
    title: "Working with GridBag layout in Java",
    url: "https://google.com",
    imgUrl: images.javascript,
  },
  {
    title: "Learning roadmap for backend engineers",
    url: "https://google.com",
    imgUrl: images.cover,
  },
  {
    title: "How to get started as a DevOps Engineer",
    url: "https://google.com",
    imgUrl: images.javascript,
  },
  {
    title: "Learning roadmap for backend engineers",
    url: "https://google.com",
    imgUrl: images.cover,
  },
  {
    title: "How to get started as a DevOps Engineer",
    url: "https://google.com",
    imgUrl: images.javascript,
  },
];

const Blog = (props) => {
  return (
    <div
      id="blog"
      className={`app__blog ${props.themeMode}`}
      onClick={() => props.setIsNavOpen(false)}
    >
      <h2 className="head-text">my recent blogs</h2>

      <div className="app__blog-items">
        {blog.map((item, index) => (
          <div className="app__blog-item" key={index}>
            <div className="img">
              <img src={item.imgUrl} alt={item.title} />
            </div>
            <a href={item.url}>
              <FiExternalLink />
            </a>
            <div className="title bold-text">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
