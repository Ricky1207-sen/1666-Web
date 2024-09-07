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
    { name: 'Dr. Aditi Sharma', position: 'Apparel Design Professor', email: 'aditi.sharma@nift.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Rohan Patel', position: 'Fashion Design Specialist', email: 'rohan.patel@nift.edu.in', phone: '888-777-5555' }
],

'pearl': [
    { name: 'Dr. Meera Joshi', position: 'Fashion Design Expert', email: 'meera.joshi@pearlacademy.edu', phone: '888-777-6666' },
    { name: 'Dr. Vikram Rao', position: 'Textile Design Specialist', email: 'vikram.rao@pearlacademy.edu', phone: '888-777-5555' }
],

'fdci': [
    { name: 'Dr. Sunil Kapoor', position: 'Fashion Industry Consultant', email: 'sunil.kapoor@fdci.in', phone: '888-777-6666' },
    { name: 'Dr. Ananya Singh', position: 'Apparel Trends Analyst', email: 'ananya.singh@fdci.in', phone: '888-777-5555' }
],

'symbi': [
    { name: 'Dr. Priya Sharma', position: 'Apparel Design Professor', email: 'priya.sharma@symbi.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Rajesh Kumar', position: 'Fashion Communication Specialist', email: 'rajesh.kumar@symbi.edu.in', phone: '888-777-5555' }
],

'iitd': [
    { name: 'Dr. Neha Gupta', position: 'Fashion Technology Professor', email: 'neha.gupta@iitd.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Arjun Desai', position: 'Textile and Apparel Specialist', email: 'arjun.desai@iitd.ac.in', phone: '888-777-5555' }
],



//td



 
'niftm': [
    { name: 'Dr. Kavita Mehra', position: 'Textile Design Professor', email: 'kavita.mehra@nift.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Anil Kapoor', position: 'Textile Engineering Specialist', email: 'anil.kapoor@nift.edu.in', phone: '888-777-5555' }
],

'iitg': [
    { name: 'Dr. Ritu Sinha', position: 'Textile Innovation Expert', email: 'ritu.sinha@iitg.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Vishal Bhatt', position: 'Sustainable Textile Design Specialist', email: 'vishal.bhatt@iitg.ac.in', phone: '888-777-5555' }
],

'nitj': [
    { name: 'Dr. Anjali Verma', position: 'Textile Technology Consultant', email: 'anjali.verma@nitj.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Sanjay Mehta', position: 'Textile Manufacturing Expert', email: 'sanjay.mehta@nitj.ac.in', phone: '888-777-5555' }
],

'clra': [
    { name: 'Dr. Poonam Reddy', position: 'Textile Chemistry Professor', email: 'poonam.reddy@clra.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Ashok Kumar', position: 'Textile Processing Specialist', email: 'ashok.kumar@clra.ac.in', phone: '888-777-5555' }
],

'gitam': [
    { name: 'Dr. Sujata Pandey', position: 'Textile and Fashion Technology Professor', email: 'sujata.pandey@gitam.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Ravi Sharma', position: 'Textile Production Specialist', email: 'ravi.sharma@gitam.ac.in', phone: '888-777-5555' }
],


//fl


'niftd': [
    { name: 'Dr. Ritu Mehta', position: 'Fashion Design Professor', email: 'ritu.mehta@nift.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Anil Verma', position: 'Textile Design Specialist', email: 'anil.verma@nift.edu.in', phone: '888-777-5555' }
],

'pearlm': [
    { name: 'Dr. Swati Jain', position: 'Apparel Design Expert', email: 'swati.jain@pearlacademy.edu', phone: '888-777-6666' },
    { name: 'Dr. Arjun Kapoor', position: 'Fashion Technology Consultant', email: 'arjun.kapoor@pearlacademy.edu', phone: '888-777-5555' }
],

'symbip': [
    { name: 'Dr. Kavita Rao', position: 'Textile Design Professor', email: 'kavita.rao@symbi.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Manish Desai', position: 'Apparel Technology Specialist', email: 'manish.desai@symbi.edu.in', phone: '888-777-5555' }
],

'iiftk': [
    { name: 'Dr. Neha Mehta', position: 'Fashion Technology Expert', email: 'neha.mehta@iift.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Rohit Sinha', position: 'Textile and Apparel Consultant', email: 'rohit.sinha@iift.edu.in', phone: '888-777-5555' }
],

'nidb': [
    { name: 'Dr. Priya Sharma', position: 'Design Research Professor', email: 'priya.sharma@nid.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Rajat Verma', position: 'Apparel Design Specialist', email: 'rajat.verma@nid.edu.in', phone: '888-777-5555' }
],


//fm



