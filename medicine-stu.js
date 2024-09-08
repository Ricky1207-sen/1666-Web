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
    { name: 'Ravi Sharma', position: 'Cardiology Student', email: 'ravi.sharma@aiims.edu', phone: '888-777-1111' },
    { name: 'Anita Kapoor', position: 'Cardiac Electrophysiology Student', email: 'anita.kapoor@aiims.edu', phone: '888-777-2222' }
],

'pgimer': [
    { name: 'Amit Kumar', position: 'Heart Failure Student', email: 'amit.kumar@pgimer.edu.in', phone: '888-777-3333' },
    { name: 'Riya Gupta', position: 'Pediatric Cardiology Student', email: 'riya.gupta@pgimer.edu.in', phone: '888-777-4444' }
],

'cims': [
    { name: 'Rohit Patel', position: 'Cardiac Intervention Student', email: 'rohit.patel@cims.edu', phone: '888-777-5555' },
    { name: 'Sanya Agarwal', position: 'Cardiac Anesthesia Student', email: 'sanya.agarwal@cims.edu', phone: '888-777-6666' }
],

'jipmer': [
    { name: 'Praveen Reddy', position: 'Cardiovascular Student', email: 'praveen.reddy@jipmer.edu', phone: '888-777-7777' },
    { name: 'Aishwarya Patel', position: 'Heart Transplant Student', email: 'aishwarya.patel@jipmer.edu', phone: '888-777-8888' }
],

'srmc': [
    { name: 'Rahul Singh', position: 'Cardiac Imaging Student', email: 'rahul.singh@srmc.edu', phone: '888-777-9999' },
    { name: 'Kavita Verma', position: 'Interventional Cardiology Student', email: 'kavita.verma@srmc.edu', phone: '888-777-1010' }
],

'kmc': [
    { name: 'Suraj Gupta', position: 'Cardiac Surgery Student', email: 'suraj.gupta@kmc.edu', phone: '888-777-1112' },
    { name: 'Richa Sharma', position: 'Electrophysiology Student', email: 'richa.sharma@kmc.edu', phone: '888-777-1212' }
],

'mahe': [
    { name: 'Ashwin Rao', position: 'Cardiac Intensive Care Student', email: 'ashwin.rao@mahe.edu', phone: '888-777-1313' },
    { name: 'Smita Sharma', position: 'Pediatric Cardiology Student', email: 'smita.sharma@mahe.edu', phone: '888-777-1414' }
],

'ggsipu': [
    { name: 'Vishal Patel', position: 'Heart Transplant Student', email: 'vishal.patel@ggsipu.edu', phone: '888-777-1515' },
    { name: 'Sneha Gupta', position: 'Electrophysiology Student', email: 'sneha.gupta@ggsipu.edu', phone: '888-777-1616' }
],

'nsc': [
    { name: 'Abhishek Sharma', position: 'Interventional Cardiology Student', email: 'abhishek.sharma@nsc.edu', phone: '888-777-1717' },
    { name: 'Reema Deshmukh', position: 'Cardiothoracic Student', email: 'reema.deshmukh@nsc.edu', phone: '888-777-1818' }
],

'sms': [
    { name: 'Deepak Kumar', position: 'Cardiovascular Student', email: 'deepak.kumar@sms.edu', phone: '888-777-1919' },
    { name: 'Ayesha Patel', position: 'Heart Failure Student', email: 'ayesha.patel@sms.edu', phone: '888-777-2020' }
],



//n

'nimhans': [
    { name: 'Aarav Mehta', position: 'Neurology Student', email: 'aarav.mehta@nimhans.edu', phone: '888-777-1111' },
    { name: 'Aisha Rao', position: 'Stroke Neurology Student', email: 'aisha.rao@nimhans.edu', phone: '888-777-2222' }
],

'aiims': [
    { name: 'Ankit Verma', position: 'Neurosurgery Student', email: 'ankit.verma@aiims.edu', phone: '888-777-3333' },
    { name: 'Aarti Sharma', position: 'Neuro-Oncology Student', email: 'aarti.sharma@aiims.edu', phone: '888-777-4444' }
],

