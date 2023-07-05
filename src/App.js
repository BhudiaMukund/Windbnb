import "./App.css";
import data from "./stays.json";
import Header from "./components/Header/Header";
import Stays from "./components/Stays/Stays";
import Modal from "./components/Modal/Modal";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";

function App() {
  const [filteredData, setFilteredData] = useState(data);
  const [filter, setFilter] = useState({ location: "", guests: 0 });
  const [footer, setFooter] = useState(true);
  const [footerOverride, setFooterOverride] = useState(false);
  useEffect(() => {
    if (footer) {
      document.querySelector("footer").classList.add("active");
    } else {
      document.querySelector("footer").classList.remove("active");
    }
    if (footerOverride) {
      document.querySelector("footer").classList.remove("active");
    }
  }, [footer, footerOverride]);
  const showModal = () => {
    document.body.style.maxHeight = "100vh";
    document.body.style.overflow = "hidden";
    document.querySelector("nav").style.display = "block";
  };

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollableHeight = documentHeight - windowHeight;
      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition >= scrollableHeight) {
        setFooter(false);
      } else {
        setFooter(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header showModal={showModal} filter={filter} />
      <Stays filteredData={filteredData} />
      <Modal
        setFilter={setFilter}
        json={data}
        setFilteredData={setFilteredData}
      />
      <Footer setFooterOverride={setFooterOverride} />
    </div>
  );
}

export default App;
