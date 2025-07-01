
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-800">Enest Solutions</h1>
            <p className="text-xs text-gray-600">Technology with Trust Since 1992</p>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button onClick={() => scrollToSection('story')} className="text-gray-700 hover:text-blue-800 px-3 py-2 text-sm font-medium transition-colors">Our Story</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-800 px-3 py-2 text-sm font-medium transition-colors">Services</button>
              <button onClick={() => scrollToSection('why-us')} className="text-gray-700 hover:text-blue-800 px-3 py-2 text-sm font-medium transition-colors">Why Choose Us</button>
              <button onClick={() => scrollToSection('clients')} className="text-gray-700 hover:text-blue-800 px-3 py-2 text-sm font-medium transition-colors">Clients</button>
              <button onClick={() => scrollToSection('contact')} className="bg-blue-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-900 transition-colors">Contact</button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-blue-800">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <button onClick={() => scrollToSection('story')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-800 w-full text-left">Our Story</button>
            <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-800 w-full text-left">Services</button>
            <button onClick={() => scrollToSection('why-us')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-800 w-full text-left">Why Choose Us</button>
            <button onClick={() => scrollToSection('clients')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-800 w-full text-left">Clients</button>
            <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-base font-medium bg-blue-800 text-white rounded-md">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
