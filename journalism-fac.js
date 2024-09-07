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
    { name: 'Dr. Ramesh Patel', position: 'Broadcast Journalism Professor', email: 'ramesh.patel@acj.edu.in', phone: '999-888-7777' },
    { name: 'Dr. Anita Mehra', position: 'Media Studies Specialist', email: 'anita.mehr@acj.edu.in', phone: '999-888-6666' }
],

'jm': [
    { name: 'Dr. Sanjay Gupta', position: 'Broadcast Media Analyst', email: 'sanjay.gupta@jm.edu.in', phone: '999-888-5555' },
    { name: 'Dr. Deepa Rao', position: 'Journalism Researcher', email: 'deepa.rao@jm.edu.in', phone: '999-888-4444' }
],

'sps': [
    { name: 'Dr. Ravi Mehta', position: 'Film and Television Expert', email: 'ravi.mehta@sps.edu.in', phone: '999-888-3333' },
    { name: 'Dr. Shalini Verma', position: 'Broadcast Media Specialist', email: 'shalini.verma@sps.edu.in', phone: '999-888-2222' }
],

'mcrc': [
    { name: 'Dr. Anil Kumar', position: 'Media Production Scholar', email: 'anil.kumar@mcrc.edu.in', phone: '999-888-1111' },
    { name: 'Dr. Meera Jain', position: 'Journalism Ethics Expert', email: 'meera.jain@mcrc.edu.in', phone: '999-888-0000' }
],

'tiss': [
    { name: 'Dr. Rajeev Nair', position: 'Social Media and Journalism Specialist', email: 'rajeeve.nair@tiss.edu', phone: '999-777-8888' },
    { name: 'Dr. Sunita Sharma', position: 'Broadcast Media Researcher', email: 'sunita.sharma@tiss.edu', phone: '999-777-7777' }
],



//pj


'jmc': [
    { name: 'Dr. Rajiv Malhotra', position: 'Print Journalism Professor', email: 'rajiv.malhotra@jmc.edu.in', phone: '999-888-7777' },
    { name: 'Dr. Aisha Gupta', position: 'Journalism Ethics Specialist', email: 'aisha.gupta@jmc.edu.in', phone: '999-888-6666' }
],

'amity': [
    { name: 'Dr. Vikram Sharma', position: 'Print Media Analyst', email: 'vikram.sharma@amity.edu', phone: '999-888-5555' },
    { name: 'Dr. Nisha Agarwal', position: 'Journalism Researcher', email: 'nisha.agarwal@amity.edu', phone: '999-888-4444' }
],

'symbiosis': [
    { name: 'Dr. Ankit Reddy', position: 'Media Studies Expert', email: 'ankit.reddy@symbiosis.edu', phone: '999-888-3333' },
    { name: 'Dr. Shruti Patel', position: 'Print Journalism Specialist', email: 'shruti.patel@symbiosis.edu', phone: '999-888-2222' }
],

'xaviers': [
    { name: 'Dr. Ravi Kapoor', position: 'Print Journalism Scholar', email: 'ravi.kapoor@xaviers.edu', phone: '999-888-1111' },
    { name: 'Dr. Neha Joshi', position: 'Media Ethics Expert', email: 'neha.joshi@xaviers.edu', phone: '999-888-0000' }
],

'delhi': [
    { name: 'Dr. Arvind Kumar', position: 'Journalism and Print Media Specialist', email: 'arvind.kumar@delhi.edu', phone: '999-777-8888' },
    { name: 'Dr. Sunita Mehta', position: 'Print Media Researcher', email: 'sunita.mehta@delhi.edu', phone: '999-777-7777' }
],




//oj



'iimc': [
    { name: 'Dr. Rajiv Malhotra', position: 'Online Journalism Professor', email: 'rajiv.malhotra@iimc.edu.in', phone: '999-888-7777' },
    { name: 'Dr. Aisha Mehta', position: 'Digital Media Specialist', email: 'aisha.mehta@iimc.edu.in', phone: '999-888-6666' }
],

'jmi': [
    { name: 'Dr. Arjun Singh', position: 'Online Media Analyst', email: 'arjun.singh@jmi.ac.in', phone: '999-888-5555' },
    { name: 'Dr. Rina Sharma', position: 'Digital Journalism Expert', email: 'rina.sharma@jmi.ac.in', phone: '999-888-4444' }
],

'ncu': [
    { name: 'Dr. Neelam Reddy', position: 'Internet Journalism Scholar', email: 'neelam.reddy@ncu.edu.in', phone: '999-888-3333' },
    { name: 'Dr. Siddharth Kumar', position: 'Online Media Researcher', email: 'siddharth.kumar@ncu.edu.in', phone: '999-888-2222' }
],

'mit': [
    { name: 'Dr. Priya Joshi', position: 'Digital Journalism Specialist', email: 'priya.joshi@mit.edu.in', phone: '999-888-1111' },
    { name: 'Dr. Ravi Mehta', position: 'Online Media Expert', email: 'ravi.mehta@mit.edu.in', phone: '999-888-0000' }
],

'pca': [
    { name: 'Dr. Aman Kapoor', position: 'Web Journalism Professor', email: 'aman.kapoor@pca.edu.in', phone: '999-777-8888' },
    { name: 'Dr. Kavita Arora', position: 'Digital Content Specialist', email: 'kavita.arora@pca.edu.in', phone: '999-777-7777' }
],




