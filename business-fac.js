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
    { name: 'Dr. Rahul Mehta', position: 'Marketing Strategy Expert', email: 'rahul.mehta@iimc.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Anjali Nair', position: 'Digital Marketing Specialist', email: 'anjali.nair@iimc.edu.in', phone: '888-777-5555' }
],

'spjimr': [
    { name: 'Dr. Sandeep Kumar', position: 'Marketing Analytics Professor', email: 'sandeep.kumar@spjimr.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Pooja Desai', position: 'Consumer Insights Specialist', email: 'pooja.desai@spjimr.edu.in', phone: '888-777-5555' }
],

'mdi': [
    { name: 'Dr. Kunal Sharma', position: 'Brand Strategy Professor', email: 'kunal.sharma@mdi.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Sneha Rao', position: 'Marketing Communications Specialist', email: 'sneha.rao@mdi.edu.in', phone: '888-777-5555' }
],

'isb': [
    { name: 'Dr. Varun Gupta', position: 'Market Research Expert', email: 'varun.gupta@isb.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Neha Kapoor', position: 'Sales and Marketing Researcher', email: 'neha.kapoor@isb.edu.in', phone: '888-777-5555' }
],

'nmims': [
    { name: 'Dr. Akash Verma', position: 'Social Media Marketing Professor', email: 'akash.verma@nmims.edu', phone: '888-777-6666' },
    { name: 'Dr. Ritu Shah', position: 'Digital Advertising Specialist', email: 'ritu.shah@nmims.edu', phone: '888-777-5555' }
],




//f



'iimah': [
    { name: 'Dr. Arjun Mehta', position: 'Financial Strategy Professor', email: 'arjun.mehta@iimah.edu', phone: '888-777-6666' },
    { name: 'Dr. Richa Kumar', position: 'Corporate Finance Specialist', email: 'richa.kumar@iimah.edu', phone: '888-777-5555' }
],

'xlri': [
    { name: 'Dr. Sunil Kapoor', position: 'Financial Analytics Expert', email: 'sunil.kapoor@xlri.edu', phone: '888-777-6666' },
    { name: 'Dr. Anushka Sinha', position: 'Investment Analysis Specialist', email: 'anushka.sinha@xlri.edu', phone: '888-777-5555' }
],

'fmsd': [
    { name: 'Dr. Ramesh Chandra', position: 'Strategic Finance Professor', email: 'ramesh.chandra@fmsd.edu', phone: '888-777-6666' },
    { name: 'Dr. Neha Arora', position: 'Financial Risk Management Specialist', email: 'neha.arora@fmsd.edu', phone: '888-777-5555' }
],

'sibmp': [
    { name: 'Dr. Arun Sharma', position: 'International Finance Scholar', email: 'arun.sharma@sibmp.edu', phone: '888-777-6666' },
    { name: 'Dr. Meera Patel', position: 'Financial Markets Expert', email: 'meera.patel@sibmp.edu', phone: '888-777-5555' }
],

'tapmi': [
    { name: 'Dr. Rajiv Singh', position: 'Financial Research Professor', email: 'rajiv.singh@tapmi.edu', phone: '888-777-6666' },
    { name: 'Dr. Shreya Deshmukh', position: 'Investment Banking Specialist', email: 'shreya.deshmukh@tapmi.edu', phone: '888-777-5555' }
],



//om


'iima': [
    { name: 'Dr. Vikram Jain', position: 'Operations Management Professor', email: 'vikram.jain@iima.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Sanya Kapoor', position: 'Supply Chain Optimization Specialist', email: 'sanya.kapoor@iima.ac.in', phone: '888-777-5555' }
],

'xlri': [
    { name: 'Dr. Arun Desai', position: 'Operations Research Specialist', email: 'arun.desai@xlri.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Ritu Sharma', position: 'Logistics and Supply Chain Expert', email: 'ritu.sharma@xlri.ac.in', phone: '888-777-5555' }
],

'fms': [
    { name: 'Dr. Rajiv Verma', position: 'Operations Strategy Specialist', email: 'rajiv.verma@fms.edu', phone: '888-777-6666' },
    { name: 'Dr. Pooja Mehta', position: 'Production and Operations Consultant', email: 'pooja.mehta@fms.edu', phone: '888-777-5555' }
],

'sibm': [
    { name: 'Dr. Anil Joshi', position: 'Operations Management Professor', email: 'anil.joshi@sibm.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Nisha Patel', position: 'Supply Chain Management Specialist', email: 'nisha.patel@sibm.edu.in', phone: '888-777-5555' }
],

'tapmi': [
    { name: 'Dr. Rajesh Saini', position: 'Operational Efficiency Professor', email: 'rajesh.saini@tapmi.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Mita Gupta', position: 'Operations Analytics Consultant', email: 'mita.gupta@tapmi.edu.in', phone: '888-777-5555' }
],




