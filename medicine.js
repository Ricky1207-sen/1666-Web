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
    { name: 'Dr. Anil Verma', position: 'Cardiologist', email: 'anil.verma@aiims.edu', phone: '888-777-6666' },
    { name: 'Dr. Priya Mehta', position: 'Heart Failure Specialist', email: 'priya.mehta@aiims.edu', phone: '888-777-5555' }
],

'pgimer': [
    { name: 'Dr. Rajesh Kumar', position: 'Interventional Cardiologist', email: 'rajesh.kumar@pgimer.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Neha Sharma', position: 'Electrophysiologist', email: 'neha.sharma@pgimer.edu.in', phone: '888-777-5555' }
],

'cims': [
    { name: 'Dr. Vikram Singh', position: 'Cardiac Surgeon', email: 'vikram.singh@cims.edu', phone: '888-777-6666' },
    { name: 'Dr. Aarti Patel', position: 'Cardiac Nurse Specialist', email: 'aarti.patel@cims.edu', phone: '888-777-5555' }
],

'jipmer': [
    { name: 'Dr. Rajeev Reddy', position: 'Preventive Cardiologist', email: 'rajeeve.reddy@jipmer.edu', phone: '888-777-6666' },
    { name: 'Dr. Swati Kapoor', position: 'Cardiac Rehabilitation Specialist', email: 'swati.kapoor@jipmer.edu', phone: '888-777-5555' }
],

'srmc': [
    { name: 'Dr. Arvind Kumar', position: 'Cardiac Imaging Specialist', email: 'arvind.kumar@srmc.edu', phone: '888-777-6666' },
    { name: 'Dr. Riya Gupta', position: 'Cardiac Pharmacologist', email: 'riya.gupta@srmc.edu', phone: '888-777-5555' }
],

'kmc': [
    { name: 'Dr. Sandeep Choudhury', position: 'Cardiac Electrophysiologist', email: 'sandeep.choudhury@kmc.edu', phone: '888-777-6666' },
    { name: 'Dr. Meera Joshi', position: 'Heart Transplant Specialist', email: 'meera.joshi@kmc.edu', phone: '888-777-5555' }
],

'mahe': [
    { name: 'Dr. Ankit Sharma', position: 'Clinical Cardiologist', email: 'ankit.sharma@mahe.edu', phone: '888-777-6666' },
    { name: 'Dr. Neelam Bhatia', position: 'Cardiac Intensive Care Specialist', email: 'neelam.bhatia@mahe.edu', phone: '888-777-5555' }
],

'ggsipu': [
    { name: 'Dr. Ashok Patel', position: 'Cardiac Rehabilitation Specialist', email: 'ashok.patel@ggsipu.edu', phone: '888-777-6666' },
    { name: 'Dr. Roshni Nair', position: 'Heart Failure Specialist', email: 'roshni.nair@ggsipu.edu', phone: '888-777-5555' }
],

'nsc': [
    { name: 'Dr. Mohit Jain', position: 'Interventional Cardiologist', email: 'mohit.jain@nsc.edu', phone: '888-777-6666' },
    { name: 'Dr. Sanya Mehta', position: 'Cardiac Surgeon', email: 'sanya.mehta@nsc.edu', phone: '888-777-5555' }
],

'sms': [
    { name: 'Dr. Kunal Verma', position: 'Electrophysiologist', email: 'kunal.verma@sms.edu', phone: '888-777-6666' },
    { name: 'Dr. Aisha Khan', position: 'Cardiac Imaging Specialist', email: 'aisha.khan@sms.edu', phone: '888-777-5555' }
],

//n


'nimhans': [
    { name: 'Dr. Amit Verma', position: 'Neurologist', email: 'amit.verma@nimhans.edu', phone: '888-777-6666' },
    { name: 'Dr. Priya Rao', position: 'Epileptologist', email: 'priya.rao@nimhans.edu', phone: '888-777-5555' }
],

'aiims': [
    { name: 'Dr. Rajesh Desai', position: 'Stroke Specialist', email: 'rajesh.desai@aiims.edu', phone: '888-777-6666' },
    { name: 'Dr. Neha Kapoor', position: 'Neurointensivist', email: 'neha.kapoor@aiims.edu', phone: '888-777-5555' }
],

