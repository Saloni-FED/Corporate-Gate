import React from 'react';

const ResumeList = () => {
  const resumes = [
    { name: 'Samaira Singh', date: '12-04-2024' },
    { name: 'Samaira Singh', date: '12-04-2024' },
    { name: 'Samaira Singh', date: '12-04-2024' },
    { name: 'Samaira Singh', date: '12-04-2024' },
    { name: 'Samaira Singh', date: '12-04-2024' }
  ];

  return (
    <div className="custom-resume-list">
      <h2 style={{paddingLeft:"20px"}}>Recent Resume</h2>
      <ul>
        {resumes.map((resume, index) => (
          <li key={index} style={{padding:"1rem 2rem"}}>
            <span>{index + 1}.</span>
            <span>{resume.name}</span>
            <span>{resume.date}</span>
            <img src="/pdf.png" alt="" srcset="" style={{width:"2rem"}}/>
            <div className="custom-actions">
              <a href="#view">View</a>
              <a href="#edit">Edit</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResumeList;