//hrm


'iimr': [
    { name: 'Dr. Sanjay Verma', position: 'Human Resource Management Professor', email: 'sanjay.verma@iimr.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Ruchi Sharma', position: 'Employee Relations Specialist', email: 'ruchi.sharma@iimr.ac.in', phone: '888-777-5555' }
],

'xlri': [
    { name: 'Dr. Anil Sharma', position: 'HR Strategy Consultant', email: 'anil.sharma@xlri.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Meera Jain', position: 'Organizational Development Analyst', email: 'meera.jain@xlri.ac.in', phone: '888-777-5555' }
],

'fms': [
    { name: 'Dr. Rajiv Kumar', position: 'Human Resource Management Expert', email: 'rajiv.kumar@fms.edu', phone: '888-777-6666' },
    { name: 'Dr. Aarti Kapoor', position: 'Talent Acquisition Specialist', email: 'aarti.kapoor@fms.edu', phone: '888-777-5555' }
],

'sibm': [
    { name: 'Dr. Arvind Gupta', position: 'HRM Professor', email: 'arvind.gupta@sibm.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Sunita Reddy', position: 'HR Analytics Consultant', email: 'sunita.reddy@sibm.edu.in', phone: '888-777-5555' }
],

'tiss': [
    { name: 'Dr. Rajesh Patel', position: 'Human Resource Management Scholar', email: 'rajesh.patel@tiss.edu', phone: '888-777-6666' },
    { name: 'Dr. Priya Joshi', position: 'Organizational Psychology Specialist', email: 'priya.joshi@tiss.edu', phone: '888-777-5555' }
],



//a

'iimc': [
    { name: 'Dr. Ravi Patel', position: 'Financial Accounting Professor', email: 'ravi.patel@iimc.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Nisha Agarwal', position: 'Accounting and Auditing Specialist', email: 'nisha.agarwal@iimc.edu.in', phone: '888-777-5555' }
],

'nirm': [
    { name: 'Dr. Rajeev Joshi', position: 'Accounting Principles Expert', email: 'rajeeve.joshi@nirm.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Simran Kapoor', position: 'Financial Management Specialist', email: 'simran.kapoor@nirm.edu.in', phone: '888-777-5555' }
],

'spjain': [
    { name: 'Dr. Ramesh Mehta', position: 'Advanced Accounting Scholar', email: 'ramesh.mehta@spjain.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Anjali Desai', position: 'Forensic Accounting Expert', email: 'anjali.desai@spjain.edu.in', phone: '888-777-5555' }
],

'xmim': [
    { name: 'Dr. Arun Kumar', position: 'Managerial Accounting Professor', email: 'arun.kumar@xmim.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Poonam Sharma', position: 'Accounting Systems Specialist', email: 'poonam.sharma@xmim.edu.in', phone: '888-777-5555' }
],

'simsr': [
    { name: 'Dr. Rajiv Singh', position: 'Cost and Management Accounting Researcher', email: 'rajiv.singh@simsr.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Aditi Reddy', position: 'Accounting Information Systems Specialist', email: 'aditi.reddy@simsr.edu.in', phone: '888-777-5555' }
],


//e



'iima': [
    { name: 'Dr. Arvind Joshi', position: 'Entrepreneurship Development Professor', email: 'arvind.joshi@iima.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Pooja Mehta', position: 'Startup Growth Specialist', email: 'pooja.mehta@iima.edu.in', phone: '888-777-5555' }
],

'spi': [
    { name: 'Dr. Ramesh Patel', position: 'Entrepreneurial Strategy Expert', email: 'ramesh.patel@spi.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Sanya Kapoor', position: 'Venture Creation Specialist', email: 'sanya.kapoor@spi.edu.in', phone: '888-777-5555' }
],

'cmi': [
    { name: 'Dr. Anil Sharma', position: 'Innovative Business Models Professor', email: 'anil.sharma@cmi.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Ritu Singh', position: 'Entrepreneurial Ecosystem Specialist', email: 'ritu.singh@cmi.edu.in', phone: '888-777-5555' }
],

'bschool': [
    { name: 'Dr. Nitin Gupta', position: 'Startup Innovation Expert', email: 'nitin.gupta@bschool.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Priya Verma', position: 'Business Acceleration Specialist', email: 'priya.verma@bschool.edu.in', phone: '888-777-5555' }
],

'nmims': [
    { name: 'Dr. Kunal Joshi', position: 'Entrepreneurial Leadership Professor', email: 'kunal.joshi@nmims.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Richa Sharma', position: 'Innovation and Growth Specialist', email: 'richa.sharma@nmims.edu.in', phone: '888-777-5555' }
],




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
   
     
 
     
 
 
     
 
 
 
 
 
 
 
 
 
 
 
 
 
     
 
   
 
     
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
 