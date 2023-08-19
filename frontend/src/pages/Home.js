import "./styles.css";
import Navbar from "./Components/Nav";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}