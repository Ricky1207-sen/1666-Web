// College list for each field
const collegeData = {
    h: [
        { value: 'du', name: 'Delhi University, Delhi' },
        { value: 'jnu', name: 'Jawaharlal Nehru University, Delhi' },
        { value: 'uoh', name: 'University of Hyderabad, Hyderabad' },
        { value: 'tiss', name: 'Tata Institute of Social Sciences, Mumbai' },
        { value: 'calcutta', name: 'University of Calcutta, Kolkata' }
    ],

    p: [
        { value: 'harvard', name: 'Harvard University, USA' },
        { value: 'oxford', name: 'University of Oxford, UK' },
        { value: 'stanford', name: 'Stanford University, USA' },
        { value: 'cambridge', name: 'University of Cambridge, UK' },
        { value: 'yale', name: 'Yale University, USA' }
    ],

   'l': [
    { value: 'columbia', name: 'Columbia University, USA' },
    { value: 'berkeley', name: 'University of California, Berkeley, USA' },
    { value: 'edinburgh', name: 'University of Edinburgh, UK' },
    { value: 'princeton', name: 'Princeton University, USA' },
    { value: 'ucla', name: 'University of California, Los Angeles, USA' }
],



   'li': [
    { value: 'jnu', name: 'Jawaharlal Nehru University, Delhi' },
    { value: 'du', name: 'Delhi University, Delhi' },
    { value: 'mumbai', name: 'University of Mumbai, Mumbai' },
    { value: 'calcutta', name: 'University of Calcutta, Kolkata' },
    { value: 'hyderabad', name: 'University of Hyderabad, Hyderabad' }
],

'c': [
    { value: 'jnu', name: 'Jawaharlal Nehru University, Delhi' },
    { value: 'du', name: 'Delhi University, Delhi' },
    { value: 'snu', name: 'Shiv Nadar University, Greater Noida' },
    { value: 'tiss', name: 'Tata Institute of Social Sciences, Mumbai' },
    { value: 'jgu', name: 'Jindal Global University, Sonipat' }
],

'r': [
    { value: 'jnu', name: 'Jawaharlal Nehru University, Delhi' },
    { value: 'du', name: 'Delhi University, Delhi' },
    { value: 'mumbai', name: 'University of Mumbai, Mumbai' },
    { value: 'calcutta', name: 'University of Calcutta, Kolkata' },
    { value: 'hyderabad', name: 'University of Hyderabad, Hyderabad' }

],




    
    
    
    
    
    
    
    
    
    
    


   
    


    


    



    
    // Other fields like engineering, biotechnology, etc. remain unchanged...
};

