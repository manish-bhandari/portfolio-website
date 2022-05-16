import React from "react";
import "./Work.css";
import { WorksItems } from "./WorksItems";
const Work = () => {
  return (
    <section className="work_section">
      <h1 className="work_title section_title">Things I've Made</h1>
      <div className="work_cards_container">
        {WorksItems.map((work) => (
          <WorkCard
            name={work.name}
            utilized={work.utilized}
            desc={work.description}
          />
        ))}
      </div>
    </section>
  );
};

const WorkCard = ({ name, utilized, desc }) => {
  return (
    <div className="workcard-container">
      <h1>{name}</h1>
      <div className="workcard_details">
        <p>{desc}</p>
        <div className="utilized-container">
          {utilized.map((name) => (
            <h3>{name}</h3>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
