import { useState, useEffect } from "react";
import "./Home.css";
import Side from "./Side";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import { fetchData } from "../../services/api";
import Loading from "../common/Loading";
import Resume from "../resume/Resume";

const Home = () => {
  const [page, setPage] = useState("/");
  const [portfolio, setPortfolio] = useState(null);
  useEffect(() => {
    const getPortfolio = async () => {
      try {
        const portfolioData = await fetchData("/api/portfolio");
        setPortfolio(portfolioData);
      } catch (error) {
        console.error("Failed to fetch portfolio:", error);
      }
    };
    getPortfolio();
  }, []);

  return portfolio ? (
    <>
      <Side data={portfolio} setPage={setPage} />
      <div className="content">
        {page === "/" && <Resume portfolio={portfolio} />}
        {page === "/contact" && <ContactForm />}
        <Footer />
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
