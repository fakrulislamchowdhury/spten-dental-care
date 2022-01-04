import React from 'react';
import './Blog.css';
import blog1 from '../../img/blog/1.jpeg';
import blog2 from '../../img/blog/2.png';
import blog3 from '../../img/blog/3.jpg';
import blog4 from '../../img/blog/4.jpg';
import blog5 from '../../img/blog/5.jpg';
import { Container } from 'react-bootstrap';


const Blog = () => {
    return (
        <Container>
            <div className='blog'>
                <div>
                    <h1>Take a read through our blog to learn about your teeth!</h1>
                    <p>From brushing and flossing techniques, to advice about taking care of your children's teeth and how to manage sensitivity, we cover a range of topics to help maximize your oral health! Let us know your thoughts of send along any questions for future blog posts!</p>
                </div>
                <div>
                    <img className='blog' src={blog1} alt="Img" />
                    <h2>Now Offering IV Sedation</h2>
                    <p>We are excited to now offer IV Sedation options for a wide range of services! Many people suffer from anxiety when it comes to visiting the dentist. We are very…</p>
                    <button type='button' className='btn btn-primary'>Learn More ...</button>
                </div>
                <div>
                    <img className='blog' src={blog2} alt="Img" />
                    <h2>Ever wonder how Dental Fees are charged?</h2>
                    <p>Dental costs in Alberta are the highest in Canada. Our goal is to bring fees more in line with other provinces in the years ahead. In 2018, the Alberta Dental…</p>
                    <button type='button' className='btn btn-primary'>Learn More ...</button>
                </div>
                <div>
                    <img className='blog' src={blog3} alt="Img" />
                    <h2>Do I Really Need to Floss my Teeth?</h2>
                    <p>Each time you visit the dentist, you're probably asked how regularly you floss your teeth. Some may heed the dentist's advice and floss every day; others may avoid pulling out…</p>
                    <button type='button' className='btn btn-primary'>Learn More ...</button>
                </div>
                <div>
                    <img className='blog' src={blog4} alt="Img" />
                    <h2>What Causes Sensitive Teeth?</h2>
                    <p>It's a common occurrence for many people that shot of pain when you bite into your ice cream or take a gulp of cold water. The inevitable wincing that…</p>
                    <button type='button' className='btn btn-primary'>Learn More ...</button>
                </div>
                <div>
                    <img className='blog' src={blog5} alt="Img" />
                    <h2>When Should I Begin Brushing my Baby's Teeth?</h2>
                    <p>They say healthy habits are best created at a young age and when it comes to brushing your teeth, this has never rung more true! Many parents wonder when…</p>
                    <button type='button' className='btn btn-primary'>Learn More ...</button>
                </div>
            </div>
        </Container>
    );
};

export default Blog;