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
    { name: 'Dr. Anil Gupta', position: 'Marketing Strategy Professor', email: 'anil.gupta@iimc.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Priya Singh', position: 'Digital Marketing Specialist', email: 'priya.singh@iimc.edu.in', phone: '888-777-5555' }
],

'spjimr': [
    { name: 'Dr. Rajesh Kumar', position: 'Marketing Analytics Expert', email: 'rajesh.kumar@spjimr.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Sneha Sharma', position: 'Consumer Behavior Researcher', email: 'sneha.sharma@spjimr.edu.in', phone: '888-777-5555' }
],

'mdi': [
    { name: 'Dr. Vikram Rao', position: 'Brand Management Specialist', email: 'vikram.rao@mdi.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Neha Patel', position: 'Marketing Communications Expert', email: 'neha.patel@mdi.edu.in', phone: '888-777-5555' }
],

'isb': [
    { name: 'Dr. Aman Verma', position: 'Market Research Scholar', email: 'aman.verma@isb.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Kavita Joshi', position: 'Sales and Marketing Expert', email: 'kavita.joshi@isb.edu.in', phone: '888-777-5555' }
],

'nmims': [
    { name: 'Dr. Arjun Singh', position: 'Social Media Marketing Specialist', email: 'arjun.singh@nmims.edu', phone: '888-777-6666' },
    { name: 'Dr. Meera Desai', position: 'Digital Advertising Researcher', email: 'meera.desai@nmims.edu', phone: '888-777-5555' }
],



//f



'iimah': [
    { name: 'Dr. Suresh Rao', position: 'Marketing Strategy Professor', email: 'suresh.rao@iimah.edu', phone: '888-777-6666' },
    { name: 'Dr. Meena Kapoor', position: 'Digital Marketing Specialist', email: 'meena.kapoor@iimah.edu', phone: '888-777-5555' }
],

'xlri': [
    { name: 'Dr. Rajiv Patel', position: 'Marketing Analytics Expert', email: 'rajiv.patel@xlri.edu', phone: '888-777-6666' },
    { name: 'Dr. Aarti Sharma', position: 'Consumer Behavior Analyst', email: 'aarti.sharma@xlri.edu', phone: '888-777-5555' }
],

'fmsd': [
    { name: 'Dr. Vinod Mehta', position: 'Strategic Marketing Professor', email: 'vinod.mehta@fmsd.edu', phone: '888-777-6666' },
    { name: 'Dr. Pooja Singh', position: 'Brand Management Specialist', email: 'pooja.singh@fmsd.edu', phone: '888-777-5555' }
],

'sibmp': [
    { name: 'Dr. Rohit Sen', position: 'International Marketing Scholar', email: 'rohit.sen@sibmp.edu', phone: '888-777-6666' },
    { name: 'Dr. Priya Verma', position: 'Advertising and Promotion Expert', email: 'priya.verma@sibmp.edu', phone: '888-777-5555' }
],

'tapmi': [
    { name: 'Dr. Anil Sharma', position: 'Marketing Research Professor', email: 'anil.sharma@tapmi.edu', phone: '888-777-6666' },
    { name: 'Dr. Kavita Desai', position: 'Retail Marketing Specialist', email: 'kavita.desai@tapmi.edu', phone: '888-777-5555' }
],



//om


'iima': [
    { name: 'Dr. Rajesh Gupta', position: 'Operations Management Professor', email: 'rajesh.gupta@iima.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Neha Bhatia', position: 'Supply Chain Specialist', email: 'neha.bhatia@iima.ac.in', phone: '888-777-5555' }
],

'xlri': [
    { name: 'Dr. Sandeep Kumar', position: 'Operations Research Expert', email: 'sandeep.kumar@xlri.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Priya Rao', position: 'Logistics Management Specialist', email: 'priya.rao@xlri.ac.in', phone: '888-777-5555' }
],

'fms': [
    { name: 'Dr. Amit Sharma', position: 'Operations Strategy Professor', email: 'amit.sharma@fms.edu', phone: '888-777-6666' },
    { name: 'Dr. Aarti Singh', position: 'Production Management Consultant', email: 'aarti.singh@fms.edu', phone: '888-777-5555' }
],

'sibm': [
    { name: 'Dr. Vikram Patel', position: 'Operations Management Scholar', email: 'vikram.patel@sibm.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Sneha Kumar', position: 'Supply Chain Management Expert', email: 'sneha.kumar@sibm.edu.in', phone: '888-777-5555' }
],

