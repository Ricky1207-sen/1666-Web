// College list for each field
const collegeData = {
    'ms': [
    { value: 'nda', name: 'National Defence Academy, Pune' },
    { value: 'iaf', name: 'Indian Air Force Academy, Hyderabad' },
    { value: 'ina', name: 'Indian Naval Academy, Ezhimala' },
    { value: 'sainik', name: 'Sainik School, Ghorakhal' },
    { value: 'military', name: 'Military College of Telecommunication Engineering, Mhow' }
],

'dt': [
    { value: 'nld', name: 'National Defence University, Delhi' },
    { value: 'cde', name: 'Centre for Defence Engineering, Bengaluru' },
    { value: 'itd', name: 'Institute of Defence Technology and Development, Mumbai' },
    { value: 'tde', name: 'Technology and Defence Engineering Institute, Pune' },
    { value: 'dte', name: 'Defence Technology Engineering College, Chennai' }
],

'ic': [
    { value: 'icf', name: 'Institute of Counterintelligence and Forensics, Delhi' },
    { value: 'iis', name: 'Indian Intelligence School, Bengaluru' },
    { value: 'iic', name: 'Intelligence and Interrogation College, Mumbai' },
    { value: 'iif', name: 'Institute of Intelligence and Forensic Studies, Pune' },
    { value: 'cic', name: 'Centre for Intelligence and Counterintelligence, Chennai' }
],

'ml': [
    { value: 'mlc', name: 'Military Logistics College, Delhi' },
    { value: 'scc', name: 'Supply Chain College, Bengaluru' },
    { value: 'msc', name: 'Military Supply Chain Management Institute, Mumbai' },
    { value: 'lsc', name: 'Logistics and Supply Chain College, Pune' },
    { value: 'mls', name: 'Military Logistics and Supply Academy, Chennai' }
],

'di': [
    { value: 'dpi', name: 'Defence Policy Institute, Delhi' },
    { value: 'irri', name: 'International Relations and Research Institute, Bengaluru' },
    { value: 'dipm', name: 'Defence Policy and Management Institute, Mumbai' },
    { value: 'dpri', name: 'Defence Policy and Research Institute, Pune' },
    { value: 'dair', name: 'Defence and International Relations Academy, Chennai' }
],

'mm': [
    { value: 'mmc', name: 'Military Medicine College, Delhi' },
    { value: 'smc', name: 'Strategic Medicine College, Bengaluru' },
    { value: 'hsc', name: 'Health Services College, Mumbai' },
    { value: 'mmhs', name: 'Military Medicine and Health Sciences Institute, Pune' },
    { value: 'mhs', name: 'Military Health Sciences Academy, Chennai' }
],









 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
     
     
     
     
     
     
     
     
     
     
     
 
 
    
     
 
 
     
 
 
     
 
 
 
     
     // Other fields like engineering, biotechnology, etc. remain unchanged...
 };
 
 // Alumni data
 const alumniData = {
     //ms
 
 
'nda': [
    { name: 'Lt. Gen. Rajeev Malhotra', position: 'Military Strategy Expert', email: 'rajeeve.malhotra@nda.ac.in', phone: '888-777-6666' },
    { name: 'Col. Anil Sharma', position: 'Defense Operations Specialist', email: 'anil.sharma@nda.ac.in', phone: '888-777-5555' }
],

'iaf': [
    { name: 'Air Marshal Priya Patel', position: 'Air Defense Analyst', email: 'priya.patel@iaf.ac.in', phone: '888-777-6666' },
    { name: 'Group Capt. Vikram Singh', position: 'Aerospace Operations Expert', email: 'vikram.singh@iaf.ac.in', phone: '888-777-5555' }
],

'ina': [
    { name: 'Vice Adm. Rajesh Kumar', position: 'Naval Strategy Consultant', email: 'rajesh.kumar@ina.ac.in', phone: '888-777-6666' },
    { name: 'Commodore Meera Joshi', position: 'Maritime Operations Specialist', email: 'meera.joshi@ina.ac.in', phone: '888-777-5555' }
],

'sainik': [
    { name: 'Major Gen. Sanjay Gupta', position: 'Military Logistics Expert', email: 'sanjay.gupta@sainik.ac.in', phone: '888-777-6666' },
    { name: 'Lt. Col. Neha Sharma', position: 'Defense Technology Specialist', email: 'neha.sharma@sainik.ac.in', phone: '888-777-5555' }
],

'military': [
    { name: 'Brig. Ramesh Patel', position: 'Strategic Operations Consultant', email: 'ramesh.patel@military.ac.in', phone: '888-777-6666' },
    { name: 'Col. Aarti Desai', position: 'Defense Tactics Specialist', email: 'aarti.desai@military.ac.in', phone: '888-777-5555' }
],


//dt


 'nld': [
    { name: 'Lt. Gen. Arvind Kapoor', position: 'Defence Technology Expert', email: 'arvind.kapoor@nld.edu.in', phone: '888-777-6666' },
    { name: 'Col. Sunita Rao', position: 'Military Technology Specialist', email: 'sunita.rao@nld.edu.in', phone: '888-777-5555' }
],

'cde': [
    { name: 'Air Marshal Ankit Mehta', position: 'Aerospace Defense Analyst', email: 'ankit.mehta@cde.edu.in', phone: '888-777-6666' },
    { name: 'Group Capt. Suman Agarwal', position: 'Defense Engineering Consultant', email: 'suman.agarwal@cde.edu.in', phone: '888-777-5555' }
],

'itd': [
    { name: 'Vice Adm. Ravi Sharma', position: 'Naval Technology Consultant', email: 'ravi.sharma@itd.edu.in', phone: '888-777-6666' },
    { name: 'Commodore Aruna Patel', position: 'Maritime Technology Specialist', email: 'aruna.patel@itd.edu.in', phone: '888-777-5555' }
],

'tde': [
    { name: 'Major Gen. Rajiv Joshi', position: 'Defense Engineering Specialist', email: 'rajiv.joshi@tde.edu.in', phone: '888-777-6666' },
    { name: 'Lt. Col. Priya Kapoor', position: 'Military Operations Technology Expert', email: 'priya.kapoor@tde.edu.in', phone: '888-777-5555' }
],

'dte': [
    { name: 'Brig. Vikram Singh', position: 'Strategic Technology Analyst', email: 'vikram.singh@dte.edu.in', phone: '888-777-6666' },
    { name: 'Col. Neeta Reddy', position: 'Defense Systems Specialist', email: 'neeta.reddy@dte.edu.in', phone: '888-777-5555' }
],

 
 //ic


 'icf': [
    { name: 'Dr. Arvind Kapoor', position: 'Counterintelligence Specialist', email: 'arvind.kapoor@icf.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Suman Agarwal', position: 'Intelligence Analyst', email: 'suman.agarwal@icf.edu.in', phone: '888-777-5555' }
],

'iis': [
    { name: 'Lt. Gen. Ramesh Mehta', position: 'Intelligence Operations Expert', email: 'ramesh.mehta@iis.edu.in', phone: '888-777-6666' },
    { name: 'Col. Neha Sharma', position: 'Counterintelligence Analyst', email: 'neha.sharma@iis.edu.in', phone: '888-777-5555' }
],

'iic': [
    { name: 'Air Marshal Vikram Singh', position: 'Intelligence and Counterintelligence Consultant', email: 'vikram.singh@iic.edu.in', phone: '888-777-6666' },
    { name: 'Group Capt. Priya Patel', position: 'Intelligence Operations Specialist', email: 'priya.patel@iic.edu.in', phone: '888-777-5555' }
],

'iif': [
    { name: 'Vice Adm. Rajiv Joshi', position: 'Intelligence Systems Specialist', email: 'rajiv.joshi@iif.edu.in', phone: '888-777-6666' },
    { name: 'Commodore Anjali Rao', position: 'Counterintelligence Expert', email: 'anjali.rao@iif.edu.in', phone: '888-777-5555' }
],

'cic': [
    { name: 'Major Gen. Sanjay Gupta', position: 'Counterintelligence Strategist', email: 'sanjay.gupta@cic.edu.in', phone: '888-777-6666' },
    { name: 'Lt. Col. Riya Sharma', position: 'Intelligence Analyst', email: 'riya.sharma@cic.edu.in', phone: '888-777-5555' }
],
 
 
 //ml


 'mlc': [
    { name: 'Brig. Arvind Patel', position: 'Military Logistics Expert', email: 'arvind.patel@mlc.edu.in', phone: '888-777-6666' },
    { name: 'Col. Anu Sharma', position: 'Logistics Operations Specialist', email: 'anu.sharma@mlc.edu.in', phone: '888-777-5555' }
],

'scc': [
    { name: 'Air Marshal Rajeev Singh', position: 'Supply Chain Analyst', email: 'rajeeve.singh@scc.edu.in', phone: '888-777-6666' },
    { name: 'Group Capt. Priya Joshi', position: 'Logistics Coordinator', email: 'priya.joshi@scc.edu.in', phone: '888-777-5555' }
],

'msc': [
    { name: 'Vice Adm. Neha Gupta', position: 'Military Supply Chain Consultant', email: 'neha.gupta@msc.edu.in', phone: '888-777-6666' },
    { name: 'Commodore Vikram Rao', position: 'Supply Chain Management Specialist', email: 'vikram.rao@msc.edu.in', phone: '888-777-5555' }
],

'lsc': [
    { name: 'Major Gen. Sanjay Mehta', position: 'Logistics Operations Expert', email: 'sanjay.mehta@lsc.edu.in', phone: '888-777-6666' },
    { name: 'Lt. Col. Riya Patel', position: 'Supply Chain Management Analyst', email: 'riya.patel@lsc.edu.in', phone: '888-777-5555' }
],

'mls': [
    { name: 'Brig. Ramesh Kumar', position: 'Military Logistics Strategist', email: 'ramesh.kumar@mls.edu.in', phone: '888-777-6666' },
    { name: 'Col. Neha Sharma', position: 'Supply Chain Logistics Expert', email: 'neha.sharma@mls.edu.in', phone: '888-777-5555' }
],
 
 
 //di


 'dpi': [
    { name: 'Dr. Arvind Kapoor', position: 'Defence Policy Expert', email: 'arvind.kapoor@dpi.edu.in', phone: '888-777-6666' },
    { name: 'Prof. Anjali Reddy', position: 'International Relations Specialist', email: 'anjali.reddy@dpi.edu.in', phone: '888-777-5555' }
],

'irri': [
    { name: 'Dr. Rajesh Menon', position: 'International Relations Analyst', email: 'rajesh.menon@irri.edu.in', phone: '888-777-6666' },
    { name: 'Prof. Meera Sharma', position: 'Defence Policy Consultant', email: 'meera.sharma@irri.edu.in', phone: '888-777-5555' }
],

'dipm': [
    { name: 'Dr. Vikram Jain', position: 'Defence Policy Analyst', email: 'vikram.jain@dipm.edu.in', phone: '888-777-6666' },
    { name: 'Prof. Priya Gupta', position: 'International Relations Expert', email: 'priya.gupta@dipm.edu.in', phone: '888-777-5555' }
],

'dpri': [
    { name: 'Dr. Sanjay Patel', position: 'Defence Policy Researcher', email: 'sanjay.patel@dpri.edu.in', phone: '888-777-6666' },
    { name: 'Prof. Neha Agarwal', position: 'International Relations Researcher', email: 'neha.agarwal@dpri.edu.in', phone: '888-777-5555' }
],

'dair': [
    { name: 'Dr. Ramesh Kumar', position: 'Defence Policy Specialist', email: 'ramesh.kumar@dair.edu.in', phone: '888-777-6666' },
    { name: 'Prof. Aarti Singh', position: 'International Relations Analyst', email: 'aarti.singh@dair.edu.in', phone: '888-777-5555' }
],
 
 
 //mm


 'mmc': [
    { name: 'Dr. Rajiv Bhardwaj', position: 'Military Medicine Specialist', email: 'rajiv.bhardwaj@mmc.edu.in', phone: '888-777-6666' },
    { name: 'Prof. Aarti Deshmukh', position: 'Health Services Consultant', email: 'aarti.deshmukh@mmc.edu.in', phone: '888-777-5555' }
],

'smc': [
    { name: 'Dr. Vikram Reddy', position: 'Strategic Medicine Expert', email: 'vikram.reddy@smc.edu.in', phone: '888-777-6666' },
    { name: 'Prof. Neha Kumar', position: 'Military Health Specialist', email: 'neha.kumar@smc.edu.in', phone: '888-777-5555' }
],

'hsc': [
    { name: 'Dr. Anil Sharma', position: 'Health Services Expert', email: 'anil.sharma@hsc.edu.in', phone: '888-777-6666' },
    { name: 'Prof. Priya Singh', position: 'Military Medicine Consultant', email: 'priya.singh@hsc.edu.in', phone: '888-777-5555' }
],

'mmhs': [
    { name: 'Dr. Sanjay Mehta', position: 'Military Medicine Researcher', email: 'sanjay.mehta@mmhs.edu.in', phone: '888-777-6666' },
    { name: 'Prof. Ria Agarwal', position: 'Health Services Analyst', email: 'ria.agarwal@mmhs.edu.in', phone: '888-777-5555' }
],

'mhs': [
    { name: 'Dr. Ramesh Patel', position: 'Military Health Sciences Specialist', email: 'ramesh.patel@mhs.edu.in', phone: '888-777-6666' },
    { name: 'Prof. Aarti Sharma', position: 'Military Medicine Consultant', email: 'aarti.sharma@mhs.edu.in', phone: '888-777-5555' }
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
 