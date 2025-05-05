// Extended school data
const schools = [
    {
        id: 1,
        name: "Greenwood High School",
        location: "123 Education Ave, District",
        level: "Secondary",
        image: "images/school-1.jpg",
        description: "A premier institution focusing on STEM education with excellent facilities.",
        contact: "info@greenwood.edu | (123) 456-7890",
        programs: ["STEM Academy", "Arts Program", "Sports Excellence"],
        admissionLink: "admissions.html?id=1"
    },
    {
        id: 2,
        name: "Sunrise Elementary",
        location: "456 Learning St, District",
        level: "Primary",
        image: "images/school-2.jpg",
        description: "Child-centered learning environment with emphasis on creative development.",
        contact: "contact@sunrise.edu | (123) 456-7891",
        programs: ["Early Learning", "Creative Arts", "Basic STEM"],
        admissionLink: "admissions.html?id=2"
    },
    {
        id: 3,
        name: "District Central School",
        location: "789 Knowledge Rd, District",
        level: "Combined",
        image: "images/school-3.jpg",
        description: "The largest school in the district with comprehensive programs for all ages.",
        contact: "admin@central.edu | (123) 456-7892",
        programs: ["IB Program", "Vocational Training", "Advanced Placement"],
        admissionLink: "admissions.html?id=3"
    },
    {
        id: 4,
        name: "Riverside Academy",
        location: "321 Wisdom Blvd, District",
        level: "Secondary",
        image: "images/school-4.jpg",
        description: "Focus on environmental studies and outdoor education.",
        contact: "admissions@riverside.edu | (123) 456-7893",
        programs: ["Environmental Science", "Outdoor Education", "Marine Biology"],
        admissionLink: "admissions.html?id=4"
    }
];

// Display all schools with filtering
function displaySchools() {
    const container = document.getElementById('school-list');
    const searchTerm = new URLSearchParams(window.location.search).get('search') || '';
    const levelFilter = document.getElementById('school-level') ? document.getElementById('school-level').value : '';
    
    container.innerHTML = '';
    
    let filteredSchools = schools;
    
    // Apply search filter
    if (searchTerm) {
        filteredSchools = filteredSchools.filter(school => 
            school.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
            school.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    
    // Apply level filter
    if (levelFilter) {
        filteredSchools = filteredSchools.filter(school => school.level === levelFilter);
    }
    
    if (filteredSchools.length === 0) {
        container.innerHTML = '<div class="col-12 text-center py-5"><h4>No schools found matching your criteria</h4></div>';
        return;
    }
    
    filteredSchools.forEach(school => {
        const schoolHTML = `
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="card h-100">
                    <img src="${school.image}" class="card-img-top" alt="${school.name}">
                    <div class="card-body">
                        <h5 class="card-title">${school.name}</h5>
                        <p class="card-text text-muted">
                            <i class="fas fa-map-marker-alt"></i> ${school.location}
                        </p>
                        <p class="card-text">${school.description}</p>
                        <p class="card-text">
                            <strong>Programs:</strong> ${school.programs.join(', ')}
                        </p>
                        <p class="card-text">
                            <strong>Contact:</strong> ${school.contact}
                        </p>
                    </div>
                    <div class="card-footer bg-white">
                        <a href="${school.admissionLink}" class="btn btn-primary me-2">Admission Info</a>
                        <a href="#" class="btn btn-outline-primary">View Details</a>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += schoolHTML;
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displaySchools();
    
    // Search functionality
    if (document.getElementById('search-btn')) {
        document.getElementById('search-btn').addEventListener('click', function() {
            const searchTerm = document.getElementById('school-search').value.toLowerCase();
            window.location.href = `schools.html?search=${encodeURIComponent(searchTerm)}`;
        });
    }
    
    // Level filter functionality
    if (document.getElementById('school-level')) {
        document.getElementById('school-level').addEventListener('change', displaySchools);
    }
});