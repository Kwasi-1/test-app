import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: "beaty and the beast", body: "lorem ipsum ....", author: "mario", id: 1 },
    {title: "Cindarella and the evil step sister", body: "lorem ipsum ....", author: "Kwame", id: 2 },
    {title: "Princess and the pea", body: "lorem ipsum ....", author: "mario", id: 3 }
  ])

  const handeleDelete = (id) =>{
    const newBlogs = blogs.filter((blog) => blog.id != id);
    setBlogs(newBlogs);
  }

  const [name, setName] = useState('mario');

  useEffect(() => {
    console.log('use effect ran')
    console.log(name)
  }, [name]);

  return ( 
    <div className="Home">
      <BlogList blogs={blogs} title = "Welcome to my app"   handeleDelete={handeleDelete} />
      <button onClick={() => {if(nae === 'mario'){setName('Luigi')}else{setName('mario')} }}>change name</button>
      <p>{name}</p>
    </div>
   );
}
 
export default Home;