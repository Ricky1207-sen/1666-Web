// College list for each field
const collegeData = {
    'cb': [
    { value: 'nlu', name: 'National Law University, Delhi' },
    { value: 'tiss', name: 'Tata Institute of Social Sciences, Mumbai' },
    { value: 'nimhans', name: 'National Institute of Mental Health and Neurosciences, Bengaluru' },
    { value: 'amity', name: 'Amity Institute of Criminology and Forensic Science, Noida' },
    { value: 'lpu', name: 'Lovely Professional University, Punjab' }
],

'cjs': [
    { value: 'nludelhi', name: 'National Law University, Delhi' },
    { value: 'tissmumbai', name: 'Tata Institute of Social Sciences, Mumbai' },
    { value: 'nimhansbengaluru', name: 'National Institute of Mental Health and Neurosciences, Bengaluru' },
    { value: 'amitynoida', name: 'Amity Institute of Criminology and Forensic Science, Noida' },
    { value: 'lpujalandhar', name: 'Lovely Professional University, Punjab' }
],

'fs': [
    { value: 'gujaratfsl', name: 'Gujarat Forensic Sciences University, Gandhinagar' },
    { value: 'punefsl', name: 'Institute of Forensic Science, Pune' },
    { value: 'msufsl', name: 'Maharaja Sayajirao University of Baroda, Vadodara' },
    { value: 'amityforensics', name: 'Amity Institute of Forensic Sciences, Noida' },
    { value: 'lpu', name: 'Lovely Professional University, Punjab' }
],

'p': [
    { value: 'tissmumbai', name: 'Tata Institute of Social Sciences, Mumbai' },
    { value: 'nlsiu', name: 'National Law School of India University, Bengaluru' },
    { value: 'rgniipm', name: 'Rajiv Gandhi National Institute of Intellectual Property Management, Nagpur' },
    { value: 'nalsar', name: 'NALSAR University of Law, Hyderabad' },
    { value: 'nludelhi', name: 'National Law University, Delhi' }
],

'v': [
    { value: 'msubarak', name: 'Maharaja Sayajirao University of Baroda, Vadodara' },
    { value: 'lcil', name: 'Lloyd College of Law and International Victimology, Greater Noida' },
    { value: 'nlujodhpur', name: 'National Law University, Jodhpur' },
    { value: 'rgniipm', name: 'Rajiv Gandhi National Institute of Intellectual Property Management, Nagpur' },
    { value: 'tisshyderabad', name: 'Tata Institute of Social Sciences, Hyderabad' }
],

'cc': [
    { value: 'jnu', name: 'Jawaharlal Nehru University, Delhi' },
    { value: 'snu', name: 'Shiv Nadar University, Greater Noida' },
    { value: 'unimumbai', name: 'University of Mumbai, Mumbai' },
    { value: 'du', name: 'Delhi University, Delhi' },
    { value: 'iimc', name: 'Indian Institute of Mass Communication, Delhi' }
],















 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
     
     
     
     
     
     
     
     
     
     
     
 
 
    
     
 
 
     
 
 
     
 
 
 
     
     // Other fields like engineering, biotechnology, etc. remain unchanged...
 };
 
 // Alumni data
 const alumniData = {
     //cb
 
 
 'nlu': [
    { name: 'Nisha Kapoor', position: 'Criminal Behavior Student', email: 'nisha.kapoor@nlu.edu.in', phone: '888-777-6666' },
    { name: 'Rajiv Sharma', position: 'Behavioral Criminology Student', email: 'rajiv.sharma@nlu.edu.in', phone: '888-777-5555' }
],

'tiss': [
    { name: 'Aarti Joshi', position: 'Criminal Behavior Analysis Student', email: 'aarti.joshi@tiss.edu', phone: '888-777-6666' },
    { name: 'Karan Mehta', position: 'Behavioral Forensics Student', email: 'karan.mehta@tiss.edu', phone: '888-777-5555' }
],

'nimhans': [
    { name: 'Maya Gupta', position: 'Criminal Behavior Research Student', email: 'maya.gupta@nimhans.edu', phone: '888-777-6666' },
    { name: 'Arun Patel', position: 'Forensic Behavior Analysis Student', email: 'arun.patel@nimhans.edu', phone: '888-777-5555' }
],

'amity': [
    { name: 'Neha Reddy', position: 'Behavioral Criminology Student', email: 'neha.reddy@amity.edu.in', phone: '888-777-6666' },
    { name: 'Amit Verma', position: 'Criminal Behavior Student', email: 'amit.verma@amity.edu.in', phone: '888-777-5555' }
],

'lpu': [
    { name: 'Sunita Rao', position: 'Criminal Behavior Student', email: 'sunita.rao@lpu.edu.in', phone: '888-777-6666' },
    { name: 'Ravi Kumar', position: 'Criminal Behavior and Psychology Student', email: 'ravi.kumar@lpu.edu.in', phone: '888-777-5555' }
]
,

//cjs


'nludelhi': [
    { name: 'Ankit Mehta', position: 'Criminal Justice System Student', email: 'ankit.mehta@nludelhi.edu.in', phone: '888-777-6666' },
    { name: 'Neha Kapoor', position: 'Criminal Justice Policy Student', email: 'neha.kapoor@nludelhi.edu.in', phone: '888-777-5555' }
],

'tissmumbai': [
    { name: 'Ramesh Desai', position: 'Criminal Justice Research Student', email: 'ramesh.desai@tissmumbai.edu.in', phone: '888-777-6666' },
    { name: 'Kavita Mehta', position: 'Criminal Justice System Student', email: 'kavita.mehta@tissmumbai.edu.in', phone: '888-777-5555' }
],

'nimhansbengaluru': [
    { name: 'Priya Sharma', position: 'Criminal Justice Analysis Student', email: 'priya.sharma@nimhansbengaluru.edu', phone: '888-777-6666' },
    { name: 'Rajiv Rao', position: 'Criminal Justice Systems Student', email: 'rajiv.rao@nimhansbengaluru.edu', phone: '888-777-5555' }
],

'amitynoida': [
    { name: 'Arjun Patel', position: 'Criminal Justice Studies Student', email: 'arjun.patel@amitynoida.edu.in', phone: '888-777-6666' },
    { name: 'Sneha Rathi', position: 'Criminal Justice Policy Student', email: 'sneha.rathi@amitynoida.edu.in', phone: '888-777-5555' }
],

'lpujalandhar': [
    { name: 'Sunil Gupta', position: 'Criminal Justice System Research Student', email: 'sunil.gupta@lpujalandhar.edu.in', phone: '888-777-6666' },
    { name: 'Meera Singh', position: 'Criminal Justice and Reform Student', email: 'meera.singh@lpujalandhar.edu.in', phone: '888-777-5555' }
],


//fs


'gujaratfsl': [
    { name: 'Ankur Patel', position: 'Forensic Science Student', email: 'ankur.patel@gfsu.edu.in', phone: '888-777-6666' },
    { name: 'Maya Singh', position: 'Forensic Toxicology Student', email: 'maya.singh@gfsu.edu.in', phone: '888-777-5555' }
],

'punefsl': [
    { name: 'Arjun Joshi', position: 'Forensic DNA Student', email: 'arjun.joshi@ifs.pune.edu.in', phone: '888-777-6666' },
    { name: 'Meera Sharma', position: 'Crime Scene Analysis Student', email: 'meera.sharma@ifs.pune.edu.in', phone: '888-777-5555' }
],

'msufsl': [
    { name: 'Priya Kapoor', position: 'Forensic Chemistry Student', email: 'priya.kapoor@msu.edu.in', phone: '888-777-6666' },
    { name: 'Rohit Verma', position: 'Forensic Ballistics Student', email: 'rohit.verma@msu.edu.in', phone: '888-777-5555' }
],

'amityforensics': [
    { name: 'Ritu Nair', position: 'Forensic Anthropology Student', email: 'ritu.nair@amity.edu.in', phone: '888-777-6666' },
    { name: 'Arvind Kumar', position: 'Forensic Document Student', email: 'arvind.kumar@amity.edu.in', phone: '888-777-5555' }
],

'lpu': [
    { name: 'Shweta Mehta', position: 'Forensic Science Research Student', email: 'shweta.mehta@lpu.edu.in', phone: '888-777-6666' },
    { name: 'Arun Singh', position: 'Cyber Forensics Student', email: 'arun.singh@lpu.edu.in', phone: '888-777-5555' }
]
,



//p



'tissmumbai': [
    { name: 'Sunil Rao', position: 'Penology and Criminal Justice Student', email: 'sunil.rao@tiss.edu', phone: '888-777-6666' },
    { name: 'Anita Deshmukh', position: 'Criminal Justice System Student', email: 'anita.deshmukh@tiss.edu', phone: '888-777-5555' }
],

'nlsiu': [
    { name: 'Aarti Mehta', position: 'Penology Research Student', email: 'aarti.mehta@nlsiu.edu.in', phone: '888-777-6666' },
    { name: 'Rajesh Gupta', position: 'Criminal Justice Systems Student', email: 'rajesh.gupta@nlsiu.edu.in', phone: '888-777-5555' }
],

'rgniipm': [
    { name: 'Vikram Joshi', position: 'Penology and Correctional Management Student', email: 'vikram.joshi@rgniipm.edu.in', phone: '888-777-6666' },
    { name: 'Meera Reddy', position: 'Criminal Justice Reforms Student', email: 'meera.reddy@rgniipm.edu.in', phone: '888-777-5555' }
],

'nalsar': [
    { name: 'Ramesh Kumar', position: 'Penology Studies Student', email: 'ramesh.kumar@nalsar.ac.in', phone: '888-777-6666' },
    { name: 'Seema Gupta', position: 'Criminal Justice and Penology Student', email: 'seema.gupta@nalsar.ac.in', phone: '888-777-5555' }
],

'nludelhi': [
    { name: 'Anil Sharma', position: 'Penology and Criminal Justice Student', email: 'anil.sharma@nludelhi.ac.in', phone: '888-777-6666' },
    { name: 'Neha Singh', position: 'Criminal Justice Systems Student', email: 'neha.singh@nludelhi.ac.in', phone: '888-777-5555' }
]
,


//v


'msubarak': [
    { name: 'Ravi Jain', position: 'Victimology and Trauma Studies Student', email: 'ravi.jain@msubarak.edu.in', phone: '888-777-6666' },
    { name: 'Simran Kaur', position: 'Victim Support and Counseling Student', email: 'simran.kaur@msubarak.edu.in', phone: '888-777-5555' }
],

'lcil': [
    { name: 'Aarti Mehta', position: 'Victimology and Human Rights Student', email: 'aarti.mehta@lcil.edu.in', phone: '888-777-6666' },
    { name: 'Rajeev Kumar', position: 'Criminal Law and Victimology Student', email: 'rajeeve.kumar@lcil.edu.in', phone: '888-777-5555' }
],

'nlujodhpur': [
    { name: 'Meera Sharma', position: 'Victimology and Rehabilitation Student', email: 'meera.sharma@nlujodhpur.edu.in', phone: '888-777-6666' },
    { name: 'Vikram Singh', position: 'Victim Advocacy Student', email: 'vikram.singh@nlujodhpur.edu.in', phone: '888-777-5555' }
],

'rgniipm': [
    { name: 'Priya Choudhury', position: 'Victimology and Social Justice Student', email: 'priya.choudhury@rgniipm.edu.in', phone: '888-777-6666' },
    { name: 'Rohit Sharma', position: 'Victim Services and Rights Student', email: 'rohit.sharma@rgniipm.edu.in', phone: '888-777-5555' }
],

'tisshyderabad': [
    { name: 'Anil Gupta', position: 'Victimology and Crisis Intervention Student', email: 'anil.gupta@tisshyderabad.edu.in', phone: '888-777-6666' },
    { name: 'Neha Patel', position: 'Criminal Justice and Victim Support Student', email: 'neha.patel@tisshyderabad.edu.in', phone: '888-777-5555' }
],




//cc


'jnu': [
    { name: 'Arjun Patel', position: 'Comparative Criminology and Justice Student', email: 'arjun.patel@jnu.ac.in', phone: '888-777-6666' },
    { name: 'Riya Sharma', position: 'Global Criminology Student', email: 'riya.sharma@jnu.ac.in', phone: '888-777-5555' }
],

'snu': [
    { name: 'Karan Mehta', position: 'International Criminology Student', email: 'karan.mehta@snu.edu.in', phone: '888-777-6666' },
    { name: 'Sneha Patel', position: 'Comparative Criminal Justice Systems Student', email: 'sneha.patel@snu.edu.in', phone: '888-777-5555' }
],

'unimumbai': [
    { name: 'Aarav Kumar', position: 'Comparative Criminology Research Student', email: 'aarav.kumar@unimumbai.ac.in', phone: '888-777-6666' },
    { name: 'Tanvi Deshmukh', position: 'Criminal Justice Systems and Comparative Law Student', email: 'tanvi.deshmukh@unimumbai.ac.in', phone: '888-777-5555' }
],

'du': [
    { name: 'Nitin Sharma', position: 'Comparative Criminology and Law Student', email: 'nitin.sharma@du.ac.in', phone: '888-777-6666' },
    { name: 'Meera Joshi', position: 'Global Criminology and Justice Student', email: 'meera.joshi@du.ac.in', phone: '888-777-5555' }
],

'iimc': [
    { name: 'Aman Singh', position: 'Comparative Criminology and Media Relations Student', email: 'aman.singh@iimc.edu.in', phone: '888-777-6666' },
    { name: 'Neha Agarwal', position: 'Criminal Justice Communication and Media Student', email: 'neha.agarwal@iimc.edu.in', phone: '888-777-5555' }
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
 