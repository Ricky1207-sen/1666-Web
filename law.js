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
    { name: 'Dr. Anil Kapoor', position: 'Criminal Law Professor', email: 'anil.kapoor@nujs.edu', phone: '888-777-6666' },
    { name: 'Dr. Priya Menon', position: 'Criminal Justice Specialist', email: 'priya.menon@nujs.edu', phone: '888-777-5555' }
],

'nlu': [
    { name: 'Dr. Rajesh Patel', position: 'Criminal Law Expert', email: 'rajesh.patel@nlu.edu', phone: '888-777-6666' },
    { name: 'Dr. Sneha Gupta', position: 'Forensic Law Analyst', email: 'sneha.gupta@nlu.edu', phone: '888-777-5555' }
],

'nalsar': [
    { name: 'Dr. Vikram Sharma', position: 'Criminal Procedure Scholar', email: 'vikram.sharma@nalsar.edu', phone: '888-777-6666' },
    { name: 'Dr. Neha Sinha', position: 'Penology Specialist', email: 'neha.sinha@nalsar.edu', phone: '888-777-5555' }
],

'nlud': [
    { name: 'Dr. Aman Verma', position: 'Criminal Law Theorist', email: 'aman.verma@nlud.edu', phone: '888-777-6666' },
    { name: 'Dr. Ritu Singh', position: 'Criminal Psychology Expert', email: 'ritu.singh@nlud.edu', phone: '888-777-5555' }
],

'amity': [
    { name: 'Dr. Arjun Bhardwaj', position: 'Criminal Justice Reform Specialist', email: 'arjun.bhardwaj@amity.edu', phone: '888-777-6666' },
    { name: 'Dr. Kavita Joshi', position: 'International Criminal Law Expert', email: 'kavita.joshi@amity.edu', phone: '888-777-5555' }
],


//ci


'glc': [
    { name: 'Dr. Rajesh Kumar', position: 'Civil Law Professor', email: 'rajesh.kumar@glc.edu', phone: '888-777-6666' },
    { name: 'Dr. Ananya Patel', position: 'Property Law Specialist', email: 'ananya.patel@glc.edu', phone: '888-777-5555' }
],

'ils': [
    { name: 'Dr. Sandeep Reddy', position: 'Contract Law Expert', email: 'sandeep.reddy@ils.edu', phone: '888-777-6666' },
    { name: 'Dr. Meera Sharma', position: 'Family Law Analyst', email: 'meera.sharma@ils.edu', phone: '888-777-5555' }
],

'symbiosis': [
    { name: 'Dr. Vikram Joshi', position: 'Tort Law Scholar', email: 'vikram.joshi@symbiosis.edu', phone: '888-777-6666' },
    { name: 'Dr. Neha Patel', position: 'Civil Procedure Expert', email: 'neha.patel@symbiosis.edu', phone: '888-777-5555' }
],

'jgls': [
    { name: 'Dr. Aman Gupta', position: 'Civil Rights Theorist', email: 'aman.gupta@jgls.edu', phone: '888-777-6666' },
    { name: 'Dr. Ritu Mehta', position: 'Civil Liability Expert', email: 'ritu.mehta@jgls.edu', phone: '888-777-5555' }
],

'rlc': [
    { name: 'Dr. Arjun Kumar', position: 'Inheritance Law Specialist', email: 'arjun.kumar@rlc.edu', phone: '888-777-6666' },
    { name: 'Dr. Kavita Verma', position: 'Property Rights Expert', email: 'kavita.verma@rlc.edu', phone: '888-777-5555' }
],


//co


'nlus': [
    { name: 'Dr. Rajiv Malhotra', position: 'Corporate Law Professor', email: 'rajiv.malhotra@nlus.edu', phone: '888-777-6666' },
    { name: 'Dr. Priya Kumar', position: 'Mergers & Acquisitions Specialist', email: 'priya.kumar@nlus.edu', phone: '888-777-5555' }
],

'nuls': [
    { name: 'Dr. Arjun Singh', position: 'Intellectual Property Expert', email: 'arjun.singh@nuls.edu', phone: '888-777-6666' },
    { name: 'Dr. Ritu Sharma', position: 'Corporate Governance Analyst', email: 'ritu.sharma@nuls.edu', phone: '888-777-5555' }
],

'icfai': [
    { name: 'Dr. Anil Sharma', position: 'Commercial Law Scholar', email: 'anil.sharma@icfai.edu', phone: '888-777-6666' },
    { name: 'Dr. Neha Gupta', position: 'Corporate Finance Specialist', email: 'neha.gupta@icfai.edu', phone: '888-777-5555' }
],

'rgnul': [
    { name: 'Dr. Sunil Deshmukh', position: 'Corporate Taxation Expert', email: 'sunil.deshmukh@rgnul.edu', phone: '888-777-6666' },
    { name: 'Dr. Kavita Singh', position: 'Business Law Specialist', email: 'kavita.singh@rgnul.edu', phone: '888-777-5555' }
],

'upes': [
    { name: 'Dr. Amit Kapoor', position: 'International Business Law Expert', email: 'amit.kapoor@upes.edu', phone: '888-777-6666' },
    { name: 'Dr. Meera Joshi', position: 'Corporate Compliance Specialist', email: 'meera.joshi@upes.edu', phone: '888-777-5555' }
],


