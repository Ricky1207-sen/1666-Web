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

    'iitm': [
    { name: 'Rohit Sharma', position: 'Mechanical Engineering Student', email: 'rohit.sharma@iitm.ac.in', phone: '999-888-7771' },
    { name: 'Amit Patel', position: 'Thermal Engineering Student', email: 'amit.patel@iitm.ac.in', phone: '999-888-7772' }
],

'iitb': [
    { name: 'Kunal Rao', position: 'Automotive Engineering Student', email: 'kunal.rao@iitb.ac.in', phone: '999-888-7773' },
    { name: 'Shivani Sharma', position: 'Mechanical Design Engineering Student', email: 'shivani.sharma@iitb.ac.in', phone: '999-888-7774' }
],

'iitkh': [
    { name: 'Ravi Verma', position: 'Manufacturing Engineering Student', email: 'ravi.verma@iitkh.ac.in', phone: '999-888-7775' },
    { name: 'Priya Singh', position: 'Robotics Engineering Student', email: 'priya.singh@iitkh.ac.in', phone: '999-888-7776' }
],

'bitsp': [
    { name: 'Manoj Kumar', position: 'Fluid Mechanics Engineering Student', email: 'manoj.kumar@bitspilani.ac.in', phone: '999-888-7777' },
    { name: 'Anita Joshi', position: 'Materials Engineering Student', email: 'anita.joshi@bitspilani.ac.in', phone: '999-888-7778' }
],

'dtu': [
    { name: 'Sandeep Sharma', position: 'Aerospace Engineering Student', email: 'sandeep.sharma@dtu.ac.in', phone: '999-888-7779' },
    { name: 'Deepak Kumar', position: 'Mechanical Engineering Student', email: 'deepak.kumar@dtu.ac.in', phone: '999-888-7780' }
],

'nitt': [
    { name: 'Rajiv Agarwal', position: 'HVAC Engineering Student', email: 'rajiv.agarwal@nitt.ac.in', phone: '999-888-7781' },
    { name: 'Sonia Kumar', position: 'Automotive Engineering Student', email: 'sonia.kumar@nitt.ac.in', phone: '999-888-7782' }
],

'iitd': [
    { name: 'Rahul Singh', position: 'Mechanical Engineering Student', email: 'rahul.singh@iitd.ac.in', phone: '999-888-7783' },
    { name: 'Neelam Sharma', position: 'Production Engineering Student', email: 'neelam.sharma@iitd.ac.in', phone: '999-888-7784' }
],

'iitbhu': [
    { name: 'Arjun Verma', position: 'Automotive Engineering Student', email: 'arjun.verma@iitbhu.ac.in', phone: '999-888-7785' },
    { name: 'Sneha Gupta', position: 'Thermodynamics Engineering Student', email: 'sneha.gupta@iitbhu.ac.in', phone: '999-888-7786' }
],

    
    
//ee

'pec': [
    { name: 'Manish Kumar', position: 'Power Electronics Engineering Student', email: 'manish.kumar@pec.ac.in', phone: '999-888-7771' },
    { name: 'Sakshi Verma', position: 'Electrical Engineering Student', email: 'sakshi.verma@pec.ac.in', phone: '999-888-7772' }
],

'vnitn': [
    { name: 'Akhil Mehta', position: 'Energy Systems Engineering Student', email: 'akhil.mehta@vnitn.ac.in', phone: '999-888-7773' },
    { name: 'Pallavi Singh', position: 'Electrical Engineering Student', email: 'pallavi.singh@vnitn.ac.in', phone: '999-888-7774' }
],

'thapar': [
    { name: 'Vikrant Sharma', position: 'Power Systems Engineering Student', email: 'vikrant.sharma@thapar.edu', phone: '999-888-7775' },
    { name: 'Nidhi Agarwal', position: 'Electrical Design Engineering Student', email: 'nidhi.agarwal@thapar.edu', phone: '999-888-7776' }
],

'bitsgoa': [
    { name: 'Rohit Mehta', position: 'Automation Engineering Student', email: 'rohit.mehta@bitsgoa.ac.in', phone: '999-888-7777' },
    { name: 'Sanya Sharma', position: 'Power Systems Engineering Student', email: 'sanya.sharma@bitsgoa.ac.in', phone: '999-888-7778' }
],

'iitindore': [
    { name: 'Aditya Kumar', position: 'Electrical Engineering Student', email: 'aditya.kumar@iitindore.ac.in', phone: '999-888-7779' },
    { name: 'Ishita Singh', position: 'Energy Systems Engineering Student', email: 'ishita.singh@iitindore.ac.in', phone: '999-888-7780' }
],

'nitcalicut': [
    { name: 'Abhishek Mehta', position: 'Power Systems Engineering Student', email: 'abhishek.mehta@nitcalicut.ac.in', phone: '999-888-7781' },
    { name: 'Anjali Sharma', position: 'Electrical Engineering Student', email: 'anjali.sharma@nitcalicut.ac.in', phone: '999-888-7782' }
],

'dtu': [
    { name: 'Tushar Patel', position: 'Control Systems Engineering Student', email: 'tushar.patel@dtu.ac.in', phone: '999-888-7783' },
    { name: 'Divya Singh', position: 'Electrical Engineering Student', email: 'divya.singh@dtu.ac.in', phone: '999-888-7784' }
],

'svnit': [
    { name: 'Harish Sharma', position: 'Power Systems Engineering Student', email: 'harish.sharma@svnit.ac.in', phone: '999-888-7785' },
    { name: 'Aditi Patel', position: 'Electrical Design Engineering Student', email: 'aditi.patel@svnit.ac.in', phone: '999-888-7786' }
],

'coep': [
    { name: 'Arjun Kumar', position: 'Energy Systems Engineering Student', email: 'arjun.kumar@coep.ac.in', phone: '999-888-7787' },
    { name: 'Monika Sharma', position: 'Electrical Engineering Student', email: 'monika.sharma@coep.ac.in', phone: '999-888-7788' }
],


    
//ce

'ictm': [
    { name: 'Rohit Sharma', position: 'Civil Engineering Student', email: 'rohit.sharma@ictm.edu', phone: '999-888-7771' },
    { name: 'Aishwarya Verma', position: 'Geotechnical Engineering Student', email: 'aishwarya.verma@ictm.edu', phone: '999-888-7772' }
],

'iipe': [
    { name: 'Sameer Gupta', position: 'Construction Engineering Student', email: 'sameer.gupta@iipe.edu', phone: '999-888-7773' },
    { name: 'Priya Patel', position: 'Environmental Engineering Student', email: 'priya.patel@iipe.edu', phone: '999-888-7774' }
],

'iitg': [
    { name: 'Vikram Singh', position: 'Transportation Engineering Student', email: 'vikram.singh@iitg.ac.in', phone: '999-888-7775' },
    { name: 'Neelam Reddy', position: 'Structural Engineering Student', email: 'neelam.reddy@iitg.ac.in', phone: '999-888-7776' }
],

'vnit': [
    { name: 'Ravi Sharma', position: 'Water Resources Engineering Student', email: 'ravi.sharma@vnit.edu', phone: '999-888-7777' },
    { name: 'Ritika Patel', position: 'Civil Engineering Student', email: 'ritika.patel@vnit.edu', phone: '999-888-7778' }
],

'manipal': [
    { name: 'Naveen Desai', position: 'Coastal Engineering Student', email: 'naveen.desai@manipal.edu', phone: '999-888-7779' },
    { name: 'Sneha Agarwal', position: 'Construction Management Student', email: 'sneha.agarwal@manipal.edu', phone: '999-888-7780' }
],

'sastra': [
    { name: 'Aman Singh', position: 'Surveying Engineering Student', email: 'aman.singh@sastra.edu', phone: '999-888-7781' },
    { name: 'Megha Sharma', position: 'Structural Engineering Student', email: 'megha.sharma@sastra.edu', phone: '999-888-7782' }
],

'andhra': [
    { name: 'Karthik Patel', position: 'Highway Engineering Student', email: 'karthik.patel@andhrauniv.edu', phone: '999-888-7783' },
    { name: 'Pooja Verma', position: 'Geotechnical Engineering Student', email: 'pooja.verma@andhrauniv.edu', phone: '999-888-7784' }
],

'jadhavpur': [
    { name: 'Aditya Sharma', position: 'Construction Management Student', email: 'aditya.sharma@jadhavpur.edu', phone: '999-888-7785' },
    { name: 'Nikita Patel', position: 'Urban Planning Student', email: 'nikita.patel@jadhavpur.edu', phone: '999-888-7786' }
],

'osmania': [
    { name: 'Ajay Reddy', position: 'Structural Engineering Student', email: 'ajay.reddy@osmania.edu', phone: '999-888-7787' },
    { name: 'Swati Mehta', position: 'Environmental Engineering Student', email: 'swati.mehta@osmania.edu', phone: '999-888-7788' }
],

'anna': [
    { name: 'Ramesh Kumar', position: 'Transportation Engineering Student', email: 'ramesh.kumar@annauniv.edu', phone: '999-888-7789' },
    { name: 'Deepa Sharma', position: 'Water Resources Engineering Student', email: 'deepa.sharma@annauniv.edu', phone: '999-888-7790' }
],

    //cse


'iiith': [
    { name: 'Akash Sharma', position: 'Computer Science Student', email: 'akash.sharma@iiith.edu', phone: '888-777-6661' },
    { name: 'Maya Patel', position: 'Data Science Student', email: 'maya.patel@iiith.edu', phone: '888-777-5551' }
],

