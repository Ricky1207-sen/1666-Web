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
    { name: 'Dr. Meera Kapoor', position: 'Apparel Design Specialist', email: 'meera.kapoor@nift.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Arjun Singh', position: 'Fashion Design Consultant', email: 'arjun.singh@nift.edu.in', phone: '888-777-5555' }
],

'pearl': [
    { name: 'Dr. Sanya Patel', position: 'Apparel Design Expert', email: 'sanya.patel@pearlacademy.edu', phone: '888-777-6666' },
    { name: 'Dr. Kunal Agarwal', position: 'Fashion and Textile Design Specialist', email: 'kunal.agarwal@pearlacademy.edu', phone: '888-777-5555' }
],

'fdci': [
    { name: 'Dr. Neha Joshi', position: 'Apparel Industry Consultant', email: 'neha.joshi@fdci.in', phone: '888-777-6666' },
    { name: 'Dr. Rajesh Verma', position: 'Textile Design Analyst', email: 'rajesh.verma@fdci.in', phone: '888-777-5555' }
],

'symbi': [
    { name: 'Dr. Aarti Kapoor', position: 'Fashion Design Professor', email: 'aarti.kapoor@symbi.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Vikram Sharma', position: 'Apparel Communication Specialist', email: 'vikram.sharma@symbi.edu.in', phone: '888-777-5555' }
],

'iitd': [
    { name: 'Dr. Rina Patel', position: 'Apparel Technology Professor', email: 'rina.patel@iitd.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Arun Reddy', position: 'Textile and Apparel Design Expert', email: 'arun.reddy@iitd.ac.in', phone: '888-777-5555' }
],


//td



 
'niftm': [
    { name: 'Dr. Neha Gupta', position: 'Textile Design Expert', email: 'neha.gupta@nift.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Rajesh Patel', position: 'Textile Engineering Consultant', email: 'rajesh.patel@nift.edu.in', phone: '888-777-5555' }
],

'iitg': [
    { name: 'Dr. Arjun Sharma', position: 'Textile Design Innovator', email: 'arjun.sharma@iitg.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Maya Kapoor', position: 'Sustainable Textile Design Expert', email: 'maya.kapoor@iitg.ac.in', phone: '888-777-5555' }
],

'nitj': [
    { name: 'Dr. Priya Joshi', position: 'Textile Technology Specialist', email: 'priya.joshi@nitj.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Arvind Singh', position: 'Textile Production Consultant', email: 'arvind.singh@nitj.ac.in', phone: '888-777-5555' }
],

'clra': [
    { name: 'Dr. Anjali Patel', position: 'Textile Chemistry Specialist', email: 'anjali.patel@clra.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Ravi Desai', position: 'Textile Processing Consultant', email: 'ravi.desai@clra.ac.in', phone: '888-777-5555' }
],

'gitam': [
    { name: 'Dr. Sunita Mehta', position: 'Textile and Fashion Technology Specialist', email: 'sunita.mehta@gitam.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Kunal Sharma', position: 'Textile Manufacturing Consultant', email: 'kunal.sharma@gitam.ac.in', phone: '888-777-5555' }
],



//fl


'niftd': [
    { name: 'Dr. Aarti Kapoor', position: 'Fashion Illustration Professor', email: 'aarti.kapoor@nift.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Rohan Gupta', position: 'Fashion Drawing Specialist', email: 'rohan.gupta@nift.edu.in', phone: '888-777-5555' }
],

'pearlm': [
    { name: 'Dr. Sneha Sharma', position: 'Fashion Illustration Expert', email: 'sneha.sharma@pearlacademy.edu', phone: '888-777-6666' },
    { name: 'Dr. Vikram Patel', position: 'Fashion Sketching Consultant', email: 'vikram.patel@pearlacademy.edu', phone: '888-777-5555' }
],

'symbip': [
    { name: 'Dr. Priya Joshi', position: 'Fashion Illustration Professor', email: 'priya.joshi@symbi.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Anil Desai', position: 'Fashion Drawing Expert', email: 'anil.desai@symbi.edu.in', phone: '888-777-5555' }
],

'iiftk': [
    { name: 'Dr. Kavita Singh', position: 'Fashion Illustration Specialist', email: 'kavita.singh@iift.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Rajeev Mehta', position: 'Fashion Sketching Consultant', email: 'rajeeve.mehta@iift.edu.in', phone: '888-777-5555' }
],

'nidb': [
    { name: 'Dr. Suman Patel', position: 'Fashion Illustration Professor', email: 'suman.patel@nid.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Arjun Kumar', position: 'Fashion Drawing Specialist', email: 'arjun.kumar@nid.edu.in', phone: '888-777-5555' }
],



//fm



