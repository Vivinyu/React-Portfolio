import Project from '../components/Project';

function Portfolio() {
  const projects = [
    {
      title: "MERN Stack Project",
      image: "/path/to/mern-project.jpg",
      deployedLink: "https://your-mern-project.com",
      githubLink: "https://github.com/Vivinyu/finance-tracker.git"
    },
    {
      title: "React Portfolio",
      image: "/path/to/react-portfolio.jpg",
      deployedLink: "https://your-react-portfolio.com",
      githubLink: "https://github.com/Vivinyu/React-Portfolio.git"
    },
    // Add 4 more projects here
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;