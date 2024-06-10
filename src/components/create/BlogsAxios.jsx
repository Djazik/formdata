import React, { useEffect, useState } from 'react'
import axios from 'axios'

const API_URL = "http://localhost:4000/blogs"

const BlogsAxios = () => {
    const [data, setData] = useState(null);
    const [ reload, setReload] = useState(true)
    const [edit,setEdit] = useState(null)

useEffect(()=>{
    axios
        .get(API_URL)
        .then(res => setData(res.data))
},[reload])

const handleCreateBlog = e =>{
    e.preventDefault()
    let formData = new FormData(e.target)
    let blog = Object.fromEntries(formData.entries())

    axios
    .post(API_URL, blog)
    .then(res => {
        setReload(p => !p)
        e.target.reset()
    })
}

const handleDeleteBlog = id => {
    axios
    .delete(`${API_URL}/${id}`)
    .then(res => {
        setReload(p => !p)
    })
}


const handleUpdateBlog = () => {
    axios
        .put(`${API_URL}/${edit.id}`, edit)
        .then(res => {
            setReload(p => !p);
            setEdit(null); 
        });
};
  return (
    <div>
        <h2>BlogsAxios</h2>
        <form action="" onSubmit={handleCreateBlog}>
            <input type="text"  name='title'/>
            <button>Create</button>
        </form>
        {edit ? <div>
            <input type="text" value={edit.title} onChange={(e)=> setEdit(p=>({...p, title:e.target.value}))} />
            <button onClick={handleUpdateBlog}>save</button>
        </div> : <></>}
         {data?.map((blog) => (
        <div key={blog.id}>
            <p>{blog.title}</p>
            <button onClick={()=>handleDeleteBlog(blog.id)}>delete</button>
            <button onClick={()=> setEdit(blog)}>edit</button>
        </div>
      ))}
    </div>
  )
}

export default BlogsAxios