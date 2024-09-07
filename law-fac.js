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
    { name: 'Dr. Rajiv Sharma', position: 'Criminal Law Professor', email: 'rajiv.sharma@nujs.edu', phone: '999-888-7777' },
    { name: 'Dr. Ananya Kapoor', position: 'Criminal Justice Specialist', email: 'ananya.kapoor@nujs.edu', phone: '999-888-6666' }
],

'nlu': [
    { name: 'Dr. Arjun Patel', position: 'Criminal Law Expert', email: 'arjun.patel@nlu.edu', phone: '999-888-5555' },
    { name: 'Dr. Rina Gupta', position: 'Forensic Law Analyst', email: 'rina.gupta@nlu.edu', phone: '999-888-4444' }
],

'nalsar': [
    { name: 'Dr. Vikram Jain', position: 'Criminal Procedure Scholar', email: 'vikram.jain@nalsar.edu', phone: '999-888-3333' },
    { name: 'Dr. Neha Verma', position: 'Penology Specialist', email: 'neha.verma@nalsar.edu', phone: '999-888-2222' }
],

'nlud': [
    { name: 'Dr. Aman Singh', position: 'Criminal Law Theorist', email: 'aman.singh@nlud.edu', phone: '999-888-1111' },
    { name: 'Dr. Kavita Sinha', position: 'Criminal Psychology Expert', email: 'kavita.sinha@nlud.edu', phone: '999-888-0000' }
],

'amity': [
    { name: 'Dr. Arjun Mehta', position: 'Criminal Justice Reform Specialist', email: 'arjun.mehta@amity.edu', phone: '999-777-8888' },
    { name: 'Dr. Ritu Joshi', position: 'International Criminal Law Expert', email: 'ritu.joshi@amity.edu', phone: '999-777-7777' }
],



//ci


'glc': [
    { name: 'Dr. Rajeev Singh', position: 'Civil Law Professor', email: 'rajeeve.singh@glc.edu', phone: '999-888-7777' },
    { name: 'Dr. Ananya Joshi', position: 'Property Law Specialist', email: 'ananya.joshi@glc.edu', phone: '999-888-6666' }
],

'ils': [
    { name: 'Dr. Sandeep Sharma', position: 'Contract Law Expert', email: 'sandeep.sharma@ils.edu', phone: '999-888-5555' },
    { name: 'Dr. Meera Patel', position: 'Family Law Analyst', email: 'meera.patel@ils.edu', phone: '999-888-4444' }
],

'symbiosis': [
    { name: 'Dr. Vikram Rao', position: 'Tort Law Scholar', email: 'vikram.rao@symbiosis.edu', phone: '999-888-3333' },
    { name: 'Dr. Neha Singh', position: 'Civil Procedure Expert', email: 'neha.singh@symbiosis.edu', phone: '999-888-2222' }
],

'jgls': [
    { name: 'Dr. Aman Verma', position: 'Civil Rights Theorist', email: 'aman.verma@jgls.edu', phone: '999-888-1111' },
    { name: 'Dr. Ritu Sharma', position: 'Civil Liability Expert', email: 'ritu.sharma@jgls.edu', phone: '999-888-0000' }
],

'rlc': [
    { name: 'Dr. Arjun Patel', position: 'Inheritance Law Specialist', email: 'arjun.patel@rlc.edu', phone: '999-777-8888' },
    { name: 'Dr. Kavita Joshi', position: 'Property Rights Expert', email: 'kavita.joshi@rlc.edu', phone: '999-777-7777' }
],



//co


'nlus': [
    { name: 'Dr. Rajiv Kapoor', position: 'Corporate Law Professor', email: 'rajiv.kapoor@nlus.edu', phone: '999-888-7777' },
    { name: 'Dr. Priya Malhotra', position: 'Mergers & Acquisitions Expert', email: 'priya.malhotra@nlus.edu', phone: '999-888-6666' }
],

'nuls': [
    { name: 'Dr. Arjun Patel', position: 'Intellectual Property Specialist', email: 'arjun.patel@nuls.edu', phone: '999-888-5555' },
    { name: 'Dr. Ritu Joshi', position: 'Corporate Governance Expert', email: 'ritu.joshi@nuls.edu', phone: '999-888-4444' }
],

'icfai': [
    { name: 'Dr. Anil Verma', position: 'Commercial Law Expert', email: 'anil.verma@icfai.edu', phone: '999-888-3333' },
    { name: 'Dr. Neha Patel', position: 'Corporate Finance Analyst', email: 'neha.patel@icfai.edu', phone: '999-888-2222' }
],

'rgnul': [
    { name: 'Dr. Sunil Kumar', position: 'Corporate Taxation Specialist', email: 'sunil.kumar@rgnul.edu', phone: '999-888-1111' },
    { name: 'Dr. Kavita Mehta', position: 'Business Law Expert', email: 'kavita.mehta@rgnul.edu', phone: '999-888-0000' }
],

'upes': [
    { name: 'Dr. Amit Joshi', position: 'International Business Law Specialist', email: 'amit.joshi@upes.edu', phone: '999-777-8888' },
    { name: 'Dr. Meera Kapoor', position: 'Corporate Compliance Analyst', email: 'meera.kapoor@upes.edu', phone: '999-777-7777' }
],



//con