//ij


'iimc': [
    { name: 'Dr. Rahul Joshi', position: 'Investigative Journalism Professor', email: 'rahul.joshi@iimc.edu.in', phone: '999-888-7777' },
    { name: 'Dr. Maya Verma', position: 'Investigative Reporting Specialist', email: 'maya.verma@iimc.edu.in', phone: '999-888-6666' }
],

'jmi': [
    { name: 'Dr. Neeraj Singh', position: 'Investigative Journalism Expert', email: 'neeraj.singh@jmi.ac.in', phone: '999-888-5555' },
    { name: 'Dr. Ananya Gupta', position: 'Criminal Investigation Analyst', email: 'ananya.gupta@jmi.ac.in', phone: '999-888-4444' }
],

'prl': [
    { name: 'Dr. Sameer Rao', position: 'Investigative Reporting Scholar', email: 'sameer.rao@prl.edu.in', phone: '999-888-3333' },
    { name: 'Dr. Rina Sharma', position: 'Media Investigation Specialist', email: 'rina.sharma@prl.edu.in', phone: '999-888-2222' }
],

'fms': [
    { name: 'Dr. Arun Kumar', position: 'Investigative Journalism Specialist', email: 'arun.kumar@fms.edu.in', phone: '999-888-1111' },
    { name: 'Dr. Sita Patel', position: 'Research and Investigation Expert', email: 'sita.patel@fms.edu.in', phone: '999-888-0000' }
],

'mcrp': [
    { name: 'Dr. Ravi Singh', position: 'Investigative Media Scholar', email: 'ravi.singh@mcrp.edu.in', phone: '999-777-8888' },
    { name: 'Dr. Anju Mehta', position: 'Investigative Journalism Analyst', email: 'anju.mehta@mcrp.edu.in', phone: '999-777-7777' }
],



//phj


'pjm': [
    { name: 'Dr. Rajiv Sethi', position: 'Photojournalism Professor', email: 'rajiv.sethi@pjm.edu', phone: '999-888-7777' },
    { name: 'Dr. Meera Joshi', position: 'Visual Storytelling Specialist', email: 'meera.joshi@pjm.edu', phone: '999-888-6666' }
],

'cjp': [
    { name: 'Dr. Alok Mishra', position: 'Photojournalism Expert', email: 'alok.mishra@cjp.edu', phone: '999-888-5555' },
    { name: 'Dr. Simran Kapoor', position: 'Editorial Photography Analyst', email: 'simran.kapoor@cjp.edu', phone: '999-888-4444' }
],

'vji': [
    { name: 'Dr. Rahul Nair', position: 'Visual Journalism Scholar', email: 'rahul.nair@vji.edu', phone: '999-888-3333' },
    { name: 'Dr. Ananya Mehta', position: 'Photographic Reporting Specialist', email: 'ananya.mehta@vji.edu', phone: '999-888-2222' }
],

'pgi': [
    { name: 'Dr. Mohit Reddy', position: 'Photojournalism Theorist', email: 'mohit.reddy@pgi.edu', phone: '999-888-1111' },
    { name: 'Dr. Aisha Khan', position: 'Documentary Photography Expert', email: 'aisha.khan@pgi.edu', phone: '999-888-0000' }
],

'pii': [
    { name: 'Dr. Nikhil Verma', position: 'Photography and Journalism Professor', email: 'nikhil.verma@pii.edu', phone: '999-777-8888' },
    { name: 'Dr. Sonal Sharma', position: 'Photo Editing Specialist', email: 'sonal.sharma@pii.edu', phone: '999-777-7777' }
],



//sj



'ssj': [
    { name: 'Dr. Ravi Kumar', position: 'Sports Journalism Professor', email: 'ravi.kumar@ssj.edu', phone: '999-888-7777' },
    { name: 'Dr. Swati Deshmukh', position: 'Sports Media Specialist', email: 'swati.deshmukh@ssj.edu', phone: '999-888-6666' }
],

'asj': [
    { name: 'Dr. Rajiv Sharma', position: 'Sports Reporting Expert', email: 'rajiv.sharma@asj.edu', phone: '999-888-5555' },
    { name: 'Dr. Neha Kapoor', position: 'Sports Communication Analyst', email: 'neha.kapoor@asj.edu', phone: '999-888-4444' }
],

'ssm': [
    { name: 'Dr. Arjun Reddy', position: 'Sports Journalism Scholar', email: 'arjun.reddy@ssm.edu', phone: '999-888-3333' },
    { name: 'Dr. Anjali Singh', position: 'Sports Media Consultant', email: 'anjali.singh@ssm.edu', phone: '999-888-2222' }
],

'sjk': [
    { name: 'Dr. Vikram Joshi', position: 'Sports News Specialist', email: 'vikram.joshi@sjk.edu', phone: '999-888-1111' },
    { name: 'Dr. Priya Menon', position: 'Sports Communication Expert', email: 'priya.menon@sjk.edu', phone: '999-888-0000' }
],

'psj': [
    { name: 'Dr. Sunil Mehta', position: 'Sports Journalism Instructor', email: 'sunil.mehta@psj.edu', phone: '999-777-8888' },
    { name: 'Dr. Rina Joshi', position: 'Sports Media Specialist', email: 'rina.joshi@psj.edu', phone: '999-777-7777' }
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
 