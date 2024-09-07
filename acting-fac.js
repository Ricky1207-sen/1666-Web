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
    { name: 'Dr. Rohit Anand', position: 'Stage Acting Professor', email: 'rohit.anand@nsd.gov.in', phone: '888-777-6666' },
    { name: 'Dr. Shreya Nair', position: 'Voice and Movement Specialist', email: 'shreya.nair@nsd.gov.in', phone: '888-777-5555' }
],

'snu': [
    { name: 'Dr. Manish Kapoor', position: 'Improvisation Acting Instructor', email: 'manish.kapoor@snu.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Ayesha Gupta', position: 'Physical Theatre Specialist', email: 'ayesha.gupta@snu.edu.in', phone: '888-777-5555' }
],

'jnu': [
    { name: 'Dr. Anil Kumar', position: 'Drama Acting Professor', email: 'anil.kumar@jnu.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Preeti Sharma', position: 'Stagecraft and Performance Expert', email: 'preeti.sharma@jnu.ac.in', phone: '888-777-5555' }
],

'delhiuniversity': [
    { name: 'Dr. Kiran Desai', position: 'Drama and Theatre Professor', email: 'kiran.desai@delhi.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Swati Bansal', position: 'Acting for Theatre Specialist', email: 'swati.bansal@delhi.edu.in', phone: '888-777-5555' }
],

'ftii': [
    { name: 'Dr. Ajay Mehta', position: 'Stage and Screen Acting Expert', email: 'ajay.mehta@ftii.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Pooja Sethi', position: 'Theatre Performance Instructor', email: 'pooja.sethi@ftii.ac.in', phone: '888-777-5555' }
],


//fa


'ftii': [
    { name: 'Dr. Ashok Kumar', position: 'Cinematic Acting Professor', email: 'ashok.kumar@ftii.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Priya Singh', position: 'Film Direction and Acting Specialist', email: 'priya.singh@ftii.ac.in', phone: '888-777-5555' }
],

'srishti': [
    { name: 'Dr. Nitin Verma', position: 'Cinematic Performance Instructor', email: 'nitin.verma@srishti.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Aditi Rao', position: 'Film and Performance Arts Specialist', email: 'aditi.rao@srishti.edu.in', phone: '888-777-5555' }
],

'whistlingwoods': [
    { name: 'Dr. Sameer Desai', position: 'Cinematic Acting and Production Expert', email: 'sameer.desai@whistlingwoods.net', phone: '888-777-6666' },
    { name: 'Dr. Kavita Nair', position: 'Screen Acting Techniques Specialist', email: 'kavita.nair@whistlingwoods.net', phone: '888-777-5555' }
],

'amity': [
    { name: 'Dr. Vivek Sharma', position: 'Film Performance Arts Professor', email: 'vivek.sharma@amity.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Meenal Kapoor', position: 'Film and Theatre Acting Specialist', email: 'meenal.kapoor@amity.edu.in', phone: '888-777-5555' }
],

'rameshwar': [
    { name: 'Dr. Karan Khanna', position: 'Film Acting and Direction Expert', email: 'karan.khanna@rameshwar.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Sneha Patel', position: 'Film Acting Techniques Instructor', email: 'sneha.patel@rameshwar.ac.in', phone: '888-777-5555' }
],



//ta



'ftii': [
    { name: 'Dr. Nikhil Saxena', position: 'Television Acting Professor', email: 'nikhil.saxena@ftii.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Meera Shah', position: 'Television Acting and Production Specialist', email: 'meera.shah@ftii.ac.in', phone: '888-777-5555' }
],

'srishti': [
    { name: 'Dr. Anil Kapoor', position: 'Television Acting Techniques Instructor', email: 'anil.kapoor@srishti.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Sneha Verma', position: 'Television and Performing Arts Specialist', email: 'sneha.verma@srishti.edu.in', phone: '888-777-5555' }
],

'whistlingwoods': [
    { name: 'Dr. Mohan Joshi', position: 'Television Acting and Screen Production Expert', email: 'mohan.joshi@whistlingwoods.net', phone: '888-777-6666' },
    { name: 'Dr. Kavya Nair', position: 'Television Acting Techniques Specialist', email: 'kavya.nair@whistlingwoods.net', phone: '888-777-5555' }
],

'amity': [
    { name: 'Dr. Shashank Mehta', position: 'Television Acting Professor', email: 'shashank.mehta@amity.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Radhika Kapoor', position: 'Television and Stage Performance Specialist', email: 'radhika.kapoor@amity.edu.in', phone: '888-777-5555' }
],

'rameshwar': [
    { name: 'Dr. Gaurav Mishra', position: 'Television Acting and Direction Expert', email: 'gaurav.mishra@rameshwar.ac.in', phone: '888-777-6666' },
    { name: 'Dr. Shweta Rao', position: 'Television Performance Techniques Instructor', email: 'shweta.rao@rameshwar.ac.in', phone: '888-777-5555' }
],



//va


'nsca': [
    { name: 'Dr. Nisha Verma', position: 'Voice Acting Techniques Professor', email: 'nisha.verma@nsca.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Aman Roy', position: 'Voice Acting and Dubbing Expert', email: 'aman.roy@nsca.edu.in', phone: '888-777-5555' }
],

