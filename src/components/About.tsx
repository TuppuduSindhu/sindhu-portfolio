
const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate about technology and continuous learning
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              I'm a dedicated Computer Science student specializing in Artificial Intelligence, 
              with a strong passion for programming and frontend development. My journey in tech 
              has been driven by curiosity and a commitment to continuous learning.
            </p>
            <p className="text-gray-700 leading-relaxed">
              I believe in the power of technology to solve real-world problems and am constantly 
              exploring new frameworks, languages, and methodologies to enhance my skill set and 
              contribute meaningfully to the tech community.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="text-xl font-semibold text-gray-900">Bachelor of Technology</h4>
                <p className="text-gray-700">Computer Science & Engineering (AI)</p>
                <p className="text-gray-600">Parul University</p>
                <p className="text-gray-500">2022 - 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