'vit': [
    { name: 'Suresh Desai', position: 'AI Engineering Student', email: 'suresh.desai@vit.edu', phone: '888-777-6662' },
    { name: 'Ritika Kumar', position: 'Full Stack Development Student', email: 'ritika.kumar@vit.edu', phone: '888-777-5552' }
],

'iiitb': [
    { name: 'Karan Patel', position: 'Machine Learning Student', email: 'karan.patel@iiitb.ac.in', phone: '888-777-6663' },
    { name: 'Anjali Gupta', position: 'Cloud Computing Student', email: 'anjali.gupta@iiitb.ac.in', phone: '888-777-5553' }
],

'nitk': [
    { name: 'Rahul Kumar', position: 'Cybersecurity Student', email: 'rahul.kumar@nitk.edu', phone: '888-777-6664' },
    { name: 'Shreya Nair', position: 'Blockchain Technology Student', email: 'shreya.nair@nitk.edu', phone: '888-777-5554' }
],

'mit': [
    { name: 'Pranav Sharma', position: 'Systems Engineering Student', email: 'pranav.sharma@mit.edu', phone: '888-777-6665' },
    { name: 'Neha Patel', position: 'Software Development Student', email: 'neha.patel@mit.edu', phone: '888-777-5555' }
],

'psg': [
    { name: 'Aditya Patel', position: 'Database Management Student', email: 'aditya.patel@psgtech.ac.in', phone: '888-777-6666' },
    { name: 'Pooja Sharma', position: 'DevOps Student', email: 'pooja.sharma@psgtech.ac.in', phone: '888-777-5556' }
],

'bits': [
    { name: 'Manoj Kumar', position: 'Web Development Student', email: 'manoj.kumar@bits-goa.ac.in', phone: '888-777-6667' },
    { name: 'Nikita Patel', position: 'Network Engineering Student', email: 'nikita.patel@bits-goa.ac.in', phone: '888-777-5557' }
],

'iisc': [
    { name: 'Rohit Verma', position: 'AI Engineering Student', email: 'rohit.verma@iisc.edu', phone: '888-777-6668' },
    { name: 'Divya Sharma', position: 'Computer Vision Student', email: 'divya.sharma@iisc.edu', phone: '888-777-5558' }
],

'vnitnagpur': [
    { name: 'Amit Patel', position: 'Embedded Systems Student', email: 'amit.patel@vnitnagpur.ac.in', phone: '888-777-6669' },
    { name: 'Nidhi Gupta', position: 'Big Data Student', email: 'nidhi.gupta@vnitnagpur.ac.in', phone: '888-777-5559' }
],

'nsit': [
    { name: 'Rakesh Sharma', position: 'Software Architecture Student', email: 'rakesh.sharma@nsit.ac.in', phone: '888-777-6670' },
    { name: 'Shalini Patel', position: 'IT Consulting Student', email: 'shalini.patel@nsit.ac.in', phone: '888-777-5560' }
],



    //che
   
   
   'ictm': [
    { name: 'Vikas Patel', position: 'Chemical Engineering Student', email: 'vikas.patel@ictm.edu', phone: '888-777-1111' },
    { name: 'Anjali Sharma', position: 'Chemical Safety Student', email: 'anjali.sharma@ictm.edu', phone: '888-777-2222' }
],

'iipe': [
    { name: 'Manoj Desai', position: 'Petroleum Engineering Student', email: 'manoj.desai@iipe.edu', phone: '888-777-3333' },
    { name: 'Neha Singh', position: 'Polymer Engineering Student', email: 'neha.singh@iipe.edu', phone: '888-777-4444' }
],

'nitw': [
    { name: 'Rohit Kumar', position: 'Chemical Plant Design Student', email: 'rohit.kumar@nitw.edu', phone: '888-777-5555' },
    { name: 'Sneha Patel', position: 'Environmental Chemical Engineering Student', email: 'sneha.patel@nitw.edu', phone: '888-777-6666' }
],

'iitm': [
    { name: 'Karthik Sharma', position: 'Process Optimization Student', email: 'karthik.sharma@iitm.edu', phone: '888-777-7777' },
    { name: 'Meera Desai', position: 'Chemical Process Safety Student', email: 'meera.desai@iitm.edu', phone: '888-777-8888' }
],

'iitr': [
    { name: 'Ajay Singh', position: 'Polymer Materials Student', email: 'ajay.singh@iitr.edu', phone: '888-777-9999' },
    { name: 'Pooja Patel', position: 'Chemical Energy Student', email: 'pooja.patel@iitr.edu', phone: '888-777-1010' }
],

'bitsgoa': [
    { name: 'Sandeep Gupta', position: 'Corrosion Engineering Student', email: 'sandeep.gupta@bitsgoa.edu', phone: '888-777-1112' },
    { name: 'Aditi Sharma', position: 'Petroleum Engineering Student', email: 'aditi.sharma@bitsgoa.edu', phone: '888-777-1212' }
],

