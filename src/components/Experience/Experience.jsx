import React, { useState } from 'react'
import { useEffect } from 'react';
import './Experience.css'
import { ExperienceItems } from './ExperienceItems';

const Experience = (props) => {

	const [activeTab, setActiveTab] = useState(0);
	const [tabsData, setTabsData] = useState(0);

	useEffect(() => {
		console.log(activeTab);
		console.log(ExperienceItems[activeTab]);
	}, [activeTab])
	

  return (
    <section className="experience-section">
      <div className="experience-title">
        <h3>Experience</h3>
        <div className="experience-line"></div>
      </div>

      <div className="experience-container">
        <ul className="tabs-container">
          {ExperienceItems.map((experience, idx) => (
            <li className={`tab-item ${idx === activeTab ? "active" : ""}`} onClick={()=>setActiveTab(idx)}key={idx}>
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
      <div className="tab-heading">
        <h3>
          {tab.role} <span>@ {tab.company}</span>
        </h3>
        <p>
          {tab.start} - {tab.end}
        </p>
      </div>
      <ul>
        {tab.detail.map((detail, idx) => (
          <li>
            <img src="assets/bullet-point.svg" alt="bullet point" />
            <p>{detail}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Experience