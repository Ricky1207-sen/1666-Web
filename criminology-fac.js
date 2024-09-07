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
    { name: 'Dr. Nisha Kapoor', position: 'Criminal Behavior Professor', email: 'nisha.kapoor@nlu.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Rajiv Sharma', position: 'Behavioral Criminology Specialist', email: 'rajiv.sharma@nlu.edu.in', phone: '888-777-5555' }
],

'tiss': [
    { name: 'Dr. Aarti Joshi', position: 'Criminal Behavior Analysis Expert', email: 'aarti.joshi@tiss.edu', phone: '888-777-6666' },
    { name: 'Dr. Karan Mehta', position: 'Behavioral Forensics Specialist', email: 'karan.mehta@tiss.edu', phone: '888-777-5555' }
],

'nimhans': [
    { name: 'Dr. Maya Gupta', position: 'Criminal Behavior Researcher', email: 'maya.gupta@nimhans.edu', phone: '888-777-6666' },
    { name: 'Dr. Arun Patel', position: 'Forensic Behavior Analyst', email: 'arun.patel@nimhans.edu', phone: '888-777-5555' }
],

'amity': [
    { name: 'Dr. Neha Reddy', position: 'Behavioral Criminology Professor', email: 'neha.reddy@amity.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Amit Verma', position: 'Criminal Behavior Specialist', email: 'amit.verma@amity.edu.in', phone: '888-777-5555' }
],

'lpu': [
    { name: 'Dr. Sunita Rao', position: 'Criminal Behavior Professor', email: 'sunita.rao@lpu.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Ravi Kumar', position: 'Criminal Behavior and Psychology Specialist', email: 'ravi.kumar@lpu.edu.in', phone: '888-777-5555' }
],


//cjs


'nludelhi': [
    { name: 'Dr. Ankit Mehta', position: 'Criminal Justice System Professor', email: 'ankit.mehta@nludelhi.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Neha Kapoor', position: 'Criminal Justice Policy Specialist', email: 'neha.kapoor@nludelhi.edu.in', phone: '888-777-5555' }
],

'tissmumbai': [
    { name: 'Dr. Ramesh Desai', position: 'Criminal Justice Research Professor', email: 'ramesh.desai@tissmumbai.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Kavita Mehta', position: 'Criminal Justice System Expert', email: 'kavita.mehta@tissmumbai.edu.in', phone: '888-777-5555' }
],

'nimhansbengaluru': [
    { name: 'Dr. Priya Sharma', position: 'Criminal Justice Analysis Specialist', email: 'priya.sharma@nimhansbengaluru.edu', phone: '888-777-6666' },
    { name: 'Dr. Rajiv Rao', position: 'Criminal Justice Systems Consultant', email: 'rajiv.rao@nimhansbengaluru.edu', phone: '888-777-5555' }
],

'amitynoida': [
    { name: 'Dr. Arjun Patel', position: 'Criminal Justice Studies Professor', email: 'arjun.patel@amitynoida.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Sneha Rathi', position: 'Criminal Justice Policy Specialist', email: 'sneha.rathi@amitynoida.edu.in', phone: '888-777-5555' }
],

'lpujalandhar': [
    { name: 'Dr. Sunil Gupta', position: 'Criminal Justice System Researcher', email: 'sunil.gupta@lpujalandhar.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Meera Singh', position: 'Criminal Justice and Reform Specialist', email: 'meera.singh@lpujalandhar.edu.in', phone: '888-777-5555' }
],



//fs


'gujaratfsl': [
    { name: 'Dr. Ankur Patel', position: 'Forensic Science Research Professor', email: 'ankur.patel@gfsu.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Maya Singh', position: 'Forensic Toxicology Analyst', email: 'maya.singh@gfsu.edu.in', phone: '888-777-5555' }
],

'punefsl': [
    { name: 'Dr. Arjun Joshi', position: 'Forensic DNA Specialist', email: 'arjun.joshi@ifs.pune.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Meera Sharma', position: 'Crime Scene Analysis Expert', email: 'meera.sharma@ifs.pune.edu.in', phone: '888-777-5555' }
],

'msufsl': [
    { name: 'Dr. Priya Kapoor', position: 'Forensic Chemistry Expert', email: 'priya.kapoor@msu.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Rohit Verma', position: 'Forensic Ballistics Analyst', email: 'rohit.verma@msu.edu.in', phone: '888-777-5555' }
],

'amityforensics': [
    { name: 'Dr. Ritu Nair', position: 'Forensic Anthropology Specialist', email: 'ritu.nair@amity.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Arvind Kumar', position: 'Forensic Document Expert', email: 'arvind.kumar@amity.edu.in', phone: '888-777-5555' }
],

'lpu': [
    { name: 'Dr. Shweta Mehta', position: 'Forensic Science Researcher', email: 'shweta.mehta@lpu.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Arun Singh', position: 'Cyber Forensics Expert', email: 'arun.singh@lpu.edu.in', phone: '888-777-5555' }
],



