// College list for each field
const collegeData = {
    'bj': [
    { value: 'acj', name: 'Asian College of Journalism, Chennai' },
    { value: 'jm', name: 'Journalism Media Studies, Delhi' },
    { value: 'sps', name: 'Satyajit Ray Film and Television Institute, Kolkata' },
    { value: 'mcrc', name: 'Mass Communication Research Center, Delhi' },
    { value: 'tiss', name: 'Tata Institute of Social Sciences, Mumbai' }
],

'pj': [
    { value: 'jmc', name: 'Jagran Prakashan Media School, Noida' },
    { value: 'amity', name: 'Amity School of Communication, Noida' },
    { value: 'symbiosis', name: 'Symbiosis Institute of Media and Communication, Pune' },
    { value: 'xaviers', name: 'St. Xavier’s College, Mumbai' },
    { value: 'delhi', name: 'Delhi College of Journalism, Delhi' }
],

'oj': [
    { value: 'iimc', name: 'Indian Institute of Mass Communication, New Delhi' },
    { value: 'jmi', name: 'Jamia Millia Islamia, New Delhi' },
    { value: 'ncu', name: 'National University of Journalism and Communication, Hyderabad' },
    { value: 'mit', name: 'Maharashtra Institute of Technology, Pune' },
    { value: 'pca', name: 'Pune College of Arts, Pune' }
],
'ij': [
    { value: 'iimc', name: 'Indian Institute of Mass Communication, New Delhi' },
    { value: 'jmi', name: 'Jamia Millia Islamia, New Delhi' },
    { value: 'prl', name: 'Pune Research Laboratory, Pune' },
    { value: 'fms', name: 'Faculty of Media Studies, Mumbai' },
    { value: 'mcrp', name: 'Media and Communication Research Centre, Delhi' }
],

'pj': [
    { value: 'pjm', name: 'Photojournalism Institute of Mumbai, Mumbai' },
    { value: 'cjp', name: 'Centre for Journalism and Photography, Delhi' },
    { value: 'vji', name: 'Visual Journalism Institute, Bangalore' },
    { value: 'pgi', name: 'Photojournalism Graduate Institute, Pune' },
    { value: 'pii', name: 'Professional Institute of Image-making, Kolkata' }
],

'sj': [
    { value: 'ssj', name: 'Sports Journalism School, Delhi' },
    { value: 'asj', name: 'Academy of Sports Journalism, Mumbai' },
    { value: 'ssm', name: 'Sports Studies and Media College, Bangalore' },
    { value: 'sjk', name: 'Sports Journalism and Communication Institute, Kolkata' },
    { value: 'psj', name: 'Professional School of Sports Journalism, Chennai' }
],






 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
     
     
     
     
     
     
     
     
     
     
     
 
 
    
     
 
 
     
 
 
     
 
 
 
     
     // Other fields like engineering, biotechnology, etc. remain unchanged...
 };
 
 // Alumni data
 const alumniData = {
     //bj
 
 
 'acj': [
    { name: 'Ramesh Patel', position: 'Broadcast Journalism Student', email: 'ramesh.patel@acj.edu.in', phone: '999-888-7777' },
    { name: 'Anita Mehra', position: 'Media Studies Student', email: 'anita.mehr@acj.edu.in', phone: '999-888-6666' }
],

'jm': [
    { name: 'Sanjay Gupta', position: 'Broadcast Media Student', email: 'sanjay.gupta@jm.edu.in', phone: '999-888-5555' },
    { name: 'Deepa Rao', position: 'Journalism Student', email: 'deepa.rao@jm.edu.in', phone: '999-888-4444' }
],

'sps': [
    { name: 'Ravi Mehta', position: 'Film and Television Student', email: 'ravi.mehta@sps.edu.in', phone: '999-888-3333' },
    { name: 'Shalini Verma', position: 'Broadcast Media Student', email: 'shalini.verma@sps.edu.in', phone: '999-888-2222' }
],

'mcrc': [
    { name: 'Anil Kumar', position: 'Media Production Student', email: 'anil.kumar@mcrc.edu.in', phone: '999-888-1111' },
    { name: 'Meera Jain', position: 'Journalism Ethics Student', email: 'meera.jain@mcrc.edu.in', phone: '999-888-0000' }
],

'tiss': [
    { name: 'Rajeev Nair', position: 'Social Media and Journalism Student', email: 'rajeeve.nair@tiss.edu', phone: '999-777-8888' },
    { name: 'Sunita Sharma', position: 'Broadcast Media Student', email: 'sunita.sharma@tiss.edu', phone: '999-777-7777' }
]
,



//pj


'jmc': [
    { name: 'Rajiv Malhotra', position: 'Print Journalism Student', email: 'rajiv.malhotra@jmc.edu.in', phone: '999-888-7777' },
    { name: 'Aisha Gupta', position: 'Journalism Ethics Student', email: 'aisha.gupta@jmc.edu.in', phone: '999-888-6666' }
],

'amity': [
    { name: 'Vikram Sharma', position: 'Print Media Student', email: 'vikram.sharma@amity.edu', phone: '999-888-5555' },
    { name: 'Nisha Agarwal', position: 'Journalism Student', email: 'nisha.agarwal@amity.edu', phone: '999-888-4444' }
],

'symbiosis': [
    { name: 'Ankit Reddy', position: 'Media Studies Student', email: 'ankit.reddy@symbiosis.edu', phone: '999-888-3333' },
    { name: 'Shruti Patel', position: 'Print Journalism Student', email: 'shruti.patel@symbiosis.edu', phone: '999-888-2222' }
],

'xaviers': [
    { name: 'Ravi Kapoor', position: 'Print Journalism Student', email: 'ravi.kapoor@xaviers.edu', phone: '999-888-1111' },
    { name: 'Neha Joshi', position: 'Media Ethics Student', email: 'neha.joshi@xaviers.edu', phone: '999-888-0000' }
],

'delhi': [
    { name: 'Arvind Kumar', position: 'Journalism and Print Media Student', email: 'arvind.kumar@delhi.edu', phone: '999-777-8888' },
    { name: 'Sunita Mehta', position: 'Print Media Student', email: 'sunita.mehta@delhi.edu', phone: '999-777-7777' }
]
,




//oj



'iimc': [
    { name: 'Rajiv Malhotra', position: 'Online Journalism Student', email: 'rajiv.malhotra@iimc.edu.in', phone: '999-888-7777' },
    { name: 'Aisha Mehta', position: 'Digital Media Student', email: 'aisha.mehta@iimc.edu.in', phone: '999-888-6666' }
],

'jmi': [
    { name: 'Arjun Singh', position: 'Online Media Student', email: 'arjun.singh@jmi.ac.in', phone: '999-888-5555' },
    { name: 'Rina Sharma', position: 'Digital Journalism Student', email: 'rina.sharma@jmi.ac.in', phone: '999-888-4444' }
],

'ncu': [
    { name: 'Neelam Reddy', position: 'Internet Journalism Student', email: 'neelam.reddy@ncu.edu.in', phone: '999-888-3333' },
    { name: 'Siddharth Kumar', position: 'Online Media Student', email: 'siddharth.kumar@ncu.edu.in', phone: '999-888-2222' }
],

'mit': [
    { name: 'Priya Joshi', position: 'Digital Journalism Student', email: 'priya.joshi@mit.edu.in', phone: '999-888-1111' },
    { name: 'Ravi Mehta', position: 'Online Media Student', email: 'ravi.mehta@mit.edu.in', phone: '999-888-0000' }
],

'pca': [
    { name: 'Aman Kapoor', position: 'Web Journalism Student', email: 'aman.kapoor@pca.edu.in', phone: '999-777-8888' },
    { name: 'Kavita Arora', position: 'Digital Content Student', email: 'kavita.arora@pca.edu.in', phone: '999-777-7777' }
]
,



//ij


'iimc': [
    { name: 'Rahul Joshi', position: 'Investigative Journalism Student', email: 'rahul.joshi@iimc.edu.in', phone: '999-888-7777' },
    { name: 'Maya Verma', position: 'Investigative Reporting Student', email: 'maya.verma@iimc.edu.in', phone: '999-888-6666' }
],

'jmi': [
    { name: 'Neeraj Singh', position: 'Investigative Journalism Student', email: 'neeraj.singh@jmi.ac.in', phone: '999-888-5555' },
    { name: 'Ananya Gupta', position: 'Criminal Investigation Student', email: 'ananya.gupta@jmi.ac.in', phone: '999-888-4444' }
],

'prl': [
    { name: 'Sameer Rao', position: 'Investigative Reporting Student', email: 'sameer.rao@prl.edu.in', phone: '999-888-3333' },
    { name: 'Rina Sharma', position: 'Media Investigation Student', email: 'rina.sharma@prl.edu.in', phone: '999-888-2222' }
],

'fms': [
    { name: 'Arun Kumar', position: 'Investigative Journalism Student', email: 'arun.kumar@fms.edu.in', phone: '999-888-1111' },
    { name: 'Sita Patel', position: 'Research and Investigation Student', email: 'sita.patel@fms.edu.in', phone: '999-888-0000' }
],

'mcrp': [
    { name: 'Ravi Singh', position: 'Investigative Media Student', email: 'ravi.singh@mcrp.edu.in', phone: '999-777-8888' },
    { name: 'Anju Mehta', position: 'Investigative Journalism Student', email: 'anju.mehta@mcrp.edu.in', phone: '999-777-7777' }
]
,



//phj


'pjm': [
    { name: 'Rajiv Sethi', position: 'Photojournalism Student', email: 'rajiv.sethi@pjm.edu', phone: '999-888-7777' },
    { name: 'Meera Joshi', position: 'Visual Storytelling Student', email: 'meera.joshi@pjm.edu', phone: '999-888-6666' }
],

'cjp': [
    { name: 'Alok Mishra', position: 'Photojournalism Student', email: 'alok.mishra@cjp.edu', phone: '999-888-5555' },
    { name: 'Simran Kapoor', position: 'Editorial Photography Student', email: 'simran.kapoor@cjp.edu', phone: '999-888-4444' }
],

'vji': [
    { name: 'Rahul Nair', position: 'Visual Journalism Student', email: 'rahul.nair@vji.edu', phone: '999-888-3333' },
    { name: 'Ananya Mehta', position: 'Photographic Reporting Student', email: 'ananya.mehta@vji.edu', phone: '999-888-2222' }
],

'pgi': [
    { name: 'Mohit Reddy', position: 'Photojournalism Student', email: 'mohit.reddy@pgi.edu', phone: '999-888-1111' },
    { name: 'Aisha Khan', position: 'Documentary Photography Student', email: 'aisha.khan@pgi.edu', phone: '999-888-0000' }
],

'pii': [
    { name: 'Nikhil Verma', position: 'Photography and Journalism Student', email: 'nikhil.verma@pii.edu', phone: '999-777-8888' },
    { name: 'Sonal Sharma', position: 'Photo Editing Student', email: 'sonal.sharma@pii.edu', phone: '999-777-7777' }
]
,

//sj



'ssj': [
    { name: 'Ravi Kumar', position: 'Sports Journalism Student', email: 'ravi.kumar@ssj.edu', phone: '999-888-7777' },
    { name: 'Swati Deshmukh', position: 'Sports Media Student', email: 'swati.deshmukh@ssj.edu', phone: '999-888-6666' }
],

'asj': [
    { name: 'Rajiv Sharma', position: 'Sports Reporting Student', email: 'rajiv.sharma@asj.edu', phone: '999-888-5555' },
    { name: 'Neha Kapoor', position: 'Sports Communication Student', email: 'neha.kapoor@asj.edu', phone: '999-888-4444' }
],

'ssm': [
    { name: 'Arjun Reddy', position: 'Sports Journalism Student', email: 'arjun.reddy@ssm.edu', phone: '999-888-3333' },
    { name: 'Anjali Singh', position: 'Sports Media Student', email: 'anjali.singh@ssm.edu', phone: '999-888-2222' }
],

'sjk': [
    { name: 'Vikram Joshi', position: 'Sports News Student', email: 'vikram.joshi@sjk.edu', phone: '999-888-1111' },
    { name: 'Priya Menon', position: 'Sports Communication Student', email: 'priya.menon@sjk.edu', phone: '999-888-0000' }
],

'psj': [
    { name: 'Sunil Mehta', position: 'Sports Journalism Student', email: 'sunil.mehta@psj.edu', phone: '999-777-8888' },
    { name: 'Rina Joshi', position: 'Sports Media Student', email: 'rina.joshi@psj.edu', phone: '999-777-7777' }
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
 