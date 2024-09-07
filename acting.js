// College list for each field
const collegeData = {
    'ta': [
    { value: 'nsd', name: 'National School of Drama, Delhi' },
    { value: 'snu', name: 'Shiv Nadar University, Greater Noida' },
    { value: 'jnu', name: 'Jawaharlal Nehru University, Delhi' },
    { value: 'delhiuniversity', name: 'University of Delhi, Delhi' },
    { value: 'ftii', name: 'Film and Television Institute of India, Pune' }
],

'fa': [
    { value: 'ftii', name: 'Film and Television Institute of India, Pune' },
    { value: 'srishti', name: 'Srishti Manipal Institute of Art, Design and Technology, Bengaluru' },
    { value: 'whistlingwoods', name: 'Whistling Woods International, Mumbai' },
    { value: 'amity', name: 'Amity School of Communication, Noida' },
    { value: 'rameshwar', name: 'Rameshwar Film Academy, Delhi' }
],


'ta': [
    { value: 'ftii', name: 'Film and Television Institute of India, Pune' },
    { value: 'srishti', name: 'Srishti Manipal Institute of Art, Design and Technology, Bengaluru' },
    { value: 'whistlingwoods', name: 'Whistling Woods International, Mumbai' },
    { value: 'amity', name: 'Amity School of Communication, Noida' },
    { value: 'rameshwar', name: 'Rameshwar Film Academy, Delhi' }
],

'va': [
    { value: 'nsca', name: 'National School of Cinema and Acting, Mumbai' },
    { value: 'sva', name: 'School of Visual Arts, New York' },
    { value: 'bfs', name: 'British Film School, London' },
    { value: 'mia', name: 'Mumbai Institute of Acting, Mumbai' },
    { value: 'lfa', name: 'London Film Academy, London' }
],

'ma': [
    { value: 'stella', name: 'Stella Adler Academy of Acting and Theatre, Los Angeles' },
    { value: 'lee', name: 'Lee Strasberg Theatre & Film Institute, New York' },
    { value: 'roy', name: 'Royal Academy of Dramatic Art (RADA), London' },
    { value: 'sftv', name: 'School of Film and Television, London' },
    { value: 'nyu', name: 'New York University Tisch School of the Arts, New York' }
],

'ia': [
    { value: 'secondcity', name: 'The Second City, Chicago' },
    { value: 'io', name: 'ImprovOlympic, Chicago' },
    { value: 'ucb', name: 'Upright Citizens Brigade Theatre, New York' },
    { value: 'groundlings', name: 'The Groundlings, Los Angeles' },
    { value: 'delclose', name: 'Del Close Theater, Chicago' }
],
















 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
     
     
     
     
     
     
     
     
     
     
     
 
 
    
     
 
 
     
 
 
     
 
 
 
     
     // Other fields like engineering, biotechnology, etc. remain unchanged...
 };
 
 // Alumni data
 const alumniData = {
     //ta
 
 
 'nsd': [
    { name: 'Dr. Rajeev Mehra', position: 'Theatrical Acting Professor', email: 'rajeeve.mehra@nsd.gov.in', phone: '888-777-6666' },
    { name: 'Dr. Ananya Roy', position: 'Acting Techniques Specialist', email: 'ananya.roy@nsd.gov.in', phone: '888-777-5555' }
],

'snu': [
    { name: 'Dr. Vikram Sharma', position: 'Theatrical Acting Instructor', email: 'vikram.sharma@snu.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Priya Verma', position: 'Performing Arts Specialist', email: 'priya.verma@snu.edu.in', phone: '888-777-5555' }
],

'jnu': [
    { name: 'Dr. Arjun Patel', position: 'Acting and Drama Professor', email: 'arjun.patel@jnu.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Meera Singh', position: 'Drama and Theatre Expert', email: 'meera.singh@jnu.ac.in', phone: '888-777-5555' }
],

'delhiuniversity': [
    { name: 'Dr. Suresh Rao', position: 'Theatre Arts Professor', email: 'suresh.rao@delhi.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Neha Joshi', position: 'Theatrical Performance Specialist', email: 'neha.joshi@delhi.edu.in', phone: '888-777-5555' }
],

'ftii': [
    { name: 'Dr. Rahul Kumar', position: 'Acting and Direction Expert', email: 'rahul.kumar@ftii.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Aarti Mishra', position: 'Theatre Arts and Performance Specialist', email: 'aarti.mishra@ftii.ac.in', phone: '888-777-5555' }
],

//fa


'ftii': [
    { name: 'Dr. Rajeev Singh', position: 'Film Acting Professor', email: 'rajeeve.singh@ftii.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Ananya Sharma', position: 'Film Acting and Direction Specialist', email: 'ananya.sharma@ftii.ac.in', phone: '888-777-5555' }
],

'srishti': [
    { name: 'Dr. Vikram Patel', position: 'Film Acting Instructor', email: 'vikram.patel@srishti.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Pooja Reddy', position: 'Performance Arts Specialist', email: 'pooja.reddy@srishti.edu.in', phone: '888-777-5555' }
],

'whistlingwoods': [
    { name: 'Dr. Ramesh Gupta', position: 'Film Acting and Production Expert', email: 'ramesh.gupta@whistlingwoods.net', phone: '888-777-6666' },
    { name: 'Dr. Neha Joshi', position: 'Acting Techniques Specialist', email: 'neha.joshi@whistlingwoods.net', phone: '888-777-5555' }
],

'amity': [
    { name: 'Dr. Rajiv Mehta', position: 'Film Acting Professor', email: 'rajiv.mehta@amity.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Sanya Kapoor', position: 'Film and Theatre Arts Specialist', email: 'sanya.kapoor@amity.edu.in', phone: '888-777-5555' }
],

'rameshwar': [
    { name: 'Dr. Arun Sharma', position: 'Film Acting and Direction Specialist', email: 'arun.sharma@rameshwar.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Aarti Deshmukh', position: 'Film Acting Techniques Expert', email: 'aarti.deshmukh@rameshwar.ac.in', phone: '888-777-5555' }
],


//ta



'ftii': [
    { name: 'Dr. Rajeev Singh', position: 'Television Acting Professor', email: 'rajeeve.singh@ftii.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Ananya Sharma', position: 'Television Acting and Direction Specialist', email: 'ananya.sharma@ftii.ac.in', phone: '888-777-5555' }
],

'srishti': [
    { name: 'Dr. Vikram Patel', position: 'Television Acting Instructor', email: 'vikram.patel@srishti.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Pooja Reddy', position: 'Performance Arts and Television Specialist', email: 'pooja.reddy@srishti.edu.in', phone: '888-777-5555' }
],

'whistlingwoods': [
    { name: 'Dr. Ramesh Gupta', position: 'Television Acting and Production Expert', email: 'ramesh.gupta@whistlingwoods.net', phone: '888-777-6666' },
    { name: 'Dr. Neha Joshi', position: 'Acting Techniques for Television Specialist', email: 'neha.joshi@whistlingwoods.net', phone: '888-777-5555' }
],

'amity': [
    { name: 'Dr. Rajiv Mehta', position: 'Television Acting Professor', email: 'rajiv.mehta@amity.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Sanya Kapoor', position: 'Television and Theatre Arts Specialist', email: 'sanya.kapoor@amity.edu.in', phone: '888-777-5555' }
],

'rameshwar': [
    { name: 'Dr. Arun Sharma', position: 'Television Acting and Direction Specialist', email: 'arun.sharma@rameshwar.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Aarti Deshmukh', position: 'Television Acting Techniques Expert', email: 'aarti.deshmukh@rameshwar.ac.in', phone: '888-777-5555' }
],


//va


'nsca': [
    { name: 'Dr. Aditi Mehta', position: 'Voice Acting Professor', email: 'aditi.mehta@nsca.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Rohit Kapoor', position: 'Voice Acting and Dubbing Specialist', email: 'rohit.kapoor@nsca.edu.in', phone: '888-777-5555' }
],

'sva': [
    { name: 'Dr. Emma Watson', position: 'Voice Acting Instructor', email: 'emma.watson@sva.edu', phone: '888-777-6666' },
    { name: 'Dr. Michael Brown', position: 'Voice and Performance Arts Specialist', email: 'michael.brown@sva.edu', phone: '888-777-5555' }
],

'bfs': [
    { name: 'Dr. Olivia Johnson', position: 'Voice Acting and Dubbing Expert', email: 'olivia.johnson@bfs.ac.uk', phone: '888-777-6666' },
    { name: 'Dr. James Smith', position: 'Voice Acting Techniques Specialist', email: 'james.smith@bfs.ac.uk', phone: '888-777-5555' }
],

'mia': [
    { name: 'Dr. Priya Sharma', position: 'Voice Acting Professor', email: 'priya.sharma@mia.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Vikram Singh', position: 'Voice Acting and Performance Specialist', email: 'vikram.singh@mia.edu.in', phone: '888-777-5555' }
],

'lfa': [
    { name: 'Dr. Sophia Lee', position: 'Voice Acting and Dubbing Specialist', email: 'sophia.lee@lfa.ac.uk', phone: '888-777-6666' },
    { name: 'Dr. Daniel Clark', position: 'Voice Acting Techniques Expert', email: 'daniel.clark@lfa.ac.uk', phone: '888-777-5555' }
],


//ma


'stella': [
    { name: 'Dr. Sarah Johnson', position: 'Method Acting Professor', email: 'sarah.johnson@stellaadler.edu', phone: '888-777-6666' },
    { name: 'Dr. Michael Green', position: 'Method Acting Techniques Specialist', email: 'michael.green@stellaadler.edu', phone: '888-777-5555' }
],

'lee': [
    { name: 'Dr. Emily Davis', position: 'Method Acting Instructor', email: 'emily.davis@leestrasberg.edu', phone: '888-777-6666' },
    { name: 'Dr. Robert Wilson', position: 'Method Acting and Performance Arts Specialist', email: 'robert.wilson@leestrasberg.edu', phone: '888-777-5555' }
],

'roy': [
    { name: 'Dr. Olivia Brown', position: 'Method Acting and Theatre Professor', email: 'olivia.brown@rada.ac.uk', phone: '888-777-6666' },
    { name: 'Dr. James Harris', position: 'Method Acting Specialist', email: 'james.harris@rada.ac.uk', phone: '888-777-5555' }
],

'sftv': [
    { name: 'Dr. Laura Smith', position: 'Method Acting and Film Studies Professor', email: 'laura.smith@sftv.ac.uk', phone: '888-777-6666' },
    { name: 'Dr. Daniel Clark', position: 'Method Acting Techniques Expert', email: 'daniel.clark@sftv.ac.uk', phone: '888-777-5555' }
],

'nyu': [
    { name: 'Dr. Julia Martinez', position: 'Method Acting Professor', email: 'julia.martinez@nyu.edu', phone: '888-777-6666' },
    { name: 'Dr. William Johnson', position: 'Method Acting and Theatre Arts Specialist', email: 'william.johnson@nyu.edu', phone: '888-777-5555' }
],


//ia


'secondcity': [
    { name: 'Dr. Lisa Reynolds', position: 'Improvisational Acting Professor', email: 'lisa.reynolds@secondcity.com', phone: '888-777-6666' },
    { name: 'Dr. Kevin Mitchell', position: 'Improvisational Acting Techniques Specialist', email: 'kevin.mitchell@secondcity.com', phone: '888-777-5555' }
],

'io': [
    { name: 'Dr. Emily Taylor', position: 'Improvisational Acting Instructor', email: 'emily.taylor@ioimprov.com', phone: '888-777-6666' },
    { name: 'Dr. David Brown', position: 'Improvisational Acting and Performance Specialist', email: 'david.brown@ioimprov.com', phone: '888-777-5555' }
],

'ucb': [
    { name: 'Dr. Rachel Adams', position: 'Improvisational Acting and Comedy Professor', email: 'rachel.adams@ucbtheatre.com', phone: '888-777-6666' },
    { name: 'Dr. Jacob Lewis', position: 'Improvisational Acting Techniques Expert', email: 'jacob.lewis@ucbtheatre.com', phone: '888-777-5555' }
],

'groundlings': [
    { name: 'Dr. Samantha Clark', position: 'Improvisational Acting and Comedy Instructor', email: 'samantha.clark@groundlings.com', phone: '888-777-6666' },
    { name: 'Dr. Andrew Scott', position: 'Improvisational Acting Techniques Specialist', email: 'andrew.scott@groundlings.com', phone: '888-777-5555' }
],

'delclose': [
    { name: 'Dr. Jennifer Morgan', position: 'Improvisational Acting Professor', email: 'jennifer.morgan@delclosetheater.com', phone: '888-777-6666' },
    { name: 'Dr. Thomas Carter', position: 'Improvisational Acting and Performance Arts Specialist', email: 'thomas.carter@delclosetheater.com', phone: '888-777-5555' }
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
 