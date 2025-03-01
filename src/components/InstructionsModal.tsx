import React, { useState } from 'react';
import { X, HelpCircle, Download, FileDown, AlertCircle, Info } from 'lucide-react';

interface InstructionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InstructionsModal: React.FC<InstructionsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center">
            <HelpCircle className="mr-2" />
            How to Use the Document Downloader
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <section>
            <h3 className="text-xl font-semibold mb-3">Overview</h3>
            <p className="text-gray-700">
              This application helps you automate the process of downloading Index2 documents from the 
              igrmaharashtra.gov.in website. Instead of manually downloading each document, you can 
              specify a range of document numbers and other details to batch download them.
            </p>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold mb-3">Step 1: Enter Location Details</h3>
            <p className="text-gray-700 mb-3">
              Select the District, Taluka, and Village for which you want to download documents.
              These fields are hierarchical - first select a District, then the available Talukas will appear,
              and finally the Villages.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                Note: The location details must match exactly with how they appear in the IGR Maharashtra website.
                Our database includes all 36 districts of Maharashtra with their respective talukas and villages.
              </p>
            </div>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold mb-3">Step 2: Specify Document Range</h3>
            <p className="text-gray-700 mb-3">
              Enter the starting and ending document numbers. For example, if you want to download documents 
              numbered from 1 to 100, enter "1" in the Start Document Number field and "100" in the End Document Number field.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-800">
                Tip: For better performance, try downloading documents in smaller batches (e.g., 50-100 at a time)
                rather than attempting to download hundreds at once.
              </p>
            </div>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold mb-3">Step 3: Select Year</h3>
            <p className="text-gray-700">
              Choose the year for which you want to download the documents from the dropdown menu.
              The system supports documents from the current year going back 20 years.
            </p>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold mb-3">Step 4: Start Download</h3>
            <p className="text-gray-700 mb-3">
              Click the "Start Download" button to begin the download process. The application will:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Connect to the IGR Maharashtra website</li>
              <li>Navigate through the required pages</li>
              <li>Enter the details you provided</li>
              <li>Download each document one by one</li>
              <li>Save the documents with organized filenames</li>
            </ul>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold mb-3">Download Status</h3>
            <p className="text-gray-700 mb-3">
              The Download Status section shows:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Overall progress of the batch download</li>
              <li>Individual status for each document</li>
              <li>Progress indicators for each download</li>
            </ul>
            <p className="text-gray-700 mt-3">
              You can clear the download history after completion by clicking the "Clear All" button.
            </p>
          </section>
          
          <section className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h3 className="text-lg font-semibold mb-2 text-yellow-800 flex items-center">
              <AlertCircle className="mr-2" size={20} />
              Important Notes
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-yellow-800">
              <li>Ensure you have a stable internet connection during the download process.</li>
              <li>The application will automatically handle any captchas that appear on the IGR website.</li>
              <li>Downloaded documents will be saved in your browser's default download location.</li>
              <li>For large batches, the process may take some time. Please be patient.</li>
            </ul>
          </section>
          
          <section className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 className="text-lg font-semibold mb-2 text-green-800 flex items-center">
              <Info className="mr-2" size={20} />
              File Storage
            </h3>
            <p className="text-green-800 mb-2">
              All downloaded documents are saved directly to your local computer in your browser's default download location:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-green-800">
              <li><strong>Windows:</strong> Usually C:\Users\[YourUsername]\Downloads\</li>
              <li><strong>Mac:</strong> Usually /Users/[YourUsername]/Downloads/</li>
              <li><strong>Linux:</strong> Usually /home/[YourUsername]/Downloads/</li>
            </ul>
            <p className="text-green-800 mt-2">
              Files are named in a consistent format: [District]_[Taluka]_[Village]_[DocNumber]_[Year].pdf
            </p>
          </section>
          
          <section className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="text-lg font-semibold mb-2 text-blue-800 flex items-center">
              <Download className="mr-2" size={20} />
              Coverage
            </h3>
            <p className="text-blue-800">
              This application covers all 36 districts of Maharashtra, including all their respective talukas and villages.
              The database is regularly updated to ensure comprehensive coverage of the entire state.
            </p>
          </section>
        </div>
        
        <div className="p-6 border-t bg-gray-50 flex justify-end">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstructionsModal;