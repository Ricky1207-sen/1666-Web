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

    //me

    iitm: [
        { name: 'Rohit Kumar', position: 'Mechanical Engineer', email: 'rohit.kumar@iitm.ac.in', phone: '999-888-7771' },
        { name: 'Amit Gupta', position: 'Thermal Engineer', email: 'amit.gupta@iitm.ac.in', phone: '999-888-7772' }
    ],
    
    iitb: [
        { name: 'Kunal Deshmukh', position: 'Automotive Engineer', email: 'kunal.deshmukh@iitb.ac.in', phone: '999-888-7773' },
        { name: 'Shivani Patil', position: 'Mechanical Design Engineer', email: 'shivani.patil@iitb.ac.in', phone: '999-888-7774' }
    ],
    
    iitkh: [
        { name: 'Ravi Shankar', position: 'Manufacturing Engineer', email: 'ravi.shankar@iitkh.ac.in', phone: '999-888-7775' },
        { name: 'Priya Nair', position: 'Robotics Engineer', email: 'priya.nair@iitkh.ac.in', phone: '999-888-7776' }
    ],
    
    bitsp: [
        { name: 'Manoj Singh', position: 'Fluid Mechanics Engineer', email: 'manoj.singh@bitspilani.ac.in', phone: '999-888-7777' },
        { name: 'Anita Verma', position: 'Materials Engineer', email: 'anita.verma@bitspilani.ac.in', phone: '999-888-7778' }
    ],
    
    dtu: [
        { name: 'Sandeep Joshi', position: 'Aerospace Engineer', email: 'sandeep.joshi@dtu.ac.in', phone: '999-888-7779' },
        { name: 'Deepak Sharma', position: 'Mechanical Engineer', email: 'deepak.sharma@dtu.ac.in', phone: '999-888-7780' }
    ],
    
    nitt: [
        { name: 'Rajiv Kumar', position: 'HVAC Engineer', email: 'rajiv.kumar@nitt.ac.in', phone: '999-888-7781' },
        { name: 'Sonia Mehta', position: 'Automotive Engineer', email: 'sonia.mehta@nitt.ac.in', phone: '999-888-7782' }
    ],
    
    iitd: [
        { name: 'Rahul Malhotra', position: 'Mechanical Engineer', email: 'rahul.malhotra@iitd.ac.in', phone: '999-888-7783' },
        { name: 'Neelam Agarwal', position: 'Production Engineer', email: 'neelam.agarwal@iitd.ac.in', phone: '999-888-7784' }
    ],
    
    iitbhu: [
        { name: 'Arjun Kapoor', position: 'Automotive Engineer', email: 'arjun.kapoor@iitbhu.ac.in', phone: '999-888-7785' },
        { name: 'Sneha Pandey', position: 'Thermodynamics Engineer', email: 'sneha.pandey@iitbhu.ac.in', phone: '999-888-7786' }
    ],
    
    
//ee

pec: [
    { name: 'Manish Patel', position: 'Power Electronics Engineer', email: 'manish.patel@pec.ac.in', phone: '999-888-7771' },
    { name: 'Sakshi Mehra', position: 'Electrical Engineer', email: 'sakshi.mehra@pec.ac.in', phone: '999-888-7772' }
],

vnitn: [
    { name: 'Akhil Verma', position: 'Energy Systems Engineer', email: 'akhil.verma@vnitn.ac.in', phone: '999-888-7773' },
    { name: 'Pallavi Desai', position: 'Electrical Engineer', email: 'pallavi.desai@vnitn.ac.in', phone: '999-888-7774' }
],

thapar: [
    { name: 'Vikrant Mishra', position: 'Power Systems Engineer', email: 'vikrant.mishra@thapar.edu', phone: '999-888-7775' },
    { name: 'Nidhi Chawla', position: 'Electrical Design Engineer', email: 'nidhi.chawla@thapar.edu', phone: '999-888-7776' }
],

