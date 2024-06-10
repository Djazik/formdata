import React from "react";

const BlogList = ({ data, onDelete, onEdit }) => {
  return (
    <div className="blog-container container">
      {data?.map((blog) => (
        <div className="blog-item" key={blog.id}>
          <h3 className="blog-title">{blog.title}</h3>
          <p className="blog-price">Price: {blog.price}</p>
          <p className="blog-old-price">Old Price: {blog.oldPrice}</p>
          <p className="blog-description">Description: {blog.description}</p>
          <div className="blog-buttons">
            <button className="blog-button delete" onClick={() => onDelete(blog.id)}>Delete</button>
            <button className="blog-button edit" onClick={() => onEdit(blog)}>Edit</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
