import React from "react";
import "./Work.css";
import { WorksItems } from "./WorksItems";
const Work = () => {
  return (
    <section className="work_section">
      <h1 className="work_title section_title">Things I've Made</h1>
      <div className="work_cards_container">
        {WorksItems.map((work, index) => (
          <WorkCard
            name={work.name}
            utilized={work.utilized}
            desc={work.description}
            links={work.links}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

const WorkCard = ({ name, utilized, desc, links }) => {
  return (
    <div className="workcard-container">
      <div className="project_header">
        <h1>{name}</h1>
        <div className="project_links">
          {links.map((link, index) => (
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
      </div>
      <div className="workcard_details">
        <p>{desc}</p>
        <div className="utilized-container">
          {utilized.map((name, idx) => (
            <h3 key={idx}>{name}</h3>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
