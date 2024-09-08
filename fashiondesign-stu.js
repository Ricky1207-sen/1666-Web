// College list for each field
const collegeData = {
    'ad': [
    { value: 'nift', name: 'National Institute of Fashion Technology, Delhi' },
    { value: 'pearl', name: 'Pearl Academy, Jaipur' },
    { value: 'fdci', name: 'Fashion Design Council of India, Delhi' },
    { value: 'symbi', name: 'Symbiosis Institute of Design, Pune' },
    { value: 'iitd', name: 'Indian Institute of Technology, Delhi' }
],

'td': [
    { value: 'niftm', name: 'National Institute of Fashion Technology, Mumbai' },
    { value: 'iitg', name: 'Indian Institute of Technology, Guwahati' },
    { value: 'nitj', name: 'National Institute of Technology, Jalandhar' },
    { value: 'clra', name: 'Central Leather Research Institute, Chennai' },
    { value: 'gitam', name: 'GITAM School of Fashion Technology, Visakhapatnam' }
],

'fl': [
    { value: 'niftd', name: 'National Institute of Fashion Technology, Delhi' },
    { value: 'pearlm', name: 'Pearl Academy, Mumbai' },
    { value: 'symbip', name: 'Symbiosis Institute of Design, Pune' },
    { value: 'iiftk', name: 'Indian Institute of Fashion Technology, Kolkata' },
    { value: 'nidb', name: 'National Institute of Design, Bengaluru' }
],

'fm': [
    { value: 'niftm', name: 'National Institute of Fashion Technology, Mumbai' },
    { value: 'ifm', name: 'Indian Institute of Fashion Merchandising, Delhi' },
    { value: 'pearlc', name: 'Pearl Academy, Chennai' },
    { value: 'niftdb', name: 'National Institute of Fashion Technology, Bengaluru' },
    { value: 'sidm', name: 'Symbiosis Institute of Design and Merchandising, Pune' }
],

'cd': [
    { value: 'niftc', name: 'National Institute of Fashion Technology, Chennai' },
    { value: 'ftid', name: 'Film and Television Institute of India, Pune' },
    { value: 'pearlm', name: 'Pearl Academy, Mumbai' },
    { value: 'nid', name: 'National Institute of Design, Ahmedabad' },
    { value: 'sidp', name: 'Symbiosis Institute of Design, Pune' }
],

'fs': [
    { value: 'niftd', name: 'National Institute of Fashion Technology, Delhi' },
    { value: 'idaf', name: 'International Institute of Fashion Design, Ahmedabad' },
    { value: 'pearlj', name: 'Pearl Academy, Jaipur' },
    { value: 'fdcal', name: 'Fashion Design Council of India, Delhi' },
    { value: 'sdm', name: 'Symbiosis Institute of Design and Fashion, Mumbai' }
]













 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
     
     
     
     
     
     
     
     
     
     
     
 
 
    
     
 
 
     
 
 
     
 
 
 
     
     // Other fields like engineering, biotechnology, etc. remain unchanged...
 };
 
 // Alumni data
 const alumniData = {
     //ad
 
 
 'nift': [
    { name: 'Meera Kapoor', position: 'Apparel Design Student', email: 'meera.kapoor@nift.edu.in', phone: '888-777-6666' },
    { name: 'Arjun Singh', position: 'Fashion Design Student', email: 'arjun.singh@nift.edu.in', phone: '888-777-5555' }
],

'pearl': [
    { name: 'Sanya Patel', position: 'Apparel Design Student', email: 'sanya.patel@pearlacademy.edu', phone: '888-777-6666' },
    { name: 'Kunal Agarwal', position: 'Fashion and Textile Design Student', email: 'kunal.agarwal@pearlacademy.edu', phone: '888-777-5555' }
],

'fdci': [
    { name: 'Neha Joshi', position: 'Apparel Industry Student', email: 'neha.joshi@fdci.in', phone: '888-777-6666' },
    { name: 'Rajesh Verma', position: 'Textile Design Student', email: 'rajesh.verma@fdci.in', phone: '888-777-5555' }
],

'symbi': [
    { name: 'Aarti Kapoor', position: 'Fashion Design Student', email: 'aarti.kapoor@symbi.edu.in', phone: '888-777-6666' },
    { name: 'Vikram Sharma', position: 'Apparel Communication Student', email: 'vikram.sharma@symbi.edu.in', phone: '888-777-5555' }
],

'iitd': [
    { name: 'Rina Patel', position: 'Apparel Technology Student', email: 'rina.patel@iitd.ac.in', phone: '888-777-6666' },
    { name: 'Arun Reddy', position: 'Textile and Apparel Design Student', email: 'arun.reddy@iitd.ac.in', phone: '888-777-5555' }
]
,

//td



 
'niftm': [
    { name: 'Neha Gupta', position: 'Textile Design Student', email: 'neha.gupta@nift.edu.in', phone: '888-777-6666' },
    { name: 'Rajesh Patel', position: 'Textile Engineering Student', email: 'rajesh.patel@nift.edu.in', phone: '888-777-5555' }
],

'iitg': [
    { name: 'Arjun Sharma', position: 'Textile Design Student', email: 'arjun.sharma@iitg.ac.in', phone: '888-777-6666' },
    { name: 'Maya Kapoor', position: 'Sustainable Textile Design Student', email: 'maya.kapoor@iitg.ac.in', phone: '888-777-5555' }
],

'nitj': [
    { name: 'Priya Joshi', position: 'Textile Technology Student', email: 'priya.joshi@nitj.ac.in', phone: '888-777-6666' },
    { name: 'Arvind Singh', position: 'Textile Production Student', email: 'arvind.singh@nitj.ac.in', phone: '888-777-5555' }
],

'clra': [
    { name: 'Anjali Patel', position: 'Textile Chemistry Student', email: 'anjali.patel@clra.ac.in', phone: '888-777-6666' },
    { name: 'Ravi Desai', position: 'Textile Processing Student', email: 'ravi.desai@clra.ac.in', phone: '888-777-5555' }
],

'gitam': [
    { name: 'Sunita Mehta', position: 'Textile and Fashion Technology Student', email: 'sunita.mehta@gitam.ac.in', phone: '888-777-6666' },
    { name: 'Kunal Sharma', position: 'Textile Manufacturing Student', email: 'kunal.sharma@gitam.ac.in', phone: '888-777-5555' }
]
,

//fl


'niftd': [
    { name: 'Aarti Kapoor', position: 'Fashion Illustration Student', email: 'aarti.kapoor@nift.edu.in', phone: '888-777-6666' },
    { name: 'Rohan Gupta', position: 'Fashion Drawing Student', email: 'rohan.gupta@nift.edu.in', phone: '888-777-5555' }
],

'pearlm': [
    { name: 'Sneha Sharma', position: 'Fashion Illustration Student', email: 'sneha.sharma@pearlacademy.edu', phone: '888-777-6666' },
    { name: 'Vikram Patel', position: 'Fashion Sketching Student', email: 'vikram.patel@pearlacademy.edu', phone: '888-777-5555' }
],

'symbip': [
    { name: 'Priya Joshi', position: 'Fashion Illustration Student', email: 'priya.joshi@symbi.edu.in', phone: '888-777-6666' },
    { name: 'Anil Desai', position: 'Fashion Drawing Student', email: 'anil.desai@symbi.edu.in', phone: '888-777-5555' }
],

'iiftk': [
    { name: 'Kavita Singh', position: 'Fashion Illustration Student', email: 'kavita.singh@iift.edu.in', phone: '888-777-6666' },
    { name: 'Rajeev Mehta', position: 'Fashion Sketching Student', email: 'rajeev.mehta@iift.edu.in', phone: '888-777-5555' }
],

'nidb': [
    { name: 'Suman Patel', position: 'Fashion Illustration Student', email: 'suman.patel@nid.edu.in', phone: '888-777-6666' },
    { name: 'Arjun Kumar', position: 'Fashion Drawing Student', email: 'arjun.kumar@nid.edu.in', phone: '888-777-5555' }
]
,


//fm

'niftm': [
    { name: 'Aisha Khan', position: 'Fashion Merchandising Student', email: 'aisha.khan@nift.edu.in', phone: '888-777-6666' },
    { name: 'Rajiv Sharma', position: 'Retail Merchandising Student', email: 'rajiv.sharma@nift.edu.in', phone: '888-777-5555' }
],

'ifm': [
    { name: 'Neeta Bhat', position: 'Fashion Merchandising Student', email: 'neeta.bhat@ifm.edu.in', phone: '888-777-6666' },
    { name: 'Vikram Jain', position: 'Merchandising Strategies Student', email: 'vikram.jain@ifm.edu.in', phone: '888-777-5555' }
],

'pearlc': [
    { name: 'Sonali Gupta', position: 'Fashion Merchandising Student', email: 'sonali.gupta@pearlacademy.edu', phone: '888-777-6666' },
    { name: 'Arjun Singh', position: 'Retail Merchandising Student', email: 'arjun.singh@pearlacademy.edu', phone: '888-777-5555' }
],

'niftdb': [
    { name: 'Maya Kapoor', position: 'Fashion Merchandising Student', email: 'maya.kapoor@nift.edu.in', phone: '888-777-6666' },
    { name: 'Ravi Patel', position: 'Apparel Merchandising Student', email: 'ravi.patel@nift.edu.in', phone: '888-777-5555' }
],

'sidm': [
    { name: 'Swati Mehta', position: 'Fashion Merchandising Student', email: 'swati.mehta@sidm.edu.in', phone: '888-777-6666' },
    { name: 'Sameer Nair', position: 'Retail Merchandising Student', email: 'sameer.nair@sidm.edu.in', phone: '888-777-5555' }
]
,
//cd



'niftc': [
    { name: 'Meera Rao', position: 'Costume Design Student', email: 'meera.rao@nift.edu.in', phone: '888-777-6666' },
    { name: 'Arjun Kapoor', position: 'Stage and Film Costume Design Student', email: 'arjun.kapoor@nift.edu.in', phone: '888-777-5555' }
],

'ftid': [
    { name: 'Neelam Shah', position: 'Costume Design Student', email: 'neelam.shah@ftid.edu.in', phone: '888-777-6666' },
    { name: 'Rajat Mehta', position: 'Film and Theater Costume Design Student', email: 'rajat.mehta@ftid.edu.in', phone: '888-777-5555' }
],

'pearlm': [
    { name: 'Sonali Patel', position: 'Costume Design Student', email: 'sonali.patel@pearlacademy.edu', phone: '888-777-6666' },
    { name: 'Rohit Deshmukh', position: 'Cinematic and Stage Costume Design Student', email: 'rohit.deshmukh@pearlacademy.edu', phone: '888-777-5555' }
],

'nid': [
    { name: 'Shreya Mehta', position: 'Costume Design Student', email: 'shreya.mehta@nid.edu.in', phone: '888-777-6666' },
    { name: 'Anil Kumar', position: 'Theater and Costume Design Student', email: 'anil.kumar@nid.edu.in', phone: '888-777-5555' }
],

'sidp': [
    { name: 'Vishal Patel', position: 'Costume Design Student', email: 'vishal.patel@sidp.edu.in', phone: '888-777-6666' },
    { name: 'Meera Sharma', position: 'Costume Design Student', email: 'meera.sharma@sidp.edu.in', phone: '888-777-5555' }
]
,

//fs


'niftd': [
    { name: 'Priya Kapoor', position: 'Fashion Styling Student', email: 'priya.kapoor@nift.edu.in', phone: '888-777-6666' },
    { name: 'Rajesh Desai', position: 'Trends and Styling Student', email: 'rajesh.desai@nift.edu.in', phone: '888-777-5555' }
],

'idaf': [
    { name: 'Neha Singh', position: 'Fashion Styling Student', email: 'neha.singh@idaf.edu.in', phone: '888-777-6666' },
    { name: 'Vikram Verma', position: 'Personal Style Student', email: 'vikram.verma@idaf.edu.in', phone: '888-777-5555' }
],

'pearlj': [
    { name: 'Aisha Sharma', position: 'Fashion Styling and Photography Student', email: 'aisha.sharma@pearlacademy.edu', phone: '888-777-6666' },
    { name: 'Rohan Rao', position: 'Celebrity Stylist Student', email: 'rohan.rao@pearlacademy.edu', phone: '888-777-5555' }
],

'fdcal': [
    { name: 'Ananya Agarwal', position: 'Fashion Styling Student', email: 'ananya.agarwal@fdcal.in', phone: '888-777-6666' },
    { name: 'Arjun Kumar', position: 'Editorial and Runway Styling Student', email: 'arjun.kumar@fdcal.in', phone: '888-777-5555' }
],

'sdm': [
    { name: 'Riya Singh', position: 'Fashion Styling and Image Consulting Student', email: 'riya.singh@sdm.edu.in', phone: '888-777-6666' },
    { name: 'Sameer Joshi', position: 'Wardrobe and Style Student', email: 'sameer.joshi@sdm.edu.in', phone: '888-777-5555' }
]















 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
   
     
 
     
 
 
     
 
 
 
 
 
 
 
 
 
 
 
 
 
     
 
   
 
     
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
 