'pgimer': [
    { name: 'Dr. Vikram Sharma', position: 'Neurosurgeon', email: 'vikram.sharma@pgimer.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Aarti Patel', position: 'Neuro Nurse Specialist', email: 'aarti.patel@pgimer.edu.in', phone: '888-777-5555' }
],

'cmc': [
    { name: 'Dr. Rajeev Nair', position: 'Movement Disorder Specialist', email: 'rajeeve.nair@cmc.edu', phone: '888-777-6666' },
    { name: 'Dr. Swati Reddy', position: 'Neuropsychologist', email: 'swati.reddy@cmc.edu', phone: '888-777-5555' }
],

'jipmer': [
    { name: 'Dr. Arvind Kumar', position: 'Cerebrovascular Specialist', email: 'arvind.kumar@jipmer.edu', phone: '888-777-6666' },
    { name: 'Dr. Riya Gupta', position: 'Neuropharmacologist', email: 'riya.gupta@jipmer.edu', phone: '888-777-5555' }
],

'srmc': [
    { name: 'Dr. Sandeep Choudhury', position: 'Pediatric Neurologist', email: 'sandeep.choudhury@srmc.edu', phone: '888-777-6666' },
    { name: 'Dr. Meera Joshi', position: 'Neuro-Oncologist', email: 'meera.joshi@srmc.edu', phone: '888-777-5555' }
],

'kmc': [
    { name: 'Dr. Ankit Sharma', position: 'Clinical Neurologist', email: 'ankit.sharma@kmc.edu', phone: '888-777-6666' },
    { name: 'Dr. Neelam Bhatia', position: 'Neurointensive Care Specialist', email: 'neelam.bhatia@kmc.edu', phone: '888-777-5555' }
],

'mahe': [
    { name: 'Dr. Ashok Patel', position: 'Neurorehabilitation Specialist', email: 'ashok.patel@mahe.edu', phone: '888-777-6666' },
    { name: 'Dr. Roshni Nair', position: 'Epilepsy Specialist', email: 'roshni.nair@mahe.edu', phone: '888-777-5555' }
],

'ggsipu': [
    { name: 'Dr. Mohit Jain', position: 'Neurointerventionalist', email: 'mohit.jain@ggsipu.edu', phone: '888-777-6666' },
    { name: 'Dr. Sanya Mehta', position: 'Spine Surgeon', email: 'sanya.mehta@ggsipu.edu', phone: '888-777-5555' }
],

'nsc': [
    { name: 'Dr. Kunal Verma', position: 'Epileptologist', email: 'kunal.verma@nsc.edu', phone: '888-777-6666' },
    { name: 'Dr. Aisha Khan', position: 'Neuroimaging Specialist', email: 'aisha.khan@nsc.edu', phone: '888-777-5555' }
],


//o

'aiims': [
    { name: 'Dr. Ramesh Tiwari', position: 'Orthopedic Surgeon', email: 'ramesh.tiwari@aiims.edu', phone: '888-777-6666' },
    { name: 'Dr. Preeti Sharma', position: 'Trauma Specialist', email: 'preeti.sharma@aiims.edu', phone: '888-777-5555' }
],

'sion': [
    { name: 'Dr. Sanjay Desai', position: 'Spine Surgeon', email: 'sanjay.desai@sion.edu', phone: '888-777-6666' },
    { name: 'Dr. Megha Gupta', position: 'Arthroscopic Surgeon', email: 'megha.gupta@sion.edu', phone: '888-777-5555' }
],

'kgh': [
    { name: 'Dr. Varun Kumar', position: 'Joint Replacement Surgeon', email: 'varun.kumar@kgh.edu', phone: '888-777-6666' },
    { name: 'Dr. Kavita Singh', position: 'Pediatric Orthopedic Surgeon', email: 'kavita.singh@kgh.edu', phone: '888-777-5555' }
],

'sgrh': [
    { name: 'Dr. Ashish Reddy', position: 'Trauma and Fracture Surgeon', email: 'ashish.reddy@sgrh.edu', phone: '888-777-6666' },
    { name: 'Dr. Neha Raj', position: 'Sports Medicine Specialist', email: 'neha.raj@sgrh.edu', phone: '888-777-5555' }
],