//p



'tissmumbai': [
    { name: 'Dr. Sunil Rao', position: 'Penology and Criminal Justice Professor', email: 'sunil.rao@tiss.edu', phone: '888-777-6666' },
    { name: 'Dr. Anita Deshmukh', position: 'Criminal Justice System Specialist', email: 'anita.deshmukh@tiss.edu', phone: '888-777-5555' }
],

'nlsiu': [
    { name: 'Dr. Aarti Mehta', position: 'Penology Research Expert', email: 'aarti.mehta@nlsiu.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Rajesh Gupta', position: 'Criminal Justice Systems Professor', email: 'rajesh.gupta@nlsiu.edu.in', phone: '888-777-5555' }
],

'rgniipm': [
    { name: 'Dr. Vikram Joshi', position: 'Penology and Correctional Management Specialist', email: 'vikram.joshi@rgniipm.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Meera Reddy', position: 'Criminal Justice Reforms Analyst', email: 'meera.reddy@rgniipm.edu.in', phone: '888-777-5555' }
],

'nalsar': [
    { name: 'Dr. Ramesh Kumar', position: 'Penology Studies Professor', email: 'ramesh.kumar@nalsar.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Seema Gupta', position: 'Criminal Justice and Penology Expert', email: 'seema.gupta@nalsar.ac.in', phone: '888-777-5555' }
],

'nludelhi': [
    { name: 'Dr. Anil Sharma', position: 'Penology and Criminal Justice Professor', email: 'anil.sharma@nludelhi.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Neha Singh', position: 'Criminal Justice Systems Specialist', email: 'neha.singh@nludelhi.ac.in', phone: '888-777-5555' }
],



//v


'msubarak': [
    { name: 'Dr. Ravi Jain', position: 'Victimology and Trauma Studies Professor', email: 'ravi.jain@msubarak.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Simran Kaur', position: 'Victim Support and Counseling Specialist', email: 'simran.kaur@msubarak.edu.in', phone: '888-777-5555' }
],

'lcil': [
    { name: 'Dr. Aarti Mehta', position: 'Victimology and Human Rights Professor', email: 'aarti.mehta@lcil.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Rajeev Kumar', position: 'Criminal Law and Victimology Expert', email: 'rajeeve.kumar@lcil.edu.in', phone: '888-777-5555' }
],

'nlujodhpur': [
    { name: 'Dr. Meera Sharma', position: 'Victimology and Rehabilitation Professor', email: 'meera.sharma@nlujodhpur.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Vikram Singh', position: 'Victim Advocacy Specialist', email: 'vikram.singh@nlujodhpur.edu.in', phone: '888-777-5555' }
],

'rgniipm': [
    { name: 'Dr. Priya Choudhury', position: 'Victimology and Social Justice Expert', email: 'priya.choudhury@rgniipm.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Rohit Sharma', position: 'Victim Services and Rights Specialist', email: 'rohit.sharma@rgniipm.edu.in', phone: '888-777-5555' }
],

'tisshyderabad': [
    { name: 'Dr. Anil Gupta', position: 'Victimology and Crisis Intervention Specialist', email: 'anil.gupta@tisshyderabad.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Neha Patel', position: 'Criminal Justice and Victim Support Expert', email: 'neha.patel@tisshyderabad.edu.in', phone: '888-777-5555' }
],



//cc


'jnu': [
    { name: 'Dr. Arjun Patel', position: 'Comparative Criminology and Justice Professor', email: 'arjun.patel@jnu.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Riya Sharma', position: 'Global Criminology Specialist', email: 'riya.sharma@jnu.ac.in', phone: '888-777-5555' }
],

'snu': [
    { name: 'Dr. Karan Mehta', position: 'International Criminology Expert', email: 'karan.mehta@snu.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Sneha Patel', position: 'Comparative Criminal Justice Systems Specialist', email: 'sneha.patel@snu.edu.in', phone: '888-777-5555' }
],

'unimumbai': [
    { name: 'Dr. Aarav Kumar', position: 'Comparative Criminology Research Professor', email: 'aarav.kumar@unimumbai.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Tanvi Deshmukh', position: 'Criminal Justice Systems and Comparative Law Expert', email: 'tanvi.deshmukh@unimumbai.ac.in', phone: '888-777-5555' }
],

'du': [
    { name: 'Dr. Nitin Sharma', position: 'Comparative Criminology and Law Expert', email: 'nitin.sharma@du.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Meera Joshi', position: 'Global Criminology and Justice Specialist', email: 'meera.joshi@du.ac.in', phone: '888-777-5555' }
],

'iimc': [
    { name: 'Dr. Aman Singh', position: 'Comparative Criminology and Media Relations Expert', email: 'aman.singh@iimc.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Neha Agarwal', position: 'Criminal Justice Communication and Media Specialist', email: 'neha.agarwal@iimc.edu.in', phone: '888-777-5555' }
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
 