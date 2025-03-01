import { District, Taluka, Village } from '../types';
import { districts, talukas, villages } from '../data/locations';

export const getDistrictNameById = (id: string): string => {
  const district = districts.find(d => d.id === id);
  return district ? district.name : '';
};

export const getTalukaNameById = (id: string): string => {
  const taluka = talukas.find(t => t.id === id);
  return taluka ? taluka.name : '';
};

export const getVillageNameById = (id: string): string => {
  const village = villages.find(v => v.id === id);
  return village ? village.name : '';
};

export const formatFileName = (
  district: string,
  taluka: string,
  village: string,
  docNo: string,
  year: string
): string => {
  const districtName = getDistrictNameById(district);
  const talukaName = getTalukaNameById(taluka);
  const villageName = getVillageNameById(village);
  
  return `${districtName}_${talukaName}_${villageName}_${docNo}_${year}.pdf`;
};

export const downloadBlob = (blob: Blob, fileName: string): void => {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

export const sleep = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

/**
 * Checks if a document exists in the IGR Maharashtra database
 * In a real implementation, this would make an API call to check
 */
export const checkDocumentExists = async (
  district: string,
  taluka: string,
  village: string,
  docNo: string,
  year: string
): Promise<boolean> => {
  // In a real implementation, this would check if the document exists
  // For demo purposes, we're simulating a delay and returning true
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Simulate some documents not existing (for demo purposes)
  const randomValue = Math.random();
  return randomValue > 0.1; // 90% chance of document existing
};

/**
 * Gets the local download path based on browser and OS
 */
export const getDownloadPath = (): string => {
  const isWindows = navigator.platform.indexOf('Win') > -1;
  const isMac = navigator.platform.indexOf('Mac') > -1;
  
  if (isWindows) {
    return 'C:\\Users\\[YourUsername]\\Downloads\\';
  } else if (isMac) {
    return '/Users/[YourUsername]/Downloads/';
  } else {
    return '/home/[YourUsername]/Downloads/';
  }
};