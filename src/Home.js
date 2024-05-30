import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: "beaty and the beast", body: "lorem ipsum ....", author: "mario", id: 1 },
    {title: "Cindarella and the evil step sister", body: "lorem ipsum ....", author: "Kwame", id: 2 },
    {title: "Princess and the pea", body: "lorem ipsum ....", author: "mario", id: 3 }
  ])

  return ( 
    <div className="Home">
      <BlogList blogs={blogs} title = "Welcome to my app" />
      <BlogList blogs={blogs.filter((blog) => blog.author === "mario")} title = "Mario's blogs" />
    </div>
   );
}
 
export default Home;