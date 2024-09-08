selectedEligibility = document.getElementById('eligibility').value;
const selectedDeadline = document.getElementById('deadline').value;

const scholarships = document.querySelectorAll('.scholarship-card');
scholarships.forEach(function(scholarship) {
    const field = scholarship.getAttribute('data-field');
    const eligibility = scholarship.getAttribute('data-eligibility');
    const deadline = scholarship.getAttribute('data-deadline');

    if ((selectedField === 'all' || field === selectedField) &&
        (selectedEligibility === 'all' || eligibility === selectedEligibility) &&
        (selectedDeadline === 'all' || deadlin