'sva': [
    { name: 'Dr. Sarah Patel', position: 'Voice Acting Techniques Instructor', email: 'sarah.patel@sva.edu', phone: '888-777-6666' },
    { name: 'Dr. Ethan Gray', position: 'Voice and Performing Arts Specialist', email: 'ethan.gray@sva.edu', phone: '888-777-5555' }
],

'bfs': [
    { name: 'Dr. Isabella Singh', position: 'Voice Acting and Dubbing Techniques Expert', email: 'isabella.singh@bfs.ac.uk', phone: '888-777-6666' },
    { name: 'Dr. Henry Thompson', position: 'Voice Acting Techniques Specialist', email: 'henry.thompson@bfs.ac.uk', phone: '888-777-5555' }
],

'mia': [
    { name: 'Dr. Rhea Kapoor', position: 'Voice Acting Professor', email: 'rhea.kapoor@mia.edu.in', phone: '888-777-6666' },
    { name: 'Dr. Kabir Deshmukh', position: 'Voice Acting and Performance Specialist', email: 'kabir.deshmukh@mia.edu.in', phone: '888-777-5555' }
],

'lfa': [
    { name: 'Dr. Emily Carter', position: 'Voice Acting and Dubbing Expert', email: 'emily.carter@lfa.ac.uk', phone: '888-777-6666' },
    { name: 'Dr. Lucas Martin', position: 'Voice Acting Techniques Instructor', email: 'lucas.martin@lfa.ac.uk', phone: '888-777-5555' }
],



//ma


'stella': [
    { name: 'Dr. Priya Nair', position: 'Method Acting Techniques Professor', email: 'priya.nair@stellaadler.edu', phone: '888-777-6666' },
    { name: 'Dr. Arjun Malhotra', position: 'Method Acting Techniques Specialist', email: 'arjun.malhotra@stellaadler.edu', phone: '888-777-5555' }
],

'lee': [
    { name: 'Dr. Rhea Kapoor', position: 'Method Acting Instructor', email: 'rhea.kapoor@leestrasberg.edu', phone: '888-777-6666' },
    { name: 'Dr. Rajesh Mehta', position: 'Method Acting and Performance Arts Specialist', email: 'rajesh.mehta@leestrasberg.edu', phone: '888-777-5555' }
],

'roy': [
    { name: 'Dr. Kavita Desai', position: 'Method Acting and Theatre Professor', email: 'kavita.desai@rada.ac.uk', phone: '888-777-6666' },
    { name: 'Dr. Vikram Singh', position: 'Method Acting Specialist', email: 'vikram.singh@rada.ac.uk', phone: '888-777-5555' }
],

'sftv': [
    { name: 'Dr. Meera Sharma', position: 'Method Acting and Film Studies Professor', email: 'meera.sharma@sftv.ac.uk', phone: '888-777-6666' },
    { name: 'Dr. Rahul Patel', position: 'Method Acting Techniques Expert', email: 'rahul.patel@sftv.ac.uk', phone: '888-777-5555' }
],

'nyu': [
    { name: 'Dr. Neha Reddy', position: 'Method Acting Professor', email: 'neha.reddy@nyu.edu', phone: '888-777-6666' },
    { name: 'Dr. Aravind Rao', position: 'Method Acting and Theatre Arts Specialist', email: 'aravind.rao@nyu.edu', phone: '888-777-5555' }
],



//ia


'secondcity': [
    { name: 'Dr. Neha Kapoor', position: 'Improvisational Acting Professor', email: 'neha.kapoor@secondcity.com', phone: '888-777-6666' },
    { name: 'Dr. Rohan Desai', position: 'Improvisational Acting Techniques Specialist', email: 'rohan.desai@secondcity.com', phone: '888-777-5555' }
],

'io': [
    { name: 'Dr. Arpita Verma', position: 'Improvisational Acting Instructor', email: 'arpita.verma@ioimprov.com', phone: '888-777-6666' },
    { name: 'Dr. Rahul Bhatt', position: 'Improvisational Acting and Performance Specialist', email: 'rahul.bhatt@ioimprov.com', phone: '888-777-5555' }
],

'ucb': [
    { name: 'Dr. Pooja Malhotra', position: 'Improvisational Acting and Comedy Professor', email: 'pooja.malhotra@ucbtheatre.com', phone: '888-777-6666' },
    { name: 'Dr. Rajeev Nair', position: 'Improvisational Acting Techniques Expert', email: 'rajeev.nair@ucbtheatre.com', phone: '888-777-5555' }
],

'groundlings': [
    { name: 'Dr. Sunita Patel', position: 'Improvisational Acting and Comedy Instructor', email: 'sunita.patel@groundlings.com', phone: '888-777-6666' },
    { name: 'Dr. Aman Singh', position: 'Improvisational Acting Techniques Specialist', email: 'aman.singh@groundlings.com', phone: '888-777-5555' }
],

'delclose': [
    { name: 'Dr. Nisha Gupta', position: 'Improvisational Acting Professor', email: 'nisha.gupta@delclosetheater.com', phone: '888-777-6666' },
    { name: 'Dr. Abhishek Rao', position: 'Improvisational Acting and Performance Arts Specialist', email: 'abhishek.rao@delclosetheater.com', phone: '888-777-5555' }
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
 