'pgimer': [
    { name: 'Vikram Nair', position: 'Cerebrovascular Neurology Student', email: 'vikram.nair@pgimer.edu.in', phone: '888-777-5555' },
    { name: 'Riya Desai', position: 'Neurophysiology Student', email: 'riya.desai@pgimer.edu.in', phone: '888-777-6666' }
],

'cmc': [
    { name: 'Amit Kapoor', position: 'Neurointervention Student', email: 'amit.kapoor@cmc.edu', phone: '888-777-7777' },
    { name: 'Priya Patel', position: 'Neurointensive Care Student', email: 'priya.patel@cmc.edu', phone: '888-777-8888' }
],

'jipmer': [
    { name: 'Rajat Rao', position: 'Movement Disorders Student', email: 'rajat.rao@jipmer.edu', phone: '888-777-9999' },
    { name: 'Meera Sharma', position: 'Pediatric Neurology Student', email: 'meera.sharma@jipmer.edu', phone: '888-777-1010' }
],

'srmc': [
    { name: 'Harish Singh', position: 'Neuropharmacology Student', email: 'harish.singh@srmc.edu', phone: '888-777-1112' },
    { name: 'Deepa Rao', position: 'Epileptology Student', email: 'deepa.rao@srmc.edu', phone: '888-777-1212' }
],

'kmc': [
    { name: 'Sanjay Gupta', position: 'Neuro-Oncology Student', email: 'sanjay.gupta@kmc.edu', phone: '888-777-1313' },
    { name: 'Rina Sharma', position: 'Neuropsychology Student', email: 'rina.sharma@kmc.edu', phone: '888-777-1414' }
],

'mahe': [
    { name: 'Manish Sharma', position: 'Neurosurgery Student', email: 'manish.sharma@mahe.edu', phone: '888-777-1515' },
    { name: 'Shreya Singh', position: 'Neurointensive Care Student', email: 'shreya.singh@mahe.edu', phone: '888-777-1616' }
],

'ggsipu': [
    { name: 'Kiran Patel', position: 'Neurointervention Student', email: 'kiran.patel@ggsipu.edu', phone: '888-777-1717' },
    { name: 'Priyanka Sharma', position: 'Epileptology Student', email: 'priyanka.sharma@ggsipu.edu', phone: '888-777-1818' }
],

'nsc': [
    { name: 'Arvind Patel', position: 'Spine Surgery Student', email: 'arvind.patel@nsc.edu', phone: '888-777-1919' },
    { name: 'Roshni Sharma', position: 'Neuroimaging Student', email: 'roshni.sharma@nsc.edu', phone: '888-777-2020' }
],




//o

'aiims': [
    { name: 'Ravi Patel', position: 'Orthopedic Surgery Student', email: 'ravi.patel@aiims.edu', phone: '888-777-1111' },
    { name: 'Neha Joshi', position: 'Spinal Deformity Student', email: 'neha.joshi@aiims.edu', phone: '888-777-2222' }
],

'sion': [
    { name: 'Rohit Gupta', position: 'Knee Replacement Student', email: 'rohit.gupta@sion.edu', phone: '888-777-3333' },
    { name: 'Aarti Mehta', position: 'Shoulder Surgery Student', email: 'aarti.mehta@sion.edu', phone: '888-777-4444' }
],

'kgh': [
    { name: 'Sandeep Singh', position: 'Joint Replacement Student', email: 'sandeep.singh@kgh.edu', phone: '888-777-5555' },
    { name: 'Ananya Rao', position: 'Orthopedic Trauma Student', email: 'ananya.rao@kgh.edu', phone: '888-777-6666' }
],

'sgrh': [
    { name: 'Arjun Sharma', position: 'Sports Injury Student', email: 'arjun.sharma@sgrh.edu', phone: '888-777-7777' },
    { name: 'Maya Patel', position: 'Foot and Ankle Student', email: 'maya.patel@sgrh.edu', phone: '888-777-8888' }
],

