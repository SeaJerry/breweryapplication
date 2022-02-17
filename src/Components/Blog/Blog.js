import { BlogCardData } from "./BlogCardData";
import "./Blog.css";

import React from "react";

const Blog = ({ BlogCardData }) => {
  const blogCards = BlogCardData.map((card, index) => {
    return (
      <div className="layout-container" key={index}>
        <div className="blog-cards-container">
          <img className="blog-cards-image" src={card.url} alt="blog cards" />
          <h1 className="blog-title">{card.title}</h1>
          <p className="blog-text">{card.body}</p>
          <button className="blog-btn">View More</button>
        </div>
      </div>
    );
  });

  return <div className="blog-layout">{blogCards}</div>;
};

export default Blog;
