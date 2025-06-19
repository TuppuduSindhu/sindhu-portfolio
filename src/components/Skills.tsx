
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
    <section id="skills" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Skills</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies and competencies I work with
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Technical Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {technicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-lg p-3 text-center hover:bg-orange-100 hover:text-orange-700 transition-all duration-300 hover:scale-105"
                >
                  <span className="text-gray-800 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Soft Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-lg p-3 text-center hover:bg-orange-100 hover:text-orange-700 transition-all duration-300 hover:scale-105"
                >
                  <span className="text-gray-800 font-medium">{skill}</span>
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
