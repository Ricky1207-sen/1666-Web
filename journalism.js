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
    { name: 'Dr. Anil Gupta', position: 'Broadcast Journalism Professor', email: 'anil.gupta@acj.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Priya Singh', position: 'Media Studies Specialist', email: 'priya.singh@acj.edu.in', phone: '888-777-5555' }
],

'jm': [
    { name: 'Dr. Rajesh Kumar', position: 'Broadcast Media Analyst', email: 'rajesh.kumar@jm.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Sneha Sharma', position: 'Journalism Researcher', email: 'sneha.sharma@jm.edu.in', phone: '888-777-5555' }
],

'sps': [
    { name: 'Dr. Vikram Rao', position: 'Film and Television Expert', email: 'vikram.rao@sps.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Neha Patel', position: 'Broadcast Media Specialist', email: 'neha.patel@sps.edu.in', phone: '888-777-5555' }
],

'mcrc': [
    { name: 'Dr. Aman Verma', position: 'Media Production Scholar', email: 'aman.verma@mcrc.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Kavita Joshi', position: 'Journalism Ethics Expert', email: 'kavita.joshi@mcrc.edu.in', phone: '888-777-5555' }
],

'tiss': [
    { name: 'Dr. Arjun Singh', position: 'Social Media and Journalism Specialist', email: 'arjun.singh@tiss.edu', phone: '888-777-6666' },
    { name: 'Dr. Meera Desai', position: 'Broadcast Media Researcher', email: 'meera.desai@tiss.edu', phone: '888-777-5555' }
],


//pj


'jmc': [
    { name: 'Dr. Anil Verma', position: 'Print Journalism Professor', email: 'anil.verma@jmc.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Priya Rao', position: 'Journalism Ethics Specialist', email: 'priya.rao@jmc.edu.in', phone: '888-777-5555' }
],

'amity': [
    { name: 'Dr. Rajesh Kumar', position: 'Print Media Analyst', email: 'rajesh.kumar@amity.edu', phone: '888-777-6666' },
    { name: 'Dr. Sneha Mehta', position: 'Journalism Researcher', email: 'sneha.mehta@amity.edu', phone: '888-777-5555' }
],

'symbiosis': [
    { name: 'Dr. Vikram Singh', position: 'Media Studies Expert', email: 'vikram.singh@symbiosis.edu', phone: '888-777-6666' },
    { name: 'Dr. Neha Desai', position: 'Print Journalism Specialist', email: 'neha.desai@symbiosis.edu', phone: '888-777-5555' }
],

'xaviers': [
    { name: 'Dr. Aman Joshi', position: 'Print Journalism Scholar', email: 'aman.joshi@xaviers.edu', phone: '888-777-6666' },
    { name: 'Dr. Kavita Sharma', position: 'Media Ethics Expert', email: 'kavita.sharma@xaviers.edu', phone: '888-777-5555' }
],

'delhi': [
    { name: 'Dr. Arjun Patel', position: 'Journalism and Print Media Specialist', email: 'arjun.patel@delhi.edu', phone: '888-777-6666' },
    { name: 'Dr. Meera Kapoor', position: 'Print Media Researcher', email: 'meera.kapoor@delhi.edu', phone: '888-777-5555' }
],



//oj



'iimc': [
    { name: 'Dr. Anil Sharma', position: 'Online Journalism Professor', email: 'anil.sharma@iimc.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Priya Rao', position: 'Digital Media Specialist', email: 'priya.rao@iimc.edu.in', phone: '888-777-5555' }
],

'jmi': [
    { name: 'Dr. Rajesh Verma', position: 'Online Media Analyst', email: 'rajesh.verma@jmi.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Sneha Gupta', position: 'Digital Journalism Expert', email: 'sneha.gupta@jmi.ac.in', phone: '888-777-5555' }
],

'ncu': [
    { name: 'Dr. Vikram Singh', position: 'Internet Journalism Scholar', email: 'vikram.singh@ncu.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Neha Patel', position: 'Online Media Researcher', email: 'neha.patel@ncu.edu.in', phone: '888-777-5555' }
],

'mit': [
    { name: 'Dr. Aman Joshi', position: 'Digital Journalism Specialist', email: 'aman.joshi@mit.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Kavita Sharma', position: 'Online Media Expert', email: 'kavita.sharma@mit.edu.in', phone: '888-777-5555' }
],

'pca': [
    { name: 'Dr. Arjun Patel', position: 'Web Journalism Professor', email: 'arjun.patel@pca.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Meera Kapoor', position: 'Digital Content Specialist', email: 'meera.kapoor@pca.edu.in', phone: '888-777-5555' }
],



//ij


'iimc': [
    { name: 'Dr. Anil Kapoor', position: 'Investigative Journalism Professor', email: 'anil.kapoor@iimc.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Priya Sinha', position: 'Investigative Reporting Specialist', email: 'priya.sinha@iimc.edu.in', phone: '888-777-5555' }
],

