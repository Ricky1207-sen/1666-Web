// College list for each field
const collegeData = {
    'c': [
    { value: 'nujs', name: 'National University of Juridical Sciences, Kolkata' },
    { value: 'nlu', name: 'National Law University, Delhi' },
    { value: 'nalsar', name: 'NALSAR University of Law, Hyderabad' },
    { value: 'nlud', name: 'National Law University, Delhi' },
    { value: 'amity', name: 'Amity Law School, Noida' }
],

'ci': [
    { value: 'glc', name: 'Government Law College, Mumbai' },
    { value: 'ils', name: 'ILS Law College, Pune' },
    { value: 'symbiosis', name: 'Symbiosis Law School, Pune' },
    { value: 'jgls', name: 'Jindal Global Law School, Sonipat' },
    { value: 'rlc', name: 'Rajiv Gandhi National University of Law, Patiala' }
],

'co': [
    { value: 'nlus', name: 'National Law University, Delhi' },
    { value: 'nuls', name: 'National University of Law, Chandigarh' },
    { value: 'icfai', name: 'ICFAI Law School, Hyderabad' },
    { value: 'rgnul', name: 'Rajiv Gandhi National University of Law, Patiala' },
    { value: 'upes', name: 'UPES School of Law, Dehradun' }
],

'con': [
    { value: 'nlu', name: 'National Law University, Delhi' },
    { value: 'nujs', name: 'National University of Juridical Sciences, Kolkata' },
    { value: 'nalsar', name: 'NALSAR University of Law, Hyderabad' },
    { value: 'jgu', name: 'Jindal Global Law School, Sonipat' },
    { value: 'rgnul', name: 'Rajiv Gandhi National University of Law, Patiala' }
],

'i': [
    { value: 'ilsl', name: 'Indian Law School, Mumbai' },
    { value: 'clu', name: 'Central Law University, Bengaluru' },
    { value: 'mls', name: 'Modern Law School, Delhi' },
    { value: 'slc', name: 'Supreme Law College, Chennai' },
    { value: 'plc', name: 'Pioneer Law College, Kolkata' }
],

'e': [
    { value: 'envlc', name: 'Environmental Law College, Pune' },
    { value: 'elc', name: 'Eco Law College, Delhi' },
    { value: 'selc', name: 'Sustainable Environment Law College, Bengaluru' },
    { value: 'ilc', name: 'Indian Environmental Law College, Chennai' },
    { value: 'eccl', name: 'Environmental Conservation College, Kolkata' }
]













    
    
    
    
    
    
    
    
    
    
    


   
    


    


    



    
    // Other fields like engineering, biotechnology, etc. remain unchanged...
};