'cmc': [
    { name: 'Vikram Desai', position: 'Hand Surgery Student', email: 'vikram.desai@cmc.edu', phone: '888-777-9999' },
    { name: 'Sonia Verma', position: 'Elbow and Shoulder Student', email: 'sonia.verma@cmc.edu', phone: '888-777-1010' }
],

'jss': [
    { name: 'Nikhil Kumar', position: 'Hip Replacement Student', email: 'nikhil.kumar@jss.edu', phone: '888-777-1112' },
    { name: 'Pooja Sinha', position: 'Orthopedic Tumor Student', email: 'pooja.sinha@jss.edu', phone: '888-777-1212' }
],

'osmania': [
    { name: 'Arvind Gupta', position: 'Reconstructive Orthopedic Student', email: 'arvind.gupta@osmania.edu', phone: '888-777-1313' },
    { name: 'Neha Reddy', position: 'Pediatric Orthopedic Student', email: 'neha.reddy@osmania.edu', phone: '888-777-1414' }
],

'madras': [
    { name: 'Ravi Menon', position: 'Spinal Surgery Student', email: 'ravi.menon@madras.edu', phone: '888-777-1515' },
    { name: 'Meera Kumar', position: 'Trauma Orthopedic Student', email: 'meera.kumar@madras.edu', phone: '888-777-1616' }
],

'afmc': [
    { name: 'Siddharth Rao', position: 'Arthroscopic and Sports Student', email: 'siddharth.rao@afmc.edu', phone: '888-777-1717' },
    { name: 'Ayesha Jain', position: 'Foot and Ankle Student', email: 'ayesha.jain@afmc.edu', phone: '888-777-1818' }
],

'gmc': [
    { name: 'Rohit Verma', position: 'Orthopedic Trauma Student', email: 'rohit.verma@gmc.edu', phone: '888-777-1919' },
    { name: 'Sneha Singh', position: 'Sports Injury Student', email: 'sneha.singh@gmc.edu', phone: '888-777-2020' }
]
,


//p

'aiims': [
    { name: 'Arjun Rao', position: 'Pediatric Medicine Student', email: 'arjun.rao@aiims.edu', phone: '888-777-1111' },
    { name: 'Nisha Sharma', position: 'Neonatology Student', email: 'nisha.sharma@aiims.edu', phone: '888-777-2222' }
],

'kalawati': [
    { name: 'Amit Desai', position: 'Pediatric Cardiology Student', email: 'amit.desai@kalawati.edu', phone: '888-777-3333' },
    { name: 'Riya Kapoor', position: 'Pediatric Neurology Student', email: 'riya.kapoor@kalawati.edu', phone: '888-777-4444' }
],

'nehru': [
    { name: 'Ravi Kumar', position: 'Pediatric Endocrinology Student', email: 'ravi.kumar@nehru.edu', phone: '888-777-5555' },
    { name: 'Meera Shah', position: 'Pediatric Gastroenterology Student', email: 'meera.shah@nehru.edu', phone: '888-777-6666' }
],

'kims': [
    { name: 'Arjun Reddy', position: 'Pediatric Infectious Disease Student', email: 'arjun.reddy@kims.edu', phone: '888-777-7777' },
    { name: 'Tanuja Rao', position: 'Pediatric Hematology Student', email: 'tanuja.rao@kims.edu', phone: '888-777-8888' }
],

'cmc': [
    { name: 'Sanjay Joshi', position: 'Pediatric Pulmonology Student', email: 'sanjay.joshi@cmc.edu', phone: '888-777-9999' },
    { name: 'Aarti Patel', position: 'Pediatric Oncology Student', email: 'aarti.patel@cmc.edu', phone: '888-777-1010' }
],

'rainbow': [
    { name: 'Rajesh Desai', position: 'Pediatric Intensive Care Student', email: 'rajesh.desai@rainbow.edu', phone: '888-777-1112' },
    { name: 'Sonia Verma', position: 'Pediatric Nephrology Student', email: 'sonia.verma@rainbow.edu', phone: '888-777-1212' }
],

