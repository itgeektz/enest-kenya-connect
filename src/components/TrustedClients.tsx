
import { Building, GraduationCap, Heart, Coffee, Factory, ShoppingBag } from "lucide-react";

const TrustedClients = () => {
  const clients = [
    { name: "Don Bosco East Africa Community", icon: GraduationCap, sector: "Education" },
    { name: "Mount Carmel School", icon: GraduationCap, sector: "Education" },
    { name: "Nairobi West Hospital", icon: Heart, sector: "Healthcare" },
    { name: "Art Caffé Group", icon: Coffee, sector: "Hospitality" },
    { name: "Export Processing Zones (EPZ)", icon: Factory, sector: "Manufacturing" },
    { name: "Westgate Shopping Mall", icon: ShoppingBag, sector: "Retail" },
    { name: "Vision Scientific", icon: Building, sector: "Research" }
  ];

  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Leading Institutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Over the decades, we've built meaningful, long-term relationships with clients 
            who share our vision of progress through partnership.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {clients.map((client, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <client.icon className="text-blue-800 mb-4" size={32} />
              <h3 className="font-semibold text-gray-900 mb-2">{client.name}</h3>
              <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded-full">{client.sector}</span>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">...and many more</h3>
            <p className="text-gray-600 mb-6">
              These respected institutions remain part of our shared journey of growth and innovation. 
              That kind of trust isn't bought - it's built with reliability, integrity, and genuine service.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-800">30+</div>
                <div className="text-sm text-gray-600">Years of Service</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">500+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">1000+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;
