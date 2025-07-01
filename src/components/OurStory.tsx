
import { Calendar, Target, Heart } from "lucide-react";

const OurStory = () => {
  return (
    <section id="story" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded in 1992, we've been a steady force in Kenya's technology journey — 
            empowering businesses long before Kenya gained global recognition as a tech hub.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-blue-50 p-8 rounded-xl">
            <Calendar className="text-blue-800 mb-4" size={40} />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Since 1992</h3>
            <p className="text-gray-600">
              We were already on the ground making technology accessible, honest, and supportive 
              for those who needed it most, long before the tech boom.
            </p>
          </div>
          <div className="bg-green-50 p-8 rounded-xl">
            <Target className="text-green-600 mb-4" size={40} />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Approach</h3>
            <p className="text-gray-600">
              Never about chasing trends. Always about building long-term trust, 
              offering practical solutions, and growing alongside our clients.
            </p>
          </div>
          <div className="bg-purple-50 p-8 rounded-xl">
            <Heart className="text-purple-600 mb-4" size={40} />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              More than just business - we enable people, improve efficiency, 
              and foster community empowerment through the right digital tools.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Technology Should Be Human, Not Just Hardware</h3>
            <p className="text-xl mb-8 opacity-90">
              At Enest Solutions, we focus on human-first service. We listen before selling, 
              solve problems before suggesting upgrades, and support our clients throughout their journey.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-green-400">Listen</div>
                <div className="text-sm opacity-80">Before Selling</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">Solve</div>
                <div className="text-sm opacity-80">Before Upgrading</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">Support</div>
                <div className="text-sm opacity-80">Throughout Journey</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
