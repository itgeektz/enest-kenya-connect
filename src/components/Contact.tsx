
import { Mail, MapPin, Calendar, Phone, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Looking for a reliable IT partner in Kenya? Whether you're planning, expanding, 
            or troubleshooting, we're here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="text-green-400 mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-white font-semibold mb-1">Email Us</h4>
                  <a href="mailto:info@enestsolutions.co.ke" className="text-blue-100 hover:text-green-400 transition-colors">
                    info@enestsolutions.co.ke
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="text-green-400 mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-white font-semibold mb-1">Location</h4>
                  <p className="text-blue-100">Nairobi, Kenya</p>
                </div>
              </div>
              <div className="flex items-start">
                <Calendar className="text-green-400 mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-white font-semibold mb-1">Established</h4>
                  <p className="text-blue-100">Proudly Serving Since 1992</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-blue-800 rounded-xl">
              <h4 className="text-xl font-bold text-white mb-4">Ready to Start Your IT Journey?</h4>
              <p className="text-blue-100 mb-6">
                Join hundreds of satisfied clients who trust Enest Solutions for their technology needs. 
                Let's discuss how we can help your business grow.
              </p>
              <a 
                href="mailto:info@enestsolutions.co.ke"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center group"
              >
                Start Conversation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Commitment</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-800 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Technology with Trust</h4>
                <p className="text-gray-600">We don't just provide tech — we provide trust, support, and long-term value.</p>
              </div>
              <div className="border-l-4 border-green-600 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Always Here to Help</h4>
                <p className="text-gray-600">Our goal is to become your trusted technology partner, helping you grow and stay competitive.</p>
              </div>
              <div className="border-l-4 border-purple-600 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Building Kenya's Future</h4>
                <p className="text-gray-600">We're here to help build a stronger, more connected Kenyan business ecosystem.</p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700 font-medium text-center">
                "Enest Solutions isn't just a technology company. We are a people-first, 
                problem-solving, trust-building partner in your digital journey."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
