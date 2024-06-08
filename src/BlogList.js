const BlogList = ({ blogs, title,handeleDelete }) => {

  return ( 
    <div className="BlogList">
      <h1> {title} </h1>

      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
          <button className="delete-button" onClick={() => handeleDelete(blog.id)}>Delete</button>
      
        </div>
      ))}
    </div>
   );
}
 
export default BlogList;