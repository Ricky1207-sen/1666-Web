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
    { name: 'Dr. Rajesh Kapoor', position: 'Ancient History Professor', email: 'rajesh.kapoor@du.edu', phone: '888-777-6666' },
    { name: 'Dr. Priya Mehta', position: 'Historical Archaeologist', email: 'priya.mehta@du.edu', phone: '888-777-5555' }
],

'jnu': [
    { name: 'Dr. Arvind Joshi', position: 'Modern History Expert', email: 'arvind.joshi@jnu.edu', phone: '888-777-6666' },
    { name: 'Dr. Neha Patel', position: 'Historical Culture Specialist', email: 'neha.patel@jnu.edu', phone: '888-777-5555' }
],

'uoh': [
    { name: 'Dr. Amar Reddy', position: 'Medieval History Professor', email: 'amar.reddy@uoh.edu', phone: '888-777-6666' },
    { name: 'Dr. Sita Rao', position: 'Historical Preservationist', email: 'sita.rao@uoh.edu', phone: '888-777-5555' }
],

'tiss': [
    { name: 'Dr. Ramesh Kumar', position: 'Ethno-Historian', email: 'ramesh.kumar@tiss.edu', phone: '888-777-6666' },
    { name: 'Dr. Ananya Patel', position: 'Historical Social Scientist', email: 'ananya.patel@tiss.edu', phone: '888-777-5555' }
],

'calcutta': [
    { name: 'Dr. Ashok Sen', position: 'Economic Historian', email: 'ashok.sen@calcutta.edu', phone: '888-777-6666' },
    { name: 'Dr. Jaya Nair', position: 'History of Technology Specialist', email: 'jaya.nair@calcutta.edu', phone: '888-777-5555' }
],



//p



'harvard': [
    { name: 'Dr. Daniel Carter', position: 'Metaphysics Professor', email: 'daniel.carter@harvard.edu', phone: '888-777-6666' },
    { name: 'Dr. Laura Bennett', position: 'Epistemology Specialist', email: 'laura.bennett@harvard.edu', phone: '888-777-5555' }
],

'oxford': [
    { name: 'Dr. Thomas Evans', position: 'Philosophy of Science Expert', email: 'thomas.evans@oxford.edu', phone: '888-777-6666' },
    { name: 'Dr. Ava Morgan', position: 'Logic and Reasoning Scholar', email: 'ava.morgan@oxford.edu', phone: '888-777-5555' }
],

'stanford': [
    { name: 'Dr. Ethan Clark', position: 'Political Philosophy Specialist', email: 'ethan.clark@stanford.edu', phone: '888-777-6666' },
    { name: 'Dr. Mia Anderson', position: 'Ethics and Morality Expert', email: 'mia.anderson@stanford.edu', phone: '888-777-5555' }
],

'cambridge': [
    { name: 'Dr. Henry Lewis', position: 'Philosophy of Mind Theorist', email: 'henry.lewis@cambridge.edu', phone: '888-777-6666' },
    { name: 'Dr. Olivia White', position: 'Philosophy of Action Specialist', email: 'olivia.white@cambridge.edu', phone: '888-777-5555' }
],

'yale': [
    { name: 'Dr. Samuel Wright', position: 'Metaphysics and Ontology Expert', email: 'samuel.wright@yale.edu', phone: '888-777-6666' },
    { name: 'Dr. Emma Scott', position: 'Philosophy of Religion Analyst', email: 'emma.scott@yale.edu', phone: '888-777-5555' }
],


//l

'columbia': [
    { name: 'Dr. Natalie Greene', position: 'Literary Theory Professor', email: 'natalie.greene@columbia.edu', phone: '888-777-6666' },
    { name: 'Dr. James Cooper', position: 'Contemporary Literature Specialist', email: 'james.cooper@columbia.edu', phone: '888-777-5555' }
],

'berkeley': [
    { name: 'Dr. Sophia Bennett', position: 'American Literary Critic', email: 'sophia.bennett@berkeley.edu', phone: '888-777-6666' },
    { name: 'Dr. Michael Adams', position: 'Comparative Literature Expert', email: 'michael.adams@berkeley.edu', phone: '888-777-5555' }
],

'edinburgh': [
    { name: 'Dr. Emily Foster', position: 'Romantic Literature Scholar', email: 'emily.foster@edinburgh.edu', phone: '888-777-6666' },
    { name: 'Dr. Oliver Lewis', position: 'Modernist Literature Specialist', email: 'oliver.lewis@edinburgh.edu', phone: '888-777-5555' }
],

'princeton': [
    { name: 'Dr. Sarah Moore', position: 'Classical Literature Scholar', email: 'sarah.moore@princeton.edu', phone: '888-777-6666' },
    { name: 'Dr. David Brooks', position: 'Postcolonial Literature Specialist', email: 'david.brooks@princeton.edu', phone: '888-777-5555' }
],

'ucla': [
    { name: 'Dr. Olivia White', position: 'Victorian Literature Expert', email: 'olivia.white@ucla.edu', phone: '888-777-6666' },
    { name: 'Dr. Ethan Clark', position: 'Gender Studies and Literature Specialist', email: 'ethan.clark@ucla.edu', phone: '888-777-5555' }
],



//li


//l