bitsgoa: [
    { name: 'Rohit Saxena', position: 'Automation Engineer', email: 'rohit.saxena@bitsgoa.ac.in', phone: '999-888-7777' },
    { name: 'Sanya Nair', position: 'Power Systems Engineer', email: 'sanya.nair@bitsgoa.ac.in', phone: '999-888-7778' }
],

iitindore: [
    { name: 'Aditya Joshi', position: 'Electrical Engineer', email: 'aditya.joshi@iitindore.ac.in', phone: '999-888-7779' },
    { name: 'Ishita Mehta', position: 'Energy Systems Engineer', email: 'ishita.mehta@iitindore.ac.in', phone: '999-888-7780' }
],

nitcalicut: [
    { name: 'Abhishek Rao', position: 'Power Systems Engineer', email: 'abhishek.rao@nitcalicut.ac.in', phone: '999-888-7781' },
    { name: 'Anjali Kumar', position: 'Electrical Engineer', email: 'anjali.kumar@nitcalicut.ac.in', phone: '999-888-7782' }
],

dtu: [
    { name: 'Tushar Singh', position: 'Control Systems Engineer', email: 'tushar.singh@dtu.ac.in', phone: '999-888-7783' },
    { name: 'Divya Agarwal', position: 'Electrical Engineer', email: 'divya.agarwal@dtu.ac.in', phone: '999-888-7784' }
],

svnit: [
    { name: 'Harish Iyer', position: 'Power Systems Engineer', email: 'harish.iyer@svnit.ac.in', phone: '999-888-7785' },
    { name: 'Aditi Shah', position: 'Electrical Design Engineer', email: 'aditi.shah@svnit.ac.in', phone: '999-888-7786' }
],

coep: [
    { name: 'Arjun Reddy', position: 'Energy Systems Engineer', email: 'arjun.reddy@coep.ac.in', phone: '999-888-7787' },
    { name: 'Monika Singh', position: 'Electrical Engineer', email: 'monika.singh@coep.ac.in', phone: '999-888-7788' }
],

    
//ce

ictm: [
    { name: 'Rohit Bansal', position: 'Structural Engineer', email: 'rohit.bansal@ictm.edu', phone: '999-888-7771' },
    { name: 'Aishwarya Gupta', position: 'Geotechnical Engineer', email: 'aishwarya.gupta@ictm.edu', phone: '999-888-7772' }
],

iipe: [
    { name: 'Sameer Jain', position: 'Construction Engineer', email: 'sameer.jain@iipe.edu', phone: '999-888-7773' },
    { name: 'Priya Iyer', position: 'Environmental Engineer', email: 'priya.iyer@iipe.edu', phone: '999-888-7774' }
],

iitg: [
    { name: 'Vikram Reddy', position: 'Transportation Engineer', email: 'vikram.reddy@iitg.ac.in', phone: '999-888-7775' },
    { name: 'Neelam Singh', position: 'Structural Engineer', email: 'neelam.singh@iitg.ac.in', phone: '999-888-7776' }
],

vnit: [
    { name: 'Ravi Kapoor', position: 'Water Resources Engineer', email: 'ravi.kapoor@vnit.edu', phone: '999-888-7777' },
    { name: 'Ritika Desai', position: 'Civil Engineer', email: 'ritika.desai@vnit.edu', phone: '999-888-7778' }
],

manipal: [
    { name: 'Naveen Kumar', position: 'Coastal Engineer', email: 'naveen.kumar@manipal.edu', phone: '999-888-7779' },
    { name: 'Sneha Agarwal', position: 'Construction Manager', email: 'sneha.agarwal@manipal.edu', phone: '999-888-7780' }
],

sastra: [
    { name: 'Aman Sethi', position: 'Surveying Engineer', email: 'aman.sethi@sastra.edu', phone: '999-888-7781' },
    { name: 'Megha Nair', position: 'Structural Engineer', email: 'megha.nair@sastra.edu', phone: '999-888-7782' }
],

