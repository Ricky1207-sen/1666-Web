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
    { name: 'Dr. Anjali Verma', position: 'Sports Coaching Professor', email: 'anjali.verma@ssnc.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Rajeev Kumar', position: 'Sports Science and Coaching Specialist', email: 'rajeeve.kumar@ssnc.edu.in', phone: '888-777-5555' }
],

'ipa': [
    { name: 'Dr. Priya Sharma', position: 'Sports Coaching Instructor', email: 'priya.sharma@isa.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Vikram Rao', position: 'Athletic Training and Coaching Expert', email: 'vikram.rao@isa.edu.in', phone: '888-777-5555' }
],

'kca': [
    { name: 'Dr. Arjun Patel', position: 'Sports Coaching and Management Professor', email: 'arjun.patel@kca.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Neha Gupta', position: 'Sports Training and Development Specialist', email: 'neha.gupta@kca.edu.in', phone: '888-777-5555' }
],

'lpu': [
    { name: 'Dr. Rakesh Mehta', position: 'Sports Coaching Professor', email: 'rakesh.mehta@lpu.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Aarti Singh', position: 'Sports Science and Coaching Specialist', email: 'aarti.singh@lpu.edu.in', phone: '888-777-5555' }
],

'nsc': [
    { name: 'Dr. Sanjay Kumar', position: 'Sports Coaching and Management Expert', email: 'sanjay.kumar@nsc.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Swati Sharma', position: 'Athletic Training and Coaching Specialist', email: 'swati.sharma@nsc.edu.in', phone: '888-777-5555' }
],


//so


'nso': [
    { name: 'Dr. Aditi Sharma', position: 'Sports Officiating Professor', email: 'aditi.sharma@nso.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Rohan Patel', position: 'Officiating Techniques Specialist', email: 'rohan.patel@nso.edu.in', phone: '888-777-5555' }
],

'spo': [
    { name: 'Dr. Meera Joshi', position: 'Sports Officiating Instructor', email: 'meera.joshi@spo.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Vikram Rao', position: 'Sports Officiating and Management Specialist', email: 'vikram.rao@spo.edu.in', phone: '888-777-5555' }
],

'kco': [
    { name: 'Dr. Priya Sharma', position: 'Sports Officiating and Training Professor', email: 'priya.sharma@kco.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Rajesh Kumar', position: 'Officiating Techniques Expert', email: 'rajesh.kumar@kco.edu.in', phone: '888-777-5555' }
],

'lpu': [
    { name: 'Dr. Neha Gupta', position: 'Sports Officiating Professor', email: 'neha.gupta@lpu.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Arjun Desai', position: 'Sports Officiating and Management Specialist', email: 'arjun.desai@lpu.edu.in', phone: '888-777-5555' }
],

'rsc': [
    { name: 'Dr. Sanjay Kumar', position: 'Sports Officiating and Coaching Expert', email: 'sanjay.kumar@rsc.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Swati Sharma', position: 'Sports Officiating Specialist', email: 'swati.sharma@rsc.edu.in', phone: '888-777-5555' }
],


//at


'ncat': [
    { name: 'Dr. Riya Sharma', position: 'Athletic Training Professor', email: 'riya.sharma@ncat.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Arvind Patel', position: 'Athletic Training Specialist', email: 'arvind.patel@ncat.edu.in', phone: '888-777-5555' }
],

'sai': [
    { name: 'Dr. Neha Gupta', position: 'Athletic Training Instructor', email: 'neha.gupta@sai.gov.in', phone: '888-777-6666' },
    { name: 'Dr. Rajesh Kumar', position: 'Sports Medicine and Training Expert', email: 'rajesh.kumar@sai.gov.in', phone: '888-777-5555' }
],

'ims': [
    { name: 'Dr. Priya Sharma', position: 'Athletic Training and Sports Medicine Professor', email: 'priya.sharma@ims.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Vikram Rao', position: 'Athletic Training Techniques Specialist', email: 'vikram.rao@ims.edu.in', phone: '888-777-5555' }
],

'lpu': [
    { name: 'Dr. Rakesh Mehta', position: 'Athletic Training and Performance Specialist', email: 'rakesh.mehta@lpu.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Aarti Singh', position: 'Athletic Training Instructor', email: 'aarti.singh@lpu.edu.in', phone: '888-777-5555' }
],

'sgc': [
    { name: 'Dr. Sanjay Kumar', position: 'Athletic Training and Sports Science Professor', email: 'sanjay.kumar@sgc.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Swati Sharma', position: 'Athletic Training Specialist', email: 'swati.sharma@sgc.edu.in', phone: '888-777-5555' }
],


