import React, { forwardRef } from "react";
import "./ResumeTemplate.css";

const ResumeTemplate = forwardRef(({ userResume }, ref) => {
  if (!userResume) return null;
  const { firstname, lastname, email, contact, location, github, gender, age, summary, skills, experience, education, projects } = userResume;

  return (
    <div ref={ref} className="resume-template">
      <h1 className="resume-title">
        {firstname} {lastname}
      </h1>
      <div className="resume-contact">
        <span>{gender} | {age}</span> &nbsp;|&nbsp;
        <span>{email}</span> &nbsp;|&nbsp;
        <span>{contact}</span> &nbsp;|&nbsp;
        <span>{location}</span>
        {github && <><br /><span className="resume-link">GitHub: {github}</span></>}
      </div>

      <h2 className="resume-section-title">Summary</h2>
      <p className="resume-summary-text">{summary}</p>

      <h2 className="resume-section-title capitalize">Skills</h2>
      <ul className="resume-list capitalize">
        {skills?.map((s, i) => <li key={i}>{s}</li>)}
      </ul>

      <h2 className="resume-section-title">Experience</h2>
      {experience?.map((exp, i) => (
        <div key={i} className="resume-project">
          <div className="resume-company capitalize">{exp.company}</div>
          <div className="resume-role capitalize">{exp.role}</div>
          <div className="capitalize">{exp.description}</div>
          <div className="resume-duration">{exp.duration}</div>
        </div>
      ))}

      <h2 className="resume-section-title">Education</h2>
      {education?.map((edu, i) => (
        <div key={i} className="resume-edu">
          <div>
            <span className="resume-company capitalize">{edu.degree}</span> — {edu.institution} <span className="resume-duration">({edu.year})</span>
          </div>
        </div>
      ))}

      <h2 className="resume-section-title">Projects</h2>
      {projects?.map((proj, i) => (
        <div key={i} className="resume-project">
          <div className="resume-company capitalize">{proj.title}</div>
          <div>{proj.description}</div>
          {proj.github && (
            <div>
              <span className="resume-link">GitHub: {proj.github}</span>
            </div>
          )}
          {proj.livelink && (
            <div>
              <span className="resume-link">Live: {proj.livelink}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
});

export default ResumeTemplate;
