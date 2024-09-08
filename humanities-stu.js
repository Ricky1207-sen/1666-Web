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
    { name: 'Rajesh Kapoor', position: 'Ancient History Student', email: 'rajesh.kapoor@du.edu', phone: '888-777-6666' },
    { name: 'Priya Mehta', position: 'Archaeology Student', email: 'priya.mehta@du.edu', phone: '888-777-5555' }
],

'jnu': [
    { name: 'Arvind Joshi', position: 'Modern History Student', email: 'arvind.joshi@jnu.edu', phone: '888-777-6666' },
    { name: 'Neha Patel', position: 'Cultural History Student', email: 'neha.patel@jnu.edu', phone: '888-777-5555' }
],

'uoh': [
    { name: 'Amar Reddy', position: 'Medieval History Student', email: 'amar.reddy@uoh.edu', phone: '888-777-6666' },
    { name: 'Sita Rao', position: 'Preservation Studies Student', email: 'sita.rao@uoh.edu', phone: '888-777-5555' }
],

'tiss': [
    { name: 'Ramesh Kumar', position: 'Ethno-History Student', email: 'ramesh.kumar@tiss.edu', phone: '888-777-6666' },
    { name: 'Ananya Patel', position: 'Social History Student', email: 'ananya.patel@tiss.edu', phone: '888-777-5555' }
],

'calcutta': [
    { name: 'Ashok Sen', position: 'Economic History Student', email: 'ashok.sen@calcutta.edu', phone: '888-777-6666' },
    { name: 'Jaya Nair', position: 'History of Technology Student', email: 'jaya.nair@calcutta.edu', phone: '888-777-5555' }
]
,
//p



'harvard': [
    { name: 'Daniel Carter', position: 'Metaphysics Student', email: 'daniel.carter@harvard.edu', phone: '888-777-6666' },
    { name: 'Laura Bennett', position: 'Epistemology Student', email: 'laura.bennett@harvard.edu', phone: '888-777-5555' }
],

'oxford': [
    { name: 'Thomas Evans', position: 'Philosophy of Science Student', email: 'thomas.evans@oxford.edu', phone: '888-777-6666' },
    { name: 'Ava Morgan', position: 'Logic and Reasoning Student', email: 'ava.morgan@oxford.edu', phone: '888-777-5555' }
],

'stanford': [
    { name: 'Ethan Clark', position: 'Political Philosophy Student', email: 'ethan.clark@stanford.edu', phone: '888-777-6666' },
    { name: 'Mia Anderson', position: 'Ethics and Morality Student', email: 'mia.anderson@stanford.edu', phone: '888-777-5555' }
],

'cambridge': [
    { name: 'Henry Lewis', position: 'Philosophy of Mind Student', email: 'henry.lewis@cambridge.edu', phone: '888-777-6666' },
    { name: 'Olivia White', position: 'Philosophy of Action Student', email: 'olivia.white@cambridge.edu', phone: '888-777-5555' }
],

'yale': [
    { name: 'Samuel Wright', position: 'Metaphysics and Ontology Student', email: 'samuel.wright@yale.edu', phone: '888-777-6666' },
    { name: 'Emma Scott', position: 'Philosophy of Religion Student', email: 'emma.scott@yale.edu', phone: '888-777-5555' }
]
,

//l

'columbia': [
    { name: 'Natalie Greene', position: 'Literary Theory Student', email: 'natalie.greene@columbia.edu', phone: '888-777-6666' },
    { name: 'James Cooper', position: 'Contemporary Literature Student', email: 'james.cooper@columbia.edu', phone: '888-777-5555' }
],

'berkeley': [
    { name: 'Sophia Bennett', position: 'American Literature Student', email: 'sophia.bennett@berkeley.edu', phone: '888-777-6666' },
    { name: 'Michael Adams', position: 'Comparative Literature Student', email: 'michael.adams@berkeley.edu', phone: '888-777-5555' }
],

'edinburgh': [
    { name: 'Emily Foster', position: 'Romantic Literature Student', email: 'emily.foster@edinburgh.edu', phone: '888-777-6666' },
    { name: 'Oliver Lewis', position: 'Modernist Literature Student', email: 'oliver.lewis@edinburgh.edu', phone: '888-777-5555' }
],

'princeton': [
    { name: 'Sarah Moore', position: 'Classical Literature Student', email: 'sarah.moore@princeton.edu', phone: '888-777-6666' },
    { name: 'David Brooks', position: 'Postcolonial Literature Student', email: 'david.brooks@princeton.edu', phone: '888-777-5555' }
],

'ucla': [
    { name: 'Olivia White', position: 'Victorian Literature Student', email: 'olivia.white@ucla.edu', phone: '888-777-6666' },
    { name: 'Ethan Clark', position: 'Gender Studies and Literature Student', email: 'ethan.clark@ucla.edu', phone: '888-777-5555' }
]
,

//li


//l

