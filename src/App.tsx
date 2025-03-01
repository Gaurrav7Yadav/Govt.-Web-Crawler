import React, { useState } from 'react';
import { Download, FileDown, Loader2, HelpCircle } from 'lucide-react';
import DownloadForm from './components/DownloadForm';
import Header from './components/Header';
import Footer from './components/Footer';
import DownloadStatus from './components/DownloadStatus';
import InstructionsModal from './components/InstructionsModal';
import { DownloadJob, FormData } from './types';
import { downloadDocuments } from './services/downloadService';
import { downloadBlob } from './utils/helpers';

function App() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadJobs, setDownloadJobs] = useState<DownloadJob[]>([]);
  const [currentJobIndex, setCurrentJobIndex] = useState<number | null>(null);
  const [showInstructions, setShowInstructions] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setIsDownloading(true);
    
    // Create download jobs based on the form data
    const jobs: DownloadJob[] = [];
    const startDocNo = parseInt(formData.startDocNo);
    const endDocNo = parseInt(formData.endDocNo);
    
    for (let docNo = startDocNo; docNo <= endDocNo; docNo++) {
      jobs.push({
        id: `${formData.year}-${docNo}`,
        district: formData.district,
        taluka: formData.taluka,
        village: formData.village,
        docNo: docNo.toString(),
        year: formData.year,
        status: 'pending',
        progress: 0,
        fileName: `${formData.district}_${formData.taluka}_${formData.village}_${docNo}_${formData.year}.pdf`
      });
    }
    
    setDownloadJobs(jobs);
    setCurrentJobIndex(0);
    
    // Process downloads one by one
    for (let i = 0; i < jobs.length; i++) {
      setCurrentJobIndex(i);
      
      // Update job status to downloading
      setDownloadJobs(prev => 
        prev.map((job, idx) => 
          idx === i ? { ...job, status: 'downloading', progress: 0 } : job
        )
      );
      
      try {
        // Simulate download with progress updates
        await new Promise<void>((resolve) => {
          let progress = 0;
          const interval = setInterval(() => {
            progress += 10;
            setDownloadJobs(prev => 
              prev.map((job, idx) => 
                idx === i ? { ...job, progress } : job
              )
            );
            
            if (progress >= 100) {
              clearInterval(interval);
              resolve();
            }
          }, 200);
        });
        
        // Create a mock PDF blob for demonstration
        const mockPdfContent = `
          This is a mock PDF document for:
          District: ${jobs[i].district}
          Taluka: ${jobs[i].taluka}
          Village: ${jobs[i].village}
          Document Number: ${jobs[i].docNo}
          Year: ${jobs[i].year}
        `;
        
        const blob = new Blob([mockPdfContent], { type: 'application/pdf' });
        
        // Trigger download of the file
        downloadBlob(blob, jobs[i].fileName);
        
        // Update job status to completed
        setDownloadJobs(prev => 
          prev.map((job, idx) => 
            idx === i ? { ...job, status: 'completed', progress: 100 } : job
          )
        );
      } catch (error) {
        // Handle download errors
        setDownloadJobs(prev => 
          prev.map((job, idx) => 
            idx === i ? { 
              ...job, 
              status: 'failed', 
              error: error instanceof Error ? error.message : 'Unknown error' 
            } : job
          )
        );
      }
      
      // Small delay between downloads
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    setCurrentJobIndex(null);
    setIsDownloading(false);
  };

  const resetDownloads = () => {
    setDownloadJobs([]);
    setCurrentJobIndex(null);
    setIsDownloading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
              <FileDown className="mr-2" />
              Index2 Document Downloader
            </h2>
            
            <button
              onClick={() => setShowInstructions(true)}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <HelpCircle className="mr-1" size={18} />
              <span>How to use</span>
            </button>
          </div>
          
          <DownloadForm onSubmit={handleSubmit} isDisabled={isDownloading} />
        </div>
        
        {downloadJobs.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
                <Download className="mr-2" />
                Download Status
              </h2>
              
              <div className="flex items-center">
                {isDownloading ? (
                  <div className="flex items-center text-blue-600">
                    <Loader2 className="animate-spin mr-2" size={20} />
                    <span>Downloading...</span>
                  </div>
                ) : (
                  <button 
                    onClick={resetDownloads}
                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-700 transition-colors"
                  >
                    Clear All
                  </button>
                )}
              </div>
            </div>
            
            <DownloadStatus 
              jobs={downloadJobs} 
              currentJobIndex={currentJobIndex} 
            />
          </div>
        )}
      </main>
      
      <Footer />
      
      <InstructionsModal 
        isOpen={showInstructions} 
        onClose={() => setShowInstructions(false)} 
      />
    </div>
  );
}

export default App;