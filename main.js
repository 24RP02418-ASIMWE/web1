// Sample school data - in a real app, this would come from an API
const schools = [
    {
        id: 1,
        name: "Greenwood High School",
        location: "123 Education Ave, District",
        level: "Secondary",
        image: "images/school-1.jpg",
        description: "A premier institution focusing on STEM education with excellent facilities."
    },
    {
        id: 2,
        name: "Sunrise Elementary",
        location: "456 Learning St, District",
        level: "Primary",
        image: "images/school-2.jpg",
        description: "Child-centered learning environment with emphasis on creative development."
    },
    {
        id: 3,
        name: "District Central School",
        location: "789 Knowledge Rd, District",
        level: "Combined",
        image: "images/school-3.jpg",
        description: "The largest school in the district with comprehensive programs for all ages."
    }
];

// Display featured schools
function displayFeaturedSchools() {
    const container = document.getElementById('featured-schools');
    container.innerHTML = '';
    
    schools.forEach(school => {
        const schoolHTML = `
            <div class="col-md-4">
                <div class="card school-card h-100">
                    <img src="${school.image}" class="card-img-top" alt="${school.name}">
                    <div class="card-body">
                        <h5 class="card-title">${school.name}</h5>
                        <p class="card-text text-muted">
                            <i class="fas fa-map-marker-alt"></i> ${school.location}
                        </p>
                        <p class="card-text">${school.description}</p>
                    </div>
                    <div class="card-footer bg-white">
                        <a href="schools.html?id=${school.id}" class="btn btn-primary">View Details</a>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += schoolHTML;
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayFeaturedSchools();
    
    // Search functionality
    const searchForm = document.querySelector('.search-box form');
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const searchTerm = this.querySelector('input').value.toLowerCase();
        window.location.href = `schools.html?search=${encodeURIComponent(searchTerm)}`;
    });


    document.addEventListener("DOMContentLoaded", () => {
    const featuredSchools = [
        {
            name: "Ngoma High School",
            description: "Leading in science education in the district.",
            image: "images/ngoma-school.jpg"
        },
        {
            name: "Rukira Secondary School",
            description: "Best known for arts and humanities.",
            image: "images/rukira-school.jpg"
        },
        {
            name: "Kibungo Technical School",
            description: "Top performer in vocational training.",
            image: "images/kibungo-school.jpg"
        }
    ];

    const container = document.getElementById("featured-schools");
    featuredSchools.forEach(school => {
        const div = document.createElement("div");
        div.className = "col-md-4 mb-4";
        div.innerHTML = `
            <div class="card h-100">
                <img src="${school.image}" class="card-img-top" alt="${school.name}">
                <div class="card-body">
                    <h5 class="card-title">${school.name}</h5>
                    <p class="card-text">${school.description}</p>
                    <a href="schools.html" class="btn btn-primary">Learn More</a>
                </div>
            </div>`;
        container.appendChild(div);
    });
});

});