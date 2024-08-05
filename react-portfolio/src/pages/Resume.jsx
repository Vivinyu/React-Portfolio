function Resume() {
    const proficiencies = [
      "MERN Stack (MongoDB, Express.js, React, Node.js)",
      "JavaScript",
      "HTML/CSS",
      "Network Infrastructure",
      "IT Support",
      "Project Management",
      "Windows and Mac OS",
      "Active Directory",
      "SCCM",
      "Citrix Environment",
      "Office 365",
      "HIPAA Compliance",
      "Customer Service",
      "Team Leadership"
    ];
  
    const experiences = [
      {
        title: "Implementation Specialist II Student Health Services",
        company: "North Carolina State University",
        period: "Jan 2019 - Present",
        description: "Provided technical support to faculty and staff, implemented IT services, and contributed to continuous improvement of Service Desk operations."
      },
      {
        title: "MS Desktop Analyst P2",
        company: "Allscript at Northwell Long Island Jewish Hospital Health System",
        period: "June 2017 - November 2018",
        description: "Served as a liaison between Northwell Health and Allscripts, providing high-level customer service and IT support in a large healthcare environment."
      },
      {
        title: "IT Support Engineer",
        company: "United Airlines EWR / Apex and System Soft Inc.",
        period: "December 2016 - June 2017",
        description: "Managed IT projects for multiple airports, including WAN connectivity, VOIP integrity, and infrastructure network support."
      },
      {
        title: "Full Stack Web Developer",
        company: "UNC Coding Academy",
        period: "Graduated",
        description: "Completed intensive training in full stack web development, specializing in the MERN stack."
      }
    ];
  
    return (
      <section>
        <h2>Resume</h2>
        <a href="/JOSE DE LOS SANTOS RESUME.pdf" download>Download Resume</a>
        
        <h3>Professional Experience</h3>
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <h4>{exp.title}</h4>
            <p>{exp.company} | {exp.period}</p>
            <p>{exp.description}</p>
          </div>
        ))}
  
        <h3>Technical Proficiencies</h3>
        <ul>
          {proficiencies.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>
    );
  }
  
  export default Resume;