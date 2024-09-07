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
    { name: 'Dr. Shruti Mehra', position: 'Criminal Law Professor', email: 'shruti.mehra@nlu.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Vivek Sharma', position: 'Criminology Specialist', email: 'vivek.sharma@nlu.edu.in', phone: '888-777-5555' }
],

'tiss': [
    { name: 'Dr. Preeti Nair', position: 'Criminal Psychology Expert', email: 'preeti.nair@tiss.edu', phone: '888-777-6666' },
    { name: 'Dr. Anil Deshmukh', position: 'Forensic Psychology Specialist', email: 'anil.deshmukh@tiss.edu', phone: '888-777-5555' }
],

'nimhans': [
    { name: 'Dr. Rajesh Gupta', position: 'Forensic Psychiatry Consultant', email: 'rajesh.gupta@nimhans.edu', phone: '888-777-6666' },
    { name: 'Dr. Seema Chawla', position: 'Criminal Behavior Analyst', email: 'seema.chawla@nimhans.edu', phone: '888-777-5555' }
],

'amity': [
    { name: 'Dr. Sandeep Bhargava', position: 'Criminology Professor', email: 'sandeep.bhargava@amity.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Richa Verma', position: 'Forensic Science Specialist', email: 'richa.verma@amity.edu.in', phone: '888-777-5555' }
],

'lpu': [
    { name: 'Dr. Arvind Desai', position: 'Criminal Justice Professor', email: 'arvind.desai@lpu.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Poonam Sharma', position: 'Criminology and Law Specialist', email: 'poonam.sharma@lpu.edu.in', phone: '888-777-5555' }
],


//cjs


'nludelhi': [
    { name: 'Dr. Kavita Nair', position: 'Criminal Justice Professor', email: 'kavita.nair@nlu.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Rohit Menon', position: 'Criminal Law Specialist', email: 'rohit.menon@nlu.edu.in', phone: '888-777-5555' }
],

'tissmumbai': [
    { name: 'Dr. Sameer Rathi', position: 'Criminology Professor', email: 'sameer.rathi@tiss.edu', phone: '888-777-6666' },
    { name: 'Dr. Priyanka Sinha', position: 'Forensic Psychology Expert', email: 'priyanka.sinha@tiss.edu', phone: '888-777-5555' }
],

'nimhansbengaluru': [
    { name: 'Dr. Arvind Rao', position: 'Forensic Psychiatrist', email: 'arvind.rao@nimhans.edu', phone: '888-777-6666' },
    { name: 'Dr. Shweta Jain', position: 'Criminal Behavior Specialist', email: 'shweta.jain@nimhans.edu', phone: '888-777-5555' }
],

'amitynoida': [
    { name: 'Dr. Saurabh Verma', position: 'Criminal Justice and Criminology Expert', email: 'saurabh.verma@amity.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Meenakshi Deshmukh', position: 'Forensic Science Specialist', email: 'meenakshi.deshmukh@amity.edu.in', phone: '888-777-5555' }
],

'lpujalandhar': [
    { name: 'Dr. Vikas Gupta', position: 'Criminal Justice Professor', email: 'vikas.gupta@lpu.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Anjali Sharma', position: 'Criminology and Criminal Justice Specialist', email: 'anjali.sharma@lpu.edu.in', phone: '888-777-5555' }
],


//fs


'gujaratfsl': [
    { name: 'Dr. Nidhi Sharma', position: 'Forensic Science Professor', email: 'nidhi.sharma@gfsu.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Vikram Rao', position: 'Forensic Toxicology Specialist', email: 'vikram.rao@gfsu.edu.in', phone: '888-777-5555' }
],

'punefsl': [
    { name: 'Dr. Pooja Mehta', position: 'Forensic DNA Analyst', email: 'pooja.mehta@ifs.pune.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Suresh Kumar', position: 'Crime Scene Investigation Expert', email: 'suresh.kumar@ifs.pune.edu.in', phone: '888-777-5555' }
],

'msufsl': [
    { name: 'Dr. Anjali Deshmukh', position: 'Forensic Chemistry Professor', email: 'anjali.deshmukh@msu.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Rajat Verma', position: 'Forensic Ballistics Specialist', email: 'rajat.verma@msu.edu.in', phone: '888-777-5555' }
],

'amityforensics': [
    { name: 'Dr. Neha Tiwari', position: 'Forensic Anthropology Expert', email: 'neha.tiwari@amity.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Prateek Singh', position: 'Forensic Document Examination Specialist', email: 'prateek.singh@amity.edu.in', phone: '888-777-5555' }
],

'lpu': [
    { name: 'Dr. Ramesh Gupta', position: 'Forensic Science Professor', email: 'ramesh.gupta@lpu.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Swati Chauhan', position: 'Cyber Forensics Specialist', email: 'swati.chauhan@lpu.edu.in', phone: '888-777-5555' }
],


