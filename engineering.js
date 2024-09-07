// College list for each field
const collegeData = {
    me: [
        { value: 'iitm', name: 'IIT Madras' },
        { value: 'vitv', name: 'VIT Vellore' },
        { value: 'iitr', name: 'IIT Roorkee' },
        { value: 'iitkh', name: 'IIT Kharagpur'},
        { value: 'bitsp', name: 'BITS Pilani' },
        { value: 'dtu', name: 'Delhi Technological University' },
        { value: 'nitt', name: 'NIT Trichy' },
        { value: 'iitb', name: 'IIT Bombay' },
        { value: 'iitd', name: 'IIT Delhi' },
        { value: 'iitbhu', name: 'IIT Bhubaneshwar' },
    ],

    ee: [
        { value: 'pec', name: 'Punjab Engineering College, Chandigarh' },
        { value: 'vnitn', name: 'Visvesvaraya National Institute of Technology, Nagpur' },
        { value: 'thapar', name: 'Thapar Institute of Engineering and Technology, Patiala' },
        { value: 'bitsgoa', name: 'Birla Institute of Technology and Science, Goa' },
        { value: 'iitindore', name: 'IIT Indore' },
        { value: 'nitcalicut', name: 'National Institute of Technology, Calicut' },
        { value: 'dtu', name: 'Delhi Technological University, Delhi' },
        { value: 'vnitnagpur', name: 'Visvesvaraya National Institute of Technology, Nagpur' },
        { value: 'svnit', name: 'Sardar Vallabhbhai National Institute of Technology, Surat' },
        { value: 'coep', name: 'College of Engineering Pune, Pune' }
    ],
    
    

    ce: [
        { value: 'ictm', name: 'Institute of Chemical Technology, Mumbai' },
        { value: 'iipe', name: 'Indian Institute of Petroleum and Energy, Visakhapatnam' },
        { value: 'iitg', name: 'IIT Guwahati' },
        { value: 'vnit', name: 'Visvesvaraya National Institute of Technology, Nagpur' },
        { value: 'manipal', name: 'Manipal Institute of Technology, Manipal' },
        { value: 'sastra', name: 'SASTRA University, Thanjavur' },
        { value: 'andhra', name: 'Andhra University College of Engineering, Visakhapatnam' },
        { value: 'jadhavpur', name: 'Jadavpur University, Kolkata' },
        { value: 'osmania', name: 'Osmania University, Hyderabad' },
        { value: 'anna', name: 'Anna University, Chennai' }
    ],

    cse: [
        { value: 'iiith', name: 'International Institute of Information Technology, Hyderabad' },
        { value: 'vit', name: 'Vellore Institute of Technology, Vellore' },
        { value: 'iiitb', name: 'International Institute of Information Technology, Bangalore' },
        { value: 'nitk', name: 'National Institute of Technology Karnataka, Surathkal' },
        { value: 'mit', name: 'Manipal Institute of Technology, Manipal' },
        { value: 'psg', name: 'PSG College of Technology, Coimbatore' },
        { value: 'bits', name: 'Birla Institute of Technology and Science, Pilani' },
        { value: 'iisc', name: 'Indian Institute of Science, Bangalore' },
        { value: 'vnitnagpur', name: 'Visvesvaraya National Institute of Technology, Nagpur' },
        { value: 'nsit', name: 'Netaji Subhas University of Technology, Delhi' }
    ],

    che: [
        { value: 'ictm', name: 'Institute of Chemical Technology, Mumbai' },
        { value: 'iipe', name: 'Indian Institute of Petroleum and Energy, Visakhapatnam' },
        { value: 'nitw', name: 'National Institute of Technology, Warangal' },
        { value: 'iitm', name: 'Indian Institute of Technology, Madras' },
        { value: 'iitr', name: 'Indian Institute of Technology, Roorkee' },
        { value: 'bitsgoa', name: 'Birla Institute of Technology and Science, Goa' },
        { value: 'nitti', name: 'National Institute of Technology, Tiruchirappalli' },
        { value: 'gu', name: 'Gujarat University, Ahmedabad' },
        { value: 'nitd', name: 'National Institute of Technology, Durgapur' },
        { value: 'svnit', name: 'Sardar Vallabhbhai National Institute of Technology, Surat' }
    ],

    ae: [
        { value: 'iist', name: 'Indian Institute of Space Science and Technology, Thiruvananthapuram' },
        { value: 'iitk', name: 'Indian Institute of Technology, Kanpur' },
        { value: 'mit', name: 'Madras Institute of Technology, Chennai' },
        { value: 'iith', name: 'Indian Institute of Technology, Hyderabad' },
        { value: 'iiest', name: 'Indian Institute of Engineering Science and Technology, Shibpur' },
        { value: 'cusat', name: 'Cochin University of Science and Technology, Kochi' },
        { value: 'vssc', name: 'Vikram Sarabhai Space Centre, Thiruvananthapuram' },
        { value: 'hindustan', name: 'Hindustan Institute of Technology and Science, Chennai' },
        { value: 'vitv', name: 'Vellore Institute of Technology, Vellore' },
        { value: 'rvce', name: 'R.V. College of Engineering, Bengaluru' }
    ]
    


    


    



    
    // Other fields like engineering, biotechnology, etc. remain unchanged...
};

