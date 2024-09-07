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
    { name: 'Dr. Ananya Singh', position: 'Creative Writing Professor', email: 'ananya.singh@jnu.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Rajesh Kumar', position: 'Creative Writing Specialist', email: 'rajesh.kumar@jnu.ac.in', phone: '888-777-5555' }
],

'du': [
    { name: 'Dr. Meera Joshi', position: 'Creative Writing Lecturer', email: 'meera.joshi@du.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Vikram Rao', position: 'Creative Writing Expert', email: 'vikram.rao@du.ac.in', phone: '888-777-5555' }
],

'snu': [
    { name: 'Dr. Priya Sharma', position: 'Creative Writing Instructor', email: 'priya.sharma@snu.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Arjun Desai', position: 'Creative Writing Analyst', email: 'arjun.desai@snu.edu.in', phone: '888-777-5555' }
],

'ftii': [
    { name: 'Dr. Neha Gupta', position: 'Creative Writing Professor', email: 'neha.gupta@ftii.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Sanjay Kumar', position: 'Creative Writing Specialist', email: 'sanjay.kumar@ftii.ac.in', phone: '888-777-5555' }
],

'srcc': [
    { name: 'Dr. Riya Sharma', position: 'Creative Writing Professor', email: 'riya.sharma@srcc.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Aarti Singh', position: 'Creative Writing Expert', email: 'aarti.singh@srcc.ac.in', phone: '888-777-5555' }
],


//tw


'jnu': [
    { name: 'Dr. Ananya Singh', position: 'Technical Writing Professor', email: 'ananya.singh@jnu.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Rajesh Kumar', position: 'Technical Writing Specialist', email: 'rajesh.kumar@jnu.ac.in', phone: '888-777-5555' }
],

'du': [
    { name: 'Dr. Meera Joshi', position: 'Technical Writing Lecturer', email: 'meera.joshi@du.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Vikram Rao', position: 'Technical Writing Expert', email: 'vikram.rao@du.ac.in', phone: '888-777-5555' }
],

'snu': [
    { name: 'Dr. Priya Sharma', position: 'Technical Writing Instructor', email: 'priya.sharma@snu.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Arjun Desai', position: 'Technical Writing Analyst', email: 'arjun.desai@snu.edu.in', phone: '888-777-5555' }
],

'fms': [
    { name: 'Dr. Neha Gupta', position: 'Technical Writing Professor', email: 'neha.gupta@fms.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Sanjay Kumar', position: 'Technical Writing Specialist', email: 'sanjay.kumar@fms.edu.in', phone: '888-777-5555' }
],

'tiss': [
    { name: 'Dr. Riya Sharma', position: 'Technical Writing Professor', email: 'riya.sharma@tiss.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Aarti Singh', position: 'Technical Writing Expert', email: 'aarti.singh@tiss.edu.in', phone: '888-777-5555' }
],


//j


'jmi': [
    { name: 'Dr. Ananya Singh', position: 'Journalism Professor', email: 'ananya.singh@jmi.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Rajesh Kumar', position: 'Journalism Specialist', email: 'rajesh.kumar@jmi.ac.in', phone: '888-777-5555' }
],

'manipal': [
    { name: 'Dr. Meera Joshi', position: 'Journalism Lecturer', email: 'meera.joshi@manipal.edu', phone: '888-777-6666' },
    { name: 'Dr. Vikram Rao', position: 'Journalism Expert', email: 'vikram.rao@manipal.edu', phone: '888-777-5555' }
],

'imc': [
    { name: 'Dr. Priya Sharma', position: 'Journalism Instructor', email: 'priya.sharma@imc.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Arjun Desai', position: 'Journalism Analyst', email: 'arjun.desai@imc.edu.in', phone: '888-777-5555' }
],

'presidency': [
    { name: 'Dr. Neha Gupta', position: 'Journalism Professor', email: 'neha.gupta@presidency.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Sanjay Kumar', position: 'Journalism Specialist', email: 'sanjay.kumar@presidency.edu.in', phone: '888-777-5555' }
],

'msu': [
    { name: 'Dr. Riya Sharma', position: 'Journalism Professor', email: 'riya.sharma@msu.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Aarti Singh', position: 'Journalism Expert', email: 'aarti.singh@msu.edu.in', phone: '888-777-5555' }
],


//c


'nift': [
    { name: 'Dr. Ananya Singh', position: 'Copywriting Professor', email: 'ananya.singh@nift.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Rajesh Kumar', position: 'Copywriting Specialist', email: 'rajesh.kumar@nift.ac.in', phone: '888-777-5555' }
],

