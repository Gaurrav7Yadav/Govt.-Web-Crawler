import { District, Taluka, Village } from '../types';

export const districts: District[] = [
  { id: '1', name: 'Pune' },
  { id: '2', name: 'Mumbai City' },
  { id: '3', name: 'Mumbai Suburban' },
  { id: '4', name: 'Thane' },
  { id: '5', name: 'Nagpur' },
  { id: '6', name: 'Ahmednagar' },
  { id: '7', name: 'Aurangabad' },
  { id: '8', name: 'Nashik' },
  { id: '9', name: 'Kolhapur' },
  { id: '10', name: 'Solapur' },
  { id: '11', name: 'Satara' },
  { id: '12', name: 'Sangli' },
  { id: '13', name: 'Ratnagiri' },
  { id: '14', name: 'Sindhudurg' },
  { id: '15', name: 'Raigad' },
  { id: '16', name: 'Palghar' },
  { id: '17', name: 'Dhule' },
  { id: '18', name: 'Nandurbar' },
  { id: '19', name: 'Jalgaon' },
  { id: '20', name: 'Buldana' },
  { id: '21', name: 'Akola' },
  { id: '22', name: 'Washim' },
  { id: '23', name: 'Amravati' },
  { id: '24', name: 'Yavatmal' },
  { id: '25', name: 'Wardha' },
  { id: '26', name: 'Chandrapur' },
  { id: '27', name: 'Gadchiroli' },
  { id: '28', name: 'Gondia' },
  { id: '29', name: 'Bhandara' },
  { id: '30', name: 'Latur' },
  { id: '31', name: 'Osmanabad' },
  { id: '32', name: 'Nanded' },
  { id: '33', name: 'Hingoli' },
  { id: '34', name: 'Parbhani' },
  { id: '35', name: 'Jalna' },
  { id: '36', name: 'Bid' },
];

