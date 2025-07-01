
import { CheckCircle, Clock, Heart, Shield } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Heart,
      title: "Human-First Service",
      description: "We listen before selling, solve problems before suggesting upgrades, and genuinely care about your business success."
    },
    {
      icon: Shield,
      title: "Transparent & Honest",
      description: "Clear pricing, honest advice, and no hidden costs. We believe in building trust through transparency."
    },
    {
      icon: Clock,
      title: "Long-Term Partnership",
      description: "We don't just complete projects - we build lasting relationships and support you throughout your growth journey."
    },
    {
      icon: CheckCircle,
      title: "Proven Track Record",
      description: "Over 30 years of experience serving leading institutions across Kenya with consistent, reliable service."
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Clients Stay with Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            What sets us apart isn't just our products — it's our values. 
            We believe in being present, responsive, and real.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center group">
              <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors">
                <reason.icon className="text-blue-800" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Promise</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2">Easier to Buy</h4>
                <p className="text-gray-600 text-sm">Clear choices and honest pricing</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2">Easier to Use</h4>
                <p className="text-gray-600 text-sm">Installation, support, and guidance</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2">Easier to Grow</h4>
                <p className="text-gray-600 text-sm">Future-proof solutions that evolve</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