'nlu': [
    { name: 'Dr. Aarav Sharma', position: 'Constitutional Law Specialist', email: 'aarav.sharma@nlu.edu', phone: '999-888-7777' },
    { name: 'Dr. Meera Rao', position: 'Fundamental Rights Expert', email: 'meera.rao@nlu.edu', phone: '999-888-6666' }
],

'nujs': [
    { name: 'Dr. Vikram Patel', position: 'Federalism Scholar', email: 'vikram.patel@nujs.edu', phone: '999-888-5555' },
    { name: 'Dr. Ananya Kumar', position: 'Judicial Review Specialist', email: 'ananya.kumar@nujs.edu', phone: '999-888-4444' }
],

'nalsar': [
    { name: 'Dr. Rajesh Mehta', position: 'Constitutional Interpretation Expert', email: 'rajesh.mehta@nalsar.edu', phone: '999-888-3333' },
    { name: 'Dr. Sanya Verma', position: 'Rights and Liberties Analyst', email: 'sanya.verma@nalsar.edu', phone: '999-888-2222' }
],

'jgu': [
    { name: 'Dr. Arjun Patel', position: 'Constitutional Law Analyst', email: 'arjun.patel@jgu.edu', phone: '999-888-1111' },
    { name: 'Dr. Ritu Joshi', position: 'State and Local Governance Specialist', email: 'ritu.joshi@jgu.edu', phone: '999-888-0000' }
],

'rgnul': [
    { name: 'Dr. Anil Singh', position: 'Constitutional Framework Expert', email: 'anil.singh@rgnul.edu', phone: '999-777-8888' },
    { name: 'Dr. Neha Sharma', position: 'Separation of Powers Specialist', email: 'neha.sharma@rgnul.edu', phone: '999-777-7777' }
],



//i

'ilsl': [
    { name: 'Dr. Rahul Sharma', position: 'Institutional Law Professor', email: 'rahul.sharma@ilsl.edu', phone: '999-888-6666' },
    { name: 'Dr. Sanya Verma', position: 'Institutional Governance Specialist', email: 'sanya.verma@ilsl.edu', phone: '999-888-5555' }
],

'clu': [
    { name: 'Dr. Arjun Singh', position: 'Institutional Framework Expert', email: 'arjun.singh@clu.edu', phone: '999-888-6666' },
    { name: 'Dr. Neha Patel', position: 'Institutional Compliance Specialist', email: 'neha.patel@clu.edu', phone: '999-888-5555' }
],

'mls': [
    { name: 'Dr. Priya Reddy', position: 'Institutional Law Scholar', email: 'priya.reddy@mls.edu', phone: '999-888-6666' },
    { name: 'Dr. Vikram Joshi', position: 'Institutional Governance Analyst', email: 'vikram.joshi@mls.edu', phone: '999-888-5555' }
],

'slc': [
    { name: 'Dr. Aman Kumar', position: 'Institutional Legal Theory Specialist', email: 'aman.kumar@slc.edu', phone: '999-888-6666' },
    { name: 'Dr. Ritu Mehta', position: 'Institutional Policy Expert', email: 'ritu.mehta@slc.edu', phone: '999-888-5555' }
],

'plc': [
    { name: 'Dr. Sanjay Patel', position: 'Institutional Law Expert', email: 'sanjay.patel@plc.edu', phone: '999-888-6666' },
    { name: 'Dr. Kavita Verma', position: 'Institutional Compliance Specialist', email: 'kavita.verma@plc.edu', phone: '999-888-5555' }
]
,


//e

'envlc': [
    { name: 'Dr. Anil Sinha', position: 'Environmental Policy Professor', email: 'anil.sinha@envlc.edu', phone: '999-888-6666' },
    { name: 'Dr. Priya Kapoor', position: 'Climate Justice Specialist', email: 'priya.kapoor@envlc.edu', phone: '999-888-5555' }
],

'elc': [
    { name: 'Dr. Rajesh Gupta', position: 'Sustainable Development Expert', email: 'rajesh.gupta@elc.edu', phone: '999-888-6666' },
    { name: 'Dr. Neha Verma', position: 'Environmental Law Analyst', email: 'neha.verma@elc.edu', phone: '999-888-5555' }
],

'selc': [
    { name: 'Dr. Vikram Patel', position: 'Environmental Sustainability Scholar', email: 'vikram.patel@selc.edu', phone: '999-888-6666' },
    { name: 'Dr. Meera Sharma', position: 'Climate Policy Specialist', email: 'meera.sharma@selc.edu', phone: '999-888-5555' }
],

'ilc': [
    { name: 'Dr. Aman Joshi', position: 'Global Environmental Law Expert', email: 'aman.joshi@ilc.edu', phone: '999-888-6666' },
    { name: 'Dr. Kavita Reddy', position: 'Environmental Regulation Specialist', email: 'kavita.reddy@ilc.edu', phone: '999-888-5555' }
],

'eccl': [
    { name: 'Dr. Sunil Mehta', position: 'Environmental Law and Policy Professor', email: 'sunil.mehta@eccl.edu', phone: '999-888-6666' },
    { name: 'Dr. Aarti Gupta', position: 'Ecological Law Specialist', email: 'aarti.gupta@eccl.edu', phone: '999-888-5555' }
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
