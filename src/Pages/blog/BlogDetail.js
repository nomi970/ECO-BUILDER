import React, { useEffect, useState } from 'react';
import data from "../../Components/data/data.json";
import { useParams } from 'react-router-dom';
import style from "./blog-detail.module.css";

export const BlogDetail = () => {
  const [isActive, setIsAtive] = useState({});
  const { id } = useParams();
  const result = data.data;
  useEffect(() => {
    const blog = result.find(blog => blog.id === parseInt(id))
    setIsAtive(blog);
    document.title = blog.title;
  }, [result, id])
  
  return (
    <>
      <section className='custom-container'>
        <div className={`${style.blog_data} text-center`}>
          <h6>All Plagirism</h6>
          <h1>{isActive.title}</h1>
        </div>
        <div className={style.blog_date_row}>
          <p>{isActive.date}</p>
          <p>{isActive.raedTime} read time</p>
        </div>
        <div className={style.blog_img}>
          <img src={isActive.blogImag} alt='' />
        </div>
        <div className={style.desc}>
          <p>In the ever-evolving landscape of AI technology, generating text has become an increasingly common practice. AI algorithms can create content swiftly, but often the results lack the human touch that readers connect with. This is particularly true in scenarios where AI-generated text needs to resonate with readers, such as marketing copy, storytelling, or user interaction. The challenge lies in making this content sound natural, engaging, and, most importantly, human.</p>
          <p>In this blog, we will delve into a solution that bridges this gap: a system designed to transform AI-generated text into human-like prose. Let's explore how you can use this system to infuse authenticity and relatability into your AI-generated content.</p>
          <h2>Understanding the Need for Human-Like Text</h2>
          <p>AI-generated content, while impressive in its efficiency, often lacks the nuances and emotions that make human-written text compelling. Whether you're writing product descriptions, blog posts, or conversational interfaces, ensuring that the content feels relatable and genuine can significantly impact its effectiveness.</p>
          <ul>
            <li><span>Know Your Audience:</span> Understand who will be reading the content. The language and style you choose should resonate with your target audience.</li>
            <li><span>Balance Clarity and Creativity:</span> While adding a human touch, ensure that the core message and information remain clear and coherent.</li>
            <li><span> Embrace Imperfections:</span> Human language isn't always perfectly polished. Allow for a bit of imperfection to make the text feel more authentic.</li>
            <li><span>Iterate and Refine:</span> The transformation process might require a few iterations to achieve the desired level of humanization. Be patient and willing to refine the text until it meets your standards.</li>
          </ul>
          <div className={style.blog_img}>
            <img src={isActive.blogImag} alt='' />
          </div>
          <h2>Tips for Effective Transformation</h2>
          <ul>
            <li><span>Know Your Audience:</span> Understand who will be reading the content. The language and style you choose should resonate with your target audience.</li>
            <li><span>Balance Clarity and Creativity:</span> While adding a human touch, ensure that the core message and information remain clear and coherent.</li>
            <li><span> Embrace Imperfections:</span> Human language isn't always perfectly polished. Allow for a bit of imperfection to make the text feel more authentic.</li>
            <li><span>Iterate and Refine:</span> The transformation process might require a few iterations to achieve the desired level of humanization. Be patient and willing to refine the text until it meets your standards.</li>
          </ul>
        </div>
      </section>
    </>
  )
}