'cmc': [
    { name: 'Dr. Shashank Rao', position: 'Hand and Wrist Surgeon', email: 'shashank.rao@cmc.edu', phone: '888-777-6666' },
    { name: 'Dr. Richa Patel', position: 'Shoulder and Elbow Specialist', email: 'richa.patel@cmc.edu', phone: '888-777-5555' }
],

'jss': [
    { name: 'Dr. Vikram Joshi', position: 'Hip and Knee Replacement Surgeon', email: 'vikram.joshi@jss.edu', phone: '888-777-6666' },
    { name: 'Dr. Anjali Verma', position: 'Orthopedic Oncologist', email: 'anjali.verma@jss.edu', phone: '888-777-5555' }
],

'osmania': [
    { name: 'Dr. Pankaj Gupta', position: 'Trauma and Reconstruction Specialist', email: 'pankaj.gupta@osmania.edu', phone: '888-777-6666' },
    { name: 'Dr. Anjali Sharma', position: 'Pediatric Orthopedic Surgeon', email: 'anjali.sharma@osmania.edu', phone: '888-777-5555' }
],

'madras': [
    { name: 'Dr. Rajiv Menon', position: 'Spine and Scoliosis Surgeon', email: 'rajiv.menon@madras.edu', phone: '888-777-6666' },
    { name: 'Dr. Divya Nair', position: 'Orthopedic Trauma Specialist', email: 'divya.nair@madras.edu', phone: '888-777-5555' }
],

'afmc': [
    { name: 'Dr. Kiran Rao', position: 'Arthroscopic Surgeon', email: 'kiran.rao@afmc.edu', phone: '888-777-6666' },
    { name: 'Dr. Sonali Jain', position: 'Foot and Ankle Surgeon', email: 'sonali.jain@afmc.edu', phone: '888-777-5555' }
],

'gmc': [
    { name: 'Dr. Manish Verma', position: 'Orthopedic Trauma Specialist', email: 'manish.verma@gmc.edu', phone: '888-777-6666' },
    { name: 'Dr. Aarti Khan', position: 'Sports Medicine Specialist', email: 'aarti.khan@gmc.edu', phone: '888-777-5555' }
],


//p

'aiims': [
    { name: 'Dr. Rakesh Mishra', position: 'Pediatrician', email: 'rakesh.mishra@aiims.edu', phone: '888-777-6666' },
    { name: 'Dr. Shalini Gupta', position: 'Neonatologist', email: 'shalini.gupta@aiims.edu', phone: '888-777-5555' }
],

'kalawati': [
    { name: 'Dr. Prakash Singh', position: 'Pediatric Cardiologist', email: 'prakash.singh@kalawati.edu', phone: '888-777-6666' },
    { name: 'Dr. Neha Kapoor', position: 'Pediatric Neurologist', email: 'neha.kapoor@kalawati.edu', phone: '888-777-5555' }
],

'nehru': [
    { name: 'Dr. Arvind Kumar', position: 'Pediatric Endocrinologist', email: 'arvind.kumar@nehru.edu', phone: '888-777-6666' },
    { name: 'Dr. Kavita Shah', position: 'Pediatric Gastroenterologist', email: 'kavita.shah@nehru.edu', phone: '888-777-5555' }
],

'kims': [
    { name: 'Dr. Rohit Reddy', position: 'Pediatric Infectious Disease Specialist', email: 'rohit.reddy@kims.edu', phone: '888-777-6666' },
    { name: 'Dr. Anjali Rao', position: 'Pediatric Hematologist', email: 'anjali.rao@kims.edu', phone: '888-777-5555' }
],

'cmc': [
    { name: 'Dr. Shweta Joshi', position: 'Pediatric Pulmonologist', email: 'shweta.joshi@cmc.edu', phone: '888-777-6666' },
    { name: 'Dr. Nitin Patel', position: 'Pediatric Oncologist', email: 'nitin.patel@cmc.edu', phone: '888-777-5555' }
],

'rainbow': [
    { name: 'Dr. Vikram Desai', position: 'Pediatric Intensivist', email: 'vikram.desai@rainbow.edu', phone: '888-777-6666' },
    { name: 'Dr. Meena Verma', position: 'Pediatric Nephrologist', email: 'meena.verma@rainbow.edu', phone: '888-777-5555' }
],