'jnu': [
    { name: 'Maya Kapoor', position: 'Phonology Student', email: 'maya.kapoor@jnu.edu', phone: '888-777-6666' },
    { name: 'Vikram Rao', position: 'Syntax and Semantics Student', email: 'vikram.rao@jnu.edu', phone: '888-777-5555' }
],

'du': [
    { name: 'Lila Sharma', position: 'Pragmatics Student', email: 'lila.sharma@du.edu', phone: '888-777-6666' },
    { name: 'Arjun Patel', position: 'Sociolinguistics Student', email: 'arjun.patel@du.edu', phone: '888-777-5555' }
],

'mumbai': [
    { name: 'Kavita Nair', position: 'Historical Linguistics Student', email: 'kavita.nair@mumbai.edu', phone: '888-777-6666' },
    { name: 'Rajiv Singh', position: 'Pragmatics and Semantics Student', email: 'rajiv.singh@mumbai.edu', phone: '888-777-5555' }
],

'calcutta': [
    { name: 'Asha Roy', position: 'Language Acquisition Student', email: 'asha.roy@calcutta.edu', phone: '888-777-6666' },
    { name: 'Sanjay Gupta', position: 'Computational Linguistics Student', email: 'sanjay.gupta@calcutta.edu', phone: '888-777-5555' }
],

'hyderabad': [
    { name: 'Rina Iyer', position: 'Morphology Student', email: 'rina.iyer@hyderabad.edu', phone: '888-777-6666' },
    { name: 'Rajesh Kumar', position: 'Field Linguistics Student', email: 'rajesh.kumar@hyderabad.edu', phone: '888-777-5555' }
]
,



//c

'jnu': [
    { name: 'Maya Sinha', position: 'Cultural Sociology Student', email: 'maya.sinha@jnu.edu', phone: '888-777-6666' },
    { name: 'Rajesh Mehta', position: 'Gender and Culture Student', email: 'rajesh.mehta@jnu.edu', phone: '888-777-5555' }
],

'du': [
    { name: 'Nisha Agarwal', position: 'Cultural Policy Student', email: 'nisha.agarwal@du.edu', phone: '888-777-6666' },
    { name: 'Arvind Kapoor', position: 'Media and Culture Student', email: 'arvind.kapoor@du.edu', phone: '888-777-5555' }
],

'snu': [
    { name: 'Ananya Jain', position: 'Ethnographic Studies Student', email: 'ananya.jain@snu.edu', phone: '888-777-6666' },
    { name: 'Vikram Gupta', position: 'Cultural History Student', email: 'vikram.gupta@snu.edu', phone: '888-777-5555' }
],

'tiss': [
    { name: 'Sunita Rao', position: 'Urban Cultural Studies Student', email: 'sunita.rao@tiss.edu', phone: '888-777-6666' },
    { name: 'Rajiv Kumar', position: 'Cultural Sociology Student', email: 'rajiv.kumar@tiss.edu', phone: '888-777-5555' }
],

'jgu': [
    { name: 'Meera Sharma', position: 'Global Cultural Studies Student', email: 'meera.sharma@jgu.edu', phone: '888-777-6666' },
    { name: 'Sameer Khan', position: 'Cultural Heritage Student', email: 'sameer.khan@jgu.edu', phone: '888-777-5555' }
]
,




//r



'jnu': [
    { name: 'Aarti Sharma', position: 'Regional Studies Student', email: 'aarti.sharma@jnu.edu', phone: '888-777-6666' },
    { name: 'Ravi Gupta', position: 'Comparative Regional Studies Student', email: 'ravi.gupta@jnu.edu', phone: '888-777-5555' }
],

'du': [
    { name: 'Meera Joshi', position: 'Regional History Student', email: 'meera.joshi@du.edu', phone: '888-777-6666' },
    { name: 'Anil Kumar', position: 'Regional Theology Student', email: 'anil.kumar@du.edu', phone: '888-777-5555' }
],

'mumbai': [
    { name: 'Priya Patel', position: 'Regional Philosophy Student', email: 'priya.patel@mumbai.edu', phone: '888-777-6666' },
    { name: 'Rajesh Mehta', position: 'Regional Ethics Student', email: 'rajesh.mehta@mumbai.edu', phone: '888-777-5555' }
],

'calcutta': [
    { name: 'Sunita Sen', position: 'Regional Culture Student', email: 'sunita.sen@calcutta.edu', phone: '888-777-6666' },
    { name: 'Arjun Bhattacharya', position: 'Comparative Regional Studies Student', email: 'arjun.bhattacharya@calcutta.edu', phone: '888-777-5555' }
],

'hyderabad': [
    { name: 'Neha Desai', position: 'Regional Texts Student', email: 'neha.desai@hyderabad.edu', phone: '888-777-6666' },
    { name: 'Siddharth Reddy', position: 'Regional Spiritual Studies Student', email: 'siddharth.reddy@hyderabad.edu', phone: '888-777-5555' }
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
