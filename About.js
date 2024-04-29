
import React from 'react';
import './About.css'; 

function About() {
  return (
    <div className="about-page">
      <div className="header">
        <h1>About Me</h1>
        <p>Welcome to my fancy About page!</p>
      </div>
      <div className="content">
        <div className="bio">
          <h2>Biography</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac turpis sed velit iaculis vehicula.</p>
        </div>
        <div className="skills">
          <h2>Skills</h2>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        {/* Add more sections for achievements, interests, etc. */}
      </div>
    </div>
  );
}

export default About;