'osmania': [
    { name: 'Dr. Ankit Sharma', position: 'Pediatric Surgeon', email: 'ankit.sharma@osmania.edu', phone: '888-777-6666' },
    { name: 'Dr. Rekha Nair', position: 'Pediatric Rheumatologist', email: 'rekha.nair@osmania.edu', phone: '888-777-5555' }
],

'madras': [
    { name: 'Dr. Rajeev Menon', position: 'Pediatric Critical Care Specialist', email: 'rajeev.menon@madras.edu', phone: '888-777-6666' },
    { name: 'Dr. Divya Prasad', position: 'Pediatric Dermatologist', email: 'divya.prasad@madras.edu', phone: '888-777-5555' }
],

'afmc': [
    { name: 'Dr. Kiran Rao', position: 'Pediatric Gastroenterologist', email: 'kiran.rao@afmc.edu', phone: '888-777-6666' },
    { name: 'Dr. Sonali Jain', position: 'Pediatric Endocrinologist', email: 'sonali.jain@afmc.edu', phone: '888-777-5555' }
],

'wadia': [
    { name: 'Dr. Manish Verma', position: 'Pediatric Infectious Disease Specialist', email: 'manish.verma@wadia.edu', phone: '888-777-6666' },
    { name: 'Dr. Aarti Khan', position: 'Pediatric Cardiologist', email: 'aarti.khan@wadia.edu', phone: '888-777-5555' }
],


//on

'aiims': [
    { name: 'Dr. Ramesh Kapoor', position: 'Medical Oncologist', email: 'ramesh.kapoor@aiims.edu', phone: '888-777-6666' },
    { name: 'Dr. Pooja Sharma', position: 'Radiation Oncologist', email: 'pooja.sharma@aiims.edu', phone: '888-777-5555' }
],

'tmh': [
    { name: 'Dr. Arjun Patel', position: 'Surgical Oncologist', email: 'arjun.patel@tmh.edu', phone: '888-777-6666' },
    { name: 'Dr. Meera Nair', position: 'Pediatric Oncologist', email: 'meera.nair@tmh.edu', phone: '888-777-5555' }
],

'kidwai': [
    { name: 'Dr. Sanjay Deshmukh', position: 'Gynecologic Oncologist', email: 'sanjay.deshmukh@kidwai.edu', phone: '888-777-6666' },
    { name: 'Dr. Ruchi Singh', position: 'Hematologist Oncologist', email: 'ruchi.singh@kidwai.edu', phone: '888-777-5555' }
],

'pgimer': [
    { name: 'Dr. Ashok Reddy', position: 'Thoracic Oncologist', email: 'ashok.reddy@pgimer.edu', phone: '888-777-6666' },
    { name: 'Dr. Anjali Menon', position: 'Neuro-Oncologist', email: 'anjali.menon@pgimer.edu', phone: '888-777-5555' }
],

'cmc': [
    { name: 'Dr. Vishal Patel', position: 'Liver Oncologist', email: 'vishal.patel@cmc.edu', phone: '888-777-6666' },
    { name: 'Dr. Swati Agarwal', position: 'Colorectal Oncologist', email: 'swati.agarwal@cmc.edu', phone: '888-777-5555' }
],

'actrec': [
    { name: 'Dr. Gaurav Shah', position: 'Hematologist Oncologist', email: 'gaurav.shah@actrec.edu', phone: '888-777-6666' },
    { name: 'Dr. Nisha Verma', position: 'Breast Oncologist', email: 'nisha.verma@actrec.edu', phone: '888-777-5555' }
],

'hcg': [
    { name: 'Dr. Saurabh Joshi', position: 'Bone Marrow Transplant Specialist', email: 'saurabh.joshi@hcg.edu', phone: '888-777-6666' },
    { name: 'Dr. Priya Das', position: 'Immuno-Oncologist', email: 'priya.das@hcg.edu', phone: '888-777-5555' }
],

'madras': [
    { name: 'Dr. Raghav Menon', position: 'Lung Oncologist', email: 'raghav.menon@madras.edu', phone: '888-777-6666' },
    { name: 'Dr. Sneha Iyer', position: 'Head and Neck Oncologist', email: 'sneha.iyer@madras.edu', phone: '888-777-5555' }
],

