// Sample data
const schools = [
    { name: "Ngoma Primary School" },
    { name: "Ngoma Secondary School" },
    { name: "Tech Academy Combined School" }
];

let events = [];

// Populate school dropdowns
function populateSchoolDropdowns() {
    const schoolSelects = [
        document.getElementById('eventSchool'),
        document.getElementById('filterSchool')
    ];

    schoolSelects.forEach(select => {
        // Remove previously added school options
        while (select.options.length > 2) {
            select.remove(2);
        }

        // Add schools dynamically
        schools.forEach(school => {
            const option = document.createElement('option');
            option.value = school.name;
            option.textContent = school.name;
            select.appendChild(option);
        });
    });
}

// Load events into the table
function loadEvents(filtered = events) {
    const eventsTable = document.querySelector('#eventsTable tbody');
    eventsTable.innerHTML = '';

    if (filtered.length === 0) {
        eventsTable.innerHTML = '<tr><td colspan="4" class="text-center text-muted">No events available.</td></tr>';
        return;
    }

    filtered.forEach(event => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${event.date.toDateString()}</td>
            <td>${event.title}</td>
            <td>${event.school}</td>
            <td><button class="btn btn-sm btn-danger" onclick="deleteEvent(${event.id})">Delete</button></td>
        `;
        eventsTable.appendChild(row);
    });
}

// Handle form submission
function setupEventForm() {
    const form = document.getElementById('eventForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            return;
        }

        const title = document.getElementById('eventTitle').value.trim();
        const dateInput = document.getElementById('eventDate').value;
        const school = document.getElementById('eventSchool').value;
        const description = document.getElementById('eventDescription').value.trim();

        const newEvent = {
            id: events.length ? events[events.length - 1].id + 1 : 1,
            title,
            date: new Date(dateInput),
            school,
            description
        };

        events.push(newEvent);
        form.reset();
        form.classList.remove('was-validated');
        loadEvents();
    });
}

// Apply filters
function setupFilters() {
    document.getElementById('applyFilter').addEventListener('click', function() {
        const selectedSchool = document.getElementById('filterSchool').value;
        const selectedMonth = document.getElementById('filterMonth').value;

        const filteredEvents = events.filter(event => {
            const matchSchool = selectedSchool === 'all' || event.school === selectedSchool;
            const matchMonth = selectedMonth === 'all' || event.date.getMonth().toString() === selectedMonth;
            return matchSchool && matchMonth;
        });

        loadEvents(filteredEvents);
    });
}

// Delete an event by ID
function deleteEvent(id) {
    events = events.filter(event => event.id !== id);
    loadEvents();
}

// Initialize all functions on DOM ready
document.addEventListener('DOMContentLoaded', function () {
    populateSchoolDropdowns();
    setupEventForm();
    setupFilters();
    loadEvents(); // Load empty on start
});
