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
    { name: 'Lt. Gen. Arjun Singh', position: 'Military Strategy Consultant', email: 'arjun.singh@nda.ac.in', phone: '888-777-6666' },
    { name: 'Col. Rajesh Verma', position: 'Strategic Defense Operations Specialist', email: 'rajesh.verma@nda.ac.in', phone: '888-777-5555' }
],

'iaf': [
    { name: 'Air Marshal Suresh Rao', position: 'Air Warfare Strategy Analyst', email: 'suresh.rao@iaf.ac.in', phone: '888-777-6666' },
    { name: 'Group Capt. Priya Mehta', position: 'Aerospace Operations Strategist', email: 'priya.mehta@iaf.ac.in', phone: '888-777-5555' }
],

'ina': [
    { name: 'Vice Adm. Arun Patel', position: 'Naval Operations Strategy Expert', email: 'arun.patel@ina.ac.in', phone: '888-777-6666' },
    { name: 'Commodore Riya Sharma', position: 'Maritime Strategy Specialist', email: 'riya.sharma@ina.ac.in', phone: '888-777-5555' }
],

'sainik': [
    { name: 'Major Gen. Vikram Gupta', position: 'Military Strategy and Logistics Expert', email: 'vikram.gupta@sainik.ac.in', phone: '888-777-6666' },
    { name: 'Lt. Col. Aarti Kapoor', position: 'Defense Operations and Technology Specialist', email: 'aarti.kapoor@sainik.ac.in', phone: '888-777-5555' }
],

'military': [
    { name: 'Brig. Arvind Kumar', position: 'Strategic Operations and Planning Consultant', email: 'arvind.kumar@military.ac.in', phone: '888-777-6666' },
    { name: 'Col. Neha Patel', position: 'Defense Tactics and Strategy Specialist', email: 'neha.patel@military.ac.in', phone: '888-777-5555' }
],


//dt


'nld': [
    { name: 'Lt. Gen. Rakesh Jain', position: 'Defense Technology Consultant', email: 'rakesh.jain@nld.edu.in', phone: '888-777-6666' },
    { name: 'Col. Meera Desai', position: 'Military Engineering Specialist', email: 'meera.desai@nld.edu.in', phone: '888-777-5555' }
],

'cde': [
    { name: 'Air Marshal Arjun Singh', position: 'Aerospace Engineering Strategist', email: 'arjun.singh@cde.edu.in', phone: '888-777-6666' },
    { name: 'Group Capt. Ananya Roy', position: 'Defense Technology Consultant', email: 'ananya.roy@cde.edu.in', phone: '888-777-5555' }
],

'itd': [
    { name: 'Vice Adm. Sanjay Kumar', position: 'Naval Engineering Expert', email: 'sanjay.kumar@itd.edu.in', phone: '888-777-6666' },
    { name: 'Commodore Neha Mehta', position: 'Maritime Engineering Specialist', email: 'neha.mehta@itd.edu.in', phone: '888-777-5555' }
],

'tde': [
    { name: 'Major Gen. Arvind Sharma', position: 'Defense Systems Engineer', email: 'arvind.sharma@tde.edu.in', phone: '888-777-6666' },
    { name: 'Lt. Col. Pooja Reddy', position: 'Military Engineering and Technology Specialist', email: 'pooja.reddy@tde.edu.in', phone: '888-777-5555' }
],

'dte': [
    { name: 'Brig. Rajeev Kumar', position: 'Strategic Defense Technology Analyst', email: 'rajeeve.kumar@dte.edu.in', phone: '888-777-6666' },
    { name: 'Col. Suman Patel', position: 'Defense Engineering Systems Specialist', email: 'suman.patel@dte.edu.in', phone: '888-777-5555' }
],


 
 //ic


'icf': [
    { name: 'Dr. Rajesh Kumar', position: 'Intelligence Strategy Expert', email: 'rajesh.kumar@icf.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Aarti Mehta', position: 'Counterintelligence and Security Analyst', email: 'aarti.mehta@icf.edu.in', phone: '888-777-5555' }
],

'iis': [
    { name: 'Lt. Gen. Anil Joshi', position: 'Counterintelligence Operations Expert', email: 'anil.joshi@iis.edu.in', phone: '888-777-6666' },
    { name: 'Col. Priya Patel', position: 'Intelligence and Security Analyst', email: 'priya.patel@iis.edu.in', phone: '888-777-5555' }
],

'iic': [
    { name: 'Air Marshal Rajiv Reddy', position: 'Intelligence Systems Consultant', email: 'rajiv.reddy@iic.edu.in', phone: '888-777-6666' },
    { name: 'Group Capt. Neha Kapoor', position: 'Counterintelligence Operations Specialist', email: 'neha.kapoor@iic.edu.in', phone: '888-777-5555' }
],

'iif': [
    { name: 'Vice Adm. Sanjay Mehta', position: 'Counterintelligence Systems Expert', email: 'sanjay.mehta@iif.edu.in', phone: '888-777-6666' },
    { name: 'Commodore Riya Singh', position: 'Intelligence Strategy Specialist', email: 'riya.singh@iif.edu.in', phone: '888-777-5555' }
],