'afmc': [
    { name: 'Dr. Kunal Rao', position: 'Gastrointestinal Oncologist', email: 'kunal.rao@afmc.edu', phone: '888-777-6666' },
    { name: 'Dr. Shalini Kapoor', position: 'Pediatric Oncologist', email: 'shalini.kapoor@afmc.edu', phone: '888-777-5555' }
],

'wadia': [
    { name: 'Dr. Akash Verma', position: 'Radiation Oncologist', email: 'akash.verma@wadia.edu', phone: '888-777-6666' },
    { name: 'Dr. Ayesha Khan', position: 'Gynecologic Oncologist', email: 'ayesha.khan@wadia.edu', phone: '888-777-5555' }
],


//g

'aiims': [
    { name: 'Dr. Rajesh Kumar', position: 'Gastroenterologist', email: 'rajesh.kumar@aiims.edu', phone: '888-777-6666' },
    { name: 'Dr. Neha Sinha', position: 'Hepatologist', email: 'neha.sinha@aiims.edu', phone: '888-777-5555' }
],

'tmh': [
    { name: 'Dr. Arvind Patel', position: 'Colorectal Surgeon', email: 'arvind.patel@tmh.edu', phone: '888-777-6666' },
    { name: 'Dr. Meera Gupta', position: 'Pediatric Gastroenterologist', email: 'meera.gupta@tmh.edu', phone: '888-777-5555' }
],

'gems': [
    { name: 'Dr. Sunil Deshmukh', position: 'Pancreatic Surgeon', email: 'sunil.deshmukh@gems.edu', phone: '888-777-6666' },
    { name: 'Dr. Ruchi Jain', position: 'Hepatobiliary Surgeon', email: 'ruchi.jain@gems.edu', phone: '888-777-5555' }
],

'pgimer': [
    { name: 'Dr. Ashok Reddy', position: 'GI Oncologist', email: 'ashok.reddy@pgimer.edu', phone: '888-777-6666' },
    { name: 'Dr. Anjali Mehta', position: 'Inflammatory Bowel Disease Specialist', email: 'anjali.mehta@pgimer.edu', phone: '888-777-5555' }
],

'cmc': [
    { name: 'Dr. Vishal Gupta', position: 'Hepatologist', email: 'vishal.gupta@cmc.edu', phone: '888-777-6666' },
    { name: 'Dr. Swati Raj', position: 'Endoscopic Surgeon', email: 'swati.raj@cmc.edu', phone: '888-777-5555' }
],

'sgpgi': [
    { name: 'Dr. Gaurav Singh', position: 'Gastroenterologist', email: 'gaurav.singh@sgpgi.edu', phone: '888-777-6666' },
    { name: 'Dr. Nisha Agarwal', position: 'Liver Transplant Surgeon', email: 'nisha.agarwal@sgpgi.edu', phone: '888-777-5555' }
],

'hcg': [
    { name: 'Dr. Saurabh Menon', position: 'Hepatobiliary Surgeon', email: 'saurabh.menon@hcg.edu', phone: '888-777-6666' },
    { name: 'Dr. Priya Sharma', position: 'Colorectal Specialist', email: 'priya.sharma@hcg.edu', phone: '888-777-5555' }
],

'apollo': [
    { name: 'Dr. Raghav Iyer', position: 'Liver Specialist', email: 'raghav.iyer@apollo.edu', phone: '888-777-6666' },
    { name: 'Dr. Sneha Menon', position: 'Gastroenterology Specialist', email: 'sneha.menon@apollo.edu', phone: '888-777-5555' }
],

'afmc': [
    { name: 'Dr. Kunal Desai', position: 'GI Surgeon', email: 'kunal.desai@afmc.edu', phone: '888-777-6666' },
    { name: 'Dr. Shalini Rao', position: 'Pediatric Gastroenterologist', email: 'shalini.rao@afmc.edu', phone: '888-777-5555' }
],

'wadia': [
    { name: 'Dr. Akash Jain', position: 'Hepatologist', email: 'akash.jain@wadia.edu', phone: '888-777-6666' },
    { name: 'Dr. Ayesha Sharma', position: 'Pediatric Gastroenterologist', email: 'ayesha.sharma@wadia.edu', phone: '888-777-5555' }
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
