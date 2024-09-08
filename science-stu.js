// College list for each field
const collegeData = {
    'p': [
     { value: 'tifr', name: 'Tata Institute of Fundamental Research, Mumbai' },
     { value: 'bhu', name: 'Banaras Hindu University, Varanasi' },
     { value: 'iitb', name: 'Indian Institute of Technology, Bombay' },
     { value: 'iisc', name: 'Indian Institute of Science, Bengaluru' },
     { value: 'jnu', name: 'Jawaharlal Nehru University, Delhi' }
 ],
 
 'c': [
     { value: 'csir', name: 'Council of Scientific and Industrial Research, New Delhi' },
     { value: 'jnu', name: 'Jawaharlal Nehru University, Delhi' },
     { value: 'iiserp', name: 'Indian Institute of Science Education and Research, Pune' },
     { value: 'iits', name: 'Indian Institute of Technology, Delhi' },
     { value: 'du', name: 'Delhi University, Delhi' }
 ],
 
 'b': [
     { value: 'iisc', name: 'Indian Institute of Science, Bengaluru' },
     { value: 'jnu', name: 'Jawaharlal Nehru University, Delhi' },
     { value: 'iiserk', name: 'Indian Institute of Science Education and Research, Kolkata' },
     { value: 'tifr', name: 'Tata Institute of Fundamental Research, Mumbai' },
     { value: 'du', name: 'Delhi University, Delhi' }
 ],
 
 'es': [
     { value: 'iitg', name: 'Indian Institute of Technology, Guwahati' },
     { value: 'iisc', name: 'Indian Institute of Science, Bengaluru' },
     { value: 'jnu', name: 'Jawaharlal Nehru University, Delhi' },
     { value: 'cu', name: 'Calcutta University, Kolkata' },
     { value: 'ddu', name: 'Dharmsinh Desai University, Gujarat' }
 ],
 
 'a': [
     { value: 'iia', name: 'Indian Institute of Astrophysics, Bangalore' },
     { value: 'prl', name: 'Physical Research Laboratory, Ahmedabad' },
     { value: 'iiserm', name: 'Indian Institute of Science Education and Research, Mohali' },
     { value: 'ncu', name: 'National Centre for Radio Astrophysics, Pune' },
     { value: 'nisa', name: 'National Institute of Solar Physics, Bangalore' }
 ],
 
 'ss': [
     { value: 'jnu', name: 'Jawaharlal Nehru University, Delhi' },
     { value: 'snu', name: 'Shiv Nadar University, Greater Noida' },
     { value: 'tiss', name: 'Tata Institute of Social Sciences, Mumbai' },
     { value: 'du', name: 'Delhi University, Delhi' },
     { value: 'isc', name: 'Indian School of Commerce, Bangalore' }
 ],
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
     
     
     
     
     
     
     
     
     
     
     
 
 
    
     
 
 
     
 
 
     
 
 
 
     
     // Other fields like engineering, biotechnology, etc. remain unchanged...
 };
 
 // Alumni data
 const alumniData = {
     //p
 
 'tifr': [
    { name: 'Rajiv Malhotra', position: 'Quantum Mechanics Student', email: 'rajiv.malhotra@tifr.edu', phone: '888-777-6666' },
    { name: 'Neeta Sharma', position: 'Astrophysics Student', email: 'neeta.sharma@tifr.edu', phone: '888-777-5555' }
],

'bhu': [
    { name: 'Arun Patel', position: 'Condensed Matter Physics Student', email: 'arun.patel@bhu.edu', phone: '888-777-6666' },
    { name: 'Maya Singh', position: 'Experimental Physics Student', email: 'maya.singh@bhu.edu', phone: '888-777-5555' }
],

'iitb': [
    { name: 'Vikram Joshi', position: 'Theoretical Physics Student', email: 'vikram.joshi@iitb.edu', phone: '888-777-6666' },
    { name: 'Sanya Patel', position: 'Particle Physics Student', email: 'sanya.patel@iitb.edu', phone: '888-777-5555' }
],

'iisc': [
    { name: 'Neelam Sharma', position: 'Optics Student', email: 'neelam.sharma@iisc.edu', phone: '888-777-6666' },
    { name: 'Arvind Kumar', position: 'Nanotechnology Student', email: 'arvind.kumar@iisc.edu', phone: '888-777-5555' }
],

'jnu': [
    { name: 'Ramesh Rao', position: 'Statistical Physics Student', email: 'ramesh.rao@jnu.edu', phone: '888-777-6666' },
    { name: 'Priya Sen', position: 'Quantum Field Theory Student', email: 'priya.sen@jnu.edu', phone: '888-777-5555' }
]
,
 
 //c
 
 
 'csir': [
    { name: 'Anil Sharma', position: 'Physical Chemistry Student', email: 'anil.sharma@csir.edu', phone: '888-777-6666' },
    { name: 'Priya Mehta', position: 'Organic Chemistry Student', email: 'priya.mehta@csir.edu', phone: '888-777-5555' }
],

'jnu': [
    { name: 'Rajesh Kumar', position: 'Inorganic Chemistry Student', email: 'rajesh.kumar@jnu.edu', phone: '888-777-6666' },
    { name: 'Sneha Gupta', position: 'Analytical Chemistry Student', email: 'sneha.gupta@jnu.edu', phone: '888-777-5555' }
],

'iiserp': [
    { name: 'Vikram Patel', position: 'Theoretical Chemistry Student', email: 'vikram.patel@iiserp.edu', phone: '888-777-6666' },
    { name: 'Neha Rao', position: 'Chemical Biology Student', email: 'neha.rao@iiserp.edu', phone: '888-777-5555' }
],

'iits': [
    { name: 'Aman Singh', position: 'Materials Chemistry Student', email: 'aman.singh@iits.edu', phone: '888-777-6666' },
    { name: 'Ritu Sharma', position: 'Nanotechnology Student', email: 'ritu.sharma@iits.edu', phone: '888-777-5555' }
],

'du': [
    { name: 'Arjun Verma', position: 'Physical Organic Chemistry Student', email: 'arjun.verma@du.edu', phone: '888-777-6666' },
    { name: 'Kavita Joshi', position: 'Environmental Chemistry Student', email: 'kavita.joshi@du.edu', phone: '888-777-5555' }
]
,
 
 
 //b
 
 
 'iisc': [
    { name: 'Anil Kumar', position: 'Cell Biology Student', email: 'anil.kumar@iisc.edu', phone: '888-777-6666' },
    { name: 'Priya Nair', position: 'Genomics Student', email: 'priya.nair@iisc.edu', phone: '888-777-5555' }
],

'jnu': [
    { name: 'Rajesh Sharma', position: 'Molecular Biology Student', email: 'rajesh.sharma@jnu.edu', phone: '888-777-6666' },
    { name: 'Sneha Patel', position: 'Biochemistry Student', email: 'sneha.patel@jnu.edu', phone: '888-777-5555' }
],

'iiserk': [
    { name: 'Vikram Deshmukh', position: 'Ecology Student', email: 'vikram.deshmukh@iiserk.edu', phone: '888-777-6666' },
    { name: 'Neha Gupta', position: 'Evolutionary Biology Student', email: 'neha.gupta@iiserk.edu', phone: '888-777-5555' }
],

'tifr': [
    { name: 'Aman Singh', position: 'Structural Biology Student', email: 'aman.singh@tifr.edu', phone: '888-777-6666' },
    { name: 'Ritu Verma', position: 'Systems Biology Student', email: 'ritu.verma@tifr.edu', phone: '888-777-5555' }
],

'du': [
    { name: 'Arjun Mehta', position: 'Neurobiology Student', email: 'arjun.mehta@du.edu', phone: '888-777-6666' },
    { name: 'Kavita Joshi', position: 'Genetics Student', email: 'kavita.joshi@du.edu', phone: '888-777-5555' }
]
,
 
 
 //es
 
 
 'iitg': [
    { name: 'Anil Rao', position: 'Geophysics Student', email: 'anil.rao@iitg.ac.in', phone: '888-777-6666' },
    { name: 'Priya Sharma', position: 'Climatology Student', email: 'priya.sharma@iitg.ac.in', phone: '888-777-5555' }
],

'iisc': [
    { name: 'Rajesh Kumar', position: 'Geology Student', email: 'rajesh.kumar@iisc.edu', phone: '888-777-6666' },
    { name: 'Sneha Patel', position: 'Earth Sciences Student', email: 'sneha.patel@iisc.edu', phone: '888-777-5555' }
],

'jnu': [
    { name: 'Vikram Singh', position: 'Paleoclimatology Student', email: 'vikram.singh@jnu.ac.in', phone: '888-777-6666' },
    { name: 'Neha Joshi', position: 'Environmental Geology Student', email: 'neha.joshi@jnu.ac.in', phone: '888-777-5555' }
],

'cu': [
    { name: 'Aman Gupta', position: 'Geological Research Student', email: 'aman.gupta@calcutta.edu', phone: '888-777-6666' },
    { name: 'Kavita Nair', position: 'Hydrogeology Student', email: 'kavita.nair@calcutta.edu', phone: '888-777-5555' }
],

'ddu': [
    { name: 'Arjun Mehta', position: 'Earth Sciences Student', email: 'arjun.mehta@ddu.ac.in', phone: '888-777-6666' },
    { name: 'Meera Rao', position: 'Climate Change Student', email: 'meera.rao@ddu.ac.in', phone: '888-777-5555' }
]
,
 
 
 //a
 
 
 'iia': [
    { name: 'Anil Mehta', position: 'Astrophysics Student', email: 'anil.mehta@iia.in', phone: '888-777-6666' },
    { name: 'Priya Rao', position: 'Observational Astronomy Student', email: 'priya.rao@iia.in', phone: '888-777-5555' }
],

'prl': [
    { name: 'Rajesh Kumar', position: 'Cosmology Student', email: 'rajesh.kumar@prl.res.in', phone: '888-777-6666' },
    { name: 'Sneha Patel', position: 'Astrobiology Student', email: 'sneha.patel@prl.res.in', phone: '888-777-5555' }
],

'iiserm': [
    { name: 'Vikram Singh', position: 'Theoretical Astrophysics Student', email: 'vikram.singh@iiserm.ac.in', phone: '888-777-6666' },
    { name: 'Neha Sharma', position: 'Space Weather Student', email: 'neha.sharma@iiserm.ac.in', phone: '888-777-5555' }
],

'ncu': [
    { name: 'Aman Gupta', position: 'Radio Astronomy Student', email: 'aman.gupta@ncu.edu.in', phone: '888-777-6666' },
    { name: 'Kavita Joshi', position: 'Stellar Astrophysics Student', email: 'kavita.joshi@ncu.edu.in', phone: '888-777-5555' }
],

'nisa': [
    { name: 'Arjun Patel', position: 'Solar Physics Student', email: 'arjun.patel@nisa.in', phone: '888-777-6666' },
    { name: 'Meera Desai', position: 'Helioseismology Student', email: 'meera.desai@nisa.in', phone: '888-777-5555' }
]
,
 
 
 //ss
 
 
 'jnu': [
    { name: 'Anil Sharma', position: 'Sociology Student', email: 'anil.sharma@jnu.ac.in', phone: '888-777-6666' },
    { name: 'Priya Verma', position: 'Political Science Student', email: 'priya.verma@jnu.ac.in', phone: '888-777-5555' }
],

'snu': [
    { name: 'Rajesh Kumar', position: 'Development Studies Student', email: 'rajesh.kumar@snu.edu.in', phone: '888-777-6666' },
    { name: 'Sneha Patel', position: 'Human Rights Student', email: 'sneha.patel@snu.edu.in', phone: '888-777-5555' }
],

'tiss': [
    { name: 'Vikram Singh', position: 'Social Work Student', email: 'vikram.singh@tiss.edu', phone: '888-777-6666' },
    { name: 'Neha Sharma', position: 'Public Policy Student', email: 'neha.sharma@tiss.edu', phone: '888-777-5555' }
],

'du': [
    { name: 'Aman Gupta', position: 'Anthropology Student', email: 'aman.gupta@du.ac.in', phone: '888-777-6666' },
    { name: 'Kavita Joshi', position: 'Urban Studies Student', email: 'kavita.joshi@du.ac.in', phone: '888-777-5555' }
],

'isc': [
    { name: 'Arjun Patel', position: 'Economic Sociology Student', email: 'arjun.patel@isc.edu.in', phone: '888-777-6666' },
    { name: 'Meera Desai', position: 'Cultural Studies Student', email: 'meera.desai@isc.edu.in', phone: '888-777-5555' }
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
 