'niftm': [
    { name: 'Dr. Kavita Sharma', position: 'Fashion Merchandising Professor', email: 'kavita.sharma@nift.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Ramesh Kapoor', position: 'Retail Merchandising Expert', email: 'ramesh.kapoor@nift.edu.in', phone: '888-777-5555' }
],

'ifm': [
    { name: 'Dr. Meena Gupta', position: 'Fashion Retail Specialist', email: 'meena.gupta@ifm.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Anuj Verma', position: 'Merchandising Consultant', email: 'anuj.verma@ifm.edu.in', phone: '888-777-5555' }
],

'pearlc': [
    { name: 'Dr. Sunita Joshi', position: 'Fashion Merchandising Professor', email: 'sunita.joshi@pearlacademy.edu', phone: '888-777-6666' },
    { name: 'Dr. Akshay Rao', position: 'Textile Merchandising Specialist', email: 'akshay.rao@pearlacademy.edu', phone: '888-777-5555' }
],

'niftdb': [
    { name: 'Dr. Pranav Mehta', position: 'Fashion Merchandising Expert', email: 'pranav.mehta@nift.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Shalini Patel', position: 'Apparel Merchandising Analyst', email: 'shalini.patel@nift.edu.in', phone: '888-777-5555' }
],

'sidm': [
    { name: 'Dr. Ritu Desai', position: 'Fashion Merchandising Researcher', email: 'ritu.desai@sidm.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Vivek Nair', position: 'Retail Merchandising Specialist', email: 'vivek.nair@sidm.edu.in', phone: '888-777-5555' }
],


//cd



'niftc': [
    { name: 'Dr. Aishwarya Rao', position: 'Costume Design Professor', email: 'aishwarya.rao@nift.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Ravi Kapoor', position: 'Film Costume Specialist', email: 'ravi.kapoor@nift.edu.in', phone: '888-777-5555' }
],

'ftid': [
    { name: 'Dr. Meenal Shah', position: 'Costume Design Expert', email: 'meenal.shah@ftid.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Rahul Mehta', position: 'Cinematic Costume Consultant', email: 'rahul.mehta@ftid.edu.in', phone: '888-777-5555' }
],

'pearlm': [
    { name: 'Dr. Sonali Desai', position: 'Costume Design Professor', email: 'sonali.desai@pearlacademy.edu', phone: '888-777-6666' },
    { name: 'Dr. Arjun Patel', position: 'Stage and Theater Costume Specialist', email: 'arjun.patel@pearlacademy.edu', phone: '888-777-5555' }
],

'nid': [
    { name: 'Dr. Shreya Gupta', position: 'Costume Design Researcher', email: 'shreya.gupta@nid.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Priya Verma', position: 'Textile and Costume Expert', email: 'priya.verma@nid.edu.in', phone: '888-777-5555' }
],

'sidp': [
    { name: 'Dr. Vishal Sharma', position: 'Costume Design Professor', email: 'vishal.sharma@sidp.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Meera Menon', position: 'Costume Design Specialist', email: 'meera.menon@sidp.edu.in', phone: '888-777-5555' }
]
,

//fs


'niftd': [
    { name: 'Dr. Anjali Kapoor', position: 'Fashion Styling Professor', email: 'anjali.kapoor@nift.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Karan Desai', position: 'Fashion Trends Specialist', email: 'karan.desai@nift.edu.in', phone: '888-777-5555' }
],

'idaf': [
    { name: 'Dr. Sneha Singh', position: 'Fashion Styling Expert', email: 'sneha.singh@idaf.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Rahul Verma', position: 'Personal Stylist Consultant', email: 'rahul.verma@idaf.edu.in', phone: '888-777-5555' }
],

'pearlj': [
    { name: 'Dr. Meena Sharma', position: 'Fashion Styling and Photography Specialist', email: 'meena.sharma@pearlacademy.edu', phone: '888-777-6666' },
    { name: 'Dr. Amit Rao', position: 'Celebrity Stylist Consultant', email: 'amit.rao@pearlacademy.edu', phone: '888-777-5555' }
],

'fdcal': [
    { name: 'Dr. Neha Agarwal', position: 'Fashion Styling Researcher', email: 'neha.agarwal@fdcal.in', phone: '888-777-6666' },
    { name: 'Dr. Piyush Kumar', position: 'Runway and Editorial Stylist', email: 'piyush.kumar@fdcal.in', phone: '888-777-5555' }
],

'sdm': [
    { name: 'Dr. Vishal Singh', position: 'Fashion Styling and Image Consultant', email: 'vishal.singh@sdm.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Priya Joshi', position: 'Wardrobe Consultant Specialist', email: 'priya.joshi@sdm.edu.in', phone: '888-777-5555' }
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
 