//con


'nlu': [
    { name: 'Dr. Aarav Verma', position: 'Constitutional Law Professor', email: 'aarav.verma@nlu.edu', phone: '888-777-6666' },
    { name: 'Dr. Meera Patel', position: 'Fundamental Rights Specialist', email: 'meera.patel@nlu.edu', phone: '888-777-5555' }
],

'nujs': [
    { name: 'Dr. Vikram Rao', position: 'Federalism Expert', email: 'vikram.rao@nujs.edu', phone: '888-777-6666' },
    { name: 'Dr. Ananya Mehta', position: 'Judicial Review Analyst', email: 'ananya.mehta@nujs.edu', phone: '888-777-5555' }
],

'nalsar': [
    { name: 'Dr. Rajesh Kumar', position: 'Constitutional Interpretation Scholar', email: 'rajesh.kumar@nalsar.edu', phone: '888-777-6666' },
    { name: 'Dr. Sanya Joshi', position: 'Rights and Liberties Specialist', email: 'sanya.joshi@nalsar.edu', phone: '888-777-5555' }
],

'jgu': [
    { name: 'Dr. Arjun Singh', position: 'Constitutional Law Theorist', email: 'arjun.singh@jgu.edu', phone: '888-777-6666' },
    { name: 'Dr. Ritu Sharma', position: 'State and Local Government Expert', email: 'ritu.sharma@jgu.edu', phone: '888-777-5555' }
],

'rgnul': [
    { name: 'Dr. Anil Kapoor', position: 'Constitutional Framework Specialist', email: 'anil.kapoor@rgnul.edu', phone: '888-777-6666' },
    { name: 'Dr. Neha Patel', position: 'Separation of Powers Scholar', email: 'neha.patel@rgnul.edu', phone: '888-777-5555' }
],


//i

'ilsl': [
    { name: 'Dr. Rahul Verma', position: 'International Law Professor', email: 'rahul.verma@ilsl.edu', phone: '888-777-6666' },
    { name: 'Dr. Sanya Patel', position: 'Global Trade Law Specialist', email: 'sanya.patel@ilsl.edu', phone: '888-777-5555' }
],

'clu': [
    { name: 'Dr. Arjun Kumar', position: 'International Human Rights Expert', email: 'arjun.kumar@clu.edu', phone: '888-777-6666' },
    { name: 'Dr. Neha Sinha', position: 'International Arbitration Specialist', email: 'neha.sinha@clu.edu', phone: '888-777-5555' }
],

'mls': [
    { name: 'Dr. Priya Joshi', position: 'International Environmental Law Scholar', email: 'priya.joshi@mls.edu', phone: '888-777-6666' },
    { name: 'Dr. Vikram Reddy', position: 'International Trade and Investment Analyst', email: 'vikram.reddy@mls.edu', phone: '888-777-5555' }
],

'slc': [
    { name: 'Dr. Aman Gupta', position: 'International Legal Theory Specialist', email: 'aman.gupta@slc.edu', phone: '888-777-6666' },
    { name: 'Dr. Ritu Kapoor', position: 'Global Governance Expert', email: 'ritu.kapoor@slc.edu', phone: '888-777-5555' }
],

'plc': [
    { name: 'Dr. Sanjay Mehta', position: 'International Criminal Law Expert', email: 'sanjay.mehta@plc.edu', phone: '888-777-6666' },
    { name: 'Dr. Kavita Singh', position: 'International Trade Law Specialist', email: 'kavita.singh@plc.edu', phone: '888-777-5555' }
],


//e


'envlc': [
    { name: 'Dr. Anil Kumar', position: 'Environmental Law Professor', email: 'anil.kumar@envlc.edu', phone: '888-777-6666' },
    { name: 'Dr. Priya Singh', position: 'Climate Change Law Specialist', email: 'priya.singh@envlc.edu', phone: '888-777-5555' }
],

'elc': [
    { name: 'Dr. Rajesh Mehta', position: 'Environmental Policy Expert', email: 'rajesh.mehta@elc.edu', phone: '888-777-6666' },
    { name: 'Dr. Neha Patel', position: 'Natural Resource Law Analyst', email: 'neha.patel@elc.edu', phone: '888-777-5555' }
],

'selc': [
    { name: 'Dr. Vikram Sharma', position: 'Sustainable Development Law Scholar', email: 'vikram.sharma@selc.edu', phone: '888-777-6666' },
    { name: 'Dr. Meera Joshi', position: 'Environmental Compliance Specialist', email: 'meera.joshi@selc.edu', phone: '888-777-5555' }
],

'ilc': [
    { name: 'Dr. Aman Reddy', position: 'International Environmental Law Expert', email: 'aman.reddy@ilc.edu', phone: '888-777-6666' },
    { name: 'Dr. Kavita Sharma', position: 'Green Law Specialist', email: 'kavita.sharma@ilc.edu', phone: '888-777-5555' }
],

'eccl': [
    { name: 'Dr. Sunil Gupta', position: 'Environmental Protection Law Professor', email: 'sunil.gupta@eccl.edu', phone: '888-777-6666' },
    { name: 'Dr. Aarti Verma', position: 'Ecological Law Expert', email: 'aarti.verma@eccl.edu', phone: '888-777-5555' }
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