//spa


'ssp': [
    { name: 'Dr. Aditi Sharma', position: 'Sports Performance Analysis Professor', email: 'aditi.sharma@ssp.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Rohan Patel', position: 'Sports Performance and Analytics Specialist', email: 'rohan.patel@ssp.edu.in', phone: '888-777-5555' }
],

'sap': [
    { name: 'Dr. Priya Sharma', position: 'Sports Analysis and Performance Instructor', email: 'priya.sharma@sap.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Vikram Rao', position: 'Performance Analysis Specialist', email: 'vikram.rao@sap.edu.in', phone: '888-777-5555' }
],

'spt': [
    { name: 'Dr. Neha Gupta', position: 'Sports Performance Technology Professor', email: 'neha.gupta@spt.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Arjun Desai', position: 'Sports Analytics and Performance Expert', email: 'arjun.desai@spt.edu.in', phone: '888-777-5555' }
],

'lpu': [
    { name: 'Dr. Rakesh Mehta', position: 'Sports Performance Analysis and Coaching Specialist', email: 'rakesh.mehta@lpu.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Aarti Singh', position: 'Sports Performance Instructor', email: 'aarti.singh@lpu.edu.in', phone: '888-777-5555' }
],

'sfc': [
    { name: 'Dr. Sanjay Kumar', position: 'Sports Performance and Coaching Professor', email: 'sanjay.kumar@sfc.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Swati Sharma', position: 'Sports Performance Analysis Specialist', email: 'swati.sharma@sfc.edu.in', phone: '888-777-5555' }
],


//ss


'ssai': [
    { name: 'Dr. Riya Sharma', position: 'Sports Science Analysis Professor', email: 'riya.sharma@ssai.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Arvind Patel', position: 'Sports Science and Performance Analyst', email: 'arvind.patel@ssai.edu.in', phone: '888-777-5555' }
],

'spai': [
    { name: 'Dr. Priya Sharma', position: 'Sports Performance Analysis Professor', email: 'priya.sharma@spai.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Vikram Rao', position: 'Performance Science Specialist', email: 'vikram.rao@spai.edu.in', phone: '888-777-5555' }
],

'spta': [
    { name: 'Dr. Neha Gupta', position: 'Sports Performance Technology Professor', email: 'neha.gupta@spta.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Arjun Desai', position: 'Sports Analysis and Performance Expert', email: 'arjun.desai@spta.edu.in', phone: '888-777-5555' }
],

'lpu': [
    { name: 'Dr. Rakesh Mehta', position: 'Sports Science and Performance Analysis Specialist', email: 'rakesh.mehta@lpu.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Aarti Singh', position: 'Sports Science Analysis Instructor', email: 'aarti.singh@lpu.edu.in', phone: '888-777-5555' }
],

'sfca': [
    { name: 'Dr. Sanjay Kumar', position: 'Sports Science and Fitness Analysis Professor', email: 'sanjay.kumar@sfca.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Swati Sharma', position: 'Sports Science Analysis Specialist', email: 'swati.sharma@sfca.edu.in', phone: '888-777-5555' }
],


//st


'stti': [
    { name: 'Dr. Ravi Sharma', position: 'Sports Technology Professor', email: 'ravi.sharma@stti.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Neha Gupta', position: 'Sports Technology and Innovation Specialist', email: 'neha.gupta@stti.edu.in', phone: '888-777-5555' }
],

'sptech': [
    { name: 'Dr. Priya Singh', position: 'Sports Performance Technology Professor', email: 'priya.singh@sptech.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Vikram Rao', position: 'Technology in Sports Performance Specialist', email: 'vikram.rao@sptech.edu.in', phone: '888-777-5555' }
],

'sptu': [
    { name: 'Dr. Arjun Desai', position: 'Sports Performance Technology Professor', email: 'arjun.desai@sptu.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Swati Sharma', position: 'Sports Technology and Performance Expert', email: 'swati.sharma@sptu.edu.in', phone: '888-777-5555' }
],

'lpu': [
    { name: 'Dr. Rakesh Mehta', position: 'Sports Technology and Performance Analyst', email: 'rakesh.mehta@lpu.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Aarti Singh', position: 'Sports Technology Instructor', email: 'aarti.singh@lpu.edu.in', phone: '888-777-5555' }
],

'stac': [
    { name: 'Dr. Sanjay Kumar', position: 'Sports Technology and Analytics Professor', email: 'sanjay.kumar@stac.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Riya Sharma', position: 'Sports Technology Specialist', email: 'riya.sharma@stac.edu.in', phone: '888-777-5555' }
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
 