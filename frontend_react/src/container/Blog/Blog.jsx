import React, {useState, useEffect} from "react";
import { FiExternalLink } from "react-icons/fi";

import { urlFor, client } from "../../client";
import "./Blog.scss";

const Blog = (props) => {
  const [blog, setBlog] = useState([])
  useEffect(() => {
    const query = '*[_type == "blog"]';

    client.fetch(query).then((data) => {
      setBlog(data);
    });
  }, []);
  
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
              <img src={urlFor(item.imgUrl)} alt={item.title} />
            </div>
            <a href={item.link}>
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