'nitti': [
    { name: 'Ravi Patel', position: 'Pharmaceutical Process Engineering Student', email: 'ravi.patel@nitti.edu', phone: '888-777-1313' },
    { name: 'Shruti Desai', position: 'Chemical Development Student', email: 'shruti.desai@nitti.edu', phone: '888-777-1414' }
],

'gu': [
    { name: 'Aman Sharma', position: 'Water Treatment Student', email: 'aman.sharma@gu.edu', phone: '888-777-1515' },
    { name: 'Pallavi Gupta', position: 'Petrochemical Engineering Student', email: 'pallavi.gupta@gu.edu', phone: '888-777-1616' }
],

'nitd': [
    { name: 'Vivek Patel', position: 'Chemical Research Student', email: 'vivek.patel@nitd.edu', phone: '888-777-1717' },
    { name: 'Anita Singh', position: 'Process Control Student', email: 'anita.singh@nitd.edu', phone: '888-777-1818' }
],

'svnit': [
    { name: 'Rakesh Gupta', position: 'Process Simulation Student', email: 'rakesh.gupta@svnit.edu', phone: '888-777-1919' },
    { name: 'Deepa Sharma', position: 'Catalysis Engineering Student', email: 'deepa.sharma@svnit.edu', phone: '888-777-2020' }
],

    

    //ae

    'iist': [
    { name: 'Rohan Patel', position: 'Chemical Engineering Student', email: 'rohan.patel@iist.edu', phone: '888-777-1111' },
    { name: 'Nikita Sharma', position: 'Process Engineering Student', email: 'nikita.sharma@iist.edu', phone: '888-777-2222' }
],

'iitk': [
    { name: 'Aditya Gupta', position: 'Chemical Process Student', email: 'aditya.gupta@iitk.edu', phone: '888-777-3333' },
    { name: 'Sakshi Deshmukh', position: 'Polymer Engineering Student', email: 'sakshi.deshmukh@iitk.edu', phone: '888-777-4444' }
],

'mit': [
    { name: 'Vikas Rao', position: 'Chemical Engineering Student', email: 'vikas.rao@mit.edu', phone: '888-777-5555' },
    { name: 'Shreya Patel', position: 'Environmental Chemical Engineering Student', email: 'shreya.patel@mit.edu', phone: '888-777-6666' }
],

'iith': [
    { name: 'Manish Sharma', position: 'Chemical Process Student', email: 'manish.sharma@iith.edu', phone: '888-777-7777' },
    { name: 'Pooja Gupta', position: 'Process Safety Student', email: 'pooja.gupta@iith.edu', phone: '888-777-8888' }
],

'iiest': [
    { name: 'Nitin Sharma', position: 'Chemical Reaction Engineering Student', email: 'nitin.sharma@iiest.edu', phone: '888-777-9999' },
    { name: 'Swati Patel', position: 'Process Optimization Student', email: 'swati.patel@iiest.edu', phone: '888-777-1010' }
],

'cusat': [
    { name: 'Arun Gupta', position: 'Chemical Process Design Student', email: 'arun.gupta@cusat.edu', phone: '888-777-1112' },
    { name: 'Radhika Deshmukh', position: 'Chemical Engineering Research Student', email: 'radhika.deshmukh@cusat.edu', phone: '888-777-1212' }
],

'vssc': [
    { name: 'Ajay Patel', position: 'Chemical Engineering Student', email: 'ajay.patel@vssc.edu', phone: '888-777-1313' },
    { name: 'Priya Sharma', position: 'Chemical Safety Student', email: 'priya.sharma@vssc.edu', phone: '888-777-1414' }
],

'hindustan': [
    { name: 'Aakash Gupta', position: 'Chemical Engineering Student', email: 'aakash.gupta@hindustan.edu', phone: '888-777-1515' },
    { name: 'Tanvi Deshmukh', position: 'Polymer Engineering Student', email: 'tanvi.deshmukh@hindustan.edu', phone: '888-777-1616' }
],

'vitv': [
    { name: 'Ravi Patel', position: 'Chemical Engineering Student', email: 'ravi.patel@vitv.edu', phone: '888-777-1717' },
    { name: 'Ankita Sharma', position: 'Process Engineering Student', email: 'ankita.sharma@vitv.edu', phone: '888-777-1818' }
],

'rvce': [
    { name: 'Kunal Deshmukh', position: 'Chemical Engineering Student', email: 'kunal.deshmukh@rvce.edu', phone: '888-777-1919' },
    { name: 'Maya Gupta', position: 'Chemical Process Optimization Student', email: 'maya.gupta@rvce.edu', phone: '888-777-2020' }
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
