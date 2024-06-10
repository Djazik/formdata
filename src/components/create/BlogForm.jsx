import React from "react";

const BlogForm = ({ onSubmit }) => {
  return (
    <form  className="form" onSubmit={onSubmit}>
      <input className="input" type="text" name="title" placeholder="Title" required />
      <input className="input" type="text" name="price" placeholder="Price" required />
      <input className="input" type="text" name="oldPrice" placeholder="Old Price" required />
      <input className="input" type="text" name="description" placeholder="Description" required />
      <input className="input" type="text" name="img" placeholder="Image URL" required />
      <button className="button">Create</button>
    </form>
  );
};

export default BlogForm;