'osmania': [
    { name: 'Kiran Sharma', position: 'Pediatric Surgery Student', email: 'kiran.sharma@osmania.edu', phone: '888-777-1313' },
    { name: 'Pooja Nair', position: 'Pediatric Rheumatology Student', email: 'pooja.nair@osmania.edu', phone: '888-777-1414' }
],

'madras': [
    { name: 'Suresh Menon', position: 'Pediatric Critical Care Student', email: 'suresh.menon@madras.edu', phone: '888-777-1515' },
    { name: 'Ritika Prasad', position: 'Pediatric Dermatology Student', email: 'ritika.prasad@madras.edu', phone: '888-777-1616' }
],

'afmc': [
    { name: 'Vikram Rao', position: 'Pediatric Gastroenterology Student', email: 'vikram.rao@afmc.edu', phone: '888-777-1717' },
    { name: 'Asha Jain', position: 'Pediatric Endocrinology Student', email: 'asha.jain@afmc.edu', phone: '888-777-1818' }
],

'wadia': [
    { name: 'Karan Verma', position: 'Pediatric Infectious Disease Student', email: 'karan.verma@wadia.edu', phone: '888-777-1919' },
    { name: 'Anjali Khan', position: 'Pediatric Cardiology Student', email: 'anjali.khan@wadia.edu', phone: '888-777-2020' }
],




//on

'aiims': [
    { name: 'Rajiv Mehta', position: 'Oncology Student', email: 'rajiv.mehta@aiims.edu', phone: '888-777-2020' },
    { name: 'Anisha Gupta', position: 'Oncology Research Student', email: 'anisha.gupta@aiims.edu', phone: '888-777-3030' }
],

'tmh': [
    { name: 'Sameer Patel', position: 'Oncology Student', email: 'sameer.patel@tmh.edu', phone: '888-777-4040' },
    { name: 'Rina Desai', position: 'Pediatric Oncology Student', email: 'rina.desai@tmh.edu', phone: '888-777-5050' }
],

'kidwai': [
    { name: 'Mohan Deshmukh', position: 'Gynecologic Oncology Student', email: 'mohan.deshmukh@kidwai.edu', phone: '888-777-6060' },
    { name: 'Meera Sinha', position: 'Hematology Oncology Student', email: 'meera.sinha@kidwai.edu', phone: '888-777-7070' }
],

'pgimer': [
    { name: 'Rakesh Kumar', position: 'Thoracic Oncology Student', email: 'rakesh.kumar@pgimer.edu', phone: '888-777-8080' },
    { name: 'Suman Bhardwaj', position: 'Neuro-Oncology Student', email: 'suman.bhardwaj@pgimer.edu', phone: '888-777-9090' }
],

'cmc': [
    { name: 'Anil Verma', position: 'Liver Oncology Student', email: 'anil.verma@cmc.edu', phone: '888-777-1011' },
    { name: 'Neha Agarwal', position: 'Colorectal Oncology Student', email: 'neha.agarwal@cmc.edu', phone: '888-777-1212' }
],

'actrec': [
    { name: 'Ravi Shah', position: 'Hematology Oncology Student', email: 'ravi.shah@actrec.edu', phone: '888-777-1313' },
    { name: 'Priya Soni', position: 'Breast Oncology Student', email: 'priya.soni@actrec.edu', phone: '888-777-1414' }
],

'hcg': [
    { name: 'Arjun Joshi', position: 'Bone Marrow Transplant Student', email: 'arjun.joshi@hcg.edu', phone: '888-777-1515' },
    { name: 'Kavita Reddy', position: 'Immuno-Oncology Student', email: 'kavita.reddy@hcg.edu', phone: '888-777-1616' }
],

'madras': [
    { name: 'Amit Menon', position: 'Lung Oncology Student', email: 'amit.menon@madras.edu', phone: '888-777-1717' },
    { name: 'Neha Reddy', position: 'Head and Neck Oncology Student', email: 'neha.reddy@madras.edu', phone: '888-777-1818' }
],

