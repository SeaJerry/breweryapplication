import { BlogCardData } from "./BlogCardData";
import { useState } from "react";
import { MdOutlineArrowLeft, MdOutlineArrowRight } from "react-icons/md";
import "./Blog.css";

import React from "react";

const Blog = ({ BlogCardData }) => {
  const blogCards = BlogCardData.map((card, index) => {
    return (
      <div className="blog-layout">
        <div className="blog-cards-container">
          <img className="blog-cards-image" src={card.url} alt="blog cards" />
          <h1 className="blog-title">{card.title}</h1>
          <p className="blog-text">{card.body}</p>
          <button className="blog-btn">View More</button>
        </div>
      </div>
    );
  });

  return <>{blogCards}</>;
};

export default Blog;

// const Blog = ({ BlogCardData }) => {

//   const blogCards = ()

//   const [current, setCurrent] = useState(0);
//   const length = slides.length;

//   const nextSlide = () => {
//     setCurrent(current === length - 1 ? 0 : current + 1);
//   };

//   const prevSlide = () => {
//     setCurrent(current === 0 ? length - 1 : current - 1);
//   };

//   console.log(current);

//   if (!Array.isArray(slides) || slides.length <= 0) {
//     return null;
//   }
//   return (
//     <div className="blog-container">
//       <section className="slider">
//         <MdOutlineArrowLeft className="left-arrow" onClick={prevSlide} />
//         <MdOutlineArrowRight className="right-arrow" onClick={nextSlide} />
//         {CarouselImageData.map((slide, index) => {
//           return (
//             <div
//               className={index === current ? "active" : "slide"}
//               key={index}
//             >
//               {index === current && (
//                 <img className="images" src={slide.image} alt="breweries" />
//               )}
//             </div>
//           );
//         })}
//         <div className='staff'>
//             <h1>Staff Picks</h1>
//         </div>

//       </section>

//     </div>
//   );
// };
// export default Blog;
