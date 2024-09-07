// College list for each field
const collegeData = {
    c: [
        { value: 'aiims', name: 'AIIMS Delhi' },
        { value: 'pgimer', name: 'PGIMER Chandigarh' },
        { value: 'cims', name: 'Christian Medical College, Vellore' },
        { value: 'jipmer', name: 'JIPMER Puducherry' },
        { value: 'srmc', name: 'Sri Ramachandra Medical College, Chennai' },
        { value: 'kmc', name: 'Kasturba Medical College, Manipal' },
        { value: 'mahe', name: 'Manipal Academy of Higher Education' },
        { value: 'ggsipu', name: 'Guru Gobind Singh Indraprastha University' },
        { value: 'nsc', name: 'Nizam’s Institute of Medical Sciences' },
        { value: 'sms', name: 'SMS Medical College, Jaipur' }
    ],
    
    n: [
        { value: 'nimhans', name: 'NIMHANS, Bangalore' },
        { value: 'aiims', name: 'AIIMS Delhi' },
        { value: 'pgimer', name: 'PGIMER Chandigarh' },
        { value: 'cmc', name: 'Christian Medical College, Vellore' },
        { value: 'jipmer', name: 'JIPMER Puducherry' },
        { value: 'srmc', name: 'Sri Ramachandra Medical College, Chennai' },
        { value: 'kmc', name: 'Kasturba Medical College, Manipal' },
        { value: 'mahe', name: 'Manipal Academy of Higher Education' },
        { value: 'ggsipu', name: 'Guru Gobind Singh Indraprastha University' },
        { value: 'nsc', name: 'Nizam’s Institute of Medical Sciences' }
    ],

    o: [
        { value: 'aiims', name: 'AIIMS Delhi' },
        { value: 'sion', name: 'Lokmanya Tilak Municipal Medical College, Mumbai' },
        { value: 'kgh', name: 'King George’s Medical University, Lucknow' },
        { value: 'sgrh', name: 'Sir Ganga Ram Hospital, Delhi' },
        { value: 'cmc', name: 'Christian Medical College, Vellore' },
        { value: 'jss', name: 'JSS Medical College, Mysuru' },
        { value: 'osmania', name: 'Osmania Medical College, Hyderabad' },
        { value: 'madras', name: 'Madras Medical College, Chennai' },
        { value: 'afmc', name: 'Armed Forces Medical College, Pune' },
        { value: 'gmc', name: 'Grant Medical College, Mumbai' }
    ],

    p: [
        { value: 'aiims', name: 'AIIMS Delhi' },
        { value: 'kalawati', name: 'Kalawati Saran Children’s Hospital, Delhi' },
        { value: 'nehru', name: 'Nehru Hospital, PGIMER Chandigarh' },
        { value: 'kims', name: 'Kempegowda Institute of Medical Sciences, Bangalore' },
        { value: 'cmc', name: 'Christian Medical College, Vellore' },
        { value: 'rainbow', name: 'Rainbow Children’s Hospital, Hyderabad' },
        { value: 'osmania', name: 'Osmania Medical College, Hyderabad' },
        { value: 'madras', name: 'Madras Medical College, Chennai' },
        { value: 'afmc', name: 'Armed Forces Medical College, Pune' },
        { value: 'wadia', name: 'Bai Jerbai Wadia Hospital for Children, Mumbai' }
    ],
    
    on: [
        { value: 'aiims', name: 'AIIMS Delhi' },
        { value: 'tmh', name: 'Tata Memorial Hospital, Mumbai' },
        { value: 'kidwai', name: 'Kidwai Memorial Institute of Oncology, Bangalore' },
        { value: 'pgimer', name: 'Postgraduate Institute of Medical Education and Research, Chandigarh' },
        { value: 'cmc', name: 'Christian Medical College, Vellore' },
        { value: 'actrec', name: 'Advanced Centre for Treatment, Research and Education in Cancer, Mumbai' },
        { value: 'hcg', name: 'HealthCare Global Enterprises Ltd (HCG), Bangalore' },
        { value: 'madras', name: 'Madras Medical College, Chennai' },
        { value: 'afmc', name: 'Armed Forces Medical College, Pune' },
        { value: 'wadia', name: 'Bai Jerbai Wadia Hospital for Children, Mumbai' }
    ],

    g: [
        { value: 'aiims', name: 'AIIMS Delhi' },
        { value: 'tmh', name: 'Tata Memorial Hospital, Mumbai' },
        { value: 'gems', name: 'Global Hospitals, Chennai' },
        { value: 'pgimer', name: 'Postgraduate Institute of Medical Education and Research, Chandigarh' },
        { value: 'cmc', name: 'Christian Medical College, Vellore' },
        { value: 'sgpgi', name: 'Sanjay Gandhi Postgraduate Institute of Medical Sciences, Lucknow' },
        { value: 'hcg', name: 'HealthCare Global Enterprises Ltd (HCG), Bangalore' },
        { value: 'apollo', name: 'Apollo Hospitals, Hyderabad' },
        { value: 'afmc', name: 'Armed Forces Medical College, Pune' },
        { value: 'wadia', name: 'Bai Jerbai Wadia Hospital for Children, Mumbai' }
    ],
    
    
    
    
    


   
    


    


    



    
    // Other fields like engineering, biotechnology, etc. remain unchanged...
};

