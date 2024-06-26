import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Navbar from './components/Navbar';
import Sidebar from './components/Sidenav';
import BookListp from './components/BookList';
import Footer from './components/Footer';
import About from './components/About';
import Registration from './components/Registration';
import Cart from './components/Cart';

function App() {

  const books = [
    {
      id: 1,
      name: "Fourth Wing",
      author: "Rebecca Yaros",
      image: "https://i.ibb.co/znR9X99/book.jpg",
      price: "$499",
      quantity: 0
    },
    {
      id: 2,
      name: "A Tale of 2 Cities",
      author: "Charles Dickens",
      image: "https://i.ibb.co/b7YCryj/book1.jpg",
      price: "$599",
      quantity: 2
    },
    {
      id: 3,
      name: "Harry Potter",
      author: "JK Rowling",
      image: "https://i.ibb.co/w0Kf6gW/book2.jpg",
      price: "$699",
      quantity: 3
    },
    {
      id: 4,
      name: "Lord of the Rings",
      author: "J.R.R Toklien",
      image: "https://i.ibb.co/XLBtwTL/book3.jpg",
      price: "$399",
      quantity: 4
    },
    {
      id: 5,
      name: "Obssesed",
      author: "James Patternson",
      image: "https://i.ibb.co/6srYGmj/book4.webp",
      price: "$649",
      quantity: 0
    },
    {
      id: 6,
      name: "It starts with us",
      author: "Collen Hoover",
      image: "https://i.ibb.co/FqxS8wv/book5.jpg",
      price: "$749",
      quantity: 0
    }
  ];
  const [bookState, setBookState] = useState(books);
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Sidebar />
          <Navbar />

          <Routes>
            <Route>
              <Route path='/' exact element={<BookListp bookState={bookState} setBookState={setBookState} />} />
              <Route path='/about' exact element={<About />} />
              <Route path='/contact-us' exact element={<Registration />} />
              <Route path='/cart' exact element={<Cart bookState={bookState} setBookState={setBookState} />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
