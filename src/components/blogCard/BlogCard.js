import React from "react";
import "./BlogCard.css";

export default function BlogCard({ blog, isDark }) {
  function openUrlInNewTab(url) {
    if (url !== undefined) {
      var win = window.open(url, "_blank");
      win.focus();
    }
  }

  return (
    // <div onClick={() => openUrlInNewTab(blog.url)}>
      <div class={isDark ? "blog-container dark-mode" : "blog-container"}>
        <a
          class={isDark ? "dark-mode blog-card blog-card-shadow" : "blog-card"}
          href={blog.url}
          target="_blank"
        >
          <img src={blog.image} className={'img'}/>

          <h3
           className={isDark ? "small-dark blog-title" : "blog-title"}
           style={{width:'80%'}}
           >
            {blog.title}
          </h3>
          <div style={{display:"inline-block"}}>

          </div>

          <p 
          class={isDark ? "small-dark small" : "small"}
          >
            {blog.description}
          </p>
        </a>
      </div>
    // </div>
  );
}
