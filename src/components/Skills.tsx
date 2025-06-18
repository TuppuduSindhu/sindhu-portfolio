
const Skills = () => {
  const technicalSkills = [
    "HTML", "CSS", "JavaScript", "React.js", "Python", "SQL", 
    "MongoDB", "Node.js", "OOP", "Data Structures", "Algorithms", "GitHub"
  ];
  
  const softSkills = [
    "Time Management", "Teamwork", "Problem Solving", 
    "Self Learning", "Communication", "Critical Thinking"
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Skills</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Technologies and competencies I work with
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Technical Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {technicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center hover:bg-white/30 transition-all duration-300 hover:scale-105"
                >
                  <span className="text-white font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Soft Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center hover:bg-white/30 transition-all duration-300 hover:scale-105"
                >
                  <span className="text-white font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
