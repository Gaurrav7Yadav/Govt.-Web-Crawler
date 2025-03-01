import React from 'react';
import { CheckCircle, Clock, Download, AlertCircle, FileDown, Save } from 'lucide-react';
import { DownloadJob } from '../types';
import { getDistrictNameById, getTalukaNameById, getVillageNameById } from '../utils/helpers';

interface DownloadStatusProps {
  jobs: DownloadJob[];
  currentJobIndex: number | null;
}

const DownloadStatus: React.FC<DownloadStatusProps> = ({ jobs, currentJobIndex }) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="text-green-500" size={20} />;
      case 'downloading':
        return <Download className="text-blue-500" size={20} />;
      case 'failed':
        return <AlertCircle className="text-red-500" size={20} />;
      default:
        return <Clock className="text-gray-400" size={20} />;
    }
  };
  
  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'downloading':
        return 'Downloading';
      case 'failed':
        return 'Failed';
      default:
        return 'Pending';
    }
  };
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-600';
      case 'downloading':
        return 'text-blue-600';
      case 'failed':
        return 'text-red-600';
      default:
        return 'text-gray-500';
    }
  };
  
  // Calculate overall progress
  const completedJobs = jobs.filter(job => job.status === 'completed').length;
  const failedJobs = jobs.filter(job => job.status === 'failed').length;
  const totalJobs = jobs.length;
  const overallProgress = totalJobs > 0 ? Math.round((completedJobs / totalJobs) * 100) : 0;
  
  return (
    <div>
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Overall Progress</span>
          <span className="text-sm font-medium text-gray-700">{overallProgress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-blue-600 h-2.5 rounded-full" 
            style={{ width: `${overallProgress}%` }}
          ></div>
        </div>
        <div className="mt-2 flex justify-between text-sm">
          <div className="text-gray-600">
            {completedJobs} of {totalJobs} documents downloaded
          </div>
          {failedJobs > 0 && (
            <div className="text-red-600 flex items-center">
              <AlertCircle size={16} className="mr-1" />
              {failedJobs} failed
            </div>
          )}
        </div>
      </div>
      
      <div className="border rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Document
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Details
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Progress
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {jobs.map((job, index) => {
              const districtName = getDistrictNameById(job.district);
              const talukaName = getTalukaNameById(job.taluka);
              const villageName = getVillageNameById(job.village);
              
              return (
                <tr 
                  key={job.id} 
                  className={currentJobIndex === index ? 'bg-blue-50' : ''}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <FileDown className="text-gray-500 mr-2" size={18} />
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          Doc #{job.docNo} ({job.year})
                        </div>
                        <div className="text-sm text-gray-500">{job.fileName}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{districtName}</div>
                    <div className="text-sm text-gray-500">{talukaName}, {villageName}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`text-sm ${getStatusColor(job.status)} flex items-center`}>
                      {getStatusIcon(job.status)}
                      <span className="ml-2">{getStatusText(job.status)}</span>
                    </div>
                    {job.error && (
                      <div className="text-xs text-red-500 mt-1">{job.error}</div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full ${
                          job.status === 'completed' 
                            ? 'bg-green-600' 
                            : job.status === 'failed' 
                              ? 'bg-red-600' 
                              : 'bg-blue-600'
                        }`} 
                        style={{ width: `${job.progress}%` }}
                      ></div>
                    </div>
                    {job.status === 'completed' && (
                      <div className="flex items-center justify-end mt-2 text-xs text-green-600">
                        <Save size={14} className="mr-1" />
                        <span>Saved to Downloads</span>
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DownloadStatus;