// College list for each field
const collegeData = {
    'm': [
    { value: 'iimc', name: 'Indian Institute of Management, Calcutta' },
    { value: 'spjimr', name: 'SP Jain Institute of Management and Research, Mumbai' },
    { value: 'mdi', name: 'Management Development Institute, Gurgaon' },
    { value: 'isb', name: 'Indian School of Business, Hyderabad' },
    { value: 'nmims', name: 'Narsee Monjee Institute of Management Studies, Mumbai' }
],

'f': [
    { value: 'iimah', name: 'Indian Institute of Management, Ahmedabad' },
    { value: 'xlri', name: 'Xavier School of Management, Jamshedpur' },
    { value: 'fmsd', name: 'Faculty of Management Studies, Delhi University, Delhi' },
    { value: 'sibmp', name: 'Symbiosis Institute of Business Management, Pune' },
    { value: 'tapmi', name: 'T.A. Pai Management Institute, Manipal' }
],

'om': [
    { value: 'iima', name: 'Indian Institute of Management, Ahmedabad' },
    { value: 'xlri', name: 'Xavier Labour Relations Institute, Jamshedpur' },
    { value: 'fms', name: 'Faculty of Management Studies, Delhi University' },
    { value: 'sibm', name: 'Symbiosis Institute of Business Management, Pune' },
    { value: 'tapmi', name: 'T.A. Pai Management Institute, Manipal' }
],

'hrm': [
    { value: 'iimr', name: 'Indian Institute of Management, Ranchi' },
    { value: 'xlri', name: 'Xavier Labour Relations Institute, Jamshedpur' },
    { value: 'fms', name: 'Faculty of Management Studies, Delhi University' },
    { value: 'sibm', name: 'Symbiosis Institute of Business Management, Pune' },
    { value: 'tiss', name: 'Tata Institute of Social Sciences, Mumbai' }
],

'a': [
    { value: 'iimc', name: 'Indian Institute of Management, Calcutta' },
    { value: 'nirm', name: 'National Institute of Retail Management, Bangalore' },
    { value: 'spjain', name: 'SP Jain Institute of Management and Research, Mumbai' },
    { value: 'xmim', name: 'Xavier Institute of Management, Bhubaneswar' },
    { value: 'simsr', name: 'Symbiosis Institute of Management Studies and Research, Pune' }
],

'e': [
    { value: 'iima', name: 'Indian Institute of Management, Ahmedabad' },
    { value: 'spi', name: 'SP Jain Institute of Management and Research, Mumbai' },
    { value: 'cmi', name: 'Centre for Management Development, Gurgaon' },
    { value: 'bschool', name: 'Birla School of Management, Jaipur' },
    { value: 'nmims', name: 'Narsee Monjee Institute of Management Studies, Mumbai' }
],










 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
     
     
     
     
     
     
     
     
     
     
     
 
 
    
     
 
 
     
 
 
     
 
 
 
     
     // Other fields like engineering, biotechnology, etc. remain unchanged...
 };
 
 // Alumni data
 const alumniData = {
     //m
 
'iimc': [
    { name: 'Rahul Mehta', position: 'Marketing Strategy Student', email: 'rahul.mehta@iimc.edu.in', phone: '888-777-6666' },
    { name: 'Anjali Nair', position: 'Digital Marketing Student', email: 'anjali.nair@iimc.edu.in', phone: '888-777-5555' }
],

'spjimr': [
    { name: 'Sandeep Kumar', position: 'Marketing Analytics Student', email: 'sandeep.kumar@spjimr.edu.in', phone: '888-777-6666' },
    { name: 'Pooja Desai', position: 'Consumer Insights Student', email: 'pooja.desai@spjimr.edu.in', phone: '888-777-5555' }
],

'mdi': [
    { name: 'Kunal Sharma', position: 'Brand Strategy Student', email: 'kunal.sharma@mdi.edu.in', phone: '888-777-6666' },
    { name: 'Sneha Rao', position: 'Marketing Communications Student', email: 'sneha.rao@mdi.edu.in', phone: '888-777-5555' }
],

'isb': [
    { name: 'Varun Gupta', position: 'Market Research Student', email: 'varun.gupta@isb.edu.in', phone: '888-777-6666' },
    { name: 'Neha Kapoor', position: 'Sales and Marketing Research Student', email: 'neha.kapoor@isb.edu.in', phone: '888-777-5555' }
],

'nmims': [
    { name: 'Akash Verma', position: 'Social Media Marketing Student', email: 'akash.verma@nmims.edu', phone: '888-777-6666' },
    { name: 'Ritu Shah', position: 'Digital Advertising Student', email: 'ritu.shah@nmims.edu', phone: '888-777-5555' }
],



//f



'iimah': [
    { name: 'Arjun Mehta', position: 'Financial Strategy Student', email: 'arjun.mehta@iimah.edu', phone: '888-777-6666' },
    { name: 'Richa Kumar', position: 'Corporate Finance Student', email: 'richa.kumar@iimah.edu', phone: '888-777-5555' }
],

'xlri': [
    { name: 'Sunil Kapoor', position: 'Financial Analytics Student', email: 'sunil.kapoor@xlri.edu', phone: '888-777-6666' },
    { name: 'Anushka Sinha', position: 'Investment Analysis Student', email: 'anushka.sinha@xlri.edu', phone: '888-777-5555' }
],

'fmsd': [
    { name: 'Ramesh Chandra', position: 'Strategic Finance Student', email: 'ramesh.chandra@fmsd.edu', phone: '888-777-6666' },
    { name: 'Neha Arora', position: 'Financial Risk Management Student', email: 'neha.arora@fmsd.edu', phone: '888-777-5555' }
],

'sibmp': [
    { name: 'Arun Sharma', position: 'International Finance Student', email: 'arun.sharma@sibmp.edu', phone: '888-777-6666' },
    { name: 'Meera Patel', position: 'Financial Markets Student', email: 'meera.patel@sibmp.edu', phone: '888-777-5555' }
],

'tapmi': [
    { name: 'Rajiv Singh', position: 'Financial Research Student', email: 'rajiv.singh@tapmi.edu', phone: '888-777-6666' },
    { name: 'Shreya Deshmukh', position: 'Investment Banking Student', email: 'shreya.deshmukh@tapmi.edu', phone: '888-777-5555' }
]
,



//om


'iima': [
    { name: 'Vikram Jain', position: 'Operations Management Student', email: 'vikram.jain@iima.ac.in', phone: '888-777-6666' },
    { name: 'Sanya Kapoor', position: 'Supply Chain Optimization Student', email: 'sanya.kapoor@iima.ac.in', phone: '888-777-5555' }
],

'xlri': [
    { name: 'Arun Desai', position: 'Operations Research Student', email: 'arun.desai@xlri.ac.in', phone: '888-777-6666' },
    { name: 'Ritu Sharma', position: 'Logistics and Supply Chain Student', email: 'ritu.sharma@xlri.ac.in', phone: '888-777-5555' }
],

'fms': [
    { name: 'Rajiv Verma', position: 'Operations Strategy Student', email: 'rajiv.verma@fms.edu', phone: '888-777-6666' },
    { name: 'Pooja Mehta', position: 'Production and Operations Student', email: 'pooja.mehta@fms.edu', phone: '888-777-5555' }
],

'sibm': [
    { name: 'Anil Joshi', position: 'Operations Management Student', email: 'anil.joshi@sibm.edu.in', phone: '888-777-6666' },
    { name: 'Nisha Patel', position: 'Supply Chain Management Student', email: 'nisha.patel@sibm.edu.in', phone: '888-777-5555' }
],

'tapmi': [
    { name: 'Rajesh Saini', position: 'Operational Efficiency Student', email: 'rajesh.saini@tapmi.edu.in', phone: '888-777-6666' },
    { name: 'Mita Gupta', position: 'Operations Analytics Student', email: 'mita.gupta@tapmi.edu.in', phone: '888-777-5555' }
],

//hrm


'iimr': [
    { name: 'Sanjay Verma', position: 'Human Resource Management Student', email: 'sanjay.verma@iimr.ac.in', phone: '888-777-6666' },
    { name: 'Ruchi Sharma', position: 'Employee Relations Student', email: 'ruchi.sharma@iimr.ac.in', phone: '888-777-5555' }
],

'xlri': [
    { name: 'Anil Sharma', position: 'HR Strategy Student', email: 'anil.sharma@xlri.ac.in', phone: '888-777-6666' },
    { name: 'Meera Jain', position: 'Organizational Development Student', email: 'meera.jain@xlri.ac.in', phone: '888-777-5555' }
],

'fms': [
    { name: 'Rajiv Kumar', position: 'Human Resource Management Student', email: 'rajiv.kumar@fms.edu', phone: '888-777-6666' },
    { name: 'Aarti Kapoor', position: 'Talent Acquisition Student', email: 'aarti.kapoor@fms.edu', phone: '888-777-5555' }
],

'sibm': [
    { name: 'Arvind Gupta', position: 'HRM Student', email: 'arvind.gupta@sibm.edu.in', phone: '888-777-6666' },
    { name: 'Sunita Reddy', position: 'HR Analytics Student', email: 'sunita.reddy@sibm.edu.in', phone: '888-777-5555' }
],

'tiss': [
    { name: 'Rajesh Patel', position: 'Human Resource Management Student', email: 'rajesh.patel@tiss.edu', phone: '888-777-6666' },
    { name: 'Priya Joshi', position: 'Organizational Psychology Student', email: 'priya.joshi@tiss.edu', phone: '888-777-5555' }
]
,



//a

'iimc': [
    { name: 'Ravi Patel', position: 'Financial Accounting Student', email: 'ravi.patel@iimc.edu.in', phone: '888-777-6666' },
    { name: 'Nisha Agarwal', position: 'Accounting and Auditing Student', email: 'nisha.agarwal@iimc.edu.in', phone: '888-777-5555' }
],

'nirm': [
    { name: 'Rajeev Joshi', position: 'Accounting Principles Student', email: 'rajeev.joshi@nirm.edu.in', phone: '888-777-6666' },
    { name: 'Simran Kapoor', position: 'Financial Management Student', email: 'simran.kapoor@nirm.edu.in', phone: '888-777-5555' }
],

'spjain': [
    { name: 'Ramesh Mehta', position: 'Advanced Accounting Student', email: 'ramesh.mehta@spjain.edu.in', phone: '888-777-6666' },
    { name: 'Anjali Desai', position: 'Forensic Accounting Student', email: 'anjali.desai@spjain.edu.in', phone: '888-777-5555' }
],

'xmim': [
    { name: 'Arun Kumar', position: 'Managerial Accounting Student', email: 'arun.kumar@xmim.edu.in', phone: '888-777-6666' },
    { name: 'Poonam Sharma', position: 'Accounting Systems Student', email: 'poonam.sharma@xmim.edu.in', phone: '888-777-5555' }
],

'simsr': [
    { name: 'Rajiv Singh', position: 'Cost and Management Accounting Student', email: 'rajiv.singh@simsr.edu.in', phone: '888-777-6666' },
    { name: 'Aditi Reddy', position: 'Accounting Information Systems Student', email: 'aditi.reddy@simsr.edu.in', phone: '888-777-5555' }
]
,

//e



'iima': [
    { name: 'Arvind Joshi', position: 'Entrepreneurship Development Student', email: 'arvind.joshi@iima.edu.in', phone: '888-777-6666' },
    { name: 'Pooja Mehta', position: 'Startup Growth Student', email: 'pooja.mehta@iima.edu.in', phone: '888-777-5555' }
],

'spi': [
    { name: 'Ramesh Patel', position: 'Entrepreneurial Strategy Student', email: 'ramesh.patel@spi.edu.in', phone: '888-777-6666' },
    { name: 'Sanya Kapoor', position: 'Venture Creation Student', email: 'sanya.kapoor@spi.edu.in', phone: '888-777-5555' }
],

'cmi': [
    { name: 'Anil Sharma', position: 'Innovative Business Models Student', email: 'anil.sharma@cmi.edu.in', phone: '888-777-6666' },
    { name: 'Ritu Singh', position: 'Entrepreneurial Ecosystem Student', email: 'ritu.singh@cmi.edu.in', phone: '888-777-5555' }
],

'bschool': [
    { name: 'Nitin Gupta', position: 'Startup Innovation Student', email: 'nitin.gupta@bschool.edu.in', phone: '888-777-6666' },
    { name: 'Priya Verma', position: 'Business Acceleration Student', email: 'priya.verma@bschool.edu.in', phone: '888-777-5555' }
],

'nmims': [
    { name: 'Kunal Joshi', position: 'Entrepreneurial Leadership Student', email: 'kunal.joshi@nmims.edu.in', phone: '888-777-6666' },
    { name: 'Richa Sharma', position: 'Innovation and Growth Student', email: 'richa.sharma@nmims.edu.in', phone: '888-777-5555' }
]
,



 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
   
     
 
     
 
 
     
 
 
 
 
 
 
 
 
 
 
 
 
 
     
 
   
 
     
 };
 
 // Update the list of colleges when a field is selected
 function updateCollegeOptions() {
     const fieldSelect = document.getElementById('field-select');
     const collegeSelect = document.getElementById('college-select');
     const selectedField = fieldSelect.value;
 
     // Clear existing options
     collegeSelect.innerHTML = '<option value="">Select College</option>';
 
     if (selectedField && collegeData[selectedField]) {
         collegeData[selectedField].forEach(college => {
             const option = document.createElement('option');
             option.value = college.value;
             option.textContent = college.name;
             collegeSelect.appendChild(option);
         });
     }
 }
 
 // Show alumni list based on selected college
 function showAlumniList() {
     const collegeSelect = document.getElementById('college-select');
     const selectedCollege = collegeSelect.value;
     const alumniList = document.getElementById('alumni-list');
 
     // Clear existing alumni list
     alumniList.innerHTML = '';
 
     if (selectedCollege && alumniData[selectedCollege]) {
         alumniData[selectedCollege].forEach(alumni => {
             const card = document.createElement('div');
             card.classList.add('alumni-card');
             card.innerHTML = `
                 <img src="https://via.placeholder.com/100x100" alt="${alumni.name}">
                 <h3>${alumni.name}</h3>
                 <p>${alumni.position}</p>
                 <p>Email: <a href="mailto:${alumni.email}">${alumni.email}</a></p>
                 <p>Phone: ${alumni.phone}</p>
             `;
             alumniList.appendChild(card);
         });
     }
 }
 