import React from 'react';
import { FileText } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FileText size={28} className="mr-2" />
            <h1 className="text-2xl font-bold"> Gaurav Maharashtra Document Downloader</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="hover:text-blue-200 transition-colors">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-200 transition-colors">Help</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-200 transition-colors">About</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;