// Alumni data
const alumniData = {
    //h


'du': [
    { name: 'Dr. Ravi Joshi', position: 'Historian', email: 'ravi.joshi@du.edu', phone: '888-777-6666' },
    { name: 'Dr. Ananya Singh', position: 'Archaeologist', email: 'ananya.singh@du.edu', phone: '888-777-5555' }
],

'jnu': [
    { name: 'Dr. Arun Mehta', position: 'Cultural Anthropologist', email: 'arun.mehta@jnu.edu', phone: '888-777-6666' },
    { name: 'Dr. Pooja Sharma', position: 'Art Historian', email: 'pooja.sharma@jnu.edu', phone: '888-777-5555' }
],

'uoh': [
    { name: 'Dr. Sandeep Reddy', position: 'History Professor', email: 'sandeep.reddy@uoh.edu', phone: '888-777-6666' },
    { name: 'Dr. Kavita Rao', position: 'Museologist', email: 'kavita.rao@uoh.edu', phone: '888-777-5555' }
],

'tiss': [
    { name: 'Dr. Neeraj Kumar', position: 'Ethnologist', email: 'neeraj.kumar@tiss.edu', phone: '888-777-6666' },
    { name: 'Dr. Aditi Verma', position: 'Historical Sociologist', email: 'aditi.verma@tiss.edu', phone: '888-777-5555' }
],

'calcutta': [
    { name: 'Dr. Subhash Chandra', position: 'Political Historian', email: 'subhash.chandra@calcutta.edu', phone: '888-777-6666' },
    { name: 'Dr. Meera Bhat', position: 'History of Science Specialist', email: 'meera.bhat@calcutta.edu', phone: '888-777-5555' }
],


//p



'harvard': [
    { name: 'Dr. Michael Adams', position: 'Philosophy Professor', email: 'michael.adams@harvard.edu', phone: '888-777-6666' },
    { name: 'Dr. Emily Clark', position: 'Ethics Scholar', email: 'emily.clark@harvard.edu', phone: '888-777-5555' }
],

'oxford': [
    { name: 'Dr. William Brown', position: 'Political Philosopher', email: 'william.brown@oxford.edu', phone: '888-777-6666' },
    { name: 'Dr. Sophia Green', position: 'Philosophy of Mind Expert', email: 'sophia.green@oxford.edu', phone: '888-777-5555' }
],

'stanford': [
    { name: 'Dr. Lucas Taylor', position: 'Moral Philosopher', email: 'lucas.taylor@stanford.edu', phone: '888-777-6666' },
    { name: 'Dr. Olivia Martinez', position: 'Philosophy of Language Specialist', email: 'olivia.martinez@stanford.edu', phone: '888-777-5555' }
],

'cambridge': [
    { name: 'Dr. James Wilson', position: 'Aesthetic Theorist', email: 'james.wilson@cambridge.edu', phone: '888-777-6666' },
    { name: 'Dr. Isabella Johnson', position: 'Philosophy of Religion Scholar', email: 'isabella.johnson@cambridge.edu', phone: '888-777-5555' }
],

'yale': [
    { name: 'Dr. Robert Harris', position: 'Existentialism Expert', email: 'robert.harris@yale.edu', phone: '888-777-6666' },
    { name: 'Dr. Charlotte Lewis', position: 'Philosophy of History Analyst', email: 'charlotte.lewis@yale.edu', phone: '888-777-5555' }
],


//l

'columbia': [
    { name: 'Dr. Alice Thompson', position: 'Literary Critic', email: 'alice.thompson@columbia.edu', phone: '888-777-6666' },
    { name: 'Dr. Robert Nelson', position: 'Comparative Literature Scholar', email: 'robert.nelson@columbia.edu', phone: '888-777-5555' }
],

'berkeley': [
    { name: 'Dr. Laura Mitchell', position: 'Modernist Literature Expert', email: 'laura.mitchell@berkeley.edu', phone: '888-777-6666' },
    { name: 'Dr. Daniel Harris', position: 'Literary Theory Specialist', email: 'daniel.harris@berkeley.edu', phone: '888-777-5555' }
],

'edinburgh': [
    { name: 'Dr. Julia Carter', position: 'Victorian Literature Scholar', email: 'julia.carter@edinburgh.edu', phone: '888-777-6666' },
    { name: 'Dr. Simon Moore', position: 'Postcolonial Literature Expert', email: 'simon.moore@edinburgh.edu', phone: '888-777-5555' }
],

'princeton': [
    { name: 'Dr. Emily Collins', position: 'Classical Literature Specialist', email: 'emily.collins@princeton.edu', phone: '888-777-6666' },
    { name: 'Dr. William Young', position: 'American Literature Scholar', email: 'william.young@princeton.edu', phone: '888-777-5555' }
],

'ucla': [
    { name: 'Dr. Matthew King', position: 'Romantic Literature Expert', email: 'matthew.king@ucla.edu', phone: '888-777-6666' },
    { name: 'Dr. Jessica Evans', position: 'Literature and Gender Studies Analyst', email: 'jessica.evans@ucla.edu', phone: '888-777-5555' }
],


//li


//l

'jnu': [
    { name: 'Dr. Aarti Sharma', position: 'Phonetics Expert', email: 'aarti.sharma@jnu.edu', phone: '888-777-6666' },
    { name: 'Dr. Ravi Gupta', position: 'Syntax Specialist', email: 'ravi.gupta@jnu.edu', phone: '888-777-5555' }
],

'du': [
    { name: 'Dr. Meera Joshi', position: 'Semantics Scholar', email: 'meera.joshi@du.edu', phone: '888-777-6666' },
    { name: 'Dr. Anil Kumar', position: 'Sociolinguistics Expert', email: 'anil.kumar@du.edu', phone: '888-777-5555' }
],

'mumbai': [
    { name: 'Dr. Priya Patel', position: 'Historical Linguistics Specialist', email: 'priya.patel@mumbai.edu', phone: '888-777-6666' },
    { name: 'Dr. Rajesh Mehta', position: 'Pragmatics Scholar', email: 'rajesh.mehta@mumbai.edu', phone: '888-777-5555' }
],

'calcutta': [
    { name: 'Dr. Sunita Sen', position: 'Language Acquisition Expert', email: 'sunita.sen@calcutta.edu', phone: '888-777-6666' },
    { name: 'Dr. Arjun Bhattacharya', position: 'Computational Linguistics Specialist', email: 'arjun.bhattacharya@calcutta.edu', phone: '888-777-5555' }
],

'hyderabad': [
    { name: 'Dr. Neha Desai', position: 'Morphology Scholar', email: 'neha.desai@hyderabad.edu', phone: '888-777-6666' },
    { name: 'Dr. Siddharth Reddy', position: 'Field Linguistics Expert', email: 'siddharth.reddy@hyderabad.edu', phone: '888-777-5555' }
],


//c

'jnu': [
    { name: 'Dr. Arvind Sharma', position: 'Cultural Anthropologist', email: 'arvind.sharma@jnu.edu', phone: '888-777-6666' },
    { name: 'Dr. Neha Kapoor', position: 'Gender Studies Specialist', email: 'neha.kapoor@jnu.edu', phone: '888-777-5555' }
],

'du': [
    { name: 'Dr. Ankur Patel', position: 'Cultural Policy Analyst', email: 'ankur.patel@du.edu', phone: '888-777-6666' },
    { name: 'Dr. Rina Singh', position: 'Media and Culture Expert', email: 'rina.singh@du.edu', phone: '888-777-5555' }
],

'snu': [
    { name: 'Dr. Kavita Verma', position: 'Ethnography Specialist', email: 'kavita.verma@snu.edu', phone: '888-777-6666' },
    { name: 'Dr. Arun Yadav', position: 'Cultural History Scholar', email: 'arun.yadav@snu.edu', phone: '888-777-5555' }
],

'tiss': [
    { name: 'Dr. Aisha Khan', position: 'Cultural Sociology Expert', email: 'aisha.khan@tiss.edu', phone: '888-777-6666' },
    { name: 'Dr. Manoj Patel', position: 'Urban Culture Analyst', email: 'manoj.patel@tiss.edu', phone: '888-777-5555' }
],

'jgu': [
    { name: 'Dr. Priya Arora', position: 'Transnational Studies Scholar', email: 'priya.arora@jgu.edu', phone: '888-777-6666' },
    { name: 'Dr. Vikram Sharma', position: 'Cultural Heritage Expert', email: 'vikram.sharma@jgu.edu', phone: '888-777-5555' }
],



//r



'jnu': [
    { name: 'Dr. Aarti Sharma', position: 'Phonetics Expert', email: 'aarti.sharma@jnu.edu', phone: '888-777-6666' },
    { name: 'Dr. Ravi Gupta', position: 'Syntax Specialist', email: 'ravi.gupta@jnu.edu', phone: '888-777-5555' }
],

'du': [
    { name: 'Dr. Meera Joshi', position: 'Semantics Scholar', email: 'meera.joshi@du.edu', phone: '888-777-6666' },
    { name: 'Dr. Anil Kumar', position: 'Sociolinguistics Expert', email: 'anil.kumar@du.edu', phone: '888-777-5555' }
],

'mumbai': [
    { name: 'Dr. Priya Patel', position: 'Historical Linguistics Specialist', email: 'priya.patel@mumbai.edu', phone: '888-777-6666' },
    { name: 'Dr. Rajesh Mehta', position: 'Pragmatics Scholar', email: 'rajesh.mehta@mumbai.edu', phone: '888-777-5555' }
],

'calcutta': [
    { name: 'Dr. Sunita Sen', position: 'Language Acquisition Expert', email: 'sunita.sen@calcutta.edu', phone: '888-777-6666' },
    { name: 'Dr. Arjun Bhattacharya', position: 'Computational Linguistics Specialist', email: 'arjun.bhattacharya@calcutta.edu', phone: '888-777-5555' }
],

'hyderabad': [
    { name: 'Dr. Neha Desai', position: 'Morphology Scholar', email: 'neha.desai@hyderabad.edu', phone: '888-777-6666' },
    { name: 'Dr. Siddharth Reddy', position: 'Field Linguistics Expert', email: 'siddharth.reddy@hyderabad.edu', phone: '888-777-5555' }
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
