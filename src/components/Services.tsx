
import { Monitor, Network, Brain, Shield, Settings, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "End-to-End IT Hardware Solutions",
      description: "From audio jacks to enterprise servers - complete IT hardware supply, installation, and support.",
      features: ["Product sourcing & consultation", "Installation & setup", "After-sales support"]
    },
    {
      icon: Settings,
      title: "ERP Implementation & Consulting", 
      description: "Streamline operations with customized ERP solutions and digital transformation.",
      features: ["Custom implementations", "Industry-specific workflows", "Full lifecycle HRMS"]
    },
    {
      icon: Network,
      title: "Managed IT Services",
      description: "Focus on your business while we manage your complete IT ecosystem.",
      features: ["24/7 monitoring", "Proactive maintenance", "Emergency support"]
    },
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description: "Protect your business with comprehensive security infrastructure and monitoring.",
      features: ["Firewall management", "Security audits", "Threat monitoring"]
    },
    {
      icon: Brain,
      title: "IT Consultancy",
      description: "Strategic technology guidance to help your business grow and stay competitive.",
      features: ["Technology planning", "System optimization", "Digital strategy"]
    },
    {
      icon: Users,
      title: "Annual Maintenance Contracts",
      description: "Flexible maintenance plans for businesses of all sizes with priority support.",
      features: ["Preventive maintenance", "Priority servicing", "Budget-friendly plans"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to support the evolving needs of businesses 
            in Kenya and beyond. From startups to enterprises, we've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
              <service.icon className="text-blue-800 mb-6" size={48} />
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-900 transition-colors"
          >
            Discuss Your IT Needs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