'niftm': [
    { name: 'Dr. Aisha Khan', position: 'Fashion Merchandising Specialist', email: 'aisha.khan@nift.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Rajiv Sharma', position: 'Retail Merchandising Consultant', email: 'rajiv.sharma@nift.edu.in', phone: '888-777-5555' }
],

'ifm': [
    { name: 'Dr. Neeta Bhat', position: 'Fashion Merchandising Analyst', email: 'neeta.bhat@ifm.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Vikram Jain', position: 'Merchandising Strategies Expert', email: 'vikram.jain@ifm.edu.in', phone: '888-777-5555' }
],

'pearlc': [
    { name: 'Dr. Sonali Gupta', position: 'Fashion Merchandising Consultant', email: 'sonali.gupta@pearlacademy.edu', phone: '888-777-6666' },
    { name: 'Dr. Arjun Singh', position: 'Retail Merchandising Specialist', email: 'arjun.singh@pearlacademy.edu', phone: '888-777-5555' }
],

'niftdb': [
    { name: 'Dr. Maya Kapoor', position: 'Fashion Merchandising Professor', email: 'maya.kapoor@nift.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Ravi Patel', position: 'Apparel Merchandising Expert', email: 'ravi.patel@nift.edu.in', phone: '888-777-5555' }
],

'sidm': [
    { name: 'Dr. Swati Mehta', position: 'Fashion Merchandising Analyst', email: 'swati.mehta@sidm.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Sameer Nair', position: 'Retail Merchandising Consultant', email: 'sameer.nair@sidm.edu.in', phone: '888-777-5555' }
],


//cd



'niftc': [
    { name: 'Dr. Meera Rao', position: 'Costume Design Professor', email: 'meera.rao@nift.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Arjun Kapoor', position: 'Stage and Film Costume Specialist', email: 'arjun.kapoor@nift.edu.in', phone: '888-777-5555' }
],

'ftid': [
    { name: 'Dr. Neelam Shah', position: 'Costume Design Expert', email: 'neelam.shah@ftid.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Rajat Mehta', position: 'Film and Theater Costume Consultant', email: 'rajat.mehta@ftid.edu.in', phone: '888-777-5555' }
],

'pearlm': [
    { name: 'Dr. Sonali Patel', position: 'Costume Design Professor', email: 'sonali.patel@pearlacademy.edu', phone: '888-777-6666' },
    { name: 'Dr. Rohit Deshmukh', position: 'Cinematic and Stage Costume Specialist', email: 'rohit.deshmukh@pearlacademy.edu', phone: '888-777-5555' }
],

'nid': [
    { name: 'Dr. Shreya Mehta', position: 'Costume Design Researcher', email: 'shreya.mehta@nid.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Anil Kumar', position: 'Theater and Costume Expert', email: 'anil.kumar@nid.edu.in', phone: '888-777-5555' }
],

'sidp': [
    { name: 'Dr. Vishal Patel', position: 'Costume Design Professor', email: 'vishal.patel@sidp.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Meera Sharma', position: 'Costume Design Specialist', email: 'meera.sharma@sidp.edu.in', phone: '888-777-5555' }
],


//fs


'niftd': [
    { name: 'Dr. Priya Kapoor', position: 'Fashion Styling Professor', email: 'priya.kapoor@nift.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Rajesh Desai', position: 'Trends and Styling Specialist', email: 'rajesh.desai@nift.edu.in', phone: '888-777-5555' }
],

'idaf': [
    { name: 'Dr. Neha Singh', position: 'Fashion Styling Expert', email: 'neha.singh@idaf.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Vikram Verma', position: 'Personal Style Consultant', email: 'vikram.verma@idaf.edu.in', phone: '888-777-5555' }
],

'pearlj': [
    { name: 'Dr. Aisha Sharma', position: 'Fashion Styling and Photography Specialist', email: 'aisha.sharma@pearlacademy.edu', phone: '888-777-6666' },
    { name: 'Dr. Rohan Rao', position: 'Celebrity Stylist Consultant', email: 'rohan.rao@pearlacademy.edu', phone: '888-777-5555' }
],

'fdcal': [
    { name: 'Dr. Ananya Agarwal', position: 'Fashion Styling Researcher', email: 'ananya.agarwal@fdcal.in', phone: '888-777-6666' },
    { name: 'Dr. Arjun Kumar', position: 'Editorial and Runway Stylist', email: 'arjun.kumar@fdcal.in', phone: '888-777-5555' }
],

'sdm': [
    { name: 'Dr. Riya Singh', position: 'Fashion Styling and Image Consultant', email: 'riya.singh@sdm.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Sameer Joshi', position: 'Wardrobe and Style Consultant', email: 'sameer.joshi@sdm.edu.in', phone: '888-777-5555' }
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
 