andhra: [
    { name: 'Karthik Rao', position: 'Highway Engineer', email: 'karthik.rao@andhrauniv.edu', phone: '999-888-7783' },
    { name: 'Pooja Kulkarni', position: 'Geotechnical Engineer', email: 'pooja.kulkarni@andhrauniv.edu', phone: '999-888-7784' }
],

jadhavpur: [
    { name: 'Aditya Verma', position: 'Construction Manager', email: 'aditya.verma@jadhavpur.edu', phone: '999-888-7785' },
    { name: 'Nikita Shah', position: 'Urban Planner', email: 'nikita.shah@jadhavpur.edu', phone: '999-888-7786' }
],

osmania: [
    { name: 'Ajay Singh', position: 'Structural Engineer', email: 'ajay.singh@osmania.edu', phone: '999-888-7787' },
    { name: 'Swati Joshi', position: 'Environmental Engineer', email: 'swati.joshi@osmania.edu', phone: '999-888-7788' }
],

anna: [
    { name: 'Ramesh Patel', position: 'Transportation Engineer', email: 'ramesh.patel@annauniv.edu', phone: '999-888-7789' },
    { name: 'Deepa Nair', position: 'Water Resources Engineer', email: 'deepa.nair@annauniv.edu', phone: '999-888-7790' }
],

    //cse


iiith: [
    { name: 'Akash Patel', position: 'Software Engineer', email: 'akash.patel@iiith.edu', phone: '888-777-6661' },
    { name: 'Maya Rao', position: 'Data Analyst', email: 'maya.rao@iiith.edu', phone: '888-777-5551' }
],

vit: [
    { name: 'Suresh Kumar', position: 'AI Researcher', email: 'suresh.kumar@vit.edu', phone: '888-777-6662' },
    { name: 'Ritika Sharma', position: 'Full Stack Developer', email: 'ritika.sharma@vit.edu', phone: '888-777-5552' }
],

iiitb: [
    { name: 'Karan Verma', position: 'Machine Learning Engineer', email: 'karan.verma@iiitb.ac.in', phone: '888-777-6663' },
    { name: 'Anjali Menon', position: 'Cloud Architect', email: 'anjali.menon@iiitb.ac.in', phone: '888-777-5553' }
],

nitk: [
    { name: 'Rahul Nair', position: 'Cybersecurity Specialist', email: 'rahul.nair@nitk.edu', phone: '888-777-6664' },
    { name: 'Shreya Gupta', position: 'Blockchain Developer', email: 'shreya.gupta@nitk.edu', phone: '888-777-5554' }
],

mit: [
    { name: 'Pranav Iyer', position: 'Systems Engineer', email: 'pranav.iyer@mit.edu', phone: '888-777-6665' },
    { name: 'Neha Reddy', position: 'Software Developer', email: 'neha.reddy@mit.edu', phone: '888-777-5555' }
],

psg: [
    { name: 'Aditya Sinha', position: 'Database Administrator', email: 'aditya.sinha@psgtech.ac.in', phone: '888-777-6666' },
    { name: 'Pooja Nair', position: 'DevOps Engineer', email: 'pooja.nair@psgtech.ac.in', phone: '888-777-5556' }
],

bits: [
    { name: 'Manoj Desai', position: 'Web Developer', email: 'manoj.desai@bits-goa.ac.in', phone: '888-777-6667' },
    { name: 'Nikita Shah', position: 'Network Engineer', email: 'nikita.shah@bits-goa.ac.in', phone: '888-777-5557' }
],

iisc: [
    { name: 'Rohit Sharma', position: 'AI Researcher', email: 'rohit.sharma@iisc.edu', phone: '888-777-6668' },
    { name: 'Divya Kapoor', position: 'Computer Vision Engineer', email: 'divya.kapoor@iisc.edu', phone: '888-777-5558' }
],

