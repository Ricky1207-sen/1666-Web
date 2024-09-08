// College list for each field
const collegeData = {
    'sc': [
    { value: 'ssnc', name: 'Sports Science and Nutrition College, Mumbai' },
    { value: 'ipa', name: 'Indian Sports Academy, Bengaluru' },
    { value: 'kca', name: 'Kolkata Coaching Academy, Kolkata' },
    { value: 'lpu', name: 'Lovely Professional University, Punjab' },
    { value: 'nsc', name: 'National Sports College, Patiala' }
],

'so': [
    { value: 'nso', name: 'National School of Officiating, Delhi' },
    { value: 'spo', name: 'Sports Officiating Institute, Mumbai' },
    { value: 'kco', name: 'Kolkata Coaching and Officiating Academy, Kolkata' },
    { value: 'lpu', name: 'Lovely Professional University, Punjab' },
    { value: 'rsc', name: 'Regional Sports College, Chennai' }
],

'at': [
    { value: 'ncat', name: 'National College of Athletic Training, Delhi' },
    { value: 'sai', name: 'Sports Authority of India, Bengaluru' },
    { value: 'ims', name: 'Institute of Sports Medicine and Athletic Training, Mumbai' },
    { value: 'lpu', name: 'Lovely Professional University, Punjab' },
    { value: 'sgc', name: 'Sports and Fitness Training College, Hyderabad' }
],

'spa': [
    { value: 'ssp', name: 'Sports Science and Performance College, Delhi' },
    { value: 'sap', name: 'Sports Analysis and Performance Institute, Bengaluru' },
    { value: 'spt', name: 'Sports Performance Technology Academy, Mumbai' },
    { value: 'lpu', name: 'Lovely Professional University, Punjab' },
    { value: 'sfc', name: 'Sports and Fitness Coaching College, Chennai' }
],

'ss': [
    { value: 'ssai', name: 'Sports Science and Analysis Institute, Delhi' },
    { value: 'spai', name: 'Sports Performance Analysis Institute, Bengaluru' },
    { value: 'spta', name: 'Sports Performance and Technology Academy, Mumbai' },
    { value: 'lpu', name: 'Lovely Professional University, Punjab' },
    { value: 'sfc', name: 'Sports and Fitness Science Academy, Chennai' }
],

'st': [
    { value: 'stti', name: 'Sports Technology and Innovation Institute, Delhi' },
    { value: 'sptech', name: 'Sports Performance Technology College, Bengaluru' },
    { value: 'sptu', name: 'Sports Performance and Technology University, Mumbai' },
    { value: 'lpu', name: 'Lovely Professional University, Punjab' },
    { value: 'stac', name: 'Sports Technology and Analytics Center, Chennai' }
],

















 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
     
     
     
     
     
     
     
     
     
     
     
 
 
    
     
 
 
     
 
 
     
 
 
 
     
     // Other fields like engineering, biotechnology, etc. remain unchanged...
 };
 
 // Alumni data
 const alumniData = {
     //sc
 
 
'ssnc': [
    { name: 'Anjali Verma', position: 'Sports Coaching Student', email: 'anjali.verma@ssnc.edu.in', phone: '888-777-6666' },
    { name: 'Rajeev Kumar', position: 'Sports Science and Coaching Student', email: 'rajeeve.kumar@ssnc.edu.in', phone: '888-777-5555' }
],

'ipa': [
    { name: 'Priya Sharma', position: 'Sports Coaching Student', email: 'priya.sharma@ipa.edu.in', phone: '888-777-6666' },
    { name: 'Vikram Rao', position: 'Athletic Training and Coaching Student', email: 'vikram.rao@ipa.edu.in', phone: '888-777-5555' }
],

'kca': [
    { name: 'Arjun Patel', position: 'Sports Coaching and Management Student', email: 'arjun.patel@kca.edu.in', phone: '888-777-6666' },
    { name: 'Neha Gupta', position: 'Sports Training and Development Student', email: 'neha.gupta@kca.edu.in', phone: '888-777-5555' }
],

'lpu': [
    { name: 'Rakesh Mehta', position: 'Sports Coaching Student', email: 'rakesh.mehta@lpu.edu.in', phone: '888-777-6666' },
    { name: 'Aarti Singh', position: 'Sports Science and Coaching Student', email: 'aarti.singh@lpu.edu.in', phone: '888-777-5555' }
],

'nsc': [
    { name: 'Sanjay Kumar', position: 'Sports Coaching and Management Student', email: 'sanjay.kumar@nsc.edu.in', phone: '888-777-6666' },
    { name: 'Swati Sharma', position: 'Athletic Training and Coaching Student', email: 'swati.sharma@nsc.edu.in', phone: '888-777-5555' }
]
,


//so


'nso': [
    { name: 'Aditi Sharma', position: 'Sports Officiating Student', email: 'aditi.sharma@nso.edu.in', phone: '888-777-6666' },
    { name: 'Rohan Patel', position: 'Officiating Techniques Student', email: 'rohan.patel@nso.edu.in', phone: '888-777-5555' }
],

'spo': [
    { name: 'Meera Joshi', position: 'Sports Officiating Student', email: 'meera.joshi@spo.edu.in', phone: '888-777-6666' },
    { name: 'Vikram Rao', position: 'Sports Officiating and Management Student', email: 'vikram.rao@spo.edu.in', phone: '888-777-5555' }
],

'kco': [
    { name: 'Priya Sharma', position: 'Sports Officiating and Training Student', email: 'priya.sharma@kco.edu.in', phone: '888-777-6666' },
    { name: 'Rajesh Kumar', position: 'Officiating Techniques Student', email: 'rajesh.kumar@kco.edu.in', phone: '888-777-5555' }
],

'lpu': [
    { name: 'Neha Gupta', position: 'Sports Officiating Student', email: 'neha.gupta@lpu.edu.in', phone: '888-777-6666' },
    { name: 'Arjun Desai', position: 'Sports Officiating and Management Student', email: 'arjun.desai@lpu.edu.in', phone: '888-777-5555' }
],

'rsc': [
    { name: 'Sanjay Kumar', position: 'Sports Officiating and Coaching Student', email: 'sanjay.kumar@rsc.edu.in', phone: '888-777-6666' },
    { name: 'Swati Sharma', position: 'Sports Officiating Student', email: 'swati.sharma@rsc.edu.in', phone: '888-777-5555' }
]
,


//at


'ncat': [
    { name: 'Riya Sharma', position: 'Athletic Training Student', email: 'riya.sharma@ncat.edu.in', phone: '888-777-6666' },
    { name: 'Arvind Patel', position: 'Athletic Training Specialist Student', email: 'arvind.patel@ncat.edu.in', phone: '888-777-5555' }
],

'sai': [
    { name: 'Neha Gupta', position: 'Athletic Training Student', email: 'neha.gupta@sai.gov.in', phone: '888-777-6666' },
    { name: 'Rajesh Kumar', position: 'Sports Medicine and Training Student', email: 'rajesh.kumar@sai.gov.in', phone: '888-777-5555' }
],

'ims': [
    { name: 'Priya Sharma', position: 'Athletic Training and Sports Medicine Student', email: 'priya.sharma@ims.edu.in', phone: '888-777-6666' },
    { name: 'Vikram Rao', position: 'Athletic Training Techniques Student', email: 'vikram.rao@ims.edu.in', phone: '888-777-5555' }
],

'lpu': [
    { name: 'Rakesh Mehta', position: 'Athletic Training and Performance Student', email: 'rakesh.mehta@lpu.edu.in', phone: '888-777-6666' },
    { name: 'Aarti Singh', position: 'Athletic Training Student', email: 'aarti.singh@lpu.edu.in', phone: '888-777-5555' }
],

'sgc': [
    { name: 'Sanjay Kumar', position: 'Athletic Training and Sports Science Student', email: 'sanjay.kumar@sgc.edu.in', phone: '888-777-6666' },
    { name: 'Swati Sharma', position: 'Athletic Training Student', email: 'swati.sharma@sgc.edu.in', phone: '888-777-5555' }
]
,


//spa


'ssp': [
    { name: 'Aditi Sharma', position: 'Sports Performance Analysis Student', email: 'aditi.sharma@ssp.edu.in', phone: '888-777-6666' },
    { name: 'Rohan Patel', position: 'Sports Performance and Analytics Student', email: 'rohan.patel@ssp.edu.in', phone: '888-777-5555' }
],

'sap': [
    { name: 'Priya Sharma', position: 'Sports Analysis and Performance Student', email: 'priya.sharma@sap.edu.in', phone: '888-777-6666' },
    { name: 'Vikram Rao', position: 'Performance Analysis Student', email: 'vikram.rao@sap.edu.in', phone: '888-777-5555' }
],

'spt': [
    { name: 'Neha Gupta', position: 'Sports Performance Technology Student', email: 'neha.gupta@spt.edu.in', phone: '888-777-6666' },
    { name: 'Arjun Desai', position: 'Sports Analytics and Performance Student', email: 'arjun.desai@spt.edu.in', phone: '888-777-5555' }
],

'lpu': [
    { name: 'Rakesh Mehta', position: 'Sports Performance Analysis and Coaching Student', email: 'rakesh.mehta@lpu.edu.in', phone: '888-777-6666' },
    { name: 'Aarti Singh', position: 'Sports Performance Student', email: 'aarti.singh@lpu.edu.in', phone: '888-777-5555' }
],

'sfc': [
    { name: 'Sanjay Kumar', position: 'Sports Performance and Coaching Student', email: 'sanjay.kumar@sfc.edu.in', phone: '888-777-6666' },
    { name: 'Swati Sharma', position: 'Sports Performance Analysis Student', email: 'swati.sharma@sfc.edu.in', phone: '888-777-5555' }
]
,


//ss


'ssai': [
    { name: 'Riya Sharma', position: 'Sports Science Analysis Student', email: 'riya.sharma@ssai.edu.in', phone: '888-777-6666' },
    { name: 'Arvind Patel', position: 'Sports Science and Performance Analysis Student', email: 'arvind.patel@ssai.edu.in', phone: '888-777-5555' }
],

'spai': [
    { name: 'Priya Sharma', position: 'Sports Performance Analysis Student', email: 'priya.sharma@spai.edu.in', phone: '888-777-6666' },
    { name: 'Vikram Rao', position: 'Performance Science Student', email: 'vikram.rao@spai.edu.in', phone: '888-777-5555' }
],

'spta': [
    { name: 'Neha Gupta', position: 'Sports Performance Technology Student', email: 'neha.gupta@spta.edu.in', phone: '888-777-6666' },
    { name: 'Arjun Desai', position: 'Sports Analysis and Performance Student', email: 'arjun.desai@spta.edu.in', phone: '888-777-5555' }
],

'lpu': [
    { name: 'Rakesh Mehta', position: 'Sports Science and Performance Analysis Student', email: 'rakesh.mehta@lpu.edu.in', phone: '888-777-6666' },
    { name: 'Aarti Singh', position: 'Sports Science Analysis Student', email: 'aarti.singh@lpu.edu.in', phone: '888-777-5555' }
],

'sfca': [
    { name: 'Sanjay Kumar', position: 'Sports Science and Fitness Analysis Student', email: 'sanjay.kumar@sfca.edu.in', phone: '888-777-6666' },
    { name: 'Swati Sharma', position: 'Sports Science Analysis Student', email: 'swati.sharma@sfca.edu.in', phone: '888-777-5555' }
]
,


//st


'stti': [
    { name: 'Ravi Sharma', position: 'Sports Technology Student', email: 'ravi.sharma@stti.edu.in', phone: '888-777-6666' },
    { name: 'Neha Gupta', position: 'Sports Technology and Innovation Student', email: 'neha.gupta@stti.edu.in', phone: '888-777-5555' }
],

'sptech': [
    { name: 'Priya Singh', position: 'Sports Performance Technology Student', email: 'priya.singh@sptech.edu.in', phone: '888-777-6666' },
    { name: 'Vikram Rao', position: 'Technology in Sports Performance Student', email: 'vikram.rao@sptech.edu.in', phone: '888-777-5555' }
],

'sptu': [
    { name: 'Arjun Desai', position: 'Sports Performance Technology Student', email: 'arjun.desai@sptu.edu.in', phone: '888-777-6666' },
    { name: 'Swati Sharma', position: 'Sports Technology and Performance Student', email: 'swati.sharma@sptu.edu.in', phone: '888-777-5555' }
],

'lpu': [
    { name: 'Rakesh Mehta', position: 'Sports Technology and Performance Analysis Student', email: 'rakesh.mehta@lpu.edu.in', phone: '888-777-6666' },
    { name: 'Aarti Singh', position: 'Sports Technology Student', email: 'aarti.singh@lpu.edu.in', phone: '888-777-5555' }
],

'stac': [
    { name: 'Sanjay Kumar', position: 'Sports Technology and Analytics Student', email: 'sanjay.kumar@stac.edu.in', phone: '888-777-6666' },
    { name: 'Riya Sharma', position: 'Sports Technology Student', email: 'riya.sharma@stac.edu.in', phone: '888-777-5555' }
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
 