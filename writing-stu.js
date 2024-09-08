// College list for each field
const collegeData = {
    'cw': [
    { value: 'jnu', name: 'Jawaharlal Nehru University, Delhi' },
    { value: 'du', name: 'University of Delhi, Delhi' },
    { value: 'snu', name: 'Shiv Nadar University, Greater Noida' },
    { value: 'ftii', name: 'Film and Television Institute of India, Pune' },
    { value: 'srcc', name: 'Sri Ram College of Commerce, Delhi' }
],

'tw': [
    { value: 'jnu', name: 'Jawaharlal Nehru University, Delhi' },
    { value: 'du', name: 'University of Delhi, Delhi' },
    { value: 'snu', name: 'Shiv Nadar University, Greater Noida' },
    { value: 'fms', name: 'Faculty of Management Studies, Delhi' },
    { value: 'tiss', name: 'Tata Institute of Social Sciences, Mumbai' }
],

'j': [
    { value: 'jmi', name: 'Jamia Millia Islamia, Delhi' },
    { value: 'manipal', name: 'Manipal University, Manipal' },
    { value: 'imc', name: 'Indian Media Centre, Mumbai' },
    { value: 'presidency', name: 'Presidency University, Kolkata' },
    { value: 'msu', name: 'Maharaja Sayajirao University, Vadodara' }
],

'c': [
    { value: 'nift', name: 'National Institute of Fashion Technology, Delhi' },
    { value: 'jmi', name: 'Jamia Millia Islamia, Delhi' },
    { value: 'snu', name: 'Shiv Nadar University, Greater Noida' },
    { value: 'whistlingwoods', name: 'Whistling Woods International, Mumbai' },
    { value: 'amity', name: 'Amity School of Communication, Noida' }
],

'aw': [
    { value: 'jnu', name: 'Jawaharlal Nehru University, Delhi' },
    { value: 'du', name: 'University of Delhi, Delhi' },
    { value: 'snu', name: 'Shiv Nadar University, Greater Noida' },
    { value: 'tiss', name: 'Tata Institute of Social Sciences, Mumbai' },
    { value: 'jmi', name: 'Jamia Millia Islamia, Delhi' }
],

'bw': [
    { value: 'iima', name: 'Indian Institute of Management Ahmedabad' },
    { value: 'isb', name: 'Indian School of Business, Hyderabad' },
    { value: 'xlri', name: 'Xavier Labour Relations Institute, Jamshedpur' },
    { value: 'fms', name: 'Faculty of Management Studies, Delhi' },
    { value: 'spjain', name: 'SP Jain Institute of Management and Research, Mumbai' }
],


















 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
     
     
     
     
     
     
     
     
     
     
     
 
 
    
     
 
 
     
 
 
     
 
 
 
     
     // Other fields like engineering, biotechnology, etc. remain unchanged...
 };
 
 // Alumni data
 const alumniData = {
     //cw
 
 
'jnu': [
    { name: 'Ananya Singh', position: 'Creative Writing Student', email: 'ananya.singh@jnu.ac.in', phone: '888-777-6666' },
    { name: 'Rajesh Kumar', position: 'Creative Writing Student', email: 'rajesh.kumar@jnu.ac.in', phone: '888-777-5555' }
],

'du': [
    { name: 'Meera Joshi', position: 'Creative Writing Student', email: 'meera.joshi@du.ac.in', phone: '888-777-6666' },
    { name: 'Vikram Rao', position: 'Creative Writing Student', email: 'vikram.rao@du.ac.in', phone: '888-777-5555' }
],

'snu': [
    { name: 'Priya Sharma', position: 'Creative Writing Student', email: 'priya.sharma@snu.edu.in', phone: '888-777-6666' },
    { name: 'Arjun Desai', position: 'Creative Writing Student', email: 'arjun.desai@snu.edu.in', phone: '888-777-5555' }
],

'ftii': [
    { name: 'Neha Gupta', position: 'Creative Writing Student', email: 'neha.gupta@ftii.ac.in', phone: '888-777-6666' },
    { name: 'Sanjay Kumar', position: 'Creative Writing Student', email: 'sanjay.kumar@ftii.ac.in', phone: '888-777-5555' }
],

'srcc': [
    { name: 'Riya Sharma', position: 'Creative Writing Student', email: 'riya.sharma@srcc.ac.in', phone: '888-777-6666' },
    { name: 'Aarti Singh', position: 'Creative Writing Student', email: 'aarti.singh@srcc.ac.in', phone: '888-777-5555' }
]
,


//tw


'jnu': [
    { name: 'Ananya Singh', position: 'Technical Writing Student', email: 'ananya.singh@jnu.ac.in', phone: '888-777-6666' },
    { name: 'Rajesh Kumar', position: 'Technical Writing Student', email: 'rajesh.kumar@jnu.ac.in', phone: '888-777-5555' }
],

'du': [
    { name: 'Meera Joshi', position: 'Technical Writing Student', email: 'meera.joshi@du.ac.in', phone: '888-777-6666' },
    { name: 'Vikram Rao', position: 'Technical Writing Student', email: 'vikram.rao@du.ac.in', phone: '888-777-5555' }
],

'snu': [
    { name: 'Priya Sharma', position: 'Technical Writing Student', email: 'priya.sharma@snu.edu.in', phone: '888-777-6666' },
    { name: 'Arjun Desai', position: 'Technical Writing Student', email: 'arjun.desai@snu.edu.in', phone: '888-777-5555' }
],

'fms': [
    { name: 'Neha Gupta', position: 'Technical Writing Student', email: 'neha.gupta@fms.edu.in', phone: '888-777-6666' },
    { name: 'Sanjay Kumar', position: 'Technical Writing Student', email: 'sanjay.kumar@fms.edu.in', phone: '888-777-5555' }
],

'tiss': [
    { name: 'Riya Sharma', position: 'Technical Writing Student', email: 'riya.sharma@tiss.edu.in', phone: '888-777-6666' },
    { name: 'Aarti Singh', position: 'Technical Writing Student', email: 'aarti.singh@tiss.edu.in', phone: '888-777-5555' }
]
,


//j


'jmi': [
    { name: 'Ananya Singh', position: 'Journalism Student', email: 'ananya.singh@jmi.ac.in', phone: '888-777-6666' },
    { name: 'Rajesh Kumar', position: 'Journalism Student', email: 'rajesh.kumar@jmi.ac.in', phone: '888-777-5555' }
],

'manipal': [
    { name: 'Meera Joshi', position: 'Journalism Student', email: 'meera.joshi@manipal.edu', phone: '888-777-6666' },
    { name: 'Vikram Rao', position: 'Journalism Student', email: 'vikram.rao@manipal.edu', phone: '888-777-5555' }
],

'imc': [
    { name: 'Priya Sharma', position: 'Journalism Student', email: 'priya.sharma@imc.edu.in', phone: '888-777-6666' },
    { name: 'Arjun Desai', position: 'Journalism Student', email: 'arjun.desai@imc.edu.in', phone: '888-777-5555' }
],

'presidency': [
    { name: 'Neha Gupta', position: 'Journalism Student', email: 'neha.gupta@presidency.edu.in', phone: '888-777-6666' },
    { name: 'Sanjay Kumar', position: 'Journalism Student', email: 'sanjay.kumar@presidency.edu.in', phone: '888-777-5555' }
],

'msu': [
    { name: 'Riya Sharma', position: 'Journalism Student', email: 'riya.sharma@msu.edu.in', phone: '888-777-6666' },
    { name: 'Aarti Singh', position: 'Journalism Student', email: 'aarti.singh@msu.edu.in', phone: '888-777-5555' }
]
,


//c

'nift': [
    { name: 'Ananya Singh', position: 'Copywriting Student', email: 'ananya.singh@nift.ac.in', phone: '888-777-6666' },
    { name: 'Rajesh Kumar', position: 'Copywriting Student', email: 'rajesh.kumar@nift.ac.in', phone: '888-777-5555' }
],

'jmi': [
    { name: 'Meera Joshi', position: 'Copywriting Student', email: 'meera.joshi@jmi.ac.in', phone: '888-777-6666' },
    { name: 'Vikram Rao', position: 'Copywriting Student', email: 'vikram.rao@jmi.ac.in', phone: '888-777-5555' }
],

'snu': [
    { name: 'Priya Sharma', position: 'Copywriting Student', email: 'priya.sharma@snu.edu.in', phone: '888-777-6666' },
    { name: 'Arjun Desai', position: 'Copywriting Student', email: 'arjun.desai@snu.edu.in', phone: '888-777-5555' }
],

'whistlingwoods': [
    { name: 'Neha Gupta', position: 'Copywriting Student', email: 'neha.gupta@whistlingwoods.net', phone: '888-777-6666' },
    { name: 'Sanjay Kumar', position: 'Copywriting Student', email: 'sanjay.kumar@whistlingwoods.net', phone: '888-777-5555' }
],

'amity': [
    { name: 'Riya Sharma', position: 'Copywriting Student', email: 'riya.sharma@amity.edu', phone: '888-777-6666' },
    { name: 'Aarti Singh', position: 'Copywriting Student', email: 'aarti.singh@amity.edu', phone: '888-777-5555' }
]
,

//aw


'jnu': [
    { name: 'Priya Sharma', position: 'Academic Writing Student', email: 'priya.sharma@jnu.ac.in', phone: '888-777-6666' },
    { name: 'Arjun Desai', position: 'Academic Writing Student', email: 'arjun.desai@jnu.ac.in', phone: '888-777-5555' }
],

'du': [
    { name: 'Meera Joshi', position: 'Academic Writing Student', email: 'meera.joshi@du.ac.in', phone: '888-777-6666' },
    { name: 'Vikram Rao', position: 'Academic Writing Student', email: 'vikram.rao@du.ac.in', phone: '888-777-5555' }
],

'snu': [
    { name: 'Neha Gupta', position: 'Academic Writing Student', email: 'neha.gupta@snu.edu.in', phone: '888-777-6666' },
    { name: 'Sanjay Kumar', position: 'Academic Writing Student', email: 'sanjay.kumar@snu.edu.in', phone: '888-777-5555' }
],

'tiss': [
    { name: 'Ananya Singh', position: 'Academic Writing Student', email: 'ananya.singh@tiss.edu', phone: '888-777-6666' },
    { name: 'Rajesh Kumar', position: 'Academic Writing Student', email: 'rajesh.kumar@tiss.edu', phone: '888-777-5555' }
],

'jmi': [
    { name: 'Aarti Singh', position: 'Academic Writing Student', email: 'aarti.singh@jmi.ac.in', phone: '888-777-6666' },
    { name: 'Riya Sharma', position: 'Academic Writing Student', email: 'riya.sharma@jmi.ac.in', phone: '888-777-5555' }
]
,


 //bw


 'iima': [
    { name: 'Amit Sharma', position: 'Business Writing Student', email: 'amit.sharma@iima.ac.in', phone: '888-777-6666' },
    { name: 'Neha Gupta', position: 'Business Writing Student', email: 'neha.gupta@iima.ac.in', phone: '888-777-5555' }
],

'isb': [
    { name: 'Rohan Patel', position: 'Business Writing Student', email: 'rohan.patel@isb.edu', phone: '888-777-6666' },
    { name: 'Priya Sharma', position: 'Business Writing Student', email: 'priya.sharma@isb.edu', phone: '888-777-5555' }
],

'xlri': [
    { name: 'Vikram Rao', position: 'Business Writing Student', email: 'vikram.rao@xlri.ac.in', phone: '888-777-6666' },
    { name: 'Ananya Singh', position: 'Business Writing Student', email: 'ananya.singh@xlri.ac.in', phone: '888-777-5555' }
],

'fms': [
    { name: 'Riya Sharma', position: 'Business Writing Student', email: 'riya.sharma@fms.edu', phone: '888-777-6666' },
    { name: 'Rajesh Kumar', position: 'Business Writing Student', email: 'rajesh.kumar@fms.edu', phone: '888-777-5555' }
],

'spjain': [
    { name: 'Aarti Singh', position: 'Business Writing Student', email: 'aarti.singh@spjain.org', phone: '888-777-6666' },
    { name: 'Arjun Desai', position: 'Business Writing Student', email: 'arjun.desai@spjain.org', phone: '888-777-5555' }
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
 