// Alumni data
const alumniData = {

    iitm: [
        { name: 'Rajesh Sharma', position: 'Automotive Engineer', email: 'rajeshgoogle@gmail.com', phone: '888-777-6666' },
        { name: 'Rohit Ahuja', position: 'Robotics Engineer', email: 'rohit.ahuja@pgimer.edu.in', phone: '888-777-5555' }
    ],

    iitb: [
        { name: 'Rahul Sharma', position: 'Automotive Engineer', email: 'rahulgoogle@gmail.com', phone: '888-777-6666' },
        { name: 'Simran Ahuja', position: 'Robotics Engineer', email: 'simranahuja@pgimer.edu.in', phone: '888-777-5555' }
    ],

    iitkh: [
        { name: 'Sunil Sharma', position: 'Robotics Engineer', email: 'sunilgoogle@gmail.com', phone: '888-777-6666' },
        { name: 'Kavita Shah', position: 'Automotive Engineer', email: 'shahkavita@pgimer.edu.in', phone: '888-777-5555' }
    ],

    iitkh: [
        { name: 'Vikram Rao', position: 'Automotive Engineer', email: 'raovikramgoogle@gmail.com', phone: '888-777-6666' },
        { name: 'Swati Agarwal', position: 'Robotics Engineer', email: 'swati25@pgimer.edu.in', phone: '888-777-5555' }
    ],

   bitsp: [
        { name: 'Abhinav Bhatia ', position: 'Robotics Engineer', email: 'bhatiabhinav@gmail.com', phone: '888-777-6666' },
        { name: 'Nikhil Reddy', position:  'Automotive Engineer', email: 'swati25@pgimer.edu.in', phone: '888-777-5555' }
    ],

    dtu: [
        { name: 'Rajesh Sharma', position: 'Robotics Engineer', email: 'rajeshgoogle@gmail.com', phone: '888-777-6666' },
        { name: 'Rohit Ahuja', position: 'Automotive Engineer', email: 'rohit.ahuja@pgimer.edu.in', phone: '888-777-5555' }
    ],

    nitt: [
        { name: 'Rahul Sharma', position: 'Robotics Engineer', email: 'rahulgoogle@gmail.com', phone: '888-777-6666' },
        { name: 'Simran Ahuja', position: 'Automotive Engineer', email: 'simranahuja@pgimer.edu.in', phone: '888-777-5555' }
    ],

    iitb: [
        { name: 'Sunil Sharma', position: 'Robotics Engineer', email: 'sunilgoogle@gmail.com', phone: '888-777-6666' },
        { name: 'Kavita Shah', position: 'Automotive Engineer', email: 'shahkavita@pgimer.edu.in', phone: '888-777-5555' }
    ],

   iitd: [
        { name: 'Vikram Rao', position: 'Robotics Engineer', email: 'raovikramgoogle@gmail.com', phone: '888-777-6666' },
        { name: 'Swati Agarwal', position: 'Automotive Engineer', email: 'swati25@pgimer.edu.in', phone: '888-777-5555' }
    ],

   iitbhu: [
        { name: 'Abhinav Bhatia ', position: 'Robotics Engineer', email: 'bhatiabhinav@gmail.com', phone: '888-777-6666' },
        { name: 'Nikhil Reddy', position:  'Automotive Engineer', email: 'swati25@pgimer.edu.in', phone: '888-777-5555' }
    ],


    pec: [
        { name: 'Rajesh Kumar', position: 'Electrical Engineer', email: 'rajeshkumar@pec.ac.in', phone: '888-777-6666' },
        { name: 'Arun Prasad', position: 'Power Systems Engineer', email: 'arunprasad@pec.ac.in', phone: '888-777-5555' }
    ],
    
    vnitn: [
        { name: 'Suresh Rao', position: 'Control Systems Engineer', email: 'sureshrao@vnitn.ac.in', phone: '888-777-6666' },
        { name: 'Vinay Khandelwal', position: 'Electrical Engineer', email: 'vinayk@vnitn.ac.in', phone: '888-777-5555' }
    ],
    
    thapar: [
        { name: 'Karthik Sharma', position: 'Electrical Design Engineer', email: 'karthiks@thapar.edu', phone: '888-777-6666' },
        { name: 'Praveen Sinha', position: 'Power Systems Engineer', email: 'praveens@thapar.edu', phone: '888-777-5555' }
    ],
    
    bitsgoa: [
        { name: 'Ravi Patil', position: 'Electrical Engineer', email: 'ravipatil@bitsgoa.ac.in', phone: '888-777-6666' },
        { name: 'Meera Nair', position: 'Automation Engineer', email: 'meeranair@bitsgoa.ac.in', phone: '888-777-5555' }
    ],
    
    iitindore: [
        { name: 'Rajiv Sharma', position: 'Electrical Engineer', email: 'rajivs@iitindore.ac.in', phone: '888-777-6666' },
        { name: 'Swathi Rao', position: 'Power Systems Engineer', email: 'swathirao@iitindore.ac.in', phone: '888-777-5555' }
    ],
    
    nitcalicut: [
        { name: 'Ganesh Iyer', position: 'Control Systems Engineer', email: 'ganeshi@nitcalicut.ac.in', phone: '888-777-6666' },
        { name: 'Madhuri Naik', position: 'Electrical Engineer', email: 'madhurinaik@nitcalicut.ac.in', phone: '888-777-5555' }
    ],
    
    dtu: [
        { name: 'Vikas Reddy', position: 'Automation Engineer', email: 'vikasr@dtu.ac.in', phone: '888-777-6666' },
        { name: 'Sudha Rao', position: 'Electrical Engineer', email: 'sudhar@dtu.ac.in', phone: '888-777-5555' }
    ],
    
    svnit: [
        { name: 'Amit Sharma', position: 'Power Systems Engineer', email: 'amitsharma@svnit.ac.in', phone: '888-777-6666' },
        { name: 'Pooja Singh', position: 'Electrical Engineer', email: 'pooja.singh@svnit.ac.in', phone: '888-777-5555' }
    ],
    
    coep: [
        { name: 'Kiran Kumar', position: 'Electrical Design Engineer', email: 'kirankumar@coep.ac.in', phone: '888-777-6666' },
        { name: 'Neha Gupta', position: 'Power Systems Engineer', email: 'nehagupta@coep.ac.in', phone: '888-777-5555' }
    ],
    


    ictm: [
        { name: 'Ananya Sen', position: 'Process Engineer', email: 'ananya.sen@ictm.edu', phone: '888-777-6666' },
        { name: 'Siddharth Mehta', position: 'Chemical Safety Engineer', email: 'siddharth.mehta@ictm.edu', phone: '888-777-5555' }
    ],
    
    iipe: [
        { name: 'Vikash Singh', position: 'Petroleum Engineer', email: 'vikash.singh@iipe.edu', phone: '888-777-6666' },
        { name: 'Pooja Nair', position: 'Biochemical Engineer', email: 'pooja.nair@iipe.edu', phone: '888-777-5555' }
    ],
    
    iitg: [
        { name: 'Rajiv Kumar', position: 'Process Design Engineer', email: 'rajiv.kumar@iitg.ac.in', phone: '888-777-6666' },
        { name: 'Neha Verma', position: 'Environmental Engineer', email: 'neha.verma@iitg.ac.in', phone: '888-777-5555' }
    ],
    
    vnit: [
        { name: 'Anil Kapoor', position: 'Chemical Plant Engineer', email: 'anil.kapoor@vnit.edu', phone: '888-777-6666' },
        { name: 'Meera Gupta', position: 'Polymer Engineer', email: 'meera.gupta@vnit.edu', phone: '888-777-5555' }
    ],
    
    manipal: [
        { name: 'Karthik Rao', position: 'Process Safety Engineer', email: 'karthik.rao@manipal.edu', phone: '888-777-6666' },
        { name: 'Ritika Joshi', position: 'Chemical Production Engineer', email: 'ritika.joshi@manipal.edu', phone: '888-777-5555' }
    ],
    
    sastra: [
        { name: 'Aditya Sharma', position: 'Water Treatment Engineer', email: 'aditya.sharma@sastra.edu', phone: '888-777-6666' },
        { name: 'Priya Deshmukh', position: 'Chemical Research Scientist', email: 'priya.deshmukh@sastra.edu', phone: '888-777-5555' }
    ],
    
    andhra: [
        { name: 'Amit Trivedi', position: 'Energy Engineer', email: 'amit.trivedi@andhrauniv.edu', phone: '888-777-6666' },
        { name: 'Sneha Patil', position: 'Chemical Development Engineer', email: 'sneha.patil@andhrauniv.edu', phone: '888-777-5555' }
    ],
    
    jadhavpur: [
        { name: 'Rohan Desai', position: 'Pharmaceutical Engineer', email: 'rohan.desai@jadhavpur.edu', phone: '888-777-6666' },
        { name: 'Shruti Menon', position: 'Petrochemical Engineer', email: 'shruti.menon@jadhavpur.edu', phone: '888-777-5555' }
    ],
    
    osmania: [
        { name: 'Pranav Jain', position: 'Corrosion Engineer', email: 'pranav.jain@osmania.edu', phone: '888-777-6666' },
        { name: 'Nidhi Rao', position: 'Oil and Gas Engineer', email: 'nidhi.rao@osmania.edu', phone: '888-777-5555' }
    ],
    
    anna: [
        { name: 'Rakesh Iyer', position: 'Materials Engineer', email: 'rakesh.iyer@annauniv.edu', phone: '888-777-6666' },
        { name: 'Shalini Kapoor', position: 'Food Process Engineer', email: 'shalini.kapoor@annauniv.edu', phone: '888-777-5555' }
    ],
    


    //cse

    iiith: [
        { name: 'Arjun Patel', position: 'Software Developer', email: 'arjun.patel@iiith.edu', phone: '888-777-6666' },
        { name: 'Meera Rao', position: 'Data Scientist', email: 'meera.rao@iiith.edu', phone: '888-777-5555' }
    ],
    
    vit: [
        { name: 'Sanjay Kumar', position: 'AI Engineer', email: 'sanjay.kumar@vit.edu', phone: '888-777-6666' },
        { name: 'Ananya Gupta', position: 'Full Stack Developer', email: 'ananya.gupta@vit.edu', phone: '888-777-5555' }
    ],
    
    iiitb: [
        { name: 'Vikram Singh', position: 'Machine Learning Engineer', email: 'vikram.singh@iiitb.ac.in', phone: '888-777-6666' },
        { name: 'Ria Sharma', position: 'Cloud Solutions Architect', email: 'ria.sharma@iiitb.ac.in', phone: '888-777-5555' }
    ],
    
    nitk: [
        { name: 'Arjun Menon', position: 'Cybersecurity Analyst', email: 'arjun.menon@nitk.edu', phone: '888-777-6666' },
        { name: 'Sita Rao', position: 'Blockchain Developer', email: 'sita.rao@nitk.edu', phone: '888-777-5555' }
    ],
    
    mit: [
        { name: 'Rajeev Kumar', position: 'Systems Analyst', email: 'rajeeve.kumar@mit.edu', phone: '888-777-6666' },
        { name: 'Priya Nair', position: 'Software Engineer', email: 'priya.nair@mit.edu', phone: '888-777-5555' }
    ],
    
    psg: [
        { name: 'Arvind Sharma', position: 'Database Administrator', email: 'arvind.sharma@psgtech.ac.in', phone: '888-777-6666' },
        { name: 'Sneha Patel', position: 'DevOps Engineer', email: 'sneha.patel@psgtech.ac.in', phone: '888-777-5555' }
    ],
    
    bits: [
        { name: 'Amit Kapoor', position: 'Web Developer', email: 'amit.kapoor@bits-goa.ac.in', phone: '888-777-6666' },
        { name: 'Nisha Verma', position: 'Network Engineer', email: 'nisha.verma@bits-goa.ac.in', phone: '888-777-5555' }
    ],
    
    iisc: [
        { name: 'Rohan Kumar', position: 'Artificial Intelligence Researcher', email: 'rohan.kumar@iisc.edu', phone: '888-777-6666' },
        { name: 'Shruti Reddy', position: 'Computer Vision Engineer', email: 'shruti.reddy@iisc.edu', phone: '888-777-5555' }
    ],
    
    vnitnagpur: [
        { name: 'Amit Jain', position: 'Embedded Systems Engineer', email: 'amit.jain@vnitnagpur.ac.in', phone: '888-777-6666' },
        { name: 'Nidhi Agarwal', position: 'Big Data Engineer', email: 'nidhi.agarwal@vnitnagpur.ac.in', phone: '888-777-5555' }
    ],
    
    nsit: [
        { name: 'Rakesh Gupta', position: 'Software Architect', email: 'rakesh.gupta@nsit.ac.in', phone: '888-777-6666' },
        { name: 'Shalini Mehta', position: 'IT Consultant', email: 'shalini.mehta@nsit.ac.in', phone: '888-777-5555' }
    ],


    //che
   
   
    ictm: [
        { name: 'Arjun Patel', position: 'Process Engineer', email: 'arjun.patel@ictm.edu', phone: '888-777-6666' },
        { name: 'Meera Rao', position: 'Chemical Safety Engineer', email: 'meera.rao@ictm.edu', phone: '888-777-5555' }
    ],
    
    iipe: [
        { name: 'Sanjay Kumar', position: 'Petroleum Engineer', email: 'sanjay.kumar@iipe.edu', phone: '888-777-6666' },
        { name: 'Ananya Gupta', position: 'Process Design Engineer', email: 'ananya.gupta@iipe.edu', phone: '888-777-5555' }
    ],
    
    nitw: [
        { name: 'Vikram Singh', position: 'Biochemical Engineer', email: 'vikram.singh@nitw.edu', phone: '888-777-6666' },
        { name: 'Ria Sharma', position: 'Environmental Engineer', email: 'ria.sharma@nitw.edu', phone: '888-777-5555' }
    ],
    
    iitm: [
        { name: 'Arjun Menon', position: 'Chemical Plant Engineer', email: 'arjun.menon@iitm.edu', phone: '888-777-6666' },
        { name: 'Sita Rao', position: 'Process Safety Engineer', email: 'sita.rao@iitm.edu', phone: '888-777-5555' }
    ],
    
    iitr: [
        { name: 'Rajeev Kumar', position: 'Polymer Engineer', email: 'rajeeve.kumar@iitr.edu', phone: '888-777-6666' },
        { name: 'Priya Nair', position: 'Energy Engineer', email: 'priya.nair@iitr.edu', phone: '888-777-5555' }
    ],
    
    bitsgoa: [
        { name: 'Arvind Sharma', position: 'Corrosion Engineer', email: 'arvind.sharma@bitsgoa.edu', phone: '888-777-6666' },
        { name: 'Sneha Patel', position: 'Oil and Gas Engineer', email: 'sneha.patel@bitsgoa.edu', phone: '888-777-5555' }
    ],
    
    nitti: [
        { name: 'Amit Kapoor', position: 'Pharmaceutical Engineer', email: 'amit.kapoor@nitti.edu', phone: '888-777-6666' },
        { name: 'Nisha Verma', position: 'Chemical Development Engineer', email: 'nisha.verma@nitti.edu', phone: '888-777-5555' }
    ],
    
    gu: [
        { name: 'Rohan Kumar', position: 'Water Treatment Engineer', email: 'rohan.kumar@gu.edu', phone: '888-777-6666' },
        { name: 'Shruti Reddy', position: 'Petrochemical Engineer', email: 'shruti.reddy@gu.edu', phone: '888-777-5555' }
    ],
    
    nitd: [
        { name: 'Amit Jain', position: 'Chemical Research Scientist', email: 'amit.jain@nitd.edu', phone: '888-777-6666' },
        { name: 'Nidhi Agarwal', position: 'Process Control Engineer', email: 'nidhi.agarwal@nitd.edu', phone: '888-777-5555' }
    ],
    
    svnit: [
        { name: 'Rakesh Gupta', position: 'Process Simulation Engineer', email: 'rakesh.gupta@svnit.edu', phone: '888-777-6666' },
        { name: 'Shalini Mehta', position: 'Catalysis Engineer', email: 'shalini.mehta@svnit.edu', phone: '888-777-5555' }
    ],

    //ae

    iist: [
        { name: 'Ravi Sharma', position: 'Aerospace Engineer', email: 'ravi.sharma@iist.edu', phone: '888-777-6666' },
        { name: 'Sneha Kapoor', position: 'Flight Dynamics Engineer', email: 'sneha.kapoor@iist.edu', phone: '888-777-5555' }
    ],
    
    iitk: [
        { name: 'Vivek Singh', position: 'Aircraft Design Engineer', email: 'vivek.singh@iitk.edu', phone: '888-777-6666' },
        { name: 'Pooja Nair', position: 'Avionics Engineer', email: 'pooja.nair@iitk.edu', phone: '888-777-5555' }
    ],
    
    mit: [
        { name: 'Karan Patel', position: 'Propulsion Systems Engineer', email: 'karan.patel@mit.edu', phone: '888-777-6666' },
        { name: 'Neha Deshmukh', position: 'Aerodynamics Engineer', email: 'neha.deshmukh@mit.edu', phone: '888-777-5555' }
    ],
    
    iith: [
        { name: 'Rahul Gupta', position: 'Spacecraft Systems Engineer', email: 'rahul.gupta@iith.edu', phone: '888-777-6666' },
        { name: 'Meera Joshi', position: 'Aerospace Systems Analyst', email: 'meera.joshi@iith.edu', phone: '888-777-5555' }
    ],
    
    iiest: [
        { name: 'Anil Kapoor', position: 'Flight Test Engineer', email: 'anil.kapoor@iiest.edu', phone: '888-777-6666' },
        { name: 'Priyanka Rao', position: 'Aerospace Research Scientist', email: 'priyanka.rao@iiest.edu', phone: '888-777-5555' }
    ],
    
    cusat: [
        { name: 'Rohan Desai', position: 'Satellite Systems Engineer', email: 'rohan.desai@cusat.edu', phone: '888-777-6666' },
        { name: 'Ritika Patel', position: 'Space Mission Analyst', email: 'ritika.patel@cusat.edu', phone: '888-777-5555' }
    ],
    
    vssc: [
        { name: 'Vikram Kumar', position: 'Rocket Propulsion Engineer', email: 'vikram.kumar@vssc.edu', phone: '888-777-6666' },
        { name: 'Nidhi Mehta', position: 'Spacecraft Propulsion Engineer', email: 'nidhi.mehta@vssc.edu', phone: '888-777-5555' }
    ],
    
    hindustan: [
        { name: 'Sandeep Reddy', position: 'Aircraft Maintenance Engineer', email: 'sandeep.reddy@hindustan.edu', phone: '888-777-6666' },
        { name: 'Anjali Gupta', position: 'Aerospace Structural Engineer', email: 'anjali.gupta@hindustan.edu', phone: '888-777-5555' }
    ],
    
    vitv: [
        { name: 'Amit Jain', position: 'Aeronautical Engineer', email: 'amit.jain@vitv.edu', phone: '888-777-6666' },
        { name: 'Nidhi Agarwal', position: 'Spacecraft Dynamics Engineer', email: 'nidhi.agarwal@vitv.edu', phone: '888-777-5555' }
    ],
    
    rvce: [
        { name: 'Arjun Singh', position: 'Unmanned Aerial Vehicle (UAV) Engineer', email: 'arjun.singh@rvce.edu', phone: '888-777-6666' },
        { name: 'Shruti Verma', position: 'Flight Simulation Engineer', email: 'shruti.verma@rvce.edu', phone: '888-777-5555' }
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
