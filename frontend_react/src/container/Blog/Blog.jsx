import React, { useState, useEffect } from "react";
import { FiExternalLink } from "react-icons/fi";

import { urlFor, client } from "../../client";
import "./Blog.scss";

const Blog = (props) => {
  const [publications, setPublications] = useState([]);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const query = '*[_type == "blog"]';

    client.fetch(query).then((data) => {
      setPublications(data);
      setfilteredBlog(data)
    });

    (async () => {
      const response = await fetch(
        "https://dev.to/api/articles?username=princeibs"
      );
      const data = await response.json();
      setBlogs(data);
    })();
  }, []);

  const [active, setactive] = useState("publications");
  const [filteredBlog, setfilteredBlog] = useState(publications);

  const handleProjectsFilter = (item) => {
    setactive(item);
    setfilteredBlog(item === "publications" ? publications : blogs);
  };

  return (
    
    <div
      id="blog"
      className={`app__blog ${props.themeMode}`}
      onClick={() => props.setIsNavOpen(false)}
    >
      <h2 className="head-text">my recent blogs</h2>

      <div className="app__projects-filter">
        {["personal blogs", "publications"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleProjectsFilter(item)}
            className={`app__projects-filter-item app__flex p-text ${
              active === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <div className="app__blog-items">
        {filteredBlog.map((item, index) => (
          <div className="app__blog-item" key={index}>
            {active === "publications" && <div className="publication">
              <span>{item.publication}</span>
            </div>}
            <div className="img">
              <img
                src={
                  active === "publications"
                    ? urlFor(item.imgUrl)
                    : item.cover_image
                }
                alt={item.title}
              />
            </div>
            <a href={active === "publications" ? item.link : item.url}>
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