export const talukas: Taluka[] = [
  // Pune District
  { id: '101', name: 'Pune City', districtId: '1' },
  { id: '102', name: 'Haveli', districtId: '1' },
  { id: '103', name: 'Mulshi', districtId: '1' },
  { id: '104', name: 'Maval', districtId: '1' },
  { id: '105', name: 'Khed', districtId: '1' },
  { id: '106', name: 'Junnar', districtId: '1' },
  { id: '107', name: 'Ambegaon', districtId: '1' },
  { id: '108', name: 'Shirur', districtId: '1' },
  { id: '109', name: 'Baramati', districtId: '1' },
  { id: '110', name: 'Indapur', districtId: '1' },
  { id: '111', name: 'Daund', districtId: '1' },
  { id: '112', name: 'Purandar', districtId: '1' },
  { id: '113', name: 'Velhe', districtId: '1' },
  { id: '114', name: 'Bhor', districtId: '1' },
  
  // Mumbai City District
  { id: '201', name: 'Mumbai', districtId: '2' },
  
  // Mumbai Suburban District
  { id: '301', name: 'Andheri', districtId: '3' },
  { id: '302', name: 'Borivali', districtId: '3' },
  { id: '303', name: 'Kurla', districtId: '3' },
  { id: '304', name: 'Bandra', districtId: '3' },
  
  // Thane District
  { id: '401', name: 'Thane', districtId: '4' },
  { id: '402', name: 'Kalyan', districtId: '4' },
  { id: '403', name: 'Bhiwandi', districtId: '4' },
  { id: '404', name: 'Ulhasnagar', districtId: '4' },
  { id: '405', name: 'Ambernath', districtId: '4' },
  { id: '406', name: 'Murbad', districtId: '4' },
  { id: '407', name: 'Shahapur', districtId: '4' },
  
  // Nagpur District
  { id: '501', name: 'Nagpur Urban', districtId: '5' },
  { id: '502', name: 'Nagpur Rural', districtId: '5' },
  { id: '503', name: 'Kamptee', districtId: '5' },
  { id: '504', name: 'Hingna', districtId: '5' },
  { id: '505', name: 'Ramtek', districtId: '5' },
  { id: '506', name: 'Parseoni', districtId: '5' },
  { id: '507', name: 'Mauda', districtId: '5' },
  { id: '508', name: 'Umred', districtId: '5' },
  { id: '509', name: 'Kuhi', districtId: '5' },
  { id: '510', name: 'Bhiwapur', districtId: '5' },
  { id: '511', name: 'Narkhed', districtId: '5' },
  { id: '512', name: 'Savner', districtId: '5' },
  
  // Ahmednagar District
  { id: '601', name: 'Ahmednagar', districtId: '6' },
  { id: '602', name: 'Shrirampur', districtId: '6' },
  { id: '603', name: 'Nevasa', districtId: '6' },
  { id: '604', name: 'Shevgaon', districtId: '6' },
  { id: '605', name: 'Pathardi', districtId: '6' },
  { id: '606', name: 'Jamkhed', districtId: '6' },
  { id: '607', name: 'Karjat', districtId: '6' },
  { id: '608', name: 'Shrigonda', districtId: '6' },
  { id: '609', name: 'Parner', districtId: '6' },
  { id: '610', name: 'Akole', districtId: '6' },
  { id: '611', name: 'Sangamner', districtId: '6' },
  { id: '612', name: 'Kopargaon', districtId: '6' },
  { id: '613', name: 'Rahata', districtId: '6' },
  { id: '614', name: 'Rahuri', districtId: '6' },
  
  // Aurangabad District
  { id: '701', name: 'Aurangabad', districtId: '7' },
  { id: '702', name: 'Kannad', districtId: '7' },
  { id: '703', name: 'Soegaon', districtId: '7' },
  { id: '704', name: 'Sillod', districtId: '7' },
  { id: '705', name: 'Phulambri', districtId: '7' },
  { id: '706', name: 'Khuldabad', districtId: '7' },
  { id: '707', name: 'Vaijapur', districtId: '7' },
  { id: '708', name: 'Gangapur', districtId: '7' },
  { id: '709', name: 'Paithan', districtId: '7' },
  
  // Nashik District
  { id: '801', name: 'Nashik', districtId: '8' },
  { id: '802', name: 'Malegaon', districtId: '8' },
  { id: '803', name: 'Sinnar', districtId: '8' },
  { id: '804', name: 'Igatpuri', districtId: '8' },
  { id: '805', name: 'Dindori', districtId: '8' },
  { id: '806', name: 'Peth', districtId: '8' },
  { id: '807', name: 'Trimbakeshwar', districtId: '8' },
  { id: '808', name: 'Kalwan', districtId: '8' },
  { id: '809', name: 'Deola', districtId: '8' },
  { id: '810', name: 'Surgana', districtId: '8' },
  { id: '811', name: 'Baglan', districtId: '8' },
  { id: '812', name: 'Chandwad', districtId: '8' },
  { id: '813', name: 'Nandgaon', districtId: '8' },
  { id: '814', name: 'Yeola', districtId: '8' },
  { id: '815', name: 'Niphad', districtId: '8' },
  
  // Additional talukas for other districts
  { id: '901', name: 'Kolhapur', districtId: '9' },
  { id: '902', name: 'Karvir', districtId: '9' },
  { id: '903', name: 'Panhala', districtId: '9' },
  
  { id: '1001', name: 'Solapur North', districtId: '10' },
  { id: '1002', name: 'Solapur South', districtId: '10' },
  { id: '1003', name: 'Akkalkot', districtId: '10' },
  
  { id: '1101', name: 'Satara', districtId: '11' },
  { id: '1102', name: 'Karad', districtId: '11' },
  { id: '1103', name: 'Wai', districtId: '11' },
  
  // Add more talukas for other districts as needed
];

