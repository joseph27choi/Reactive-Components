import { useState, useEffect } from "react";
import BlogList from "./BlogList";

//parent component
const Home = () => {
    const [blogs, setBlogs] = useState(null);

    useEffect(
        () => {
            //can do fetch data
            fetch("http://localhost:8000/blogs")
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    setBlogs(data);
                });
        },
    /* if name changes, it will run useEffect */[]
    );

    //anything in {} is Javascript
    //if we remove or add any info in array, react will update
    return (
        //child component
        <div className="home">
            {/* using Props */}
            {/* conditional templating */}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
        </div>
    );
};

export default Home;