'jnu': [
    { name: 'Dr. Maya Kapoor', position: 'Phonology Specialist', email: 'maya.kapoor@jnu.edu', phone: '888-777-6666' },
    { name: 'Dr. Vikram Rao', position: 'Syntax and Semantics Expert', email: 'vikram.rao@jnu.edu', phone: '888-777-5555' }
],

'du': [
    { name: 'Dr. Lila Sharma', position: 'Pragmatics Scholar', email: 'lila.sharma@du.edu', phone: '888-777-6666' },
    { name: 'Dr. Arjun Patel', position: 'Sociolinguistics Researcher', email: 'arjun.patel@du.edu', phone: '888-777-5555' }
],

'mumbai': [
    { name: 'Dr. Kavita Nair', position: 'Historical Linguistics Expert', email: 'kavita.nair@mumbai.edu', phone: '888-777-6666' },
    { name: 'Dr. Rajiv Singh', position: 'Pragmatics and Semantics Specialist', email: 'rajiv.singh@mumbai.edu', phone: '888-777-5555' }
],

'calcutta': [
    { name: 'Dr. Asha Roy', position: 'Language Acquisition Specialist', email: 'asha.roy@calcutta.edu', phone: '888-777-6666' },
    { name: 'Dr. Sanjay Gupta', position: 'Computational Linguistics Researcher', email: 'sanjay.gupta@calcutta.edu', phone: '888-777-5555' }
],

'hyderabad': [
    { name: 'Dr. Rina Iyer', position: 'Morphology Expert', email: 'rina.iyer@hyderabad.edu', phone: '888-777-6666' },
    { name: 'Dr. Rajesh Kumar', position: 'Field Linguistics Scholar', email: 'rajesh.kumar@hyderabad.edu', phone: '888-777-5555' }
],



//c

'jnu': [
    { name: 'Dr. Maya Sinha', position: 'Cultural Sociology Specialist', email: 'maya.sinha@jnu.edu', phone: '888-777-6666' },
    { name: 'Dr. Rajesh Mehta', position: 'Gender and Culture Analyst', email: 'rajesh.mehta@jnu.edu', phone: '888-777-5555' }
],

'du': [
    { name: 'Dr. Nisha Agarwal', position: 'Cultural Policy Researcher', email: 'nisha.agarwal@du.edu', phone: '888-777-6666' },
    { name: 'Dr. Arvind Kapoor', position: 'Media and Culture Scholar', email: 'arvind.kapoor@du.edu', phone: '888-777-5555' }
],

'snu': [
    { name: 'Dr. Ananya Jain', position: 'Ethnographic Studies Expert', email: 'ananya.jain@snu.edu', phone: '888-777-6666' },
    { name: 'Dr. Vikram Gupta', position: 'Cultural History Researcher', email: 'vikram.gupta@snu.edu', phone: '888-777-5555' }
],

'tiss': [
    { name: 'Dr. Sunita Rao', position: 'Urban Cultural Studies Specialist', email: 'sunita.rao@tiss.edu', phone: '888-777-6666' },
    { name: 'Dr. Rajiv Kumar', position: 'Cultural Sociology Analyst', email: 'rajiv.kumar@tiss.edu', phone: '888-777-5555' }
],

'jgu': [
    { name: 'Dr. Meera Sharma', position: 'Global Cultural Studies Scholar', email: 'meera.sharma@jgu.edu', phone: '888-777-6666' },
    { name: 'Dr. Sameer Khan', position: 'Cultural Heritage Researcher', email: 'sameer.khan@jgu.edu', phone: '888-777-5555' }
],




//r



'jnu': [
    { name: 'Dr. Aarti Sharma', position: 'Religious Studies Professor', email: 'aarti.sharma@jnu.edu', phone: '888-777-6666' },
    { name: 'Dr. Ravi Gupta', position: 'Comparative Religion Specialist', email: 'ravi.gupta@jnu.edu', phone: '888-777-5555' }
],

'du': [
    { name: 'Dr. Meera Joshi', position: 'History of Religion Scholar', email: 'meera.joshi@du.edu', phone: '888-777-6666' },
    { name: 'Dr. Anil Kumar', position: 'Theology Expert', email: 'anil.kumar@du.edu', phone: '888-777-5555' }
],

'mumbai': [
    { name: 'Dr. Priya Patel', position: 'Religious Philosophy Specialist', email: 'priya.patel@mumbai.edu', phone: '888-777-6666' },
    { name: 'Dr. Rajesh Mehta', position: 'Ethics and Religion Scholar', email: 'rajesh.mehta@mumbai.edu', phone: '888-777-5555' }
],

'calcutta': [
    { name: 'Dr. Sunita Sen', position: 'Religion and Culture Expert', email: 'sunita.sen@calcutta.edu', phone: '888-777-6666' },
    { name: 'Dr. Arjun Bhattacharya', position: 'Comparative Theology Specialist', email: 'arjun.bhattacharya@calcutta.edu', phone: '888-777-5555' }
],

'hyderabad': [
    { name: 'Dr. Neha Desai', position: 'Religious Texts Scholar', email: 'neha.desai@hyderabad.edu', phone: '888-777-6666' },
    { name: 'Dr. Siddharth Reddy', position: 'Spiritual Studies Expert', email: 'siddharth.reddy@hyderabad.edu', phone: '888-777-5555' }
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
