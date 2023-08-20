import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TeacherProfile from "./pages/Teacher";
import "./index.css";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import SearchPage from "./pages/SearchPage";
import LoginSignupPage from "./pages/Signup";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          {/* <Route path="/teacher" element={<Teacher />}></Route> */}
          <Route path="/search" element={<SearchPage />}/>
          <Route path="/teacher/:teacherId" element={<TeacherProfile />}/>
          <Route path="/register" element={<LoginSignupPage />}/>
          {/* <Route path="/contact" element={<Contact />}></Route> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;