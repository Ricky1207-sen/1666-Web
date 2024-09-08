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
    { name: 'Arjun Singh', position: 'Military Strategy Student', email: 'arjun.singh@nda.ac.in', phone: '888-777-6666' },
    { name: 'Rajesh Verma', position: 'Strategic Defense Operations Student', email: 'rajesh.verma@nda.ac.in', phone: '888-777-5555' }
],

'iaf': [
    { name: 'Suresh Rao', position: 'Air Warfare Strategy Student', email: 'suresh.rao@iaf.ac.in', phone: '888-777-6666' },
    { name: 'Priya Mehta', position: 'Aerospace Operations Strategy Student', email: 'priya.mehta@iaf.ac.in', phone: '888-777-5555' }
],

'ina': [
    { name: 'Arun Patel', position: 'Naval Operations Strategy Student', email: 'arun.patel@ina.ac.in', phone: '888-777-6666' },
    { name: 'Riya Sharma', position: 'Maritime Strategy Student', email: 'riya.sharma@ina.ac.in', phone: '888-777-5555' }
],

'sainik': [
    { name: 'Vikram Gupta', position: 'Military Strategy and Logistics Student', email: 'vikram.gupta@sainik.ac.in', phone: '888-777-6666' },
    { name: 'Aarti Kapoor', position: 'Defense Operations and Technology Student', email: 'aarti.kapoor@sainik.ac.in', phone: '888-777-5555' }
],

'military': [
    { name: 'Arvind Kumar', position: 'Strategic Operations and Planning Student', email: 'arvind.kumar@military.ac.in', phone: '888-777-6666' },
    { name: 'Neha Patel', position: 'Defense Tactics and Strategy Student', email: 'neha.patel@military.ac.in', phone: '888-777-5555' }
]
,


//dt


'nld': [
    { name: 'Rakesh Jain', position: 'Defense Technology Student', email: 'rakesh.jain@nld.edu.in', phone: '888-777-6666' },
    { name: 'Meera Desai', position: 'Military Engineering Student', email: 'meera.desai@nld.edu.in', phone: '888-777-5555' }
],

'cde': [
    { name: 'Arjun Singh', position: 'Aerospace Engineering Student', email: 'arjun.singh@cde.edu.in', phone: '888-777-6666' },
    { name: 'Ananya Roy', position: 'Defense Technology Student', email: 'ananya.roy@cde.edu.in', phone: '888-777-5555' }
],

'itd': [
    { name: 'Sanjay Kumar', position: 'Naval Engineering Student', email: 'sanjay.kumar@itd.edu.in', phone: '888-777-6666' },
    { name: 'Neha Mehta', position: 'Maritime Engineering Student', email: 'neha.mehta@itd.edu.in', phone: '888-777-5555' }
],

'tde': [
    { name: 'Arvind Sharma', position: 'Defense Systems Engineering Student', email: 'arvind.sharma@tde.edu.in', phone: '888-777-6666' },
    { name: 'Pooja Reddy', position: 'Military Engineering and Technology Student', email: 'pooja.reddy@tde.edu.in', phone: '888-777-5555' }
],

'dte': [
    { name: 'Rajeev Kumar', position: 'Strategic Defense Technology Student', email: 'rajeeve.kumar@dte.edu.in', phone: '888-777-6666' },
    { name: 'Suman Patel', position: 'Defense Engineering Systems Student', email: 'suman.patel@dte.edu.in', phone: '888-777-5555' }
],



 
 //ic

'icf': [
    { name: 'Rajesh Kumar', position: 'Intelligence Strategy Student', email: 'rajesh.kumar@icf.edu.in', phone: '888-777-6666' },
    { name: 'Aarti Mehta', position: 'Counterintelligence and Security Student', email: 'aarti.mehta@icf.edu.in', phone: '888-777-5555' }
],

'iis': [
    { name: 'Anil Joshi', position: 'Counterintelligence Operations Student', email: 'anil.joshi@iis.edu.in', phone: '888-777-6666' },
    { name: 'Priya Patel', position: 'Intelligence and Security Student', email: 'priya.patel@iis.edu.in', phone: '888-777-5555' }
],

'iic': [
    { name: 'Rajiv Reddy', position: 'Intelligence Systems Student', email: 'rajiv.reddy@iic.edu.in', phone: '888-777-6666' },
    { name: 'Neha Kapoor', position: 'Counterintelligence Operations Student', email: 'neha.kapoor@iic.edu.in', phone: '888-777-5555' }
],

'iif': [
    { name: 'Sanjay Mehta', position: 'Counterintelligence Systems Student', email: 'sanjay.mehta@iif.edu.in', phone: '888-777-6666' },
    { name: 'Riya Singh', position: 'Intelligence Strategy Student', email: 'riya.singh@iif.edu.in', phone: '888-777-5555' }
],

