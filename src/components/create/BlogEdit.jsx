import React from "react";

const BlogEdit = ({ edit, setEdit, onSave }) => {
  return (
    <div className="edit-container container">
      <input 
        className="input" 
        type="text" 
        value={edit.title} 
        onChange={(e) => setEdit(p => ({ ...p, title: e.target.value }))} 
        placeholder="Title"
      />
      <input 
        className="input" 
        type="number" 
        value={edit.price} 
        onChange={(e) => setEdit(p => ({ ...p, price: e.target.value }))} 
        placeholder="Price"
      />
      <input 
        className="input" 
        type="number" 
        value={edit.oldPrice} 
        onChange={(e) => setEdit(p => ({ ...p, oldPrice: e.target.value }))} 
        placeholder="Old Price"
      />
      <input 
        className="input" 
        type="text" 
        value={edit.description} 
        onChange={(e) => setEdit(p => ({ ...p, description: e.target.value }))} 
        placeholder="Description"
      />
      <input 
        className="input" 
        type="text" 
        value={edit.img} 
        onChange={(e) => setEdit(p => ({ ...p, img: e.target.value }))} 
        placeholder="Image URL"
      />
      <button className="edit__btn" onClick={onSave}>Save</button>
    </div>
  );
};

export default BlogEdit;
