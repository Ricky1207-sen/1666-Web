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
    { name: 'Rohit Anand', position: 'Stage Acting Student', email: 'rohit.anand@nsd.gov.in', phone: '888-777-6666' },
    { name: 'Shreya Nair', position: 'Voice and Movement Student', email: 'shreya.nair@nsd.gov.in', phone: '888-777-5555' }
],

'snu': [
    { name: 'Manish Kapoor', position: 'Improvisation Acting Student', email: 'manish.kapoor@snu.edu.in', phone: '888-777-6666' },
    { name: 'Ayesha Gupta', position: 'Physical Theatre Student', email: 'ayesha.gupta@snu.edu.in', phone: '888-777-5555' }
],

'jnu': [
    { name: 'Anil Kumar', position: 'Drama Acting Student', email: 'anil.kumar@jnu.ac.in', phone: '888-777-6666' },
    { name: 'Preeti Sharma', position: 'Stagecraft and Performance Student', email: 'preeti.sharma@jnu.ac.in', phone: '888-777-5555' }
],

'delhiuniversity': [
    { name: 'Kiran Desai', position: 'Drama and Theatre Student', email: 'kiran.desai@delhi.edu.in', phone: '888-777-6666' },
    { name: 'Swati Bansal', position: 'Acting for Theatre Student', email: 'swati.bansal@delhi.edu.in', phone: '888-777-5555' }
],

'ftii': [
    { name: 'Ajay Mehta', position: 'Stage and Screen Acting Student', email: 'ajay.mehta@ftii.ac.in', phone: '888-777-6666' },
    { name: 'Pooja Sethi', position: 'Theatre Performance Student', email: 'pooja.sethi@ftii.ac.in', phone: '888-777-5555' }
]
,


//fa


'ftii': [
    { name: 'Ashok Kumar', position: 'Cinematic Acting Student', email: 'ashok.kumar@ftii.ac.in', phone: '888-777-6666' },
    { name: 'Priya Singh', position: 'Film Direction and Acting Student', email: 'priya.singh@ftii.ac.in', phone: '888-777-5555' }
],

'srishti': [
    { name: 'Nitin Verma', position: 'Cinematic Performance Student', email: 'nitin.verma@srishti.edu.in', phone: '888-777-6666' },
    { name: 'Aditi Rao', position: 'Film and Performance Arts Student', email: 'aditi.rao@srishti.edu.in', phone: '888-777-5555' }
],

'whistlingwoods': [
    { name: 'Sameer Desai', position: 'Cinematic Acting and Production Student', email: 'sameer.desai@whistlingwoods.net', phone: '888-777-6666' },
    { name: 'Kavita Nair', position: 'Screen Acting Techniques Student', email: 'kavita.nair@whistlingwoods.net', phone: '888-777-5555' }
],

'amity': [
    { name: 'Vivek Sharma', position: 'Film Performance Arts Student', email: 'vivek.sharma@amity.edu.in', phone: '888-777-6666' },
    { name: 'Meenal Kapoor', position: 'Film and Theatre Acting Student', email: 'meenal.kapoor@amity.edu.in', phone: '888-777-5555' }
],

'rameshwar': [
    { name: 'Karan Khanna', position: 'Film Acting and Direction Student', email: 'karan.khanna@rameshwar.ac.in', phone: '888-777-6666' },
    { name: 'Sneha Patel', position: 'Film Acting Techniques Student', email: 'sneha.patel@rameshwar.ac.in', phone: '888-777-5555' }
],




//ta



'ftii': [
    { name: 'Nikhil Saxena', position: 'Television Acting Student', email: 'nikhil.saxena@ftii.ac.in', phone: '888-777-6666' },
    { name: 'Meera Shah', position: 'Television Acting and Production Student', email: 'meera.shah@ftii.ac.in', phone: '888-777-5555' }
],

'srishti': [
    { name: 'Anil Kapoor', position: 'Television Acting Techniques Student', email: 'anil.kapoor@srishti.edu.in', phone: '888-777-6666' },
    { name: 'Sneha Verma', position: 'Television and Performing Arts Student', email: 'sneha.verma@srishti.edu.in', phone: '888-777-5555' }
],

'whistlingwoods': [
    { name: 'Mohan Joshi', position: 'Television Acting and Screen Production Student', email: 'mohan.joshi@whistlingwoods.net', phone: '888-777-6666' },
    { name: 'Kavya Nair', position: 'Television Acting Techniques Student', email: 'kavya.nair@whistlingwoods.net', phone: '888-777-5555' }
],

'amity': [
    { name: 'Shashank Mehta', position: 'Television Acting Student', email: 'shashank.mehta@amity.edu.in', phone: '888-777-6666' },
    { name: 'Radhika Kapoor', position: 'Television and Stage Performance Student', email: 'radhika.kapoor@amity.edu.in', phone: '888-777-5555' }
],

'rameshwar': [
    { name: 'Gaurav Mishra', position: 'Television Acting and Direction Student', email: 'gaurav.mishra@rameshwar.ac.in', phone: '888-777-6666' },
    { name: 'Shweta Rao', position: 'Television Performance Techniques Student', email: 'shweta.rao@rameshwar.ac.in', phone: '888-777-5555' }
],




//va


