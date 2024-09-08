const experts = [
    { name: "Rohit Kumar", yearsExperience: "6", phone: "9876543210", email: "rohit@example.com", imgSrc: "male 1.avif" },
    { name: "Sneha Sharma", yearsExperience: "8", phone: "9876543211", email: "sneha@example.com", imgSrc: "female 1.avif" },
    { name: "Ankit Mehta", yearsExperience: "3", phone: "9876543212", email: "ankit@example.com", imgSrc: "male 2.jpg" },
    { name: "Pooja Iyer", yearsExperience: "12", phone: "9876543213", email: "pooja@example.com", imgSrc: "female 2.avif" },
    { name: "Vikas Gupta", yearsExperience: "10", phone: "9876543214", email: "vikas@example.com", imgSrc: "male 3.avif" },
    { name: "Priya Nair", yearsExperience: "15", phone: "9876543215", email: "priya@example.com", imgSrc: "female 3.avif" },
    { name: "Aman Singh", yearsExperience: "5", phone: "9876543216", email: "aman@example.com", imgSrc: "male 4.avif" },
    { name: "Sakshi Patel", yearsExperience: "7", phone: "9876543217", email: "sakshi@example.com", imgSrc: "female 4.avif" },
    { name: "Kabir Rao", yearsExperience: "9", phone: "9876543218", email: "kabir@example.com", imgSrc: "male 5.jpg" },
    { name: "Meera Iyer", yearsExperience: "11", phone: "9876543219", email: "meera@example.com", imgSrc: "female 5.avif" }
];

function loadExperts() {
    const expertsList = document.getElementById('experts-list');
    experts.forEach(expert => {
        const expertCard = `
            <div class="expert-card">
                <img src="${expert.imgSrc}" alt="${expert.name}">
                <div class="expert-card-details">
                    <h3>${expert.name}</h3>
                    <p>Experience: ${expert.yearsExperience} years</p>
                    <p>Phone: ${expert.phone}</p>
                    <p>Email: <a href="mailto:${expert.email}">${expert.email}</a></p>
                </div>
            </div>
        `;
        expertsList.innerHTML += expertCard;
    });
}

// Load experts on page load
window.onload = loadExperts;
