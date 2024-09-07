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
     { name: 'Dr. Rajiv Malhotra', position: 'Quantum Mechanics Specialist', email: 'rajiv.malhotra@tifr.edu', phone: '888-777-6666' },
     { name: 'Dr. Neeta Sharma', position: 'Astrophysics Expert', email: 'neeta.sharma@tifr.edu', phone: '888-777-5555' }
 ],
 
 'bhu': [
     { name: 'Dr. Arun Patel', position: 'Condensed Matter Physicist', email: 'arun.patel@bhu.edu', phone: '888-777-6666' },
     { name: 'Dr. Maya Singh', position: 'Experimental Physicist', email: 'maya.singh@bhu.edu', phone: '888-777-5555' }
 ],
 
 'iitb': [
     { name: 'Dr. Vikram Joshi', position: 'Theoretical Physicist', email: 'vikram.joshi@iitb.edu', phone: '888-777-6666' },
     { name: 'Dr. Sanya Patel', position: 'Particle Physics Specialist', email: 'sanya.patel@iitb.edu', phone: '888-777-5555' }
 ],
 
 'iisc': [
     { name: 'Dr. Neelam Sharma', position: 'Optics Specialist', email: 'neelam.sharma@iisc.edu', phone: '888-777-6666' },
     { name: 'Dr. Arvind Kumar', position: 'Nanotechnology Expert', email: 'arvind.kumar@iisc.edu', phone: '888-777-5555' }
 ],
 
 'jnu': [
     { name: 'Dr. Ramesh Rao', position: 'Statistical Physics Specialist', email: 'ramesh.rao@jnu.edu', phone: '888-777-6666' },
     { name: 'Dr. Priya Sen', position: 'Quantum Field Theorist', email: 'priya.sen@jnu.edu', phone: '888-777-5555' }
 ],
 
 
 //c
 
 
 'csir': [
     { name: 'Dr. Anil Sharma', position: 'Physical Chemistry Expert', email: 'anil.sharma@csir.edu', phone: '888-777-6666' },
     { name: 'Dr. Priya Mehta', position: 'Organic Chemistry Specialist', email: 'priya.mehta@csir.edu', phone: '888-777-5555' }
 ],
 
 'jnu': [
     { name: 'Dr. Rajesh Kumar', position: 'Inorganic Chemistry Professor', email: 'rajesh.kumar@jnu.edu', phone: '888-777-6666' },
     { name: 'Dr. Sneha Gupta', position: 'Analytical Chemistry Specialist', email: 'sneha.gupta@jnu.edu', phone: '888-777-5555' }
 ],
 
 'iiserp': [
     { name: 'Dr. Vikram Patel', position: 'Theoretical Chemistry Scholar', email: 'vikram.patel@iiserp.edu', phone: '888-777-6666' },
     { name: 'Dr. Neha Rao', position: 'Chemical Biology Expert', email: 'neha.rao@iiserp.edu', phone: '888-777-5555' }
 ],
 
 'iits': [
     { name: 'Dr. Aman Singh', position: 'Materials Chemistry Specialist', email: 'aman.singh@iits.edu', phone: '888-777-6666' },
     { name: 'Dr. Ritu Sharma', position: 'Nanotechnology Expert', email: 'ritu.sharma@iits.edu', phone: '888-777-5555' }
 ],
 
 'du': [
     { name: 'Dr. Arjun Verma', position: 'Physical Organic Chemist', email: 'arjun.verma@du.edu', phone: '888-777-6666' },
     { name: 'Dr. Kavita Joshi', position: 'Environmental Chemistry Specialist', email: 'kavita.joshi@du.edu', phone: '888-777-5555' }
 ],
 
 
 //b
 
 
 'iisc': [
     { name: 'Dr. Anil Kumar', position: 'Cell Biology Specialist', email: 'anil.kumar@iisc.edu', phone: '888-777-6666' },
     { name: 'Dr. Priya Nair', position: 'Genomics Expert', email: 'priya.nair@iisc.edu', phone: '888-777-5555' }
 ],
 
 'jnu': [
     { name: 'Dr. Rajesh Sharma', position: 'Molecular Biology Professor', email: 'rajesh.sharma@jnu.edu', phone: '888-777-6666' },
     { name: 'Dr. Sneha Patel', position: 'Biochemistry Specialist', email: 'sneha.patel@jnu.edu', phone: '888-777-5555' }
 ],
 
 'iiserk': [
     { name: 'Dr. Vikram Deshmukh', position: 'Ecology Expert', email: 'vikram.deshmukh@iiserk.edu', phone: '888-777-6666' },
     { name: 'Dr. Neha Gupta', position: 'Evolutionary Biology Specialist', email: 'neha.gupta@iiserk.edu', phone: '888-777-5555' }
 ],
 
 'tifr': [
     { name: 'Dr. Aman Singh', position: 'Structural Biology Scholar', email: 'aman.singh@tifr.edu', phone: '888-777-6666' },
     { name: 'Dr. Ritu Verma', position: 'Systems Biology Expert', email: 'ritu.verma@tifr.edu', phone: '888-777-5555' }
 ],
 
 'du': [
     { name: 'Dr. Arjun Mehta', position: 'Neurobiology Professor', email: 'arjun.mehta@du.edu', phone: '888-777-6666' },
     { name: 'Dr. Kavita Joshi', position: 'Genetics Specialist', email: 'kavita.joshi@du.edu', phone: '888-777-5555' }
 ],
 
 
 //es
 
 
 'iitg': [
     { name: 'Dr. Anil Rao', position: 'Geophysics Specialist', email: 'anil.rao@iitg.ac.in', phone: '888-777-6666' },
     { name: 'Dr. Priya Sharma', position: 'Climatology Expert', email: 'priya.sharma@iitg.ac.in', phone: '888-777-5555' }
 ],
 
 'iisc': [
     { name: 'Dr. Rajesh Kumar', position: 'Geology Professor', email: 'rajesh.kumar@iisc.edu', phone: '888-777-6666' },
     { name: 'Dr. Sneha Patel', position: 'Earth Sciences Researcher', email: 'sneha.patel@iisc.edu', phone: '888-777-5555' }
 ],
 
 'jnu': [
     { name: 'Dr. Vikram Singh', position: 'Paleoclimatologist', email: 'vikram.singh@jnu.ac.in', phone: '888-777-6666' },
     { name: 'Dr. Neha Joshi', position: 'Environmental Geologist', email: 'neha.joshi@jnu.ac.in', phone: '888-777-5555' }
 ],
 
 'cu': [
     { name: 'Dr. Aman Gupta', position: 'Geological Researcher', email: 'aman.gupta@calcutta.edu', phone: '888-777-6666' },
     { name: 'Dr. Kavita Nair', position: 'Hydrogeologist', email: 'kavita.nair@calcutta.edu', phone: '888-777-5555' }
 ],
 
 'ddu': [
     { name: 'Dr. Arjun Mehta', position: 'Earth Sciences Specialist', email: 'arjun.mehta@ddu.ac.in', phone: '888-777-6666' },
     { name: 'Dr. Meera Rao', position: 'Climate Change Expert', email: 'meera.rao@ddu.ac.in', phone: '888-777-5555' }
 ],
 
 
 //a
 
 
 'iia': [
     { name: 'Dr. Anil Mehta', position: 'Astrophysics Researcher', email: 'anil.mehta@iia.in', phone: '888-777-6666' },
     { name: 'Dr. Priya Rao', position: 'Observational Astronomer', email: 'priya.rao@iia.in', phone: '888-777-5555' }
 ],
 
 'prl': [
     { name: 'Dr. Rajesh Kumar', position: 'Cosmology Specialist', email: 'rajesh.kumar@prl.res.in', phone: '888-777-6666' },
     { name: 'Dr. Sneha Patel', position: 'Astrobiologist', email: 'sneha.patel@prl.res.in', phone: '888-777-5555' }
 ],
 
 'iiserm': [
     { name: 'Dr. Vikram Singh', position: 'Theoretical Astrophysicist', email: 'vikram.singh@iiserm.ac.in', phone: '888-777-6666' },
     { name: 'Dr. Neha Sharma', position: 'Space Weather Expert', email: 'neha.sharma@iiserm.ac.in', phone: '888-777-5555' }
 ],
 
 'ncu': [
     { name: 'Dr. Aman Gupta', position: 'Radio Astronomy Specialist', email: 'aman.gupta@ncu.edu.in', phone: '888-777-6666' },
     { name: 'Dr. Kavita Joshi', position: 'Stellar Astrophysicist', email: 'kavita.joshi@ncu.edu.in', phone: '888-777-5555' }
 ],
 
 'nisa': [
     { name: 'Dr. Arjun Patel', position: 'Solar Physics Researcher', email: 'arjun.patel@nisa.in', phone: '888-777-6666' },
     { name: 'Dr. Meera Desai', position: 'Helioseismology Expert', email: 'meera.desai@nisa.in', phone: '888-777-5555' }
 ],
 
 
 
 //ss
 
 
 'jnu': [
     { name: 'Dr. Anil Sharma', position: 'Sociology Professor', email: 'anil.sharma@jnu.ac.in', phone: '888-777-6666' },
     { name: 'Dr. Priya Verma', position: 'Political Science Specialist', email: 'priya.verma@jnu.ac.in', phone: '888-777-5555' }
 ],
 
 'snu': [
     { name: 'Dr. Rajesh Kumar', position: 'Development Studies Expert', email: 'rajesh.kumar@snu.edu.in', phone: '888-777-6666' },
     { name: 'Dr. Sneha Patel', position: 'Human Rights Analyst', email: 'sneha.patel@snu.edu.in', phone: '888-777-5555' }
 ],
 
 'tiss': [
     { name: 'Dr. Vikram Singh', position: 'Social Work Researcher', email: 'vikram.singh@tiss.edu', phone: '888-777-6666' },
     { name: 'Dr. Neha Sharma', position: 'Public Policy Specialist', email: 'neha.sharma@tiss.edu', phone: '888-777-5555' }
 ],
 
 'du': [
     { name: 'Dr. Aman Gupta', position: 'Anthropology Professor', email: 'aman.gupta@du.ac.in', phone: '888-777-6666' },
     { name: 'Dr. Kavita Joshi', position: 'Urban Studies Expert', email: 'kavita.joshi@du.ac.in', phone: '888-777-5555' }
 ],
 
 'isc': [
     { name: 'Dr. Arjun Patel', position: 'Economic Sociology Specialist', email: 'arjun.patel@isc.edu.in', phone: '888-777-6666' },
     { name: 'Dr. Meera Desai', position: 'Cultural Studies Researcher', email: 'meera.desai@isc.edu.in', phone: '888-777-5555' }
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
 