'jmi': [
    { name: 'Dr. Rajesh Mehta', position: 'Investigative Journalism Expert', email: 'rajesh.mehta@jmi.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Sneha Sharma', position: 'Criminal Investigation Analyst', email: 'sneha.sharma@jmi.ac.in', phone: '888-777-5555' }
],

'prl': [
    { name: 'Dr. Vikram Jain', position: 'Investigative Reporting Scholar', email: 'vikram.jain@prl.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Neha Kapoor', position: 'Media Investigation Specialist', email: 'neha.kapoor@prl.edu.in', phone: '888-777-5555' }
],

'fms': [
    { name: 'Dr. Aman Singh', position: 'Investigative Journalism Specialist', email: 'aman.singh@fms.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Kavita Joshi', position: 'Research and Investigation Expert', email: 'kavita.joshi@fms.edu.in', phone: '888-777-5555' }
],

'mcrp': [
    { name: 'Dr. Arjun Patel', position: 'Investigative Media Scholar', email: 'arjun.patel@mcrp.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Meera Singh', position: 'Investigative Journalism Analyst', email: 'meera.singh@mcrp.edu.in', phone: '888-777-5555' }
],


//pj


'pjm': [
    { name: 'Dr. Anil Gupta', position: 'Photojournalism Professor', email: 'anil.gupta@pjm.edu', phone: '888-777-6666' },
    { name: 'Dr. Priya Patel', position: 'Visual Storytelling Specialist', email: 'priya.patel@pjm.edu', phone: '888-777-5555' }
],

'cjp': [
    { name: 'Dr. Rajesh Mehta', position: 'Photojournalism Expert', email: 'rajesh.mehta@cjp.edu', phone: '888-777-6666' },
    { name: 'Dr. Sneha Rao', position: 'Editorial Photography Analyst', email: 'sneha.rao@cjp.edu', phone: '888-777-5555' }
],

'vji': [
    { name: 'Dr. Vikram Sharma', position: 'Visual Journalism Scholar', email: 'vikram.sharma@vji.edu', phone: '888-777-6666' },
    { name: 'Dr. Neha Singh', position: 'Photographic Reporting Specialist', email: 'neha.singh@vji.edu', phone: '888-777-5555' }
],

'pgi': [
    { name: 'Dr. Aman Verma', position: 'Photojournalism Theorist', email: 'aman.verma@pgi.edu', phone: '888-777-6666' },
    { name: 'Dr. Ritu Kapoor', position: 'Documentary Photography Expert', email: 'ritu.kapoor@pgi.edu', phone: '888-777-5555' }
],

'pii': [
    { name: 'Dr. Arjun Joshi', position: 'Photography and Journalism Professor', email: 'arjun.joshi@pii.edu', phone: '888-777-6666' },
    { name: 'Dr. Kavita Sharma', position: 'Photo Editing Specialist', email: 'kavita.sharma@pii.edu', phone: '888-777-5555' }
],


//sj



'ssj': [
    { name: 'Dr. Rajeev Mehta', position: 'Sports Journalism Professor', email: 'rajeeve.mehta@ssj.edu', phone: '888-777-6666' },
    { name: 'Dr. Ananya Roy', position: 'Sports Media Specialist', email: 'ananya.roy@ssj.edu', phone: '888-777-5555' }
],

'asj': [
    { name: 'Dr. Arun Patel', position: 'Sports Reporting Expert', email: 'arun.patel@asj.edu', phone: '888-777-6666' },
    { name: 'Dr. Priya Singh', position: 'Sports Communication Analyst', email: 'priya.singh@asj.edu', phone: '888-777-5555' }
],

'ssm': [
    { name: 'Dr. Vikram Sharma', position: 'Sports Journalism Scholar', email: 'vikram.sharma@ssm.edu', phone: '888-777-6666' },
    { name: 'Dr. Neha Gupta', position: 'Sports Media Consultant', email: 'neha.gupta@ssm.edu', phone: '888-777-5555' }
],

'sjk': [
    { name: 'Dr. Arjun Desai', position: 'Sports News Specialist', email: 'arjun.desai@sjk.edu', phone: '888-777-6666' },
    { name: 'Dr. Kavita Menon', position: 'Sports Communication Expert', email: 'kavita.menon@sjk.edu', phone: '888-777-5555' }
],

'psj': [
    { name: 'Dr. Sunil Kapoor', position: 'Sports Journalism Instructor', email: 'sunil.kapoor@psj.edu', phone: '888-777-6666' },
    { name: 'Dr. Meera Joshi', position: 'Sports Media Specialist', email: 'meera.joshi@psj.edu', phone: '888-777-5555' }
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
 