// Alumni data
const alumniData = {
    //c


'aiims': [
    { name: 'Dr. Aditya Bansal', position: 'Cardiac Surgeon', email: 'aditya.bansal@aiims.edu', phone: '888-777-1111' },
    { name: 'Dr. Manisha Kapoor', position: 'Cardiac Electrophysiologist', email: 'manisha.kapoor@aiims.edu', phone: '888-777-2222' }
],

'pgimer': [
    { name: 'Dr. Suresh Sharma', position: 'Heart Failure Specialist', email: 'suresh.sharma@pgimer.edu.in', phone: '888-777-3333' },
    { name: 'Dr. Anjali Gupta', position: 'Pediatric Cardiologist', email: 'anjali.gupta@pgimer.edu.in', phone: '888-777-4444' }
],

'cims': [
    { name: 'Dr. Rohit Menon', position: 'Cardiac Interventionist', email: 'rohit.menon@cims.edu', phone: '888-777-5555' },
    { name: 'Dr. Swati Agarwal', position: 'Cardiac Anesthesiologist', email: 'swati.agarwal@cims.edu', phone: '888-777-6666' }
],

'jipmer': [
    { name: 'Dr. Praveen Kumar', position: 'Cardiovascular Surgeon', email: 'praveen.kumar@jipmer.edu', phone: '888-777-7777' },
    { name: 'Dr. Aishwarya Reddy', position: 'Heart Transplant Specialist', email: 'aishwarya.reddy@jipmer.edu', phone: '888-777-8888' }
],

'srmc': [
    { name: 'Dr. Rahul Verma', position: 'Cardiac Imaging Specialist', email: 'rahul.verma@srmc.edu', phone: '888-777-9999' },
    { name: 'Dr. Kavita Singh', position: 'Interventional Cardiologist', email: 'kavita.singh@srmc.edu', phone: '888-777-1010' }
],

'kmc': [
    { name: 'Dr. Suraj Deshmukh', position: 'Cardiac Surgeon', email: 'suraj.deshmukh@kmc.edu', phone: '888-777-1112' },
    { name: 'Dr. Richa Joshi', position: 'Electrophysiologist', email: 'richa.joshi@kmc.edu', phone: '888-777-1212' }
],

'mahe': [
    { name: 'Dr. Ashwin Patel', position: 'Cardiac Intensive Care Specialist', email: 'ashwin.patel@mahe.edu', phone: '888-777-1313' },
    { name: 'Dr. Smita Rao', position: 'Pediatric Cardiologist', email: 'smita.rao@mahe.edu', phone: '888-777-1414' }
],

'ggsipu': [
    { name: 'Dr. Vishal Reddy', position: 'Heart Transplant Specialist', email: 'vishal.reddy@ggsipu.edu', phone: '888-777-1515' },
    { name: 'Dr. Sneha Nair', position: 'Electrophysiologist', email: 'sneha.nair@ggsipu.edu', phone: '888-777-1616' }
],

'nsc': [
    { name: 'Dr. Abhishek Gupta', position: 'Interventional Cardiologist', email: 'abhishek.gupta@nsc.edu', phone: '888-777-1717' },
    { name: 'Dr. Reema Kapoor', position: 'Cardiothoracic Surgeon', email: 'reema.kapoor@nsc.edu', phone: '888-777-1818' }
],

'sms': [
    { name: 'Dr. Deepak Mehta', position: 'Cardiovascular Surgeon', email: 'deepak.mehta@sms.edu', phone: '888-777-1919' },
    { name: 'Dr. Ayesha Khan', position: 'Heart Failure Specialist', email: 'ayesha.khan@sms.edu', phone: '888-777-2020' }
],


//n

'nimhans': [
    { name: 'Dr. Rahul Mehta', position: 'Pediatric Neurologist', email: 'rahul.mehta@nimhans.edu', phone: '888-777-1111' },
    { name: 'Dr. Sneha Rao', position: 'Stroke Specialist', email: 'sneha.rao@nimhans.edu', phone: '888-777-2222' }
],

'aiims': [
    { name: 'Dr. Arjun Verma', position: 'Neurosurgeon', email: 'arjun.verma@aiims.edu', phone: '888-777-3333' },
    { name: 'Dr. Kavita Sharma', position: 'Neuro-Oncologist', email: 'kavita.sharma@aiims.edu', phone: '888-777-4444' }
],

'pgimer': [
    { name: 'Dr. Suresh Nair', position: 'Cerebrovascular Specialist', email: 'suresh.nair@pgimer.edu.in', phone: '888-777-5555' },
    { name: 'Dr. Ritu Desai', position: 'Neurophysiologist', email: 'ritu.desai@pgimer.edu.in', phone: '888-777-6666' }
],

'cmc': [
    { name: 'Dr. Aakash Kapoor', position: 'Neurointerventionalist', email: 'aakash.kapoor@cmc.edu', phone: '888-777-7777' },
    { name: 'Dr. Priya Agarwal', position: 'Neurointensive Care Specialist', email: 'priya.agarwal@cmc.edu', phone: '888-777-8888' }
],

'jipmer': [
    { name: 'Dr. Rajat Gupta', position: 'Movement Disorder Specialist', email: 'rajat.gupta@jipmer.edu', phone: '888-777-9999' },
    { name: 'Dr. Meenakshi Rao', position: 'Pediatric Neurologist', email: 'meenakshi.rao@jipmer.edu', phone: '888-777-1010' }
],

'srmc': [
    { name: 'Dr. Harish Patel', position: 'Neuropharmacologist', email: 'harish.patel@srmc.edu', phone: '888-777-1112' },
    { name: 'Dr. Deepa Nair', position: 'Epileptologist', email: 'deepa.nair@srmc.edu', phone: '888-777-1212' }
],

'kmc': [
    { name: 'Dr. Sanjay Sharma', position: 'Neuro-Oncologist', email: 'sanjay.sharma@kmc.edu', phone: '888-777-1313' },
    { name: 'Dr. Rina Kapoor', position: 'Neuropsychologist', email: 'rina.kapoor@kmc.edu', phone: '888-777-1414' }
],

'mahe': [
    { name: 'Dr. Manish Verma', position: 'Neurosurgeon', email: 'manish.verma@mahe.edu', phone: '888-777-1515' },
    { name: 'Dr. Shreya Rao', position: 'Neurointensive Care Specialist', email: 'shreya.rao@mahe.edu', phone: '888-777-1616' }
],

'ggsipu': [
    { name: 'Dr. Kiran Desai', position: 'Neurointerventionalist', email: 'kiran.desai@ggsipu.edu', phone: '888-777-1717' },
    { name: 'Dr. Priyanka Patel', position: 'Epileptologist', email: 'priyanka.patel@ggsipu.edu', phone: '888-777-1818' }
],

'nsc': [
    { name: 'Dr. Arvind Mehta', position: 'Spine Surgeon', email: 'arvind.mehta@nsc.edu', phone: '888-777-1919' },
    { name: 'Dr. Roshni Bhatia', position: 'Neuroimaging Specialist', email: 'roshni.bhatia@nsc.edu', phone: '888-777-2020' }
],



//o

'aiims': [
    { name: 'Dr. Arun Patel', position: 'Orthopedic Surgeon', email: 'arun.patel@aiims.edu', phone: '888-777-1111' },
    { name: 'Dr. Meera Joshi', position: 'Spinal Deformity Specialist', email: 'meera.joshi@aiims.edu', phone: '888-777-2222' }
],

'sion': [
    { name: 'Dr. Rajesh Gupta', position: 'Knee Replacement Surgeon', email: 'rajesh.gupta@sion.edu', phone: '888-777-3333' },
    { name: 'Dr. Sanya Mehta', position: 'Shoulder Surgeon', email: 'sanya.mehta@sion.edu', phone: '888-777-4444' }
],

'kgh': [
    { name: 'Dr. Aman Singh', position: 'Joint Replacement Specialist', email: 'aman.singh@kgh.edu', phone: '888-777-5555' },
    { name: 'Dr. Priya Rao', position: 'Orthopedic Trauma Specialist', email: 'priya.rao@kgh.edu', phone: '888-777-6666' }
],

'sgrh': [
    { name: 'Dr. Vikram Sharma', position: 'Sports Injury Specialist', email: 'vikram.sharma@sgrh.edu', phone: '888-777-7777' },
    { name: 'Dr. Riya Patel', position: 'Foot and Ankle Surgeon', email: 'riya.patel@sgrh.edu', phone: '888-777-8888' }
],

'cmc': [
    { name: 'Dr. Arjun Desai', position: 'Hand Surgeon', email: 'arjun.desai@cmc.edu', phone: '888-777-9999' },
    { name: 'Dr. Nisha Verma', position: 'Elbow and Shoulder Specialist', email: 'nisha.verma@cmc.edu', phone: '888-777-1010' }
],

'jss': [
    { name: 'Dr. Rajiv Kumar', position: 'Hip Replacement Surgeon', email: 'rajiv.kumar@jss.edu', phone: '888-777-1112' },
    { name: 'Dr. Anuja Sinha', position: 'Orthopedic Tumor Specialist', email: 'anuja.sinha@jss.edu', phone: '888-777-1212' }
],

'osmania': [
    { name: 'Dr. Manish Gupta', position: 'Reconstructive Orthopedic Surgeon', email: 'manish.gupta@osmania.edu', phone: '888-777-1313' },
    { name: 'Dr. Seema Reddy', position: 'Pediatric Orthopedic Specialist', email: 'seema.reddy@osmania.edu', phone: '888-777-1414' }
],

'madras': [
    { name: 'Dr. Ajay Menon', position: 'Spinal Surgery Specialist', email: 'ajay.menon@madras.edu', phone: '888-777-1515' },
    { name: 'Dr. Swati Kumar', position: 'Trauma Orthopedic Surgeon', email: 'swati.kumar@madras.edu', phone: '888-777-1616' }
],

'afmc': [
    { name: 'Dr. Rajiv Rao', position: 'Arthroscopic and Sports Surgeon', email: 'rajiv.rao@afmc.edu', phone: '888-777-1717' },
    { name: 'Dr. Divya Jain', position: 'Foot and Ankle Specialist', email: 'divya.jain@afmc.edu', phone: '888-777-1818' }
],

'gmc': [
    { name: 'Dr. Akash Verma', position: 'Orthopedic Trauma Specialist', email: 'akash.verma@gmc.edu', phone: '888-777-1919' },
    { name: 'Dr. Sneha Khan', position: 'Sports Injury Specialist', email: 'sneha.khan@gmc.edu', phone: '888-777-2020' }
],



//p

'aiims': [
    { name: 'Dr. Aakash Rao', position: 'Pediatrician', email: 'aakash.rao@aiims.edu', phone: '888-777-1111' },
    { name: 'Dr. Priya Sharma', position: 'Neonatal Intensivist', email: 'priya.sharma@aiims.edu', phone: '888-777-2222' }
],

'kalawati': [
    { name: 'Dr. Arun Desai', position: 'Pediatric Cardiologist', email: 'arun.desai@kalawati.edu', phone: '888-777-3333' },
    { name: 'Dr. Aditi Kapoor', position: 'Pediatric Neurologist', email: 'aditi.kapoor@kalawati.edu', phone: '888-777-4444' }
],

'nehru': [
    { name: 'Dr. Sameer Kumar', position: 'Pediatric Endocrinologist', email: 'sameer.kumar@nehru.edu', phone: '888-777-5555' },
    { name: 'Dr. Ritu Shah', position: 'Pediatric Gastroenterologist', email: 'ritu.shah@nehru.edu', phone: '888-777-6666' }
],

'kims': [
    { name: 'Dr. Rajeev Reddy', position: 'Pediatric Infectious Disease Specialist', email: 'rajeeve.reddy@kims.edu', phone: '888-777-7777' },
    { name: 'Dr. Simran Rao', position: 'Pediatric Hematologist', email: 'simran.rao@kims.edu', phone: '888-777-8888' }
],

'cmc': [
    { name: 'Dr. Maya Joshi', position: 'Pediatric Pulmonologist', email: 'maya.joshi@cmc.edu', phone: '888-777-9999' },
    { name: 'Dr. Arjun Patel', position: 'Pediatric Oncologist', email: 'arjun.patel@cmc.edu', phone: '888-777-1010' }
],

'rainbow': [
    { name: 'Dr. Deepak Desai', position: 'Pediatric Intensivist', email: 'deepak.desai@rainbow.edu', phone: '888-777-1112' },
    { name: 'Dr. Kavita Verma', position: 'Pediatric Nephrologist', email: 'kavita.verma@rainbow.edu', phone: '888-777-1212' }
],

'osmania': [
    { name: 'Dr. Rajiv Sharma', position: 'Pediatric Surgeon', email: 'rajiv.sharma@osmania.edu', phone: '888-777-1313' },
    { name: 'Dr. Sneha Nair', position: 'Pediatric Rheumatologist', email: 'sneha.nair@osmania.edu', phone: '888-777-1414' }
],

'madras': [
    { name: 'Dr. Arvind Menon', position: 'Pediatric Critical Care Specialist', email: 'arvind.menon@madras.edu', phone: '888-777-1515' },
    { name: 'Dr. Aisha Prasad', position: 'Pediatric Dermatologist', email: 'aisha.prasad@madras.edu', phone: '888-777-1616' }
],

'afmc': [
    { name: 'Dr. Rajesh Rao', position: 'Pediatric Gastroenterologist', email: 'rajesh.rao@afmc.edu', phone: '888-777-1717' },
    { name: 'Dr. Neeta Jain', position: 'Pediatric Endocrinologist', email: 'neeta.jain@afmc.edu', phone: '888-777-1818' }
],

'wadia': [
    { name: 'Dr. Vikram Verma', position: 'Pediatric Infectious Disease Specialist', email: 'vikram.verma@wadia.edu', phone: '888-777-1919' },
    { name: 'Dr. Meera Khan', position: 'Pediatric Cardiologist', email: 'meera.khan@wadia.edu', phone: '888-777-2020' }
],



//on

'aiims': [
    { name: 'Dr. Rajiv Mehta', position: 'Medical Oncologist', email: 'rajiv.mehta@aiims.edu', phone: '888-777-2020' },
    { name: 'Dr. Anisha Gupta', position: 'Radiation Oncologist', email: 'anisha.gupta@aiims.edu', phone: '888-777-3030' }
],

'tmh': [
    { name: 'Dr. Sameer Patel', position: 'Surgical Oncologist', email: 'sameer.patel@tmh.edu', phone: '888-777-4040' },
    { name: 'Dr. Rina Desai', position: 'Pediatric Oncologist', email: 'rina.desai@tmh.edu', phone: '888-777-5050' }
],

'kidwai': [
    { name: 'Dr. Mohan Deshmukh', position: 'Gynecologic Oncologist', email: 'mohan.deshmukh@kidwai.edu', phone: '888-777-6060' },
    { name: 'Dr. Meera Sinha', position: 'Hematologist Oncologist', email: 'meera.sinha@kidwai.edu', phone: '888-777-7070' }
],

'pgimer': [
    { name: 'Dr. Rakesh Kumar', position: 'Thoracic Oncologist', email: 'rakesh.kumar@pgimer.edu', phone: '888-777-8080' },
    { name: 'Dr. Suman Bhardwaj', position: 'Neuro-Oncologist', email: 'suman.bhardwaj@pgimer.edu', phone: '888-777-9090' }
],

'cmc': [
    { name: 'Dr. Anil Verma', position: 'Liver Oncologist', email: 'anil.verma@cmc.edu', phone: '888-777-1011' },
    { name: 'Dr. Neha Agarwal', position: 'Colorectal Oncologist', email: 'neha.agarwal@cmc.edu', phone: '888-777-1212' }
],

'actrec': [
    { name: 'Dr. Ravi Shah', position: 'Hematologist Oncologist', email: 'ravi.shah@actrec.edu', phone: '888-777-1313' },
    { name: 'Dr. Priya Soni', position: 'Breast Oncologist', email: 'priya.soni@actrec.edu', phone: '888-777-1414' }
],

'hcg': [
    { name: 'Dr. Arjun Joshi', position: 'Bone Marrow Transplant Specialist', email: 'arjun.joshi@hcg.edu', phone: '888-777-1515' },
    { name: 'Dr. Kavita Reddy', position: 'Immuno-Oncologist', email: 'kavita.reddy@hcg.edu', phone: '888-777-1616' }
],

'madras': [
    { name: 'Dr. Amit Menon', position: 'Lung Oncologist', email: 'amit.menon@madras.edu', phone: '888-777-1717' },
    { name: 'Dr. Neha Reddy', position: 'Head and Neck Oncologist', email: 'neha.reddy@madras.edu', phone: '888-777-1818' }
],

'afmc': [
    { name: 'Dr. Varun Rao', position: 'Gastrointestinal Oncologist', email: 'varun.rao@afmc.edu', phone: '888-777-1919' },
    { name: 'Dr. Meera Kapoor', position: 'Pediatric Oncologist', email: 'meera.kapoor@afmc.edu', phone: '888-777-2021' }
],

'wadia': [
    { name: 'Dr. Rajesh Verma', position: 'Radiation Oncologist', email: 'rajesh.verma@wadia.edu', phone: '888-777-2121' },
    { name: 'Dr. Aisha Khan', position: 'Gynecologic Oncologist', email: 'aisha.khan@wadia.edu', phone: '888-777-2222' }
],



//g

'aiims': [
    { name: 'Dr. Rajesh Kumar', position: 'Gastroenterologist', email: 'rajesh.kumar@aiims.edu', phone: '888-777-1111' },
    { name: 'Dr. Neha Sinha', position: 'Hepatologist', email: 'neha.sinha@aiims.edu', phone: '888-777-2222' }
],

'tmh': [
    { name: 'Dr. Arvind Patel', position: 'Colorectal Surgeon', email: 'arvind.patel@tmh.edu', phone: '888-777-3333' },
    { name: 'Dr. Meera Gupta', position: 'Pediatric Gastroenterologist', email: 'meera.gupta@tmh.edu', phone: '888-777-4444' }
],

'gems': [
    { name: 'Dr. Sunil Deshmukh', position: 'Pancreatic Surgeon', email: 'sunil.deshmukh@gems.edu', phone: '888-777-5555' },
    { name: 'Dr. Ruchi Jain', position: 'Hepatobiliary Surgeon', email: 'ruchi.jain@gems.edu', phone: '888-777-6666' }
],

'pgimer': [
    { name: 'Dr. Ashok Reddy', position: 'GI Oncologist', email: 'ashok.reddy@pgimer.edu', phone: '888-777-7777' },
    { name: 'Dr. Anjali Mehta', position: 'Inflammatory Bowel Disease Specialist', email: 'anjali.mehta@pgimer.edu', phone: '888-777-8888' }
],

'cmc': [
    { name: 'Dr. Vishal Gupta', position: 'Hepatologist', email: 'vishal.gupta@cmc.edu', phone: '888-777-9999' },
    { name: 'Dr. Swati Raj', position: 'Endoscopic Surgeon', email: 'swati.raj@cmc.edu', phone: '888-777-1010' }
],

'sgpgi': [
    { name: 'Dr. Gaurav Singh', position: 'Gastroenterologist', email: 'gaurav.singh@sgpgi.edu', phone: '888-777-1112' },
    { name: 'Dr. Nisha Agarwal', position: 'Liver Transplant Surgeon', email: 'nisha.agarwal@sgpgi.edu', phone: '888-777-1212' }
],

'hcg': [
    { name: 'Dr. Saurabh Menon', position: 'Hepatobiliary Surgeon', email: 'saurabh.menon@hcg.edu', phone: '888-777-1313' },
    { name: 'Dr. Priya Sharma', position: 'Colorectal Specialist', email: 'priya.sharma@hcg.edu', phone: '888-777-1414' }
],

'apollo': [
    { name: 'Dr. Raghav Iyer', position: 'Liver Specialist', email: 'raghav.iyer@apollo.edu', phone: '888-777-1515' },
    { name: 'Dr. Sneha Menon', position: 'Gastroenterology Specialist', email: 'sneha.menon@apollo.edu', phone: '888-777-1616' }
],

'afmc': [
    { name: 'Dr. Kunal Desai', position: 'GI Surgeon', email: 'kunal.desai@afmc.edu', phone: '888-777-1717' },
    { name: 'Dr. Shalini Rao', position: 'Pediatric Gastroenterologist', email: 'shalini.rao@afmc.edu', phone: '888-777-1818' }
],

'wadia': [
    { name: 'Dr. Akash Jain', position: 'Hepatologist', email: 'akash.jain@wadia.edu', phone: '888-777-1919' },
    { name: 'Dr. Ayesha Sharma', position: 'Pediatric Gastroenterologist', email: 'ayesha.sharma@wadia.edu', phone: '888-777-2020' }
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
