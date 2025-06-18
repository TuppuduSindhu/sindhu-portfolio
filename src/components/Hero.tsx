
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-white space-y-6 animate-fade-in">
          <div className="space-y-2">
            <p className="text-lg font-medium text-white/90">Hello, I'm</p>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Sindhu Tuppudu
            </h1>
            <p className="text-xl lg:text-2xl text-white/80 font-medium">
              Aspiring AI Developer & Frontend Enthusiast
            </p>
          </div>
          
          <p className="text-lg text-white/90 leading-relaxed max-w-lg">
            Computer Science student passionate about AI and programming, dedicated to continuous learning and building innovative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => {
                const element = document.getElementById("projects");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              View Projects
            </button>
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
        
        {/* Right Content - Profile Image */}
        <div className="flex justify-center lg:justify-end animate-fade-in">
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
              <img
                src="/lovable-uploads/431279b2-3991-4ee6-9c60-4e66f12daf8b.png"
                alt="Sindhu Tuppudu"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-white rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
