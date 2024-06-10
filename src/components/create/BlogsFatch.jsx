// import React, { useEffect, useState } from "react";

// const API_URL = "http://localhost:4000/blogs";

// const BlogsFatch = () => {
//   const [data, setData] = useState(null);
//   const [reload, setReload] = useState(true);
//   const [edit, setEdit] = useState(null);

//   useEffect(() => {
//     fetch(API_URL)
//       .then((res) => res.json())
//       .then((res) => setData(res));
//   }, [reload]);

//   const handleCreateBlog = (e) => {
//     e.preventDefault();
//     let formData = new FormData(e.target);
//     let blog = Object.fromEntries(formData.entries());

//     fetch(API_URL, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//       },
//       body: JSON.stringify(blog)
//     })
//       .then(res => res.json())
//       .then(res => {
//         setReload(p => !p);
//         e.target.reset();
//       });
//   };

//   const handleDeleteBlog = id => {
//     fetch(`${API_URL}/${id}`, {
//       method: "DELETE"
//     })
//       .then(res => res.json())
//       .then(res => {
//         setReload(p => !p);
//       });
//   };

//   const handleUpdateBlog = () => {
//     fetch(`${API_URL}/${edit.id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//       },
//       body: JSON.stringify(edit)
//     })
//       .then(res => res.json())
//       .then(res => {
//         setReload(p => !p);
//         setEdit(null);
//       });
//   };

//   return (
//     <div>
//       <h2>BlogsFatch</h2>
//       <form onSubmit={handleCreateBlog}>
//         <input type="text" name="title" placeholder="Title" required />
//         <input type="text" name="price" placeholder="Price" required />
//         <input type="text" name="oldPrice" placeholder="Old Price" required />
//         <input type="text" name="description" placeholder="Description" required />
//         <button>Create</button>
//       </form>
//       {edit ? (
//         <div>
//           <input 
//             type="text" 
//             value={edit.title} 
//             onChange={(e) => setEdit(p => ({ ...p, title: e.target.value }))} 
//             placeholder="Title"
//           />
//           <input 
//             type="number" 
//             value={edit.price} 
//             onChange={(e) => setEdit(p => ({ ...p, price: e.target.value }))} 
//             placeholder="Price"
//           />
//           <input 
//             type="number" 
//             value={edit.oldPrice} 
//             onChange={(e) => setEdit(p => ({ ...p, oldPrice: e.target.value }))} 
//             placeholder="Old Price"
//           />
//           <input 
//             type="text" 
//             value={edit.description} 
//             onChange={(e) => setEdit(p => ({ ...p, description: e.target.value }))} 
//             placeholder="Description"
//           />
//           <input 
//             type="text" 
//             value={edit.img} 
//             onChange={(e) => setEdit(p => ({ ...p, img: e.target.value }))} 
//             placeholder="Image URL"
//           />
//           <button onClick={handleUpdateBlog}>Save</button>
//         </div>
//       ) : (
//         <></>
//       )}
//       {data?.map((blog) => (
//         <div key={blog.id}>
//           <h3>{blog.title}</h3>
//           <p>Price: {blog.price}</p>
//           <p>Old Price: {blog.oldPrice}</p>
//           <p>Description: {blog.description}</p>
//           <button onClick={() => handleDeleteBlog(blog.id)}>Delete</button>
//           <button onClick={() => setEdit(blog)}>Edit</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BlogsFatch;




import React, { useEffect, useState } from "react";
import BlogForm from "./BlogForm";
import BlogList from "./BlogList";
import BlogEdit from "./BlogEdit";

const API_URL = "http://localhost:4000/blogs";

const BlogsFatch = () => {
  const [data, setData] = useState(null);
  const [reload, setReload] = useState(true);
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [reload]);

  const handleCreateBlog = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let blog = Object.fromEntries(formData.entries());

    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(blog)
    })
      .then(res => res.json())
      .then(res => {
        setReload(p => !p);
        e.target.reset();
      });
  };

  const handleDeleteBlog = id => {
    fetch(`${API_URL}/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(res => {
        setReload(p => !p);
      });
  };

  const handleUpdateBlog = () => {
    fetch(`${API_URL}/${edit.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(edit)
    })
      .then(res => res.json())
      .then(res => {
        setReload(p => !p);
        setEdit(null);
      });
  };

  return (
    <div className="container">
      <h2 className="title">BlogsFatch</h2>
      <BlogForm onSubmit={handleCreateBlog} />
      {edit && <BlogEdit edit={edit} setEdit={setEdit} onSave={handleUpdateBlog} />}
      <BlogList data={data} onDelete={handleDeleteBlog} onEdit={setEdit} />
    </div>
  );
};

export default BlogsFatch;
