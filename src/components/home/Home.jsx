import React from "react";
import homeMockData from "../../data/homeMockData.json";
import Side from "./Side";
import Experience from "./Experience";
import Description from "./Description";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Side data={homeMockData} />
      <div className="content">
        <Description description={homeMockData.description} />
        {homeMockData.experiences.map((exp) => {
          return <Experience experience={exp} />;
        })}
        <Footer />
      </div>
      <ContactForm />
    </>
  );
};

export default Home;
