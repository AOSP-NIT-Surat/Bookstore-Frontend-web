import React, { useEffect } from "react";
import "../component_css/Home.css";



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
  },
  {
    src: "https://wallpaperaccess.com/full/922663.jpg",
  },
  {
    src: "https://i.guim.co.uk/img/media/77e3e93d6571da3a5d77f74be57e618d5d930430/0_0_2560_1536/master/2560.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=ceefb6a9d3fd5b8e1dad90e40bcba8ad",
  },
];

function Home() {
  useEffect(() => {
    const slide_img = document.querySelectorAll(".slide-img");
    const slide_cont = document.querySelector(".slides");
    const left = document.querySelector(".left");
    const right = document.querySelector(".right");
    const lines = document.querySelector(".lines");
    setInterval(() => {
      if (c >= n_img) {
        s(0);
        c = 0;
      } else {
        s(c);
        c++;
      }
    }, 5000);
    slide_img[0].classList.add("active");

    let n_img = slide_img.length;
    let s_width = 100;
    let c = 0;
    function fix() {
      slide_img.forEach((img, i) => {
        img.style.left = i * 100 + "%";
      });

      // slide_img[0].classList.add("active");
    }
    fix();
    create_lines();

    function create_lines() {
      for (let i = 0; i < n_img; i++) {
        const li = document.createElement("div");
        li.classList.add("li");
        lines.appendChild(li);

        li.addEventListener("click", () => {
          s(i);
        });
      }
      lines.children[0].classList.add("active");
    }
    right.addEventListener("click", () => {
      if (c >= n_img - 1) {
        s(0);
        return;
      }
      c++;
      s(c);
    });
    left.addEventListener("click", () => {
      if (c <= 0) {
        s(n_img - 1);
        return;
      }
      c--;
      s(c);
    });
    function s(e) {
      slide_cont.style.transform = "translateX(-" + s_width * e + "%)";
      c = e;
      setactive(c);
    }

    function setactive(c) {
      let current = document.querySelector(".slide-img.active");
      current.classList.remove("active");
      slide_img[c].classList.add("active");

      let liss = document.querySelector(".li.active");
      liss.classList.remove("active");
      lines.children[c].classList.add("active");
    }
  }, []);

  return (
    <div className="main_homepage">
      <h1>Navbar</h1>
      <div class="img_slider">
        <div class="slider">
          <div class="left">
            <i class="fas fa-chevron-left"></i>
          </div>

          <div class="slides">
            {slides_images.map((res, index) => {
              return (
                <div className="slide-img">
                  <img src={res.src} alt="Loading" />
                </div>
              );
            })}
          </div>
          <div class="right">
            <i class="fas fa-chevron-right"></i>
          </div>
        </div>
        <div class="lines"></div>
      </div>
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