'tapmi': [
    { name: 'Dr. Anil Mehta', position: 'Operational Excellence Professor', email: 'anil.mehta@tapmi.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Kavita Sharma', position: 'Operations Analytics Specialist', email: 'kavita.sharma@tapmi.edu.in', phone: '888-777-5555' }
],



//hrm


'iimr': [
    { name: 'Dr. Rajesh Singh', position: 'HRM Professor', email: 'rajesh.singh@iimr.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Aarti Mehta', position: 'Human Resources Specialist', email: 'aarti.mehta@iimr.ac.in', phone: '888-777-5555' }
],

'xlri': [
    { name: 'Dr. Sandeep Sharma', position: 'HR Strategy Expert', email: 'sandeep.sharma@xlri.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Priya Kumar', position: 'Organizational Behavior Analyst', email: 'priya.kumar@xlri.ac.in', phone: '888-777-5555' }
],

'fms': [
    { name: 'Dr. Amit Desai', position: 'HRM Consultant', email: 'amit.desai@fms.edu', phone: '888-777-6666' },
    { name: 'Dr. Neha Patel', position: 'Talent Management Specialist', email: 'neha.patel@fms.edu', phone: '888-777-5555' }
],

'sibm': [
    { name: 'Dr. Vikram Rao', position: 'Human Resources Professor', email: 'vikram.rao@sibm.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Sneha Gupta', position: 'HR Analytics Expert', email: 'sneha.gupta@sibm.edu.in', phone: '888-777-5555' }
],

'tiss': [
    { name: 'Dr. Anil Kapoor', position: 'HRM Scholar', email: 'anil.kapoor@tiss.edu', phone: '888-777-6666' },
    { name: 'Dr. Kavita Joshi', position: 'Workplace Psychology Specialist', email: 'kavita.joshi@tiss.edu', phone: '888-777-5555' }
],


//a


'iimc': [
    { name: 'Dr. Anil Kumar', position: 'Accounting Professor', email: 'anil.kumar@iimc.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Priya Mehta', position: 'Financial Accounting Specialist', email: 'priya.mehta@iimc.edu.in', phone: '888-777-5555' }
],

'nirm': [
    { name: 'Dr. Rajesh Verma', position: 'Accounting Expert', email: 'rajesh.verma@nirm.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Ananya Roy', position: 'Managerial Accounting Specialist', email: 'ananya.roy@nirm.edu.in', phone: '888-777-5555' }
],

'spjain': [
    { name: 'Dr. Vikram Sharma', position: 'Accounting Scholar', email: 'vikram.sharma@spjain.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Neha Patel', position: 'Taxation Expert', email: 'neha.patel@spjain.edu.in', phone: '888-777-5555' }
],

'xmim': [
    { name: 'Dr. Arjun Singh', position: 'Corporate Accounting Professor', email: 'arjun.singh@xmim.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Meera Desai', position: 'Financial Reporting Specialist', email: 'meera.desai@xmim.edu.in', phone: '888-777-5555' }
],

'simsr': [
    { name: 'Dr. Amit Kumar', position: 'Accounting Researcher', email: 'amit.kumar@simsr.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Sneha Gupta', position: 'Cost Accounting Specialist', email: 'sneha.gupta@simsr.edu.in', phone: '888-777-5555' }
],



//e



'iima': [
    { name: 'Dr. Rajesh Patel', position: 'Entrepreneurship Professor', email: 'rajesh.patel@iima.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Ananya Sharma', position: 'Startup Specialist', email: 'ananya.sharma@iima.edu.in', phone: '888-777-5555' }
],

'spi': [
    { name: 'Dr. Vikram Rao', position: 'Entrepreneurship Expert', email: 'vikram.rao@spi.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Neha Gupta', position: 'Venture Capital Specialist', email: 'neha.gupta@spi.edu.in', phone: '888-777-5555' }
],

'cmi': [
    { name: 'Dr. Arjun Singh', position: 'Innovative Business Strategies Professor', email: 'arjun.singh@cmi.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Meera Joshi', position: 'Entrepreneurial Development Specialist', email: 'meera.joshi@cmi.edu.in', phone: '888-777-5555' }
],

'bschool': [
    { name: 'Dr. Amit Kumar', position: 'Startup Ecosystem Expert', email: 'amit.kumar@bschool.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Sneha Patel', position: 'Business Incubation Specialist', email: 'sneha.patel@bschool.edu.in', phone: '888-777-5555' }
],

'nmims': [
    { name: 'Dr. Sunil Kapoor', position: 'Entrepreneurial Ventures Professor', email: 'sunil.kapoor@nmims.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Meera Desai', position: 'Innovation Management Specialist', email: 'meera.desai@nmims.edu.in', phone: '888-777-5555' }
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
 