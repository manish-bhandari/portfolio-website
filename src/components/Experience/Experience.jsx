import React, { useState } from 'react'
import './Experience.css'
import { ExperienceItems } from './ExperienceItems';

const Experience = () => {

	const [activeTab, setActiveTab] = useState(0);
  return (
    <section
      className="experience_section"
      id="experience"
      data-aos="fade-up"
    >
      <h3 className="experience_title section_title">Experience</h3>
      <div className="experience_container">
        <ul className="tabs-container">
          {ExperienceItems.map((experience, idx) => (
            <li
              className={`tab-item ${idx === activeTab ? "active" : ""}`}
              onClick={() => setActiveTab(idx)}
              key={idx}
            >
              {experience.company}
            </li>
          ))}
        </ul>
        <TabContent tab={ExperienceItems[activeTab]} />
      </div>
    </section>
  );
}

const TabContent = ({tab}) =>{
	return (
    <div className="tab-content-container">
      <div className="tab_heading">
        <h3>
          {tab.role} <span>@ {tab.company}</span>
        </h3>
        <p>
          {tab.start} - {tab.end}
        </p>
      </div>
      <ul>
        {tab.detail.map((detail, idx) => (
          <li className="content_detail" key={idx}>
            <img src="assets/bullet-point.svg" alt="bullet point" />
            <p>{detail}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Experience