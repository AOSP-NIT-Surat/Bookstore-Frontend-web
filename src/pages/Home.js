import React, { useState } from "react";
import "../style/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from 'react-bootstrap';

// books data
const books = [
  {
    src: "https://images.penguinrandomhouse.com/cover/9780345803931",
    name: "Anna Karenina",
    price: "₹80",
    author: "by Leo Tolstoy",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Madame_Bovary_1857_%28hi-res%29.jpg",
    name: "Madame Bovary",
    price: "₹140",
    author: "by Gustav Flaubert",
  },
  {
    src: "https://m.media-amazon.com/images/I/51wACYoBFrL.jpg",
    name: "War and Peace",
    price: "₹90",
    author: "by Leo Tolstoy",
  },
  {
    src: "https://www.oberlo.com/media/1603897583-image16-1.jpg?w=1824&fit=max",
    name: "Think and Grow Rich",
    price: "₹100",
    author: "by Steve Harvey",
  },
  {
    src: "https://m.media-amazon.com/images/I/51E7yd+G-cL.jpg",
    name: "The Adventures of Huckleberry Finn",
    price: "₹130",
    author: "by Mark Twain",
  },
  {
    src: "https://kbimages1-a.akamaihd.net/695eb39e-9405-4c4b-8267-302344f0f5f7/1200/1200/False/hamlet-15.jpg",
    name: "Hamlet",
    price: "₹60",
    author: "by William Shakespeare",
  },
  {
    src: "https://images-na.ssl-images-amazon.com/images/I/71FTb9X6wsL.jpg",
    name: "The Great Gatsby",
    price: "₹80",
    author: "by F. Scott Fizgerald",
  },
  {
    src: "https://m.media-amazon.com/images/I/411fuVxxG4L.jpg",
    name: "In Search of Lost Time",
    price: "₹150",
    author: "by Marcel Proust",
  },
  {
    src: "https://www.gutenberg.org/files/145/145-h/images/cover.jpg",
    name: "Middlemarch",
    price: "₹100",
    author: "by George Eliot",
  },
];

// slider images link
const slides_images = [
  {
    src: "https://c1.wallpaperflare.com/preview/207/70/369/library-bookshop-books-antiquariat.jpg",
    number : "First"
  },
  {
    src: "https://wallpaperaccess.com/full/922663.jpg",
    number : "Second"
  },
  {
    
    src: "https://i.guim.co.uk/img/media/77e3e93d6571da3a5d77f74be57e618d5d930430/0_0_2560_1536/master/2560.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=ceefb6a9d3fd5b8e1dad90e40bcba8ad",
    number : "Third"
  },
];

function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="main_homepage">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {slides_images.map((res,index) => {
            return (
              <Carousel.Item>
                <img
                  className="d-block w-100vw"
                  src={res.src}
                  alt={`${res.number} slide`}
                key={index}/>
              </Carousel.Item>
            );
          })}
        </Carousel>
      <div className="books_to_baught">
        <div className="books_to_baught_head">
          <h1>
            <i class="fas fa-book-reader"></i>Books Bestseller
          </h1>
        </div>
        <div className="books_to_baught_books">
          {books.map((res, index) => {
            return (
              <a href="#" key={index} className="book_box">
                <div className="book_box_up">
                  <img src={res.src} />
                </div>
                <div className="book_box_down">
                  <div className="book_name_author">
                    <h3>{res.name}</h3>
                    <a>{res.author}</a>
                  </div>
                  <div className="book_price">
                    <h2>{res.price}</h2>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