'jmi': [
    { name: 'Dr. Meera Joshi', position: 'Copywriting Lecturer', email: 'meera.joshi@jmi.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Vikram Rao', position: 'Copywriting Expert', email: 'vikram.rao@jmi.ac.in', phone: '888-777-5555' }
],

'snu': [
    { name: 'Dr. Priya Sharma', position: 'Copywriting Instructor', email: 'priya.sharma@snu.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Arjun Desai', position: 'Copywriting Analyst', email: 'arjun.desai@snu.edu.in', phone: '888-777-5555' }
],

'whistlingwoods': [
    { name: 'Dr. Neha Gupta', position: 'Copywriting Professor', email: 'neha.gupta@whistlingwoods.net', phone: '888-777-6666' },
    { name: 'Dr. Sanjay Kumar', position: 'Copywriting Specialist', email: 'sanjay.kumar@whistlingwoods.net', phone: '888-777-5555' }
],

'amity': [
    { name: 'Dr. Riya Sharma', position: 'Copywriting Professor', email: 'riya.sharma@amity.edu', phone: '888-777-6666' },
    { name: 'Dr. Aarti Singh', position: 'Copywriting Expert', email: 'aarti.singh@amity.edu', phone: '888-777-5555' }
],


//aw


'jnu': [
    { name: 'Dr. Priya Sharma', position: 'Academic Writing Professor', email: 'priya.sharma@jnu.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Arjun Desai', position: 'Academic Writing Specialist', email: 'arjun.desai@jnu.ac.in', phone: '888-777-5555' }
],

'du': [
    { name: 'Dr. Meera Joshi', position: 'Academic Writing Lecturer', email: 'meera.joshi@du.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Vikram Rao', position: 'Academic Writing Expert', email: 'vikram.rao@du.ac.in', phone: '888-777-5555' }
],

'snu': [
    { name: 'Dr. Neha Gupta', position: 'Academic Writing Instructor', email: 'neha.gupta@snu.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Sanjay Kumar', position: 'Academic Writing Analyst', email: 'sanjay.kumar@snu.edu.in', phone: '888-777-5555' }
],

'tiss': [
    { name: 'Dr. Ananya Singh', position: 'Academic Writing Professor', email: 'ananya.singh@tiss.edu', phone: '888-777-6666' },
    { name: 'Dr. Rajesh Kumar', position: 'Academic Writing Specialist', email: 'rajesh.kumar@tiss.edu', phone: '888-777-5555' }
],

'jmi': [
    { name: 'Dr. Aarti Singh', position: 'Academic Writing Lecturer', email: 'aarti.singh@jmi.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Riya Sharma', position: 'Academic Writing Expert', email: 'riya.sharma@jmi.ac.in', phone: '888-777-5555' }
],


 //bw


 'iima': [
    { name: 'Dr. Amit Sharma', position: 'Business Writing Professor', email: 'amit.sharma@iima.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Neha Gupta', position: 'Business Writing Specialist', email: 'neha.gupta@iima.ac.in', phone: '888-777-5555' }
],

'isb': [
    { name: 'Dr. Rohan Patel', position: 'Business Writing Lecturer', email: 'rohan.patel@isb.edu', phone: '888-777-6666' },
    { name: 'Dr. Priya Sharma', position: 'Business Writing Expert', email: 'priya.sharma@isb.edu', phone: '888-777-5555' }
],

'xlri': [
    { name: 'Dr. Vikram Rao', position: 'Business Writing Instructor', email: 'vikram.rao@xlri.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Ananya Singh', position: 'Business Writing Analyst', email: 'ananya.singh@xlri.ac.in', phone: '888-777-5555' }
],

'fms': [
    { name: 'Dr. Riya Sharma', position: 'Business Writing Lecturer', email: 'riya.sharma@fms.edu', phone: '888-777-6666' },
    { name: 'Dr. Rajesh Kumar', position: 'Business Writing Specialist', email: 'rajesh.kumar@fms.edu', phone: '888-777-5555' }
],

'spjain': [
    { name: 'Dr. Aarti Singh', position: 'Business Writing Professor', email: 'aarti.singh@spjain.org', phone: '888-777-6666' },
    { name: 'Dr. Arjun Desai', position: 'Business Writing Expert', email: 'arjun.desai@spjain.org', phone: '888-777-5555' }
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
 