'nsca': [
    { name: 'Nisha Verma', position: 'Voice Acting Student', email: 'nisha.verma@nsca.edu.in', phone: '888-777-6666' },
    { name: 'Aman Roy', position: 'Voice Acting and Dubbing Student', email: 'aman.roy@nsca.edu.in', phone: '888-777-5555' }
],

'sva': [
    { name: 'Sarah Patel', position: 'Voice Acting Techniques Student', email: 'sarah.patel@sva.edu', phone: '888-777-6666' },
    { name: 'Ethan Gray', position: 'Voice and Performing Arts Student', email: 'ethan.gray@sva.edu', phone: '888-777-5555' }
],

'bfs': [
    { name: 'Isabella Singh', position: 'Voice Acting and Dubbing Techniques Student', email: 'isabella.singh@bfs.ac.uk', phone: '888-777-6666' },
    { name: 'Henry Thompson', position: 'Voice Acting Techniques Student', email: 'henry.thompson@bfs.ac.uk', phone: '888-777-5555' }
],

'mia': [
    { name: 'Rhea Kapoor', position: 'Voice Acting Student', email: 'rhea.kapoor@mia.edu.in', phone: '888-777-6666' },
    { name: 'Kabir Deshmukh', position: 'Voice Acting and Performance Student', email: 'kabir.deshmukh@mia.edu.in', phone: '888-777-5555' }
],

'lfa': [
    { name: 'Emily Carter', position: 'Voice Acting and Dubbing Student', email: 'emily.carter@lfa.ac.uk', phone: '888-777-6666' },
    { name: 'Lucas Martin', position: 'Voice Acting Techniques Student', email: 'lucas.martin@lfa.ac.uk', phone: '888-777-5555' }
],




//ma


'stella': [
    { name: 'Priya Nair', position: 'Method Acting Student', email: 'priya.nair@stellaadler.edu', phone: '888-777-6666' },
    { name: 'Arjun Malhotra', position: 'Method Acting Techniques Student', email: 'arjun.malhotra@stellaadler.edu', phone: '888-777-5555' }
],

'lee': [
    { name: 'Rhea Kapoor', position: 'Method Acting Techniques Student', email: 'rhea.kapoor@leestrasberg.edu', phone: '888-777-6666' },
    { name: 'Rajesh Mehta', position: 'Method Acting and Performance Arts Student', email: 'rajesh.mehta@leestrasberg.edu', phone: '888-777-5555' }
],

'roy': [
    { name: 'Kavita Desai', position: 'Method Acting and Theatre Student', email: 'kavita.desai@rada.ac.uk', phone: '888-777-6666' },
    { name: 'Vikram Singh', position: 'Method Acting Student', email: 'vikram.singh@rada.ac.uk', phone: '888-777-5555' }
],

'sftv': [
    { name: 'Meera Sharma', position: 'Method Acting and Film Studies Student', email: 'meera.sharma@sftv.ac.uk', phone: '888-777-6666' },
    { name: 'Rahul Patel', position: 'Method Acting Techniques Student', email: 'rahul.patel@sftv.ac.uk', phone: '888-777-5555' }
],

'nyu': [
    { name: 'Neha Reddy', position: 'Method Acting Student', email: 'neha.reddy@nyu.edu', phone: '888-777-6666' },
    { name: 'Aravind Rao', position: 'Method Acting and Theatre Arts Student', email: 'aravind.rao@nyu.edu', phone: '888-777-5555' }
],



//ia


'secondcity': [
    { name: 'Neha Kapoor', position: 'Improvisational Acting Student', email: 'neha.kapoor@secondcity.com', phone: '888-777-6666' },
    { name: 'Rohan Desai', position: 'Improvisational Acting Techniques Student', email: 'rohan.desai@secondcity.com', phone: '888-777-5555' }
],

'io': [
    { name: 'Arpita Verma', position: 'Improvisational Acting Techniques Student', email: 'arpita.verma@ioimprov.com', phone: '888-777-6666' },
    { name: 'Rahul Bhatt', position: 'Improvisational Acting and Performance Student', email: 'rahul.bhatt@ioimprov.com', phone: '888-777-5555' }
],

'ucb': [
    { name: 'Pooja Malhotra', position: 'Improvisational Acting and Comedy Student', email: 'pooja.malhotra@ucbtheatre.com', phone: '888-777-6666' },
    { name: 'Rajeev Nair', position: 'Improvisational Acting Techniques Student', email: 'rajeev.nair@ucbtheatre.com', phone: '888-777-5555' }
],

'groundlings': [
    { name: 'Sunita Patel', position: 'Improvisational Acting and Comedy Student', email: 'sunita.patel@groundlings.com', phone: '888-777-6666' },
    { name: 'Aman Singh', position: 'Improvisational Acting Techniques Student', email: 'aman.singh@groundlings.com', phone: '888-777-5555' }
],

'delclose': [
    { name: 'Nisha Gupta', position: 'Improvisational Acting Student', email: 'nisha.gupta@delclosetheater.com', phone: '888-777-6666' },
    { name: 'Abhishek Rao', position: 'Improvisational Acting and Performance Arts Student', email: 'abhishek.rao@delclosetheater.com', phone: '888-777-5555' }
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
 