vnitnagpur: [
    { name: 'Amit Jain', position: 'Embedded Systems Engineer', email: 'amit.jain@vnitnagpur.ac.in', phone: '888-777-6669' },
    { name: 'Nidhi Singh', position: 'Big Data Engineer', email: 'nidhi.singh@vnitnagpur.ac.in', phone: '888-777-5559' }
],

nsit: [
    { name: 'Rakesh Gupta', position: 'Software Architect', email: 'rakesh.gupta@nsit.ac.in', phone: '888-777-6670' },
    { name: 'Shalini Mehta', position: 'IT Consultant', email: 'shalini.mehta@nsit.ac.in', phone: '888-777-5560' }
],


    //che
   
   
    ictm: [
        { name: 'Vikas Sharma', position: 'Chemical Process Engineer', email: 'vikas.sharma@ictm.edu', phone: '888-777-1111' },
        { name: 'Anjali Desai', position: 'Chemical Safety Engineer', email: 'anjali.desai@ictm.edu', phone: '888-777-2222' }
    ],
    
    iipe: [
        { name: 'Manoj Singh', position: 'Petroleum Process Engineer', email: 'manoj.singh@iipe.edu', phone: '888-777-3333' },
        { name: 'Neha Gupta', position: 'Polymer Process Engineer', email: 'neha.gupta@iipe.edu', phone: '888-777-4444' }
    ],
    
    nitw: [
        { name: 'Rohit Verma', position: 'Chemical Plant Design Engineer', email: 'rohit.verma@nitw.edu', phone: '888-777-5555' },
        { name: 'Sneha Nair', position: 'Environmental Chemical Engineer', email: 'sneha.nair@nitw.edu', phone: '888-777-6666' }
    ],
    
    iitm: [
        { name: 'Karthik Rao', position: 'Process Optimization Engineer', email: 'karthik.rao@iitm.edu', phone: '888-777-7777' },
        { name: 'Meera Shah', position: 'Chemical Process Safety Engineer', email: 'meera.shah@iitm.edu', phone: '888-777-8888' }
    ],
    
    iitr: [
        { name: 'Ajay Kapoor', position: 'Polymer Materials Engineer', email: 'ajay.kapoor@iitr.edu', phone: '888-777-9999' },
        { name: 'Pooja Sinha', position: 'Chemical Energy Engineer', email: 'pooja.sinha@iitr.edu', phone: '888-777-1010' }
    ],
    
    bitsgoa: [
        { name: 'Sandeep Rao', position: 'Corrosion Engineer', email: 'sandeep.rao@bitsgoa.edu', phone: '888-777-1112' },
        { name: 'Aditi Verma', position: 'Petroleum Engineer', email: 'aditi.verma@bitsgoa.edu', phone: '888-777-1212' }
    ],
    
    nitti: [
        { name: 'Ravi Iyer', position: 'Pharmaceutical Process Engineer', email: 'ravi.iyer@nitti.edu', phone: '888-777-1313' },
        { name: 'Shruti Kapoor', position: 'Chemical Development Engineer', email: 'shruti.kapoor@nitti.edu', phone: '888-777-1414' }
    ],
    
    gu: [
        { name: 'Aman Patel', position: 'Water Treatment Engineer', email: 'aman.patel@gu.edu', phone: '888-777-1515' },
        { name: 'Pallavi Menon', position: 'Petrochemical Engineer', email: 'pallavi.menon@gu.edu', phone: '888-777-1616' }
    ],
    
    nitd: [
        { name: 'Vivek Mehta', position: 'Chemical Research Scientist', email: 'vivek.mehta@nitd.edu', phone: '888-777-1717' },
        { name: 'Anita Deshmukh', position: 'Process Control Engineer', email: 'anita.deshmukh@nitd.edu', phone: '888-777-1818' }
    ],
    
    svnit: [
        { name: 'Rakesh Reddy', position: 'Process Simulation Engineer', email: 'rakesh.reddy@svnit.edu', phone: '888-777-1919' },
        { name: 'Deepa Joshi', position: 'Catalysis Engineer', email: 'deepa.joshi@svnit.edu', phone: '888-777-2020' }
    ],
    

    //ae

    iist: [
        { name: 'Rohan Sharma', position: 'Aerospace Systems Engineer', email: 'rohan.sharma@iist.edu', phone: '888-777-1111' },
        { name: 'Nikita Kapoor', position: 'Flight Control Engineer', email: 'nikita.kapoor@iist.edu', phone: '888-777-2222' }
    ],
    
    iitk: [
        { name: 'Aditya Mehta', position: 'Aircraft Design Engineer', email: 'aditya.mehta@iitk.edu', phone: '888-777-3333' },
        { name: 'Sakshi Nair', position: 'Avionics Systems Engineer', email: 'sakshi.nair@iitk.edu', phone: '888-777-4444' }
    ],
    
    mit: [
        { name: 'Vikas Patel', position: 'Rocket Propulsion Engineer', email: 'vikas.patel@mit.edu', phone: '888-777-5555' },
        { name: 'Shreya Deshmukh', position: 'Aerodynamics Engineer', email: 'shreya.deshmukh@mit.edu', phone: '888-777-6666' }
    ],
    
    iith: [
        { name: 'Manish Gupta', position: 'Spacecraft Design Engineer', email: 'manish.gupta@iith.edu', phone: '888-777-7777' },
        { name: 'Pooja Joshi', position: 'Aerospace Systems Analyst', email: 'pooja.joshi@iith.edu', phone: '888-777-8888' }
    ],
    
    iiest: [
        { name: 'Nitin Kapoor', position: 'Flight Dynamics Engineer', email: 'nitin.kapoor@iiest.edu', phone: '888-777-9999' },
        { name: 'Swati Rao', position: 'Aerospace Research Scientist', email: 'swati.rao@iiest.edu', phone: '888-777-1010' }
    ],
    
    cusat: [
        { name: 'Arun Desai', position: 'Satellite Design Engineer', email: 'arun.desai@cusat.edu', phone: '888-777-1112' },
        { name: 'Radhika Patel', position: 'Space Mission Planner', email: 'radhika.patel@cusat.edu', phone: '888-777-1212' }
    ],
    
    vssc: [
        { name: 'Ajay Kumar', position: 'Rocket Propulsion Engineer', email: 'ajay.kumar@vssc.edu', phone: '888-777-1313' },
        { name: 'Priya Mehta', position: 'Spacecraft Propulsion Engineer', email: 'priya.mehta@vssc.edu', phone: '888-777-1414' }
    ],
    
    hindustan: [
        { name: 'Aakash Reddy', position: 'Aircraft Maintenance Engineer', email: 'aakash.reddy@hindustan.edu', phone: '888-777-1515' },
        { name: 'Tanvi Gupta', position: 'Aerospace Structural Engineer', email: 'tanvi.gupta@hindustan.edu', phone: '888-777-1616' }
    ],
    
    vitv: [
        { name: 'Ravi Jain', position: 'Aerodynamics Engineer', email: 'ravi.jain@vitv.edu', phone: '888-777-1717' },
        { name: 'Ankita Agarwal', position: 'Spacecraft Dynamics Engineer', email: 'ankita.agarwal@vitv.edu', phone: '888-777-1818' }
    ],
    
    rvce: [
        { name: 'Kunal Singh', position: 'UAV Engineer', email: 'kunal.singh@rvce.edu', phone: '888-777-1919' },
        { name: 'Maya Verma', position: 'Flight Simulation Engineer', email: 'maya.verma@rvce.edu', phone: '888-777-2020' }
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