'cic': [
    { name: 'Vikram Sharma', position: 'Intelligence and Counterintelligence Student', email: 'vikram.sharma@cic.edu.in', phone: '888-777-6666' },
    { name: 'Anjali Gupta', position: 'Security and Intelligence Student', email: 'anjali.gupta@cic.edu.in', phone: '888-777-5555' }
]
,

 
 
 //ml


 'mlc': [
    { name: 'Ramesh Patel', position: 'Military Logistics Student', email: 'ramesh.patel@mlc.edu.in', phone: '888-777-6666' },
    { name: 'Priya Verma', position: 'Logistics Strategy Student', email: 'priya.verma@mlc.edu.in', phone: '888-777-5555' }
],

'scc': [
    { name: 'Neeraj Singh', position: 'Logistics Operations Student', email: 'neeraj.singh@scc.edu.in', phone: '888-777-6666' },
    { name: 'Ankit Sharma', position: 'Supply Chain Student', email: 'ankit.sharma@scc.edu.in', phone: '888-777-5555' }
],

'msc': [
    { name: 'Rajesh Joshi', position: 'Military Logistics Student', email: 'rajesh.joshi@msc.edu.in', phone: '888-777-6666' },
    { name: 'Rina Kumar', position: 'Military Supply Chain Student', email: 'rina.kumar@msc.edu.in', phone: '888-777-5555' }
],

'lsc': [
    { name: 'Vikram Singh', position: 'Logistics Management Student', email: 'vikram.singh@lsc.edu.in', phone: '888-777-6666' },
    { name: 'Aarti Patel', position: 'Supply Chain Operations Student', email: 'aarti.patel@lsc.edu.in', phone: '888-777-5555' }
],

'mls': [
    { name: 'Anil Gupta', position: 'Military Logistics Student', email: 'anil.gupta@mls.edu.in', phone: '888-777-6666' },
    { name: 'Meera Rao', position: 'Supply Chain Management Student', email: 'meera.rao@mls.edu.in', phone: '888-777-5555' }
]
,

 
 //di

'dpi': [
    { name: 'Ravi Kumar', position: 'Defense Policy Student', email: 'ravi.kumar@dpi.edu.in', phone: '888-777-6666' },
    { name: 'Sita Sharma', position: 'Strategic Defense Student', email: 'sita.sharma@dpi.edu.in', phone: '888-777-5555' }
],

'irri': [
    { name: 'Arjun Patel', position: 'Defense Relations Student', email: 'arjun.patel@irri.edu.in', phone: '888-777-6666' },
    { name: 'Lakshmi Rao', position: 'Military Strategy Student', email: 'lakshmi.rao@irri.edu.in', phone: '888-777-5555' }
],

'dipm': [
    { name: 'Manish Verma', position: 'Defense Policy Student', email: 'manish.verma@dipm.edu.in', phone: '888-777-6666' },
    { name: 'Ananya Joshi', position: 'Strategic Defense Student', email: 'ananya.joshi@dipm.edu.in', phone: '888-777-5555' }
],

'dpri': [
    { name: 'Ajay Mehta', position: 'Defense Research Student', email: 'ajay.mehta@dpri.edu.in', phone: '888-777-6666' },
    { name: 'Rina Kapoor', position: 'Military Policy Research Student', email: 'rina.kapoor@dpri.edu.in', phone: '888-777-5555' }
],

'dair': [
    { name: 'Nitin Sharma', position: 'Defense Strategy Student', email: 'nitin.sharma@dair.edu.in', phone: '888-777-6666' },
    { name: 'Neelam Singh', position: 'Strategic Defense Student', email: 'neelam.singh@dair.edu.in', phone: '888-777-5555' }
]
,

 
 
 //mm


 'mmc': [
    { name: 'Arjun Kapoor', position: 'Military Medicine Student', email: 'arjun.kapoor@mmc.edu.in', phone: '888-777-6666' },
    { name: 'Meera Deshmukh', position: 'Military Health Services Student', email: 'meera.deshmukh@mmc.edu.in', phone: '888-777-5555' }
],

'smc': [
    { name: 'Ravi Kumar', position: 'Military Health Student', email: 'ravi.kumar@smc.edu.in', phone: '888-777-6666' },
    { name: 'Sanya Gupta', position: 'Strategic Health Services Student', email: 'sanya.gupta@smc.edu.in', phone: '888-777-5555' }
],

'hsc': [
    { name: 'Ankit Sharma', position: 'Military Health Services Student', email: 'ankit.sharma@hsc.edu.in', phone: '888-777-6666' },
    { name: 'Kavita Singh', position: 'Military Medicine Research Student', email: 'kavita.singh@hsc.edu.in', phone: '888-777-5555' }
],

'mmhs': [
    { name: 'Manoj Verma', position: 'Military Medicine Research Student', email: 'manoj.verma@mmhs.edu.in', phone: '888-777-6666' },
    { name: 'Nisha Agarwal', position: 'Health Services Research Student', email: 'nisha.agarwal@mmhs.edu.in', phone: '888-777-5555' }
],

'mhs': [
    { name: 'Arun Patel', position: 'Military Health Sciences Student', email: 'arun.patel@mhs.edu.in', phone: '888-777-6666' },
    { name: 'Rina Sharma', position: 'Military Medicine Student', email: 'rina.sharma@mhs.edu.in', phone: '888-777-5555' }
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
 