'afmc': [
    { name: 'Varun Rao', position: 'Gastrointestinal Oncology Student', email: 'varun.rao@afmc.edu', phone: '888-777-1919' },
    { name: 'Meera Kapoor', position: 'Pediatric Oncology Student', email: 'meera.kapoor@afmc.edu', phone: '888-777-2021' }
],

'wadia': [
    { name: 'Rajesh Verma', position: 'Radiation Oncology Student', email: 'rajesh.verma@wadia.edu', phone: '888-777-2121' },
    { name: 'Aisha Khan', position: 'Gynecologic Oncology Student', email: 'aisha.khan@wadia.edu', phone: '888-777-2222' }
]
,


//g

'aiims': [
    { name: 'Rajesh Kumar', position: 'Gastroenterology Student', email: 'rajesh.kumar@aiims.edu', phone: '888-777-1111' },
    { name: 'Neha Sinha', position: 'Hepatology Student', email: 'neha.sinha@aiims.edu', phone: '888-777-2222' }
],

'tmh': [
    { name: 'Arvind Patel', position: 'Colorectal Surgery Student', email: 'arvind.patel@tmh.edu', phone: '888-777-3333' },
    { name: 'Meera Gupta', position: 'Pediatric Gastroenterology Student', email: 'meera.gupta@tmh.edu', phone: '888-777-4444' }
],

'gems': [
    { name: 'Sunil Deshmukh', position: 'Pancreatic Surgery Student', email: 'sunil.deshmukh@gems.edu', phone: '888-777-5555' },
    { name: 'Ruchi Jain', position: 'Hepatobiliary Surgery Student', email: 'ruchi.jain@gems.edu', phone: '888-777-6666' }
],

'pgimer': [
    { name: 'Ashok Reddy', position: 'GI Oncology Student', email: 'ashok.reddy@pgimer.edu', phone: '888-777-7777' },
    { name: 'Anjali Mehta', position: 'Inflammatory Bowel Disease Student', email: 'anjali.mehta@pgimer.edu', phone: '888-777-8888' }
],

'cmc': [
    { name: 'Vishal Gupta', position: 'Hepatology Student', email: 'vishal.gupta@cmc.edu', phone: '888-777-9999' },
    { name: 'Swati Raj', position: 'Endoscopic Surgery Student', email: 'swati.raj@cmc.edu', phone: '888-777-1010' }
],

'sgpgi': [
    { name: 'Gaurav Singh', position: 'Gastroenterology Student', email: 'gaurav.singh@sgpgi.edu', phone: '888-777-1112' },
    { name: 'Nisha Agarwal', position: 'Liver Transplant Surgery Student', email: 'nisha.agarwal@sgpgi.edu', phone: '888-777-1212' }
],

'hcg': [
    { name: 'Saurabh Menon', position: 'Hepatobiliary Surgery Student', email: 'saurabh.menon@hcg.edu', phone: '888-777-1313' },
    { name: 'Priya Sharma', position: 'Colorectal Surgery Student', email: 'priya.sharma@hcg.edu', phone: '888-777-1414' }
],

'apollo': [
    { name: 'Raghav Iyer', position: 'Liver Specialty Student', email: 'raghav.iyer@apollo.edu', phone: '888-777-1515' },
    { name: 'Sneha Menon', position: 'Gastroenterology Student', email: 'sneha.menon@apollo.edu', phone: '888-777-1616' }
],

'afmc': [
    { name: 'Kunal Desai', position: 'GI Surgery Student', email: 'kunal.desai@afmc.edu', phone: '888-777-1717' },
    { name: 'Shalini Rao', position: 'Pediatric Gastroenterology Student', email: 'shalini.rao@afmc.edu', phone: '888-777-1818' }
],

'wadia': [
    { name: 'Akash Jain', position: 'Hepatology Student', email: 'akash.jain@wadia.edu', phone: '888-777-1919' },
    { name: 'Ayesha Sharma', position: 'Pediatric Gastroenterology Student', email: 'ayesha.sharma@wadia.edu', phone: '888-777-2020' }
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