export const villages: Village[] = [
  // Pune City Taluka
  { id: '1001', name: 'Shivajinagar', talukaId: '101' },
  { id: '1002', name: 'Kothrud', talukaId: '101' },
  { id: '1003', name: 'Aundh', talukaId: '101' },
  { id: '1004', name: 'Hadapsar', talukaId: '101' },
  { id: '1005', name: 'Baner', talukaId: '101' },
  { id: '1006', name: 'Pashan', talukaId: '101' },
  { id: '1007', name: 'Kondhwa', talukaId: '101' },
  { id: '1008', name: 'Viman Nagar', talukaId: '101' },
  { id: '1009', name: 'Wanowrie', talukaId: '101' },
  { id: '1010', name: 'Yerawada', talukaId: '101' },
  
  // Haveli Taluka
  { id: '1011', name: 'Hadapsar', talukaId: '102' },
  { id: '1012', name: 'Wagholi', talukaId: '102' },
  { id: '1013', name: 'Lohegaon', talukaId: '102' },
  { id: '1014', name: 'Kharadi', talukaId: '102' },
  { id: '1015', name: 'Manjari', talukaId: '102' },
  { id: '1016', name: 'Phursungi', talukaId: '102' },
  { id: '1017', name: 'Uruli Kanchan', talukaId: '102' },
  { id: '1018', name: 'Pisoli', talukaId: '102' },
  { id: '1019', name: 'Kondhwe Dhawade', talukaId: '102' },
  { id: '1020', name: 'Mohammadwadi', talukaId: '102' },
  
  // Mulshi Taluka
  { id: '1021', name: 'Hinjewadi', talukaId: '103' },
  { id: '1022', name: 'Marunji', talukaId: '103' },
  { id: '1023', name: 'Pirangut', talukaId: '103' },
  { id: '1024', name: 'Lavale', talukaId: '103' },
  { id: '1025', name: 'Bhugaon', talukaId: '103' },
  { id: '1026', name: 'Paud', talukaId: '103' },
  { id: '1027', name: 'Dhadawali', talukaId: '103' },
  { id: '1028', name: 'Ambi', talukaId: '103' },
  { id: '1029', name: 'Nande', talukaId: '103' },
  { id: '1030', name: 'Kasarsai', talukaId: '103' },
  
  // Mumbai Taluka
  { id: '2001', name: 'Fort', talukaId: '201' },
  { id: '2002', name: 'Colaba', talukaId: '201' },
  { id: '2003', name: 'Marine Lines', talukaId: '201' },
  { id: '2004', name: 'Churchgate', talukaId: '201' },
  { id: '2005', name: 'Nariman Point', talukaId: '201' },
  { id: '2006', name: 'Cuffe Parade', talukaId: '201' },
  { id: '2007', name: 'Dadar', talukaId: '201' },
  { id: '2008', name: 'Parel', talukaId: '201' },
  { id: '2009', name: 'Worli', talukaId: '201' },
  { id: '2010', name: 'Byculla', talukaId: '201' },
  
  // Andheri Taluka
  { id: '3001', name: 'Andheri East', talukaId: '301' },
  { id: '3002', name: 'Andheri West', talukaId: '301' },
  { id: '3003', name: 'Jogeshwari East', talukaId: '301' },
  { id: '3004', name: 'Jogeshwari West', talukaId: '301' },
  { id: '3005', name: 'Vile Parle East', talukaId: '301' },
  { id: '3006', name: 'Vile Parle West', talukaId: '301' },
  { id: '3007', name: 'Sahar', talukaId: '301' },
  { id: '3008', name: 'Marol', talukaId: '301' },
  { id: '3009', name: 'Saki Naka', talukaId: '301' },
  { id: '3010', name: 'Chakala', talukaId: '301' },
  
  // Borivali Taluka
  { id: '3011', name: 'Borivali East', talukaId: '302' },
  { id: '3012', name: 'Borivali West', talukaId: '302' },
  { id: '3013', name: 'Dahisar East', talukaId: '302' },
  { id: '3014', name: 'Dahisar West', talukaId: '302' },
  { id: '3015', name: 'Kandivali East', talukaId: '302' },
  { id: '3016', name: 'Kandivali West', talukaId: '302' },
  { id: '3017', name: 'Malad East', talukaId: '302' },
  { id: '3018', name: 'Malad West', talukaId: '302' },
  { id: '3019', name: 'Gorai', talukaId: '302' },
  { id: '3020', name: 'Charkop', talukaId: '302' },
  
  // Thane Taluka
  { id: '4001', name: 'Thane West', talukaId: '401' },
  { id: '4002', name: 'Thane East', talukaId: '401' },
  { id: '4003', name: 'Naupada', talukaId: '401' },
  { id: '4004', name: 'Majiwada', talukaId: '401' },
  { id: '4005', name: 'Wagle Estate', talukaId: '401' },
  { id: '4006', name: 'Manpada', talukaId: '401' },
  { id: '4007', name: 'Kolshet', talukaId: '401' },
  { id: '4008', name: 'Balkum', talukaId: '401' },
  { id: '4009', name: 'Ghodbunder', talukaId: '401' },
  { id: '4010', name: 'Kasarvadavali', talukaId: '401' },
  
  // Kalyan Taluka
  { id: '4011', name: 'Kalyan East', talukaId: '402' },
  { id: '4012', name: 'Kalyan West', talukaId: '402' },
  { id: '4013', name: 'Dombivli East', talukaId: '402' },
  { id: '4014', name: 'Dombivli West', talukaId: '402' },
  { id: '4015', name: 'Titwala', talukaId: '402' },
  { id: '4016', name: 'Manda', talukaId: '402' },
  { id: '4017', name: 'Khadavli', talukaId: '402' },
  { id: '4018', name: 'Nilje', talukaId: '402' },
  { id: '4019', name: 'Shahad', talukaId: '402' },
  { id: '4020', name: 'Mohone', talukaId: '402' },
  
  // Nagpur Urban Taluka
  { id: '5001', name: 'Civil Lines', talukaId: '501' },
  { id: '5002', name: 'Dharampeth', talukaId: '501' },
  { id: '5003', name: 'Sadar', talukaId: '501' },
  { id: '5004', name: 'Lakadganj', talukaId: '501' },
  { id: '5005', name: 'Mangalwari', talukaId: '501' },
  { id: '5006', name: 'Gandhibagh', talukaId: '501' },
  { id: '5007', name: 'Hanuman Nagar', talukaId: '501' },
  { id: '5008', name: 'Nehru Nagar', talukaId: '501' },
  { id: '5009', name: 'Dhantoli', talukaId: '501' },
  { id: '5010', name: 'Laxmi Nagar', talukaId: '501' },
  
  // Nagpur Rural Taluka
  { id: '5011', name: 'Wadi', talukaId: '502' },
  { id: '5012', name: 'Hingna', talukaId: '502' },
  { id: '5013', name: 'Kalmeshwar', talukaId: '502' },
  { id: '5014', name: 'Savner', talukaId: '502' },
  { id: '5015', name: 'Katol', talukaId: '502' },
  { id: '5016', name: 'Narkhed', talukaId: '502' },
  { id: '5017', name: 'Ramtek', talukaId: '502' },
  { id: '5018', name: 'Mouda', talukaId: '502' },
  { id: '5019', name: 'Kamptee', talukaId: '502' },
  { id: '5020', name: 'Umred', talukaId: '502' },
  
  // Ahmednagar Taluka
  { id: '6001', name: 'Ahmednagar City', talukaId: '601' },
  { id: '6002', name: 'Bhingar', talukaId: '601' },
  { id: '6003', name: 'Savedi', talukaId: '601' },
  { id: '6004', name: 'Nagapur', talukaId: '601' },
  { id: '6005', name: 'Burudgaon', talukaId: '601' },
  
  // Aurangabad Taluka
  { id: '7001', name: 'Aurangabad City', talukaId: '701' },
  { id: '7002', name: 'Chikalthana', talukaId: '701' },
  { id: '7003', name: 'Padegaon', talukaId: '701' },
  { id: '7004', name: 'Harsul', talukaId: '701' },
  { id: '7005', name: 'Satara', talukaId: '701' },
  
  // Nashik Taluka
  { id: '8001', name: 'Nashik City', talukaId: '801' },
  { id: '8002', name: 'Nashik Road', talukaId: '801' },
  { id: '8003', name: 'Deolali', talukaId: '801' },
  { id: '8004', name: 'Mhasrul', talukaId: '801' },
  { id: '8005', name: 'Adgaon', talukaId: '801' },
  
  // Add more villages for other talukas as needed
];