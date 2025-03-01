import React, { useState, useEffect } from 'react';
import { districts, talukas, villages } from '../data/locations';
import { FormData } from '../types';
import { Search } from 'lucide-react';

interface DownloadFormProps {
  onSubmit: (formData: FormData) => void;
  isDisabled: boolean;
}

const DownloadForm: React.FC<DownloadFormProps> = ({ onSubmit, isDisabled }) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 20 }, (_, i) => (currentYear - i).toString());
  
  const [formData, setFormData] = useState<FormData>({
    district: '',
    taluka: '',
    village: '',
    startDocNo: '',
    endDocNo: '',
    year: currentYear.toString(),
  });
  
  const [filteredTalukas, setFilteredTalukas] = useState(talukas);
  const [filteredVillages, setFilteredVillages] = useState(villages);
  
  // Search filters
  const [districtSearch, setDistrictSearch] = useState('');
  const [talukaSearch, setTalukaSearch] = useState('');
  const [villageSearch, setVillageSearch] = useState('');
  
  // Filtered options for dropdowns
  const [filteredDistrictOptions, setFilteredDistrictOptions] = useState(districts);
  
  useEffect(() => {
    // Filter districts based on search
    const filtered = districts.filter(district => 
      district.name.toLowerCase().includes(districtSearch.toLowerCase())
    );
    setFilteredDistrictOptions(filtered);
  }, [districtSearch]);
  
  useEffect(() => {
    if (formData.district) {
      // Filter talukas based on selected district and search term
      const filtered = talukas.filter(taluka => 
        taluka.districtId === formData.district && 
        taluka.name.toLowerCase().includes(talukaSearch.toLowerCase())
      );
      setFilteredTalukas(filtered);
      
      if (!filtered.some(t => t.id === formData.taluka)) {
        setFormData(prev => ({ ...prev, taluka: '', village: '' }));
      }
    } else {
      setFilteredTalukas([]);
      setFilteredVillages([]);
    }
  }, [formData.district, talukaSearch]);
  
  useEffect(() => {
    if (formData.taluka) {
      // Filter villages based on selected taluka and search term
      const filtered = villages.filter(village => 
        village.talukaId === formData.taluka &&
        village.name.toLowerCase().includes(villageSearch.toLowerCase())
      );
      setFilteredVillages(filtered);
      
      if (!filtered.some(v => v.id === formData.village)) {
        setFormData(prev => ({ ...prev, village: '' }));
      }
    } else {
      setFilteredVillages([]);
    }
  }, [formData.taluka, villageSearch]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label htmlFor="district" className="block text-sm font-medium text-gray-700 mb-1">
            District
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search district..."
              value={districtSearch}
              onChange={(e) => setDistrictSearch(e.target.value)}
              className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 mb-2"
              disabled={isDisabled}
            />
          </div>
          <select
            id="district"
            name="district"
            value={formData.district}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
            disabled={isDisabled}
          >
            <option value="">Select District</option>
            {filteredDistrictOptions.map(district => (
              <option key={district.id} value={district.id}>
                {district.name}
              </option>
            ))}
          </select>
          <p className="text-xs text-gray-500 mt-1">All 36 districts of Maharashtra available</p>
        </div>
        
        <div>
          <label htmlFor="taluka" className="block text-sm font-medium text-gray-700 mb-1">
            Taluka
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search taluka..."
              value={talukaSearch}
              onChange={(e) => setTalukaSearch(e.target.value)}
              className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 mb-2"
              disabled={!formData.district || isDisabled}
            />
          </div>
          <select
            id="taluka"
            name="taluka"
            value={formData.taluka}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
            disabled={!formData.district || isDisabled}
          >
            <option value="">Select Taluka</option>
            {filteredTalukas.map(taluka => (
              <option key={taluka.id} value={taluka.id}>
                {taluka.name}
              </option>
            ))}
          </select>
          <p className="text-xs text-gray-500 mt-1">{filteredTalukas.length} talukas available for selected district</p>
        </div>
        
        <div>
          <label htmlFor="village" className="block text-sm font-medium text-gray-700 mb-1">
            Village
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search village..."
              value={villageSearch}
              onChange={(e) => setVillageSearch(e.target.value)}
              className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 mb-2"
              disabled={!formData.taluka || isDisabled}
            />
          </div>
          <select
            id="village"
            name="village"
            value={formData.village}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
            disabled={!formData.taluka || isDisabled}
          >
            <option value="">Select Village</option>
            {filteredVillages.map(village => (
              <option key={village.id} value={village.id}>
                {village.name}
              </option>
            ))}
          </select>
          <p className="text-xs text-gray-500 mt-1">{filteredVillages.length} villages available for selected taluka</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label htmlFor="startDocNo" className="block text-sm font-medium text-gray-700 mb-1">
            Start Document Number
          </label>
          <input
            type="number"
            id="startDocNo"
            name="startDocNo"
            value={formData.startDocNo}
            onChange={handleChange}
            min="1"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
            disabled={isDisabled}
          />
        </div>
        
        <div>
          <label htmlFor="endDocNo" className="block text-sm font-medium text-gray-700 mb-1">
            End Document Number
          </label>
          <input
            type="number"
            id="endDocNo"
            name="endDocNo"
            value={formData.endDocNo}
            onChange={handleChange}
            min={formData.startDocNo || "1"}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
            disabled={isDisabled}
          />
          {formData.startDocNo && formData.endDocNo && parseInt(formData.endDocNo) < parseInt(formData.startDocNo) && (
            <p className="text-red-500 text-sm mt-1">End document number must be greater than or equal to start document number</p>
          )}
        </div>
        
        <div>
          <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
            Year
          </label>
          <select
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
            disabled={isDisabled}
          >
            {years.map(year => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="flex justify-end">
        <button
          type="submit"
          className={`px-6 py-3 rounded-md text-white font-medium ${
            isDisabled 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
          }`}
          disabled={isDisabled}
        >
          Start Download
        </button>
      </div>
    </form>
  );
};

export default DownloadForm;