//p



'tissmumbai': [
    { name: 'Dr. Priya Sen', position: 'Penology Professor', email: 'priya.sen@tiss.edu', phone: '888-777-6666' },
    { name: 'Dr. Rajiv Kumar', position: 'Criminal Justice and Penology Specialist', email: 'rajiv.kumar@tiss.edu', phone: '888-777-5555' }
],

'nlsiu': [
    { name: 'Dr. Shalini Verma', position: 'Penology and Criminology Expert', email: 'shalini.verma@nlsiu.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Amit Roy', position: 'Criminal Law and Penology Professor', email: 'amit.roy@nlsiu.edu.in', phone: '888-777-5555' }
],

'rgniipm': [
    { name: 'Dr. Sameer Patil', position: 'Penology and Prison Management Specialist', email: 'sameer.patil@rgniipm.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Pooja Desai', position: 'Criminal Justice Reforms Expert', email: 'pooja.desai@rgniipm.edu.in', phone: '888-777-5555' }
],

'nalsar': [
    { name: 'Dr. Anuradha Sharma', position: 'Penology and Prison Studies Professor', email: 'anuradha.sharma@nalsar.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Harsh Gupta', position: 'Criminal Justice and Penology Specialist', email: 'harsh.gupta@nalsar.ac.in', phone: '888-777-5555' }
],

'nludelhi': [
    { name: 'Dr. Meena Rao', position: 'Penology Professor', email: 'meena.rao@nludelhi.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Sanjay Kapoor', position: 'Criminal Law and Penology Expert', email: 'sanjay.kapoor@nludelhi.ac.in', phone: '888-777-5555' }
],


//v


'msubarak': [
    { name: 'Dr. Suresh Kumar', position: 'Victimology and Criminology Professor', email: 'suresh.kumar@msubarak.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Renu Sharma', position: 'Victim Support Specialist', email: 'renu.sharma@msubarak.edu.in', phone: '888-777-5555' }
],

'lcil': [
    { name: 'Dr. Neha Singh', position: 'Victimology and Human Rights Specialist', email: 'neha.singh@lcil.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Arjun Kapoor', position: 'Criminal Law and Victimology Professor', email: 'arjun.kapoor@lcil.edu.in', phone: '888-777-5555' }
],

'nlujodhpur': [
    { name: 'Dr. Kavita Desai', position: 'Victimology Professor', email: 'kavita.desai@nlujodhpur.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Manish Verma', position: 'Victim Rights Specialist', email: 'manish.verma@nlujodhpur.edu.in', phone: '888-777-5555' }
],

'rgniipm': [
    { name: 'Dr. Anjali Roy', position: 'Victimology and Intellectual Property Law Expert', email: 'anjali.roy@rgniipm.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Shyam Gupta', position: 'Victim Services and Criminal Justice Specialist', email: 'shyam.gupta@rgniipm.edu.in', phone: '888-777-5555' }
],

'tisshyderabad': [
    { name: 'Dr. Pooja Reddy', position: 'Victimology and Trauma Care Specialist', email: 'pooja.reddy@tisshyderabad.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Ashok Patel', position: 'Criminal Justice and Victim Advocacy Expert', email: 'ashok.patel@tisshyderabad.edu.in', phone: '888-777-5555' }
],


//cc


'jnu': [
    { name: 'Dr. Anurag Bhardwaj', position: 'Comparative Criminology Professor', email: 'anurag.bhardwaj@jnu.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Meenal Kapoor', position: 'International Criminology Specialist', email: 'meenal.kapoor@jnu.ac.in', phone: '888-777-5555' }
],

'snu': [
    { name: 'Dr. Rishabh Verma', position: 'Comparative Criminal Justice Expert', email: 'rishabh.verma@snu.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Aarti Singh', position: 'Criminal Justice Systems Specialist', email: 'aarti.singh@snu.edu.in', phone: '888-777-5555' }
],

'unimumbai': [
    { name: 'Dr. Rajeev Gupta', position: 'Comparative Criminology Professor', email: 'rajeeve.gupta@unimumbai.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Neha Reddy', position: 'Criminal Law and Comparative Justice Expert', email: 'neha.reddy@unimumbai.ac.in', phone: '888-777-5555' }
],

'du': [
    { name: 'Dr. Shyam Sundar', position: 'Comparative Criminology and Law Professor', email: 'shyam.sundar@du.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Priyanka Joshi', position: 'Global Criminology Specialist', email: 'priyanka.joshi@du.ac.in', phone: '888-777-5555' }
],

'iimc': [
    { name: 'Dr. Ravi Sharma', position: 'Comparative Criminology and Media Expert', email: 'ravi.sharma@iimc.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Poonam Mehta', position: 'Criminal Justice Communication Specialist', email: 'poonam.mehta@iimc.edu.in', phone: '888-777-5555' }
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
 