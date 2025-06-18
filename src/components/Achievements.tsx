
const Achievements = () => {
  const achievements = [
    {
      title: "Data Structures & Algorithms Bootcamp",
      description: "Completed intensive bootcamp focusing on problem-solving and algorithmic thinking",
      icon: "🏆"
    },
    {
      title: "NPTEL Certification",
      description: "Computer Networks and Internet Protocol - Elite certification with 81% score",
      icon: "📜",
      certificate: "/lovable-uploads/39e16fe4-486c-49e5-9755-f714f5f9410a.png"
    },
    {
      title: "C Language Training",
      description: "Comprehensive training in C programming fundamentals and advanced concepts",
      icon: "💻"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Achievements</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Milestones in my learning journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center"
            >
              {achievement.certificate ? (
                <div className="mb-4">
                  <img 
                    src={achievement.certificate} 
                    alt={achievement.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                </div>
              ) : (
                <div className="text-6xl mb-4">{achievement.icon}</div>
              )}
              <h3 className="text-xl font-bold text-white mb-4">{achievement.title}</h3>
              <p className="text-white/80 leading-relaxed">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
