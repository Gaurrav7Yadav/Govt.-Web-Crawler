export interface FormData {
  district: string;
  taluka: string;
  village: string;
  startDocNo: string;
  endDocNo: string;
  year: string;
}

export type DownloadStatus = 'pending' | 'downloading' | 'completed' | 'failed';

export interface DownloadJob {
  id: string;
  district: string;
  taluka: string;
  village: string;
  docNo: string;
  year: string;
  status: DownloadStatus;
  progress: number;
  fileName: string;
  error?: string;
}

export interface District {
  id: string;
  name: string;
}

export interface Taluka {
  id: string;
  name: string;
  districtId: string;
}

export interface Village {
  id: string;
  name: string;
  talukaId: string;
}