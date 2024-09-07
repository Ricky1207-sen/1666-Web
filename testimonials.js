document.getElementById('testimonial-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const testimonialText = document.getElementById('testimonial-input').value;
    const nameText = document.getElementById('name-input').value;
    
    // Create a new testimonial card
    const newTestimonialCard = document.createElement('div');
    newTestimonialCard.classList.add('testimonial-card');

    const newTestimonialText = document.createElement('p');
    newTestimonialText.classList.add('testimonial-text');
    newTestimonialText.textContent = testimonialText;

    const newTestimonialName = document.createElement('p');
    newTestimonialName.classList.add('testimonial-name');
    newTestimonialName.textContent = nameText;

    newTestimonialCard.appendChild(newTestimonialText);
    newTestimonialCard.appendChild(newTestimonialName);

    // Append the new testimonial to the container
    const testimonialContainer = document.getElementById('testimonial-container');
    testimonialContainer.appendChild(newTestimonialCard);

    // Clear the form
    document.getElementById('testimonial-input').value = '';
    document.getElementById('name-input').value = '';
});