
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Content */}
        <div className="text-white space-y-8 animate-fade-in order-2 lg:order-1">
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
              <p className="text-sm font-medium text-white/90">Available for opportunities</p>
            </div>
            
            <div className="space-y-3">
              <p className="text-lg font-medium text-white/80 tracking-wide">Hello, I'm</p>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-pulse bg-[length:200%_200%] animate-gradient-x drop-shadow-2xl" style={{
                  fontFamily: 'Georgia, serif',
                  textShadow: '0 0 30px rgba(255, 165, 0, 0.3), 0 0 60px rgba(255, 105, 180, 0.2)',
                  letterSpacing: '0.02em'
                }}>
                  Sindhu Tuppudu
                </span>
              </h1>
              <div className="space-y-2">
                <p className="text-2xl lg:text-3xl font-semibold text-orange-300">
                  AI Developer
                </p>
                <p className="text-xl lg:text-2xl text-white/70 font-medium">
                  & Frontend Enthusiast
                </p>
              </div>
            </div>
          </div>
          
          <p className="text-lg text-white/90 leading-relaxed max-w-lg font-light">
            Computer Science student passionate about <span className="text-orange-300 font-medium">artificial intelligence</span> and 
            <span className="text-purple-300 font-medium"> modern web development</span>, dedicated to continuous learning and 
            building innovative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <button
              onClick={() => {
                const element = document.getElementById("projects");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-orange-500/25 flex items-center justify-center gap-2"
            >
              <span>View My Work</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="group border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-10 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm flex items-center justify-center gap-2"
            >
              <span>Get In Touch</span>
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Right Content - Profile Image */}
        <div className="flex justify-center lg:justify-end animate-fade-in order-1 lg:order-2">
          <div className="relative">
            {/* Main image container */}
            <div className="relative w-80 h-80 lg:w-[450px] lg:h-[450px]">
              {/* Gradient border */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-400 via-purple-500 to-blue-500 rounded-full p-1">
                <div className="w-full h-full bg-gradient-to-br from-purple-600 via-blue-500 to-orange-400 rounded-full p-2">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src="/lovable-uploads/4ab9d703-c1af-40c1-ad59-409180cea313.png"
                      alt="Sindhu Tuppudu"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-500 rounded-2xl rotate-12 opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-60 animate-bounce" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/4 -left-12 w-8 h-8 bg-white rounded-full opacity-40 animate-ping" style={{animationDelay: '2s'}}></div>
              <div className="absolute bottom-1/4 -right-10 w-6 h-6 bg-orange-300 rounded-full opacity-50 animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-medium">Scroll down</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
