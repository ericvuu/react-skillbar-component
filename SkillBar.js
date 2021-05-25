import React from 'react';
import "./SkillBar.css";

function SkillBar() {

  const blueFont = {
    color: "#11698e",
  };

  const data = [
    {
      name: "HTML/CSS",
      level: "90%",
    },
    {
      name: "JAVASCRIPT",
      level: "80%",
    },
    {
      name: "ReactJs",
      level: "75%",
    },
    {
      name: "Python",
      level: "70%",
    },
    {
      name: "Java",
      level: "70%",
    },
  ];

  const skills = data.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <em style={blueFont}>{skills.name}</em>
            <span style={{ width: skills.level }} className={className}></span>
          </li>
        );
      })

  return (
    <div className="bars">
      <ul className="skills">{skills}</ul>
    </div>
  );
}

export default SkillBar;
