import React from "react";

import Section from "../shared/section";
import Blog1 from "../../images/blogs/blog-thumb-1.jpg";
import Blog2 from "../../images/blogs/blog-thumb-2.jpg";
import Blog3 from "../../images/blogs/blog-thumb-3.jpg";
import BlogCard from "./blog-card";

import "./style.scss";

const Blogs = () => {
    return (
        <Section
            id="blogs"
            title="Blogs & Articles"
            background="dark"
        >
            <div className="blogs-content-wrapper">
                <BlogCard
                    user="John Doe"
                    date="apr 19 2024"
                    image={Blog1}
                    title="Quis Autem Vea Eum Iure Reprehendrit"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />
                <BlogCard
                    user="John Doe"
                    date="apr 19 2024"
                    image={Blog2}
                    title="Quis Autem Vea Eum Iure Reprehendrit"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />
                <BlogCard
                    user="John Doe"
                    date="apr 19 2024"
                    image={Blog3}
                    title="Quis Autem Vea Eum Iure Reprehendrit"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />
            </div>
        </Section>
    );
};

export default Blogs;

// npm i emailjs-com react-hook-form react-toastify