'cic': [
    { name: 'Major Gen. Vikram Sharma', position: 'Intelligence and Counterintelligence Strategist', email: 'vikram.sharma@cic.edu.in', phone: '888-777-6666' },
    { name: 'Lt. Col. Anjali Gupta', position: 'Security and Intelligence Analyst', email: 'anjali.gupta@cic.edu.in', phone: '888-777-5555' }
],

 
 
 //ml


 'mlc': [
    { name: 'Brig. Ramesh Patel', position: 'Military Supply Chain Expert', email: 'ramesh.patel@mlc.edu.in', phone: '888-777-6666' },
    { name: 'Col. Priya Verma', position: 'Logistics Strategy Specialist', email: 'priya.verma@mlc.edu.in', phone: '888-777-5555' }
],

'scc': [
    { name: 'Air Marshal Neeraj Singh', position: 'Logistics Operations Analyst', email: 'neeraj.singh@scc.edu.in', phone: '888-777-6666' },
    { name: 'Group Capt. Ankit Sharma', position: 'Supply Chain Coordinator', email: 'ankit.sharma@scc.edu.in', phone: '888-777-5555' }
],

'msc': [
    { name: 'Vice Adm. Rajesh Joshi', position: 'Military Logistics Consultant', email: 'rajesh.joshi@msc.edu.in', phone: '888-777-6666' },
    { name: 'Commodore Rina Kumar', position: 'Military Logistics Specialist', email: 'rina.kumar@msc.edu.in', phone: '888-777-5555' }
],

'lsc': [
    { name: 'Major Gen. Vikram Singh', position: 'Logistics Management Expert', email: 'vikram.singh@lsc.edu.in', phone: '888-777-6666' },
    { name: 'Lt. Col. Aarti Patel', position: 'Supply Chain Operations Analyst', email: 'aarti.patel@lsc.edu.in', phone: '888-777-5555' }
],

'mls': [
    { name: 'Brig. Anil Gupta', position: 'Military Logistics Consultant', email: 'anil.gupta@mls.edu.in', phone: '888-777-6666' },
    { name: 'Col. Meera Rao', position: 'Supply Chain Management Specialist', email: 'meera.rao@mls.edu.in', phone: '888-777-5555' }
],

 
 //di

'dpi': [
    { name: 'Dr. Ravi Kumar', position: 'Defense Policy Expert', email: 'ravi.kumar@dpi.edu.in', phone: '888-777-6666' },
    { name: 'Prof. Sita Sharma', position: 'Strategic Defense Specialist', email: 'sita.sharma@dpi.edu.in', phone: '888-777-5555' }
],

'irri': [
    { name: 'Dr. Arjun Patel', position: 'Defense Relations Analyst', email: 'arjun.patel@irri.edu.in', phone: '888-777-6666' },
    { name: 'Prof. Lakshmi Rao', position: 'Military Strategy Consultant', email: 'lakshmi.rao@irri.edu.in', phone: '888-777-5555' }
],

'dipm': [
    { name: 'Dr. Manish Verma', position: 'Defense Policy Analyst', email: 'manish.verma@dipm.edu.in', phone: '888-777-6666' },
    { name: 'Prof. Ananya Joshi', position: 'Strategic Defense Expert', email: 'ananya.joshi@dipm.edu.in', phone: '888-777-5555' }
],

'dpri': [
    { name: 'Dr. Ajay Mehta', position: 'Defense Research Specialist', email: 'ajay.mehta@dpri.edu.in', phone: '888-777-6666' },
    { name: 'Prof. Rina Kapoor', position: 'Military Policy Researcher', email: 'rina.kapoor@dpri.edu.in', phone: '888-777-5555' }
],

'dair': [
    { name: 'Dr. Nitin Sharma', position: 'Defense Strategy Specialist', email: 'nitin.sharma@dair.edu.in', phone: '888-777-6666' },
    { name: 'Prof. Neelam Singh', position: 'Strategic Defense Analyst', email: 'neelam.singh@dair.edu.in', phone: '888-777-5555' }
],

 
 
 //mm


 'mmc': [
    { name: 'Dr. Arjun Kapoor', position: 'Military Medicine Consultant', email: 'arjun.kapoor@mmc.edu.in', phone: '888-777-6666' },
    { name: 'Prof. Meera Deshmukh', position: 'Military Health Services Expert', email: 'meera.deshmukh@mmc.edu.in', phone: '888-777-5555' }
],

'smc': [
    { name: 'Dr. Ravi Kumar', position: 'Military Health Specialist', email: 'ravi.kumar@smc.edu.in', phone: '888-777-6666' },
    { name: 'Prof. Sanya Gupta', position: 'Strategic Health Services Consultant', email: 'sanya.gupta@smc.edu.in', phone: '888-777-5555' }
],

'hsc': [
    { name: 'Dr. Ankit Sharma', position: 'Military Health Services Specialist', email: 'ankit.sharma@hsc.edu.in', phone: '888-777-6666' },
    { name: 'Prof. Kavita Singh', position: 'Military Medicine Research Analyst', email: 'kavita.singh@hsc.edu.in', phone: '888-777-5555' }
],

'mmhs': [
    { name: 'Dr. Manoj Verma', position: 'Military Medicine Research Specialist', email: 'manoj.verma@mmhs.edu.in', phone: '888-777-6666' },
    { name: 'Prof. Nisha Agarwal', position: 'Health Services Research Analyst', email: 'nisha.agarwal@mmhs.edu.in', phone: '888-777-5555' }
],

'mhs': [
    { name: 'Dr. Arun Patel', position: 'Military Health Sciences Consultant', email: 'arun.patel@mhs.edu.in', phone: '888-777-6666' },
    { name: 'Prof. Rina Sharma', position: 'Military Medicine Specialist', email: 'rina.sharma@mhs.edu.in', phone: '888-777-5555' }
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
 