// Alumni data
const alumniData = {
    //c


'nujs': [
    { name: 'Rahul Sharma', position: 'Criminal Law Student', email: 'rahul.sharma@nujs.edu', phone: '888-777-6666' },
    { name: 'Anjali Kapoor', position: 'Criminal Justice Student', email: 'anjali.kapoor@nujs.edu', phone: '888-777-5555' }
],

'nlu': [
    { name: 'Arun Patel', position: 'Criminal Law Student', email: 'arun.patel@nlu.edu', phone: '888-777-4444' },
    { name: 'Rita Gupta', position: 'Forensic Law Student', email: 'rita.gupta@nlu.edu', phone: '888-777-3333' }
],

'nalsar': [
    { name: 'Vikash Jain', position: 'Criminal Procedure Student', email: 'vikash.jain@nalsar.edu', phone: '888-777-2222' },
    { name: 'Neelam Verma', position: 'Penology Student', email: 'neelam.verma@nalsar.edu', phone: '888-777-1111' }
],

'nlud': [
    { name: 'Aman Singh', position: 'Criminal Law Student', email: 'aman.singh@nlud.edu', phone: '888-777-0000' },
    { name: 'Kavya Sinha', position: 'Criminal Psychology Student', email: 'kavya.sinha@nlud.edu', phone: '888-666-9999' }
],

'amity': [
    { name: 'Arjun Mehta', position: 'Criminal Justice Reform Student', email: 'arjun.mehta@amity.edu', phone: '888-666-8888' },
    { name: 'Ritika Joshi', position: 'International Criminal Law Student', email: 'ritika.joshi@amity.edu', phone: '888-666-7777' }
],



//ci


'glc': [
    { name: 'Ravi Singh', position: 'Civil Law Student', email: 'ravi.singh@glc.edu', phone: '888-777-6666' },
    { name: 'Ananya Joshi', position: 'Property Law Student', email: 'ananya.joshi@glc.edu', phone: '888-777-5555' }
],

'ils': [
    { name: 'Sandeep Sharma', position: 'Contract Law Student', email: 'sandeep.sharma@ils.edu', phone: '888-777-4444' },
    { name: 'Meera Patel', position: 'Family Law Student', email: 'meera.patel@ils.edu', phone: '888-777-3333' }
],

'symbiosis': [
    { name: 'Vikram Rao', position: 'Tort Law Student', email: 'vikram.rao@symbiosis.edu', phone: '888-777-2222' },
    { name: 'Neha Singh', position: 'Civil Procedure Student', email: 'neha.singh@symbiosis.edu', phone: '888-777-1111' }
],

'jgls': [
    { name: 'Aman Verma', position: 'Civil Rights Student', email: 'aman.verma@jgls.edu', phone: '888-777-0000' },
    { name: 'Ritu Sharma', position: 'Civil Liability Student', email: 'ritu.sharma@jgls.edu', phone: '888-666-9999' }
],

'rlc': [
    { name: 'Arjun Patel', position: 'Inheritance Law Student', email: 'arjun.patel@rlc.edu', phone: '888-666-8888' },
    { name: 'Kavita Joshi', position: 'Property Rights Student', email: 'kavita.joshi@rlc.edu', phone: '888-666-7777' }
]
,



//co


'nlus': [
    { name: 'Rajiv Kapoor', position: 'Corporate Law Student', email: 'rajiv.kapoor@nlus.edu', phone: '888-777-6666' },
    { name: 'Priya Malhotra', position: 'Mergers & Acquisitions Student', email: 'priya.malhotra@nlus.edu', phone: '888-777-5555' }
],

'nuls': [
    { name: 'Arjun Patel', position: 'Intellectual Property Student', email: 'arjun.patel@nuls.edu', phone: '888-777-4444' },
    { name: 'Ritu Joshi', position: 'Corporate Governance Student', email: 'ritu.joshi@nuls.edu', phone: '888-777-3333' }
],

'icfai': [
    { name: 'Anil Verma', position: 'Commercial Law Student', email: 'anil.verma@icfai.edu', phone: '888-777-2222' },
    { name: 'Neha Patel', position: 'Corporate Finance Student', email: 'neha.patel@icfai.edu', phone: '888-777-1111' }
],

'rgnul': [
    { name: 'Sunil Kumar', position: 'Corporate Taxation Student', email: 'sunil.kumar@rgnul.edu', phone: '888-666-9999' },
    { name: 'Kavita Mehta', position: 'Business Law Student', email: 'kavita.mehta@rgnul.edu', phone: '888-666-8888' }
],

'upes': [
    { name: 'Amit Joshi', position: 'International Business Law Student', email: 'amit.joshi@upes.edu', phone: '888-666-7777' },
    { name: 'Meera Kapoor', position: 'Corporate Compliance Student', email: 'meera.kapoor@upes.edu', phone: '888-666-6666' }
]
,

//con


'nlu': [
    { name: 'Aarav Sharma', position: 'Constitutional Law Student', email: 'aarav.sharma@nlu.edu', phone: '888-777-6666' },
    { name: 'Meera Rao', position: 'Fundamental Rights Student', email: 'meera.rao@nlu.edu', phone: '888-777-5555' }
],

'nujs': [
    { name: 'Vikram Patel', position: 'Federalism Student', email: 'vikram.patel@nujs.edu', phone: '888-777-4444' },
    { name: 'Ananya Kumar', position: 'Judicial Review Student', email: 'ananya.kumar@nujs.edu', phone: '888-777-3333' }
],

'nalsar': [
    { name: 'Rajesh Mehta', position: 'Constitutional Interpretation Student', email: 'rajesh.mehta@nalsar.edu', phone: '888-777-2222' },
    { name: 'Sanya Verma', position: 'Rights and Liberties Student', email: 'sanya.verma@nalsar.edu', phone: '888-777-1111' }
],

'jgu': [
    { name: 'Arjun Patel', position: 'Constitutional Law Student', email: 'arjun.patel@jgu.edu', phone: '888-666-9999' },
    { name: 'Ritu Joshi', position: 'State and Local Governance Student', email: 'ritu.joshi@jgu.edu', phone: '888-666-8888' }
],

'rgnul': [
    { name: 'Anil Singh', position: 'Constitutional Framework Student', email: 'anil.singh@rgnul.edu', phone: '888-666-7777' },
    { name: 'Neha Sharma', position: 'Separation of Powers Student', email: 'neha.sharma@rgnul.edu', phone: '888-666-6666' }
]
,



//i

'ilsl': [
    { name: 'Rahul Sharma', position: 'International Law Student', email: 'rahul.sharma@ilsl.edu', phone: '888-777-6666' },
    { name: 'Sanya Verma', position: 'International Governance Student', email: 'sanya.verma@ilsl.edu', phone: '888-777-5555' }
],

'clu': [
    { name: 'Arjun Singh', position: 'International Framework Student', email: 'arjun.singh@clu.edu', phone: '888-777-6666' },
    { name: 'Neha Patel', position: 'International Compliance Student', email: 'neha.patel@clu.edu', phone: '888-777-5555' }
],

'mls': [
    { name: 'Priya Reddy', position: 'International Law Scholar', email: 'priya.reddy@mls.edu', phone: '888-777-6666' },
    { name: 'Vikram Joshi', position: 'International Governance Student', email: 'vikram.joshi@mls.edu', phone: '888-777-5555' }
],

'slc': [
    { name: 'Aman Kumar', position: 'International Legal Theory Student', email: 'aman.kumar@slc.edu', phone: '888-777-6666' },
    { name: 'Ritu Mehta', position: 'International Policy Student', email: 'ritu.mehta@slc.edu', phone: '888-777-5555' }
],

'plc': [
    { name: 'Sanjay Patel', position: 'International Law Student', email: 'sanjay.patel@plc.edu', phone: '888-777-6666' },
    { name: 'Kavita Verma', position: 'International Compliance Student', email: 'kavita.verma@plc.edu', phone: '888-777-5555' }
]
,


//e

'envlc': [
    { name: 'Anil Sinha', position: 'Environmental Law Student', email: 'anil.sinha@envlc.edu', phone: '888-777-6666' },
    { name: 'Priya Kapoor', position: 'Climate Justice Student', email: 'priya.kapoor@envlc.edu', phone: '888-777-5555' }
],

'elc': [
    { name: 'Rajesh Gupta', position: 'Sustainable Development Student', email: 'rajesh.gupta@elc.edu', phone: '888-777-6666' },
    { name: 'Neha Verma', position: 'Environmental Law Student', email: 'neha.verma@elc.edu', phone: '888-777-5555' }
],

'selc': [
    { name: 'Vikram Patel', position: 'Environmental Sustainability Student', email: 'vikram.patel@selc.edu', phone: '888-777-6666' },
    { name: 'Meera Sharma', position: 'Climate Policy Student', email: 'meera.sharma@selc.edu', phone: '888-777-5555' }
],

'ilc': [
    { name: 'Aman Joshi', position: 'Global Environmental Law Student', email: 'aman.joshi@ilc.edu', phone: '888-777-6666' },
    { name: 'Kavita Reddy', position: 'Environmental Regulation Student', email: 'kavita.reddy@ilc.edu', phone: '888-777-5555' }
],

'eccl': [
    { name: 'Sunil Mehta', position: 'Environmental Law Student', email: 'sunil.mehta@eccl.edu', phone: '888-777-6666' },
    { name: 'Aarti Gupta', position: 'Ecological Law Student', email: 'aarti.gupta@eccl.edu', phone: '888-777-5555' }
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
