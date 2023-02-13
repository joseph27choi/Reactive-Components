import { useState, useEffect } from "react";
import BlogList from "./BlogList";

//parent component
const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    //0.1 millisecond loading message
    setTimeout(() => {
      //can do fetch data
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
        });
    }, 100);
  }, []);

  //anything in {} is Javascript
  //if we remove or add any info in array, react will update
  return (
    //child component
    <div className="home">
      {/* using Props */}
      {/* conditional templating */}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
