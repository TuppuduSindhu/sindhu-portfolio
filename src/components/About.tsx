
const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate about technology and continuous learning
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
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
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-orange-500 pl-6 py-2">
                <h4 className="text-xl font-semibold text-gray-900">Bachelor of Technology</h4>
                <p className="text-gray-700 font-medium">B.Tech. - CSE - Artificial Intelligence - PIET</p>
                <p className="text-gray-600">Parul University</p>
                <p className="text-orange-600 font-medium">CGPA: 8.25 / 10</p>
                <p className="text-gray-500">2022 - 2026</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6 py-2">
                <h4 className="text-xl font-semibold text-gray-900">12th Grade</h4>
                <p className="text-gray-700 font-medium">TSBIE</p>
                <p className="text-gray-600">Pranava Junior College</p>
                <p className="text-orange-600 font-medium">Percentage: 87.30 / 100</p>
                <p className="text-gray-500">2022</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6 py-2">
                <h4 className="text-xl font-semibold text-gray-900">10th Grade</h4>
                <p className="text-gray-700 font-medium">BSET</p>
                <p className="text-gray-600">Telangana State Model School, Jangaon</p>
                <p className="text-orange-600 font-medium">CGPA: 10 / 10</p>
                